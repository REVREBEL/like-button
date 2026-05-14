import * as React from "react";
import * as Types from "./types";

declare function PoliciesHeader(
    props: {
        as?: React.ElementType;
        headlineText?: React.ReactNode;
        headlineTextTag?: Types.Basic.HeadingTag;
        paragraphText?: React.ReactNode;
        policiesLink1Link?: Types.Basic.Link;
        policiesLink2Link?: Types.Basic.Link;
        policiesLink3Link?: Types.Basic.Link;
        policiesLink4Link?: Types.Basic.Link;
        policiesLink1LinkText?: React.ReactNode;
        policiesLink2LinkText?: React.ReactNode;
        policiesLink3LinkText?: React.ReactNode;
        policiesLink4LinkText?: React.ReactNode;
        policiesLink4LinkVisibility?: Types.Visibility.VisibilityConditions;
        policiesLink3LinkVisibility?: Types.Visibility.VisibilityConditions;
        policiesLink2LinkVisibility?: Types.Visibility.VisibilityConditions;
        policiesLink1LinkVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element