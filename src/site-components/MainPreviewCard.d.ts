import * as React from "react";
import * as Types from "./types";

declare function MainPreviewCard(
    props: {
        as?: React.ElementType;
        mainCardId?: Types.Builtin.Text;
        mainCardVisibility?: Types.Visibility.VisibilityConditions;
        mainCardCardVisibility?: Types.Visibility.VisibilityConditions;
        mainCardImageVisibility?: Types.Visibility.VisibilityConditions;
        mainCardImage?: Types.Asset.Image;
        mainCardImageAltText?: Types.Basic.AltText;
        linkColor?: "Light" | "Dark" | "Color 2" | "Color 4" | "Color 5" | "Color 6" | "Color 7" | "Color 8";
        linkPositionVariant?: "Inine" | "Stacked";
        linkUnderlinedLinkVisibility?: Types.Visibility.VisibilityConditions;
        linkUnderlineVisibility?: Types.Visibility.VisibilityConditions;
        linkLinkText?: React.ReactNode;
        linkLink?: Types.Basic.Link;
        metaBlogMetaId?: Types.Basic.IdTextInput;
        metaBlogMetaVisibility?: Types.Visibility.VisibilityConditions;
        metaOriginalPublishDateVisibility?: Types.Visibility.VisibilityConditions;
        metaCategoryNameVisibility?: Types.Visibility.VisibilityConditions;
        metaLabelFontSize?: "T6 XXS" | "T5 XS" | "T4 SM" | "T3 Base" | "T2 MD" | "T1 LG";
        metaCategoryNameText?: React.ReactNode;
        /** Bind this to the Original Publish Date field in the CMS to maintain accuracy if the site is unpublished and republished, as this action impacts Webflow's native publish date causing inaccuracy.*/
        metaOriginalPublishDate?: React.ReactNode;
        /** Bind this to the CMS Slug Value for the category. It is utilized to create a custom CSS class and display the element using the designated CMS Primary and Inverse Color Values.*/
        metaCategorySlug?: React.ReactNode;
        /** Bind this to the CMS Inverse Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        metaCategoryInverseColor?: React.ReactNode;
        /** Bind this to the CMS Primary Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        metaCategoryPrimaryColor?: React.ReactNode;
        mainCardCardId?: Types.Basic.IdTextInput;
        mainCardHeadinlineTag?: Types.Basic.HeadingTag;
        mainCardHeadlineText?: React.ReactNode;
        customCodeArticleSlugValue?: React.ReactNode;
        viewsLikesVisibility?: Types.Visibility.VisibilityConditions;
        /** For use when the button has been selected or liked.*/
        viewsLikesIsActive?: Types.Visibility.VisibilityConditions;
        viewsLikesColorVariants?: "Light" | "Primary" | "Color 2" | "Color 7";
        viewsLikesSizeVariant?: "1x" | "1.25x" | "1.5x" | "1.75x" | "2x";
        viewsLikesStorageKey?: Types.Builtin.Text;
        likeLikesLabelVisibility?: Types.Visibility.VisibilityConditions;
        /** For use when the button has been selected or liked.*/
        likeIsActive?: Types.Visibility.VisibilityConditions;
        likeColorVariants?: "Light" | "Primary" | "Color 2" | "Color 7";
        likeSizeVariant?: "1x" | "1.25x" | "1.5x" | "1.75x" | "2x";
        likeLikesLabelText?: React.ReactNode;
        /** (ACTIVE STATE)
        The label used when the user has "Liked" or "Clicked" the component.*/
        likeLikedButtonLabelText?: Types.Builtin.Text;
        /** (INACTIVE STATE)
        The label used before the user has "Liked" or "Clicked" the component.*/
        likeUnlikedButtonLabelText?: Types.Builtin.Text;
    }
): React.JSX.Element