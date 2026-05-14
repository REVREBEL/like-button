import * as React from "react";
import * as Types from "./types";

declare function UnderlinedLinkElement(
    props: {
        as?: React.ElementType;
        settingsUnderlinedLinkVisibility?: Types.Visibility.VisibilityConditions;
        underlinedLinkLink?: Types.Basic.Link;
        underlinedLinkLinkText?: React.ReactNode;
        underlinedLinkUnderlineVisibility?: Types.Visibility.VisibilityConditions;
        optionsColor?: "Dark" | "Light" | "Brand Color 2" | "Brand Color 4" | "Brand Color 5" | "Brand Color 6" | "Brand Color 7" | "Brand Color 8";
    }
): React.JSX.Element