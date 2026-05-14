import * as React from "react";
import * as Types from "./types";

declare function BlogArticleVerticalList(
    props: {
        as?: React.ElementType;
        blogMetaDataComponentVisibility?: Types.Visibility.VisibilityConditions;
        /** Blo Component*/
        category1LabelText?: React.ReactNode;
        blogMetaDataCategory1Visibility?: Types.Visibility.VisibilityConditions;
        blogMetaDataCategory2Visibility?: Types.Visibility.VisibilityConditions;
        blogMetaDataCategory2LabelText?: React.ReactNode;
        blogMetaDataDateText?: React.ReactNode;
        blogMetaDataDateVisibility?: Types.Visibility.VisibilityConditions;
        blogMetaDataComponentId?: Types.Basic.IdTextInput;
        mainContentBlogListHeadline?: React.ReactNode;
        mainContentBlogListHeadlineTag?: Types.Basic.HeadingTag;
        mainContentParagraph?: React.ReactNode;
        category1CategoryVisibility?: Types.Visibility.VisibilityConditions;
        category1CategoryNameText?: React.ReactNode;
        category1CategorySlug?: Types.Builtin.Text;
        category2CategoryVisibility?: Types.Visibility.VisibilityConditions;
        category2CategoryNameText?: React.ReactNode;
        category2CategorySlug?: Types.Builtin.Text;
        originalPublishDateDateVisibility?: Types.Visibility.VisibilityConditions;
        originalPublishDateOriginalPublishDate?: React.ReactNode;
        blogListHeadlineText?: React.ReactNode;
        blogListHeadlineTextTag?: Types.Basic.HeadingTag;
        blogListParagraph?: React.ReactNode;
        exploreAllPostsLinkText?: React.ReactNode;
        blogListLinkText?: React.ReactNode;
        exploreAllPostsUnderlineVisibility?: Types.Visibility.VisibilityConditions;
        exploreAllPostsLink?: Types.Basic.Link;
        exploreAllPostsLinkColor?: "Light" | "Dark" | "Color 2" | "Color 4" | "Color 5" | "Color 6" | "Color 7" | "Color 8";
        mainContentButtonLink?: Types.Basic.Link;
        mainContentTypeSize?: "Button Small" | "Button Regular" | "Button Large";
        mainContentColor?: "Primary" | "Primary Inverse" | "Primary Outline" | "Light" | "Light Outline" | "Dark" | "Dark Outline" | "Color 1" | "Color 1 Outline" | "Color 1 Outline Inverse" | "Color 2" | "Color 2 Outline" | "Color 4" | "Color 5" | "Color 5 Outline" | "Color 6" | "Color 6 Outline" | "Color 7" | "Color 8" | "Color 8 Outline" | "Color 8 Outline Inverse" | "Color 9 Outline" | "Alert" | "Alert Outline" | "Disabled" | "Transparent";
        mainContentLabelText?: React.ReactNode;
        blogListLinkColor?: "Light" | "Dark" | "Color 2" | "Color 4" | "Color 5" | "Color 6" | "Color 7" | "Color 8";
        blogListLink?: Types.Basic.Link;
        sectionId?: Types.Basic.IdTextInput;
        sectionVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element