#!/usr/bin/env python
# -*- coding: utf-8 -*-

from pathlib import Path
from typing import Any, Dict, Optional, Union

from axe_selenium_python import Axe
from selenium import webdriver

###############################################################################


def generate_axe_evaluation(
    url: str,
    output_path: Optional[Union[str, Path]] = None,
    geckodriver_path: Optional[Union[str, Path]] = None,
) -> Dict[str, Any]:
    """
    Use Axe to generate an accessibility violation dataframe.

    Parameters
    ----------
    url: str
        The URL to the website to be evaluated for violations.
    output_path: Optional[Union[str, Path]]
        An optional path to store the violations to as JSON.
        Default: None (do not store to file)
    geckodriver_path: Optional[Union[str, Path]]
        An optional path to the location of the geckodriver executable.
        Default: None (Use OS Path for executable)

    Returns
    -------
    report: Dict[str, Any]
        The produced Axe report.

    Notes
    -----
    On Mac and Linux, the geckodriver_path must be stored in OS ENV PATH.
    Export to OS ENV PATH with: `export PATH=$PATH:{geckodriver_path}`

    On Windows, the geckodriver_path must be provided.
    """
    # Eval driver path
    if geckodriver_path is not None:
        if isinstance(geckodriver_path, str):
            geckodriver_path = Path(geckodriver_path)
            geckodriver_path = geckodriver_path.resolve(strict=True)
            if not geckodriver_path.is_file():
                raise IsADirectoryError(
                    "Must provide the path to the geckodriver executable, "
                    "not the directory that contains the executable."
                )

        # Init driver
        geckodriver = webdriver.Firefox(str(geckodriver_path))

    # If geckodriver_path is None, then assume we are getting from OS path
    else:
        geckodriver = webdriver.Firefox()

    # Determine storage route
    if output_path is not None:
        output_path = Path(output_path).resolve()
        output_path.parent.mkdir(parents=True, exist_ok=True)

    # Load content at the URI
    geckodriver.get(url)

    # Pass to Axe
    axe = Axe(geckodriver)
    axe.inject()

    # Run checks and store results
    results = axe.run()

    # Optional store
    if output_path is not None:
        axe.write_results(results, output_path)

    # Close the window
    geckodriver.close()

    # Return as dataframe
    return results
