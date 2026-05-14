import * as React from "react";
import * as Types from "./types";

declare function BlogArticleSection(
    props: {
        as?: React.ElementType;
        settingsBlogArticleSectionId?: Types.Basic.IdTextInput;
        settingsSummaryBlockVisibility?: Types.Visibility.VisibilityConditions;
        metaPublishDate?: React.ReactNode;
        metaSlug?: Types.Builtin.Text;
        summarySectionSummaryBlockId?: Types.Basic.IdTextInput;
        summarySectionSummaryHeadlineVisibility?: Types.Visibility.VisibilityConditions;
        summarySectionSummaryHeadlineTag?: Types.Basic.HeadingTag;
        summarySectionSummaryParagraphVisibility?: Types.Visibility.VisibilityConditions;
        summarySectionSummaryParagraphText?: React.ReactNode;
        summarySectionMainHeadlineText?: React.ReactNode;
        mainSectionRichText?: Types.Basic.RichTextChildren;
        authorCardAuthorCardVisibility?: Types.Visibility.VisibilityConditions;
        authorCardExpertContributorPicture?: Types.Asset.Image;
        authorCardAuthorNameText?: React.ReactNode;
        /** The location for the author.*/
        authorCardAuthorLocationText?: React.ReactNode;
        authorCardAuthorSummaryText?: React.ReactNode;
        authorCardExpertContributorLink?: Types.Basic.Link;
        readMoreButtonButtonVisibility?: Types.Visibility.VisibilityConditions;
        readMoreButtonButtonId?: Types.Basic.IdTextInput;
        readMoreButtonButtonCtaText?: React.ReactNode;
        readMoreButtonLink?: Types.Basic.Link;
        readMoreButtonIcon?: Types.Asset.Image;
        readMoreButtonIconAltText?: Types.Basic.AltText;
        /** Updated from page script automatically when enabled.*/
        metaReadTimeMinutes?: React.ReactNode;
        summarySectionCategoryLabelText?: React.ReactNode;
        mainSectionLikeThisArticleVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element