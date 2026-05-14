import * as React from "react";
import * as Types from "./types";

declare function BlogDataColor(
    props: {
        as?: React.ElementType;
        dateDateColor?: "Brand Color 2" | "Brand Color 3" | "Brand Color 4" | "Brand Color Primary" | "Brand Color Light";
        dateOriginalPublishDateVisibility?: Types.Visibility.VisibilityConditions;
        /** Bind this to the Original Publish Date field in the CMS to maintain accuracy if the site is unpublished and republished, as this action impacts Webflow's native publish date causing inaccuracy.*/
        dateOriginalPublishDate?: React.ReactNode;
    }
): React.JSX.Element