#!/usr/bin/env python
# -*- coding: utf-8 -*-

import argparse
import logging
import sys
import traceback

from access_eval.analysis import constants
from access_eval.analysis.core import load_access_eval_2021_dataset
from access_eval.analysis import plotting

###############################################################################

logging.basicConfig(
    level=logging.INFO,
    format="[%(levelname)4s: %(module)s:%(lineno)4s %(asctime)s] %(message)s",
)
log = logging.getLogger(__name__)

###############################################################################


class Args(argparse.Namespace):
    def __init__(self) -> None:
        self.__parse()

    def __parse(self) -> None:
        p = argparse.ArgumentParser(
            prog="analyze-access-eval-2021-dataset",
            description=(
                "Generate the access evaluation dataset plots and tables for "
                "all races covered in the 2021 preliminary study."
            ),
        )
        p.parse_args(namespace=self)


###############################################################################


def main() -> None:
    try:
        _ = Args()

        # Load data
        data = load_access_eval_2021_dataset()

        # Generate full plots
        plotting.plot_computed_fields_over_vote_share()
        plotting.plot_pre_post_fields_compare()

        # For each subsetting field, subset by each unique value and
        # plot again with just that subset
        for field in [
            constants.DatasetFields.electoral_position,
            constants.DatasetFields.candidate_position,
            constants.DatasetFields.candidate_history,
        ]:
            for val in data[field].unique():
                plotting.plot_computed_fields_over_vote_share(
                    data[data[field] == val],
                    save_path=f"vote-share--{field}=={val}.png",
                )
                plotting.plot_pre_post_fields_compare(
                    data[data[field] == val],
                    save_path=f"pre-post--{field}=={val}.png",
                )

    except Exception as e:
        log.error("=============================================")
        log.error("\n\n" + traceback.format_exc())
        log.error("=============================================")
        log.error("\n\n" + str(e) + "\n")
        log.error("=============================================")
        sys.exit(1)


###############################################################################
# Allow caller to directly run this module (usually in development scenarios)

if __name__ == "__main__":
    main()
