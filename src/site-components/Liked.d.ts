import * as React from "react";
import * as Types from "./types";

declare function Liked(
    props: {
        as?: React.ElementType;
        componentId?: Types.Basic.IdTextInput;
        componentVisibility?: Types.Visibility.VisibilityConditions;
        /** For use when the button has been selected or liked.*/
        optionsIsActive?: Types.Visibility.VisibilityConditions;
        likesLikeCountsText?: React.ReactNode;
        likesLikesLabelText?: React.ReactNode;
        /** (ACTIVE STATE)
        The label used when the user has "Liked" or "Clicked" the component.*/
        likesLikedButtonLabelText?: Types.Builtin.Text;
        /** (INACTIVE STATE)
        The label used before the user has "Liked" or "Clicked" the component.*/
        likesUnlikedButtonLabelText?: Types.Builtin.Text;
        likesLikesCountRuntimeProps?: Types.Devlink.RuntimeProps;
        likesLikesCountSlot?: Types.Devlink.Slot;
        optionsIconVisibility?: Types.Visibility.VisibilityConditions;
        optionsLikesCountVisibility?: Types.Visibility.VisibilityConditions;
        optionsLikesLabelVisibility?: Types.Visibility.VisibilityConditions;
        optionsColorVariants?: "Light" | "Primary" | "Color 2" | "Color 7";
        optionsPositionVariant?: "Inine" | "Stacked";
        optionsSizeVariant?: "1x" | "1.25x" | "1.5x" | "1.75x" | "2x";
        dataDataSlug?: Types.Builtin.Text;
    }
): React.JSX.Element