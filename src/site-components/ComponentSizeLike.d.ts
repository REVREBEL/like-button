import * as React from "react";
import * as Types from "./types";

declare function ComponentSizeLike(
    props: {
        as?: React.ElementType;
        /** For use when the button has been selected or liked.*/
        optionsIsActive?: Types.Visibility.VisibilityConditions;
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
        optionsIconVisibility?: Types.Visibility.VisibilityConditions;
        optionsCountVisibility?: Types.Visibility.VisibilityConditions;
        optionsLabelVisibility?: Types.Visibility.VisibilityConditions;
        optionsSizeVariant?: "1x" | "1.25x" | "1.5x" | "1.75x" | "2x";
        dataDataSlug?: Types.Builtin.Text;
        dataSlugDataMetricLike?: Types.Builtin.Text;
    }
): React.JSX.Element