import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function LetSWorkTogetherButton(props: {
  buttonButtonLink?: Types.Basic.Link;
  buttonButtonText?: React.ReactNode;
  iconIcon?: Types.Asset.Image;
  iconIconAltText?: Types.Basic.AltText;
  optionsSize?:
    | "Big Left Align"
    | "Big Center Align"
    | "Regular Left Align"
    | "Regular Center Align"
    | "Small Left Align"
    | "Small Center Align"
    | "Responsive Size";
  optionsUnderlineVisibility?: Types.Visibility.VisibilityConditions;
  settingsButtonId?: string;
  settingsButtonVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
