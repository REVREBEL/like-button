import * as React from "react";
import * as Types from "./types";

declare function TestPreviewCard(
    props: {
        as?: React.ElementType;
        settingsSummaryCardVisibility?: Types.Visibility.VisibilityConditions;
        settingsBlogMetaVisibility?: Types.Visibility.VisibilityConditions;
        settingsCategoryNameVisibility?: Types.Visibility.VisibilityConditions;
        optionsLabelFontSize?: "T6 XXS" | "T5 XS" | "T4 SM" | "T3 Base" | "T2 MD" | "T1 LG";
        settingsOriginalPublishDateVisibility?: Types.Visibility.VisibilityConditions;
        /** Bind this to the CMS Slug Value for the category. It is utilized to create a custom CSS class and display the element using the designated CMS Primary and Inverse Color Values.*/
        metaCategorySlug?: React.ReactNode;
        /** Bind this to the CMS Inverse Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        metaCategoryInverseColor?: React.ReactNode;
        /** Bind this to the CMS Primary Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        metaCategoryPrimaryColor?: React.ReactNode;
        metaBlogMetaId?: Types.Basic.IdTextInput;
        previewCardSizeVariant?: "1x" | "1.25x" | "1.5x" | "1.75x" | "2x";
        previewCardColorVariants?: "Light" | "Primary" | "Color 2" | "Color 7";
        previewCardHeadlineTextTag?: Types.Basic.HeadingTag;
        previewCardOriginalPublishDate?: React.ReactNode;
        previewCardMetaCategoryText?: React.ReactNode;
        previewCardDescriptionParagraph?: React.ReactNode;
        previewCardHeadlineText?: React.ReactNode;
        previewCardLinkText?: React.ReactNode;
        previewCardCardId?: Types.Basic.IdTextInput;
        imageCardImage?: Types.Asset.Image;
        imageBackgroundImage?: Types.Asset.Image;
        imageImageAltText?: Types.Basic.AltText;
        linkUnderlineVisibility?: Types.Visibility.VisibilityConditions;
        linkUnderlinedLinkVisibility?: Types.Visibility.VisibilityConditions;
        linkLink?: Types.Basic.Link;
        viewsLikesViewsAndLikesVisibility?: Types.Visibility.VisibilityConditions;
        viewsLikesLikesVisibility?: Types.Visibility.VisibilityConditions;
        viewsLikesViewsVisibility?: Types.Visibility.VisibilityConditions;
        optionsLinkColor?: "Light" | "Dark" | "Color 2" | "Color 4" | "Color 5" | "Color 6" | "Color 7" | "Color 8";
        customCodeTargetArticleSlugValue?: Types.Builtin.Text;
        customCodeTriggerArticleSlugValue?: React.ReactNode;
        /** This slug is used to render and track likes/views for the component.*/
        settingsDataSlug?: Types.Builtin.Text;
        /** For use when the button has been selected or liked.*/
        viewsLikesIsActive?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element