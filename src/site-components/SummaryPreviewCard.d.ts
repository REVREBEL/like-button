import * as React from "react";
import * as Types from "./types";

declare function SummaryPreviewCard(
    props: {
        as?: React.ElementType;
        settingsCardVisibility?: Types.Visibility.VisibilityConditions;
        settingsCategoryNameVisibility?: Types.Visibility.VisibilityConditions;
        optionsLabelFontSize?: "T6 XXS" | "T5 XS" | "T4 SM" | "T3 Base" | "T2 MD" | "T1 LG";
        previewCardHeadlineTextTag?: Types.Basic.HeadingTag;
        previewCardHeadlineText?: React.ReactNode;
        previewCardDescriptionParagraph?: React.ReactNode;
        /** Bind this to the Original Publish Date field in the CMS to maintain accuracy if the site is unpublished and republished, as this action impacts Webflow's native publish date causing inaccuracy.*/
        metaOriginalPublishDate?: React.ReactNode;
        /** Bind this to the CMS Slug Value for the category. It is utilized to create a custom CSS class and display the element using the designated CMS Primary and Inverse Color Values.*/
        metaCategorySlug?: React.ReactNode;
        /** Bind this to the CMS Inverse Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        metaCategoryInverseColor?: React.ReactNode;
        /** Bind this to the CMS Primary Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        metaCategoryPrimaryColor?: React.ReactNode;
        linkLink?: Types.Basic.Link;
        linkLinkText?: React.ReactNode;
        optionsUnderlineVisibility?: Types.Visibility.VisibilityConditions;
        metaCategoryNameText?: React.ReactNode;
        settingsOriginalPublishDateVisibility?: Types.Visibility.VisibilityConditions;
        settingsLinkVisibility?: Types.Visibility.VisibilityConditions;
        settingsBlogMetaVisibility?: Types.Visibility.VisibilityConditions;
        settingsBlogMetaId?: Types.Basic.IdTextInput;
        imageBackgroundImage?: Types.Asset.Image;
        imageBackgroundImageAltText?: Types.Basic.AltText;
        customCodeArticleSlugValue?: Types.Builtin.Text;
    }
): React.JSX.Element