import * as React from "react";
import * as Types from "../../webflow_modules/types";

declare function CodeIcon(props: {
  icon?: Types.Asset.Image;
  iconAltText?: Types.Basic.AltText;
  iconSize?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  iconVisibility?: Types.Boolean.Boolean;
}): React.JSX.Element;
