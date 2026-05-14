import * as React from "react";
import * as Types from "./types";

declare function RetroPattern(
    props: {
        as?: React.ElementType;
        variant?: "Color Primary" | "Color Primary Other Pattern" | "Color 2" | "Color 5" | "Color 8" | "Color 9";
        hashtagsHashtags?: React.ReactNode;
        headlineHeadlineTag?: Types.Basic.HeadingTag;
        headlineHeadlineText?: React.ReactNode;
        subHeadlineSubHeadline1?: React.ReactNode;
        id?: Types.Basic.IdTextInput;
        settingsVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element