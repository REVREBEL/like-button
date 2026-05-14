import * as React from "react";
import * as Types from "./types";

declare function LikeArticle(
    props: {
        as?: React.ElementType;
        labelLabelText?: React.ReactNode;
        labelLabelVisibility?: Types.Visibility.VisibilityConditions;
        likeButtonId?: Types.Basic.IdTextInput;
        optionsSizeVariant?: "1" | "1.5x" | "2x" | "2.5x" | "3x";
        optionsFlexDirectionVariant?: "Inline" | "Stacked";
        developerRuntimeProps?: Types.Devlink.RuntimeProps;
        developerSlot?: Types.Devlink.Slot;
        /** For use when the button has been selected or liked.*/
        eventButtonStateIsActive?: Types.Visibility.VisibilityConditions;
        eventButtonStateIconVisibility?: Types.Visibility.VisibilityConditions;
        optionsVariant?: "Light" | "Primary" | "Color 3" | "Color 7";
    }
): React.JSX.Element