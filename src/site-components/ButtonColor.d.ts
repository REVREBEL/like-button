import * as React from "react";
import * as Types from "./types";

declare function ButtonColor(
    props: {
        as?: React.ElementType;
        optionsTypeSize?: "Button Small" | "Button Regular" | "Button Large";
        optionsColor?: "Primary" | "Primary Inverse" | "Primary Outline" | "Light" | "Light Outline" | "Dark" | "Dark Outline" | "Color 1" | "Color 1 Outline" | "Color 1 Outline Inverse" | "Color 2" | "Color 2 Outline" | "Color 4" | "Color 5" | "Color 5 Outline" | "Color 6" | "Color 6 Outline" | "Color 7" | "Color 8" | "Color 8 Outline" | "Color 8 Outline Inverse" | "Color 9 Outline" | "Alert" | "Alert Outline" | "Disabled" | "Transparent";
        optionsIconVisibility?: Types.Visibility.VisibilityConditions;
        optionsIconSize?: "1.5x1.5" | "1x1" | "2x2" | "2.5x2.5";
        optionsLabelText?: React.ReactNode;
        iconsIconStarVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconArrowVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconJackVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconImageVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconImage?: Types.Asset.Image;
        iconsIconImageAltText?: Types.Basic.AltText;
    }
): React.JSX.Element