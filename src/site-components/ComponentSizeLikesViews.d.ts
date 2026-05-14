import * as React from "react";
import * as Types from "./types";

declare function ComponentSizeLikesViews(
    props: {
        as?: React.ElementType;
        /** Displays the number of views/likes for the corresponding ID/Slug*/
        dataDataSlug?: Types.Builtin.Text;
        /** For use when the button has been selected or liked.*/
        optionsIsActive?: Types.Visibility.VisibilityConditions;
        optionsSizeVariant?: "1x" | "1.25x" | "1.5x" | "1.75x" | "2x";
        viewsViewsCountVisibility?: Types.Visibility.VisibilityConditions;
        /** Count Total Views*/
        viewsLabelText?: React.ReactNode;
        viewsViewsCountText?: React.ReactNode;
        viewsViewsCountRuntimeProps?: Types.Devlink.RuntimeProps;
        viewsViewsCountSlot?: Types.Devlink.Slot;
        likesLikesCountVisibility?: Types.Visibility.VisibilityConditions;
        likesLikesCountText?: React.ReactNode;
        likesLikesLabelVisibility?: Types.Visibility.VisibilityConditions;
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
        viewsViewsLabelVisibility?: Types.Visibility.VisibilityConditions;
        optionsStorageKey?: Types.Builtin.Text;
        optionsIconVisibility?: Types.Visibility.VisibilityConditions;
        /** Displays the number of views for the corresponding ID/Slug*/
        viewsSlugDataMetricVIew?: Types.Builtin.Text;
    }
): React.JSX.Element