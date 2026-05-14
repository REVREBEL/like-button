import * as React from "react";
import * as Types from "./types";

declare function ComponentButton(
    props: {
        as?: React.ElementType;
        buttonButtonVisible?: Types.Visibility.VisibilityConditions;
        buttonButtonId?: Types.Basic.IdTextInput;
        buttonButtonColor?: "Brand Primary" | "Brand Primary Outline" | "White" | "White Outline" | "Brand Color 3" | "Brand Color 3 Outline" | "Brand Color 4" | "Brand Color 4 Outline" | "Brand Color 5" | "Brand Color 5 Outline" | "Brand Color 8" | "Brand Color 8 Outline" | "Alert" | "Alert Outline" | "Disabled" | "Disabled Outline";
        buttonButtonLink?: Types.Basic.Link;
        buttonButtonText?: React.ReactNode;
        buttonButtonSize?: "Regular" | "Small" | "Big";
    }
): React.JSX.Element