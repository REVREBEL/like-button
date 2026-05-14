import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function TagIcon(props: {
  iconArrowIcon?: Types.Visibility.VisibilityConditions;
  iconIconColorVariants?: unknown;
  iconIconImageAltText?: Types.Basic.AltText;
  /** The icon image allow for uploading a custom icon. Note that the color will not change, only the SVG option accepts the CurrentColor value.*/
  iconIconImageVisibility?: Types.Visibility.VisibilityConditions;
  iconIconSizeVariants?: unknown;
  /** For the icon to display, first enable visibility here, then choose one of the icons below and enable visibility for it as well.*/
  iconIconVisibility?: Types.Visibility.VisibilityConditions;
  iconImageIcon?: Types.Asset.Image;
  iconInverseOnHover?: unknown;
  iconJackIcon?: Types.Visibility.VisibilityConditions;
  iconStarIcon?: Types.Visibility.VisibilityConditions;
  labelClickableLink?: "Tag Non-Clickable" | "Tag is Clickable";
  optionsTagColor?: unknown;
  settingsTagId?: string;
  settingsVisibility?: Types.Visibility.VisibilityConditions;
  tagTagSizeVariant?: unknown;
  tagTagText?: React.ReactNode;
}): React.JSX.Element;
