import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function Button(props: {
  buttonButtonId?: string;
  buttonButtonLink?: Types.Basic.Link;
  buttonButtonText?: React.ReactNode;
  buttonStyleButtonColor?:
    | "Brand Primary"
    | "Brand Primary Outline"
    | "White"
    | "White Outline"
    | "Brand Color 3"
    | "Brand Color 3 Outline"
    | "Brand Color 4"
    | "Brand Color 4 Outline"
    | "Brand Color 5"
    | "Brand Color 5 Outline"
    | "Brand Color 8"
    | "Brand Color 8 Outline"
    | "Alert"
    | "Alert Outline"
    | "Disabled"
    | "Disabled Outline";
  /** Choose your preferred button size by selecting one of the options below and entering it into the provided field:
        small
        normal
        big*/
  buttonStyleButtonSize?: React.ReactNode;
  buttonVisible?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
