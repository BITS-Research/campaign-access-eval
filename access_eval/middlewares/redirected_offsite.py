#!/usr/bin/env python
# -*- coding: utf-8 -*-

from scrapy.exceptions import IgnoreRequest
from scrapy.spidermiddlewares.offsite import (
    OffsiteMiddleware as OffsiteSpiderMiddleware,
)

###############################################################################


class OffsiteDownloaderMiddleware(OffsiteSpiderMiddleware):
    def process_request(self, request, spider):
        result = list(self.process_spider_output(None, [request], spider))
        if not result:
            raise IgnoreRequest()
        return None
