import * as React from "react";
import * as Types from "./types";

declare function TagInnerIconComponent(
    props: {
        as?: React.ElementType;
        optionsIconVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconJackVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconArrowVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconStarVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconImageVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconImage?: Types.Asset.Image;
        iconsIconImageAltText?: Types.Basic.AltText;
        optionsIconSize?: ".75x.75x" | "1x1x" | "1.5x1.5" | "2x2";
    }
): React.JSX.Element