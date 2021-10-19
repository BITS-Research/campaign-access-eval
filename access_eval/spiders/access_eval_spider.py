#!/usr/bin/env python
# -*- coding: utf-8 -*-

from typing import TYPE_CHECKING

import tldextract
from scrapy.spiders import CrawlSpider, Rule
from scrapy_selenium import SeleniumRequest
from scrapy.linkextractors import LinkExtractor

from ..analysis.axe_processor import parse_result as axe_process_result

if TYPE_CHECKING:
    from scrapy.http.response.html import HtmlResponse
    from scrapy.link import Link

###############################################################################


class AccessEvalSpider(CrawlSpider):
    name = "AccessEvalSpider"

    def __init__(self, url: str, **kwargs):
        # Parse domain
        parsed_url = tldextract.extract(url)
        domain = ".".join([parsed_url.subdomain, parsed_url.domain, parsed_url.suffix])

        # Apply params
        self.allowed_domains = [domain]
        self.start_urls = [url]
        self.rules = [Rule(callback=self.parse, follow=True)]

        # Super
        super().__init__(**kwargs)

    def start_requests(self):
        # Spawn Selenium requests for each link (should just be one)
        for url in self.start_urls:
            yield SeleniumRequest(
                url=url,
                wait_time=5,
                callback=self.parse,
            )

    def parse(self, response, **kwargs):
        # Process with axe
        axe_process_result(response)

        # Recurse down links
        le = LinkExtractor()
        for link in le.extract_links(response):
            yield SeleniumRequest(
                url=link.url,
                wait_time=5,
                callback=self.parse,
            )
