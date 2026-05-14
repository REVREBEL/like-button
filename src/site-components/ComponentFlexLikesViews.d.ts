import * as React from "react";
import * as Types from "./types";

declare function ComponentFlexLikesViews(
    props: {
        as?: React.ElementType;
        optionsStorageKey?: Types.Builtin.Text;
        /** For use when the button has been selected or liked.*/
        optionsIsActive?: Types.Visibility.VisibilityConditions;
        optionsPositionVariant?: "Inine" | "Stacked";
        likesLikesCountVisibility?: Types.Visibility.VisibilityConditions;
        likesLikeCountsText?: React.ReactNode;
        likesLikesLabelVisibility?: Types.Visibility.VisibilityConditions;
        viewsViewsCountVisibility?: Types.Visibility.VisibilityConditions;
        /** Count Total Views*/
        viewsViewsCountText?: React.ReactNode;
        viewsViewsLabelVisibility?: Types.Visibility.VisibilityConditions;
        /** Display text regardless of the component state.*/
        viewsViewsLabelText?: React.ReactNode;
        viewsViewsCountRuntimeProps?: Types.Devlink.RuntimeProps;
        viewsViewsCountSlot?: Types.Devlink.Slot;
        /** Display text regardless of the component state.*/
        likesLikesLabelText?: React.ReactNode;
        /** (ACTIVE STATE)
        The label used when the user has "Liked" or "Clicked" the component.*/
        likesLikedButtonLabelText?: Types.Builtin.Text;
        /** (INACTIVE STATE)
        The label used before the user has "Liked" or "Clicked" the component.*/
        likesUnlikedButtonLabelText?: Types.Builtin.Text;
        likesLikesCountRuntimeProps?: Types.Devlink.RuntimeProps;
        likesLikesCountSlot?: Types.Devlink.Slot;
        optionsSizeVariant?: "1x" | "1.25x" | "1.5x" | "1.75x" | "2x";
        optionsIconVisibility?: Types.Visibility.VisibilityConditions;
        /** Displays the number of views/likes for the corresponding ID/Slug*/
        dataDataSlug?: Types.Builtin.Text;
    }
): React.JSX.Element