import * as React from "react";
import * as Types from "./types";

declare function ButtonSize(
    props: {
        as?: React.ElementType;
        optionsTypeSize?: "Button Small" | "Button Regular" | "Button Large";
        labelLabelText?: React.ReactNode;
        iconsIconStarVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconArrowVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconJackVisibility?: Types.Visibility.VisibilityConditions;
        iconsIconImageAltText?: Types.Basic.AltText;
        iconsIconImage?: Types.Asset.Image;
        optionsIconVisibility?: Types.Visibility.VisibilityConditions;
        optionsIconSize?: "1.5x1.5" | "1x1" | "2x2" | "2.5x2.5";
        iconsIconImageVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element