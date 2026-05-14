import * as React from "react";
import * as Types from "./types";

declare function ComponentFlexLikes(
    props: {
        as?: React.ElementType;
        labelLabelVisibility?: Types.Visibility.VisibilityConditions;
        labelLabelText?: React.ReactNode;
        optionsFlexDirectionVariant?: "Inline" | "Stacked";
        optionsSizeVariant?: "1" | "1.5x" | "2x" | "2.5x" | "3x";
        /** For use when the button has been selected or liked.*/
        likeButtonIsActive?: Types.Visibility.VisibilityConditions;
        likeButtonIconVisibility?: Types.Visibility.VisibilityConditions;
        /** Developer*/
        developerRuntimeProps?: Types.Devlink.RuntimeProps;
    }
): React.JSX.Element