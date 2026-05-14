import * as React from "react";
import * as Types from "./types";

declare function ExtraLargePhotoHero(
    props: {
        as?: React.ElementType;
        headlineHeadlineTag?: Types.Basic.HeadingTag;
        headlineHeadlineText?: React.ReactNode;
        headlineSubHeadlineText?: React.ReactNode;
        button1ButtonVisibility?: Types.Visibility.VisibilityConditions;
        button1ButtonLink?: Types.Basic.Link;
        button1ButtonText?: React.ReactNode;
        button1ButtonTypeSize?: "Button Small" | "Button Regular" | "Button Large";
        button1ButtonColor?: "Primary" | "Primary Inverse" | "Primary Outline" | "Light" | "Light Outline" | "Dark" | "Dark Outline" | "Color 1" | "Color 1 Outline" | "Color 1 Outline Inverse" | "Color 2" | "Color 2 Outline" | "Color 4" | "Color 5" | "Color 5 Outline" | "Color 6" | "Color 6 Outline" | "Color 7" | "Color 8" | "Color 8 Outline" | "Color 8 Outline Inverse" | "Color 9 Outline" | "Alert" | "Alert Outline" | "Disabled" | "Transparent";
        button2ButtonVisibility?: Types.Visibility.VisibilityConditions;
        button2ButtonLink?: Types.Basic.Link;
        button2ButtonText?: React.ReactNode;
        button2ButtonTypeSize?: "Button Small" | "Button Regular" | "Button Large";
        button2ButtonColor?: "Primary" | "Primary Inverse" | "Primary Outline" | "Light" | "Light Outline" | "Dark" | "Dark Outline" | "Color 1" | "Color 1 Outline" | "Color 1 Outline Inverse" | "Color 2" | "Color 2 Outline" | "Color 4" | "Color 5" | "Color 5 Outline" | "Color 6" | "Color 6 Outline" | "Color 7" | "Color 8" | "Color 8 Outline" | "Color 8 Outline Inverse" | "Color 9 Outline" | "Alert" | "Alert Outline" | "Disabled" | "Transparent";
        heroImageHeroImage?: Types.Asset.Image;
        heroImageHeroImageAltText?: Types.Basic.AltText;
        heroImageIconOverImage?: Types.Asset.Image;
        heroImageIconAltText?: Types.Basic.AltText;
        heroImageEyebrowText?: React.ReactNode;
        variant?: "Light" | "Dark" | "Brand Color 1" | "Brand Color 2" | "Brand Color 3" | "Brand Color 4" | "Brand Color 5" | "Brand Color 6" | "Brand Color 7" | "Brand Color 8" | "Brand Color 1 Inverse" | "Brand Color 2 Inverse" | "Brand Color 3 Inverse" | "Brand Color 4 Inverse" | "Brand Color 5 Inverse" | "Brand Color 6 Inverse" | "Brand Color 7 Inverse" | "Brand Color 8 Inverse";
    }
): React.JSX.Element