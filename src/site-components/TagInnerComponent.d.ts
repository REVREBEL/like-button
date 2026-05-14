import * as React from "react";
import * as Types from "./types";

declare function TagInnerComponent(
    props: {
        as?: React.ElementType;
        tagTagText?: React.ReactNode;
        settingsIconVisibility?: Types.Visibility.VisibilityConditions;
        settingsIconSize?: ".75x.75x" | "1x1x" | "1.5x1.5" | "2x2";
        optionsColor?: "Clear" | "Color Primary" | "Color Primary Outline" | "Color 1" | "Color 1 Outline" | "Color 2" | "Color 2 Outline" | "Color 3" | "Color 3 Outline" | "Color 4" | "Color 4 Outline" | "Color 5" | "Color 5 Outline" | "Color 6" | "Color 6 Outline" | "Color 7" | "Color 7 Outline" | "Color 8" | "Color 8 Outline" | "Color 9" | "Color 9 Outline" | "Color Light" | "Color Light Outline" | "Color Dark" | "Color Dark Outline";
        iconsIconJackVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconArrowVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconStarVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconImageVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconImage?: Types.Asset.Image;
        iconsIconImageAltText?: Types.Basic.AltText;
    }
): React.JSX.Element