import * as React from "react";
import * as Types from "./types";

declare function LikeButton(
    props: {
        as?: React.ElementType;
        eventButtonStateIconVisibility?: Types.Visibility.VisibilityConditions;
        /** For use when the button has been selected or liked.*/
        eventButtonStateIsActive?: Types.Visibility.VisibilityConditions;
        labelLabelText?: React.ReactNode;
        labelLabelVisibility?: Types.Visibility.VisibilityConditions;
        optionsSizeVariant?: "1" | "1.5x" | "2x" | "2.5x" | "3x";
        optionsFlexDirectionVariant?: "Inline" | "Stacked";
        developerRuntimeProps?: Types.Devlink.RuntimeProps;
        developerSlot?: Types.Devlink.Slot;
        componentVisibility?: Types.Visibility.VisibilityConditions;
        componentId?: Types.Basic.IdTextInput;
        optionsColorVariant?: "Light" | "Primary" | "Color 3" | "Color 7";
    }
): React.JSX.Element