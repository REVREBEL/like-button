import * as React from "react";
import * as Types from "./types";

declare function FeaturedListArticlesTop(
    props: {
        as?: React.ElementType;
        settingsSectionVisibility?: Types.Visibility.VisibilityConditions;
        settingsSectionId?: Types.Basic.IdTextInput;
        optionsLinkColor?: "Light" | "Dark" | "Color 2" | "Color 4" | "Color 5" | "Color 6" | "Color 7" | "Color 8";
        headlineLinkColor?: "Light" | "Dark" | "Color 2" | "Color 4" | "Color 5" | "Color 6" | "Color 7" | "Color 8";
        feature1HeadlineTextTag?: Types.Basic.HeadingTag;
        feature1HeadlineText?: React.ReactNode;
        feature1LinkText?: React.ReactNode;
        feature1Image?: Types.Asset.Image;
        feature1ImageAltText?: Types.Basic.AltText;
        optionsColor?: "Primary" | "Color 3" | "Color 7";
        dateDateVisibility?: Types.Visibility.VisibilityConditions;
        dateDateTextColor?: "Light" | "Dark" | "Color 1" | "Color 2" | "Color 3" | "Color 4" | "Color 5" | "Color 6" | "Color 7" | "Color 8" | "Color 9";
        /** Bind this to the Original Publish Date field in the CMS to maintain accuracy if the site is unpublished and republished, as this action impacts Webflow's native publish date causing inaccuracy.*/
        dateOriginalPublishDate?: React.ReactNode;
        metaFontSize?: "T6 XXS" | "T5 XS" | "T4 SM" | "T3 Base" | "T2 MD" | "T1 LG";
        category1CategoryVisibility?: Types.Visibility.VisibilityConditions;
        category1Link?: Types.Basic.Link;
        /** Bind this to the CMS Text Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        category1CategoryTextColor?: React.ReactNode;
        /** Bind this to the CMS Primary Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        category1CategoryPrimaryColor?: React.ReactNode;
        /** Bind this to the CMS Background Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        category1CategoryBackgroundColor?: React.ReactNode;
        /** Bind this to the CMS Inverse Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        category1CategoryInverseColor?: React.ReactNode;
        category1CategorySlug?: React.ReactNode;
        category2CategoryVisibility?: Types.Visibility.VisibilityConditions;
        category2CategoryNameText?: React.ReactNode;
        category2Link?: Types.Basic.Link;
        category2CategorySlug?: Types.Builtin.Text;
        /** Bind this to the CMS Text Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        category2CategoryTextColor?: Types.Builtin.Text;
        /** Bind this to the CMS Primary Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        category2CategoryPrimaryColor?: Types.Builtin.Text;
        /** Bind this to the CMS Background Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        category2CategoryBackgroundColor?: Types.Builtin.Text;
        /** Bind this to the CMS Inverse Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        category2CategoryInverseColor?: Types.Builtin.Text;
        likesViewsColorVariants?: "Light" | "Primary" | "Color 2" | "Color 7";
        likesViewsSizeVariant?: "1x" | "1.25x" | "1.5x" | "1.75x" | "2x";
        likesViewsVisibility?: Types.Visibility.VisibilityConditions;
        /** For use when the button has been selected or liked.*/
        likesViewsIsActive?: Types.Visibility.VisibilityConditions;
        likesViewsStorageKey?: Types.Builtin.Text;
        category1CategoryNameText?: React.ReactNode;
    }
): React.JSX.Element