import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ResponsiveHeadline(props: {
  hashtagsHashtagsVisibility?: Types.Visibility.VisibilityConditions;
  hashtagsHashtagText?: React.ReactNode;
  headlineAlignment?: "Left" | "Center" | "Right";
  headlineHeadlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headlineHeadlineText?: React.ReactNode;
  headlineResponsiveTextSizeVariants?:
    | "Headline +6"
    | "Headline +5"
    | "Headline +4"
    | "Headline +3"
    | "Headline +2"
    | "Headline +1"
    | "Base"
    | "Headline -1"
    | "Headline -2"
    | "Headline -3"
    | "Headline -4";
  settingsSectionId?: string;
  settingsSectionVisibility?: Types.Visibility.VisibilityConditions;
  subHeadlineSubHeadlineText?: React.ReactNode;
  subHeadlineSubHeadlineVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
