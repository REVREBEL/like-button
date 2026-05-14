import * as React from "react";
import * as Types from "./types";

declare function HeroSection(
    props: {
        as?: React.ElementType;
        settingsSectionId?: Types.Basic.IdTextInput;
        settingsSectionVisibility?: Types.Visibility.VisibilityConditions;
        word1HeadlineTag?: Types.Basic.HeadingTag;
        word1HeadlineText?: React.ReactNode;
        word2HeadlineText?: React.ReactNode;
        word3HeadlineText?: React.ReactNode;
        word4HeadlineText?: React.ReactNode;
        word4HeadlineTextTag?: Types.Basic.HeadingTag;
        word3HeadlineTextTag?: Types.Basic.HeadingTag;
        word2HeadlineTextTag?: Types.Basic.HeadingTag;
    }
): React.JSX.Element