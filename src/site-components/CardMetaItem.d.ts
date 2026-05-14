import * as React from "react";
import * as Types from "./types";

declare function CardMetaItem(
    props: {
        as?: React.ElementType;
        settingsVisibility?: Types.Visibility.VisibilityConditions;
        settingsId?: Types.Basic.IdTextInput;
        globalOptionsFontSize?: "T6 XXS" | "T5 XS" | "T4 SM" | "T3 Base" | "T2 MD" | "T1 LG";
        category1CategoryVisibility?: Types.Visibility.VisibilityConditions;
        category1CategoryNameText?: React.ReactNode;
        category2CategoryVisibility?: Types.Visibility.VisibilityConditions;
        category2CategoryNameText?: React.ReactNode;
        dateDateVisibility?: Types.Visibility.VisibilityConditions;
        dateDateTextColor?: "Light" | "Dark" | "Color 1" | "Color 2" | "Color 3" | "Color 4" | "Color 5" | "Color 6" | "Color 7" | "Color 8" | "Color 9";
        /** Bind this to the Original Publish Date field in the CMS to maintain accuracy if the site is unpublished and republished, as this action impacts Webflow's native publish date causing inaccuracy.*/
        dateDate?: React.ReactNode;
        category1Link?: Types.Basic.Link;
        category1CategorySlug?: React.ReactNode;
        /** Bind this to the CMS Text Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        category1CategoryTextColor?: React.ReactNode;
        /** Bind this to the CMS Primary Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        category1CategoryPrimaryColor?: React.ReactNode;
        /** Bind this to the CMS Background Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        category1CategoryBackgroundColor?: React.ReactNode;
        /** Bind this to the CMS Inverse Color Value. Please note that the CMS field must be configured as the native Webflow Color field to be compatible.*/
        category1CategoryInverseColor?: React.ReactNode;
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
    }
): React.JSX.Element