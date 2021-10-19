#!/usr/bin/env python
# -*- coding: utf-8 -*-

from dataclasses import dataclass
from pathlib import Path
from typing import TYPE_CHECKING

from axe_selenium_python import Axe
from dataclasses_json import dataclass_json

if TYPE_CHECKING:
    from scrapy.http.response.html import HtmlResponse


###############################################################################
# Axe look up tables and constants
# Pulled from: https://github.com/dequelabs/axe-core/blob/55fb7c00e866ab17486ff114932199f8f9661389/build/configure.js#L42  # noqa: E501


class AxeImpact:
    minor: str = "minor"
    moderate: str = "moderate"
    serious: str = "serious"
    critical: str = "critical"


AXE_IMPACT_SCORE_LUT = {
    AxeImpact.minor: 1,
    AxeImpact.moderate: 2,
    AxeImpact.serious: 3,
    AxeImpact.critical: 4,
}


@dataclass_json
@dataclass
class SimplifiedAxeViolation:

    id: str
    impact: str
    impact_score: int
    reason: str
    number_of_elements_in_violation: int
    help_url: str


###############################################################################


def parse_result(response: "HtmlResponse") -> None:
    # Connect Axe to driver
    print(response)
    print(response.request)
    axe = Axe(response.request.meta["driver"])
    axe.inject()

    # Run checks and store results
    results = axe.run()

    # Construct storage path
    url = response.request.url.replace("https://", "").replace("http://", "")
    storage_dir = Path(url)
    storage_dir.mkdir(exist_ok=True, parents=True)
    axe.write_results(results, str(storage_dir / "full-axe-results.json"))
