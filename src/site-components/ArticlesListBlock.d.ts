import * as React from "react";
import * as Types from "./types";

declare function ArticlesListBlock(
    props: {
        as?: React.ElementType;
        articlesListBlockVisibility?: Types.Visibility.VisibilityConditions;
        articlesListBlockId?: Types.Basic.IdTextInput;
        cardMetaVisibility?: Types.Visibility.VisibilityConditions;
        cardMetaFontSize?: "T6 XXS" | "T5 XS" | "T4 SM" | "T3 Base" | "T2 MD" | "T1 LG";
        readArticleColorVariant?: "Light" | "Dark" | "Color 2" | "Color 4" | "Color 5" | "Color 6" | "Color 7" | "Color 8";
        readArticleLinkVisibility?: Types.Visibility.VisibilityConditions;
        readArticleLinkText?: React.ReactNode;
        readArticleLink?: Types.Basic.Link;
        category1CategoryVisibility?: Types.Visibility.VisibilityConditions;
        category1CategoryText?: React.ReactNode;
        cardContentParagraphVisibility?: Types.Visibility.VisibilityConditions;
        cardContentHeadlineTag?: Types.Basic.HeadingTag;
        cardContentHeadlineText?: React.ReactNode;
        cardContentText?: React.ReactNode;
        category1CategorySlug?: React.ReactNode;
        /** Bind this to the CMS Text Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        category1CategoryTextColor?: React.ReactNode;
        /** Bind this to the CMS Primary Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        category1CategoryPrimaryColor?: React.ReactNode;
        /** Bind this to the CMS Background Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        category1CategoryBackgroundColor?: React.ReactNode;
        /** Bind this to the CMS Inverse Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        category1CategoryInverseColor?: React.ReactNode;
        publishedDateVisibility?: Types.Visibility.VisibilityConditions;
        publishedDateDateTextColor?: "Light" | "Dark" | "Color 1" | "Color 2" | "Color 3" | "Color 4" | "Color 5" | "Color 6" | "Color 7" | "Color 8" | "Color 9";
        /** Bind this to the Original Publish Date field in the CMS to maintain accuracy if the site is unpublished and republished, as this action impacts Webflow's native publish date causing inaccuracy.*/
        publishedDateDate?: React.ReactNode;
    }
): React.JSX.Element