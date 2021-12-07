#!/usr/bin/env python
# -*- coding: utf-8 -*-

from pathlib import Path
from typing import Optional, Union

import altair as alt
import pandas as pd
from .constants import DatasetFields, ComputedFields
from .core import load_access_eval_2021_dataset

###############################################################################


def plot_computed_fields_over_vote_share(
    data: Optional[pd.DataFrame] = None,
    save_path: Optional[Union[str, Path]] = None,
) -> Path:
    # Load default data
    if data is None:
        data = load_access_eval_2021_dataset()

    # Apply default save path
    if save_path is None:
        save_path = Path("vote-share.png")

    # Ensure save path is Path object
    save_path = Path(save_path)

    # Generate chart
    vote_share = (
        alt.Chart(data)
        .mark_point()
        .encode(
            alt.X(f"{DatasetFields.vote_share}:Q"),
            alt.Y(alt.repeat("column"), type="quantitative"),
            color=f"{DatasetFields.contacted}:N",
            shape=f"{DatasetFields.contacted}:N",
        )
        .repeat(
            column=[
                ComputedFields.diff_errors.name,
                ComputedFields.diff_critical_errors.name,
                ComputedFields.diff_serious_errors.name,
                ComputedFields.diff_moderate_errors.name,
                ComputedFields.diff_minor_errors.name,
                ComputedFields.avg_errors_per_page_pre.name,
                ComputedFields.avg_errors_per_page_post.name,
                ComputedFields.avg_critical_errors_per_page_pre.name,
                ComputedFields.avg_critical_errors_per_page_post.name,
                ComputedFields.avg_serious_errors_per_page_pre.name,
                ComputedFields.avg_serious_errors_per_page_post.name,
                ComputedFields.avg_moderate_errors_per_page_pre.name,
                ComputedFields.avg_moderate_errors_per_page_post.name,
                ComputedFields.avg_minor_errors_per_page_pre.name,
                ComputedFields.avg_minor_errors_per_page_post.name,
            ],
        )
    )

    vote_share.save(str(save_path.resolve()))
    return save_path


def plot_pre_post_fields_compare(
    data: Optional[pd.DataFrame] = None,
    save_path: Optional[Union[str, Path]] = None,
) -> Path:
    # Load default data
    if data is None:
        data = load_access_eval_2021_dataset()

    # Apply default save path
    if save_path is None:
        save_path = Path("pre-post.png")

    # Ensure save path is Path object
    save_path = Path(save_path)

    pre_post = alt.hconcat()
    for pre, post in [
        (
            ComputedFields.avg_errors_per_page_pre.name,
            ComputedFields.avg_errors_per_page_post.name,
        ),
        (
            ComputedFields.avg_critical_errors_per_page_pre.name,
            ComputedFields.avg_critical_errors_per_page_post.name,
        ),
        (
            ComputedFields.avg_serious_errors_per_page_pre.name,
            ComputedFields.avg_serious_errors_per_page_post.name,
        ),
        (
            ComputedFields.avg_moderate_errors_per_page_pre.name,
            ComputedFields.avg_moderate_errors_per_page_post.name,
        ),
        (
            ComputedFields.avg_minor_errors_per_page_pre.name,
            ComputedFields.avg_minor_errors_per_page_post.name,
        ),
    ]:
        pre_post |= (
            alt.Chart(data)
            .mark_point()
            .encode(
                x=f"{post}:Q",
                y=f"{pre}:Q",
                color=f"{DatasetFields.contacted}:N",
                shape=f"{DatasetFields.contacted}:N",
            )
        )

    pre_post.save(str(save_path.resolve()))
    return save_path
