import * as React from "react";
import * as Types from "./types";

declare function IconComponent(
    props: {
        as?: React.ElementType;
        optionsIconVisibility?: Types.Visibility.VisibilityConditions;
        optionsIconSize?: "1.5x1.5" | "1x1" | "2x2" | "2.5x2.5";
        iconsIconJackVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconArrowVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconStarVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconImageVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconImage?: Types.Asset.Image;
        iconsIconImageAltText?: Types.Basic.AltText;
    }
): React.JSX.Element