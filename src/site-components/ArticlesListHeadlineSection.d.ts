import * as React from "react";
import * as Types from "./types";

declare function ArticlesListHeadlineSection(
    props: {
        as?: React.ElementType;
        headlineText?: React.ReactNode;
        subHeadlineText?: React.ReactNode;
        paragraphLeft?: React.ReactNode;
        paragraphTopRight?: React.ReactNode;
        paragraphBottomRight?: React.ReactNode;
        logoImage?: Types.Asset.Image;
        underlinedLinkUnderlinedLinkLinkText?: React.ReactNode;
        underlinedLinkUnderlinedLinkLink?: Types.Basic.Link;
        underlinedLinkUnderlinedLinkColor?: "Light" | "Dark" | "Color 2" | "Color 4" | "Color 5" | "Color 6" | "Color 7" | "Color 8";
        underlinedLinkUnderlinedLinkLinkVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element