import * as React from "react";
import * as Types from "./types";

declare function TagIcon(
    props: {
        as?: React.ElementType;
        settingsVisibility?: Types.Visibility.VisibilityConditions;
        settingsTagId?: Types.Basic.IdTextInput;
        optionsTagColor?: "Clear" | "Color Primary" | "Color Primary Outline" | "Color 1" | "Color 1 Outline" | "Color 2" | "Color 2 Outline" | "Color 3" | "Color 3 Outline" | "Color 4" | "Color 4 Outline" | "Color 5" | "Color 5 Outline" | "Color 6" | "Color 6 Outline" | "Color 7" | "Color 7 Outline" | "Color 8" | "Color 8 Outline" | "Color 9" | "Color 9 Outline" | "Color Light" | "Color Light Outline" | "Color Dark" | "Color Dark Outline";
        optionsClickableLink?: "Tag Non-Clickable" | "Tag is Clickable";
        optionsIconSize?: ".75x.75x" | "1x1x" | "1.5x1.5" | "2x2";
        labelLabelText?: React.ReactNode;
        labelLink?: Types.Basic.Link;
        /** For the icon to display, first enable visibility here, then choose one of the icons below and enable visibility for it as well.*/
        settingsIconVisibility?: Types.Visibility.VisibilityConditions;
        iconIconJackVisibility?: Types.Visibility.VisibilityConditions;
        iconIconStarVisibility?: Types.Visibility.VisibilityConditions;
        iconIconArrowVisibility?: Types.Visibility.VisibilityConditions;
        /** The icon image allow for uploading a custom icon. Note that the color will not change, only the SVG option accepts the CurrentColor value.*/
        iconIconImageVisibility?: Types.Visibility.VisibilityConditions;
        iconIconImage?: Types.Asset.Image;
        iconIconImageAltText?: Types.Basic.AltText;
    }
): React.JSX.Element