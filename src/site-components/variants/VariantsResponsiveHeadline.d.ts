import * as React from "react";

declare function VariantsResponsiveHeadline(props: {
  headlineTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  headlineText?: React.ReactNode;
  settingsResponsiveTextSizeVariants?:
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
}): React.JSX.Element;
