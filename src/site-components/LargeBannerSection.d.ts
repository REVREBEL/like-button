import * as React from "react";
import * as Types from "./types";

declare function LargeBannerSection(
    props: {
        as?: React.ElementType;
        sectionSectionVisibility?: Types.Visibility.VisibilityConditions;
        sectionSectionId?: Types.Basic.IdTextInput;
        headlineHeadlineTag?: Types.Basic.HeadingTag;
        headlineHeadlineText?: React.ReactNode;
        headlineSubHeadlineText?: React.ReactNode;
        paragraphParagraphText?: React.ReactNode;
        buttonButtonVisible?: Types.Visibility.VisibilityConditions;
        buttonButtonColor?: "Brand Primary" | "Brand Primary Outline" | "White" | "White Outline" | "Brand Color 3" | "Brand Color 3 Outline" | "Brand Color 4" | "Brand Color 4 Outline" | "Brand Color 5" | "Brand Color 5 Outline" | "Brand Color 8" | "Brand Color 8 Outline" | "Alert" | "Alert Outline" | "Disabled" | "Disabled Outline";
        buttonButtonLink?: Types.Basic.Link;
        buttonButtonText?: React.ReactNode;
        variant?: "Color Primary" | "Color 1" | "Color 7" | "Color 8";
        buttonTypeSize?: "Button Small" | "Button Regular" | "Button Large";
        buttonColor?: "Primary" | "Primary Inverse" | "Primary Outline" | "Light" | "Light Outline" | "Dark" | "Dark Outline" | "Color 1" | "Color 1 Outline" | "Color 1 Outline Inverse" | "Color 2" | "Color 2 Outline" | "Color 4" | "Color 5" | "Color 5 Outline" | "Color 6" | "Color 6 Outline" | "Color 7" | "Color 8" | "Color 8 Outline" | "Color 8 Outline Inverse" | "Color 9 Outline" | "Alert" | "Alert Outline" | "Disabled" | "Transparent";
    }
): React.JSX.Element