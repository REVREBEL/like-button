import * as React from "react";
import * as Types from "./types";

declare function BlogMetaItem1TagDate(
    props: {
        as?: React.ElementType;
        settingsBlogMetaVisibility?: Types.Visibility.VisibilityConditions;
        settingsBlogMetaId?: Types.Basic.IdTextInput;
        categoryCategoryNameVisibility?: Types.Visibility.VisibilityConditions;
        categoryCategoryNameText?: React.ReactNode;
        dateOriginalPublishDateVisibility?: Types.Visibility.VisibilityConditions;
        /** Bind this to the Original Publish Date field in the CMS to maintain accuracy if the site is unpublished and republished, as this action impacts Webflow's native publish date causing inaccuracy.*/
        dateOriginalPublishDate?: React.ReactNode;
        /** Bind this to the CMS Slug Value for the category. It is utilized to create a custom CSS class and display the element using the designated CMS Primary and Inverse Color Values.*/
        customCodeCategorySlug?: React.ReactNode;
        /** Bind this to the CMS Inverse Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        customCodeCategoryInverseColor?: React.ReactNode;
        /** Bind this to the CMS Primary Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        customCodeCategoryPrimaryColor?: React.ReactNode;
        dateDateColor?: "Brand Color 2" | "Brand Color 3" | "Brand Color 4" | "Brand Color Primary" | "Brand Color Light";
        blogMetaStyleLabelFontSize?: "Normal" | "Small" | "Medium" | "Large";
    }
): React.JSX.Element