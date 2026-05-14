import * as React from "react";
import * as Types from "./types";

declare function LikesViewsTotalCount(
    props: {
        as?: React.ElementType;
        componentId?: Types.Basic.IdTextInput;
        componentVisibility?: Types.Visibility.VisibilityConditions;
        /** For use when the button has been selected or liked.*/
        optionsIsActive?: Types.Visibility.VisibilityConditions;
        likesLikesCountVisibility?: Types.Visibility.VisibilityConditions;
        likesLikesCountId?: Types.Basic.IdTextInput;
        likesLikeCountsText?: React.ReactNode;
        likesLikesLabelVisibility?: Types.Visibility.VisibilityConditions;
        viewsViewsCountId?: Types.Basic.IdTextInput;
        viewsViewsCountVisibility?: Types.Visibility.VisibilityConditions;
        viewsViewsCountText?: React.ReactNode;
        viewsViewsLabelVisibility?: Types.Visibility.VisibilityConditions;
        /** Count Total Views*/
        viewsViewsLabelText?: React.ReactNode;
        optionsColorVariants?: "Light" | "Primary" | "Color 2" | "Color 7";
        viewsViewsCountRuntimeProps?: Types.Devlink.RuntimeProps;
        viewsViewsCountSlot?: Types.Devlink.Slot;
        likesLikesLabelText?: React.ReactNode;
        /** (ACTIVE STATE)
        The label used when the user has "Liked" or "Clicked" the component.*/
        likesLikedButtonLabelText?: Types.Builtin.Text;
        /** (INACTIVE STATE)
        The label used before the user has "Liked" or "Clicked" the component.*/
        likesUnlikedButtonLabelText?: Types.Builtin.Text;
        likesLikesCountRuntimeProps?: Types.Devlink.RuntimeProps;
        likesLikesCountSlot?: Types.Devlink.Slot;
        optionsPositionVariant?: "Inine" | "Stacked";
        optionsSizeVariant?: "1x" | "1.25x" | "1.5x" | "1.75x" | "2x";
        optionsStorageKey?: Types.Builtin.Text;
        optionsIconVisibility?: Types.Visibility.VisibilityConditions;
        /** Displays the number of views/likes for the corresponding ID/Slug*/
        dataDataSlug?: Types.Builtin.Text;
    }
): React.JSX.Element