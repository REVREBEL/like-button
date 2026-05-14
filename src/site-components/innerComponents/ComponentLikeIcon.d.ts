import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ComponentLikeIcon(props: {
  iconSizeVariant?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  innerIconAltText?: Types.Basic.AltText;
  /** The inner part of the icon that displays after being liked.*/
  innerIconColorVariants?:
    | "Primary"
    | "Color 1"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9"
    | "Light"
    | "Dark"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3"
    | "None";
  innerIconImage?: Types.Asset.Image;
  /** For use when the button has been selected or liked.*/
  isActive?: Types.Visibility.VisibilityConditions;
  mainIconAltText?: Types.Basic.AltText;
  /** The main icon color when is normal status (before being liked)*/
  mainIconColorVariants?:
    | "Primary"
    | "Color 1"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9"
    | "Light"
    | "Dark"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3"
    | "None";
  mainIconImage?: Types.Asset.Image;
}): React.JSX.Element;
