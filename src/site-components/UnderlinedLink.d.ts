import * as React from "react";
import * as Types from "./types";

declare function UnderlinedLink(
    props: {
        as?: React.ElementType;
        underlinedLinkLinkVisibility?: Types.Visibility.VisibilityConditions;
        underlinedLinkColor?: "Light" | "Dark" | "Color 2" | "Color 4" | "Color 5" | "Color 6" | "Color 7" | "Color 8";
        underlinedLinkLinkText?: React.ReactNode;
        underlinedLinkLink?: Types.Basic.Link;
    }
): React.JSX.Element