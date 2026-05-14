import * as React from "react";
import * as Types from "./types";

declare function ButtonComponent(
    props: {
        as?: React.ElementType;
        settingsButtonVisibility?: Types.Visibility.VisibilityConditions;
        settingsButtonId?: Types.Basic.IdTextInput;
        settingsButtonLink?: Types.Basic.Link;
        optionsColor?: "Primary" | "Primary Inverse" | "Primary Outline" | "Light" | "Light Outline" | "Dark" | "Dark Outline" | "Color 1" | "Color 1 Outline" | "Color 1 Outline Inverse" | "Color 2" | "Color 2 Outline" | "Color 4" | "Color 5" | "Color 5 Outline" | "Color 6" | "Color 6 Outline" | "Color 7" | "Color 8" | "Color 8 Outline" | "Color 8 Outline Inverse" | "Color 9 Outline" | "Alert" | "Alert Outline" | "Disabled" | "Transparent";
        buttonStyleButtonTypeSize?: "Button Small" | "Button Regular" | "Button Large";
        enableIconIconVisibility?: Types.Visibility.VisibilityConditions;
        enableIconIconSize?: "1.5x1.5" | "1x1" | "2x2" | "2.5x2.5";
        iconsIconJackVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconStarVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconArrowVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconImageVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconImage?: Types.Asset.Image;
        settingsButtonText?: React.ReactNode;
        iconsIconImageAltText?: Types.Basic.AltText;
    }
): React.JSX.Element