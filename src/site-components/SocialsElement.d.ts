import * as React from "react";
import * as Types from "./types";

declare function SocialsElement(
    props: {
        as?: React.ElementType;
        socialPlatform?: "Base" | "Instagram" | "Instagram Outline" | "Linkedin" | "LinkedIn Outline" | "Facebook" | "Facebook Outline" | "X" | "X Outline" | "Blog" | "Blog Outline" | "Github" | "Google" | "Google Drive";
        socialButtonIconSettingsSocialButtonVisibility?: Types.Visibility.VisibilityConditions;
        socialButtonIconSettingsSocialButtonId?: Types.Basic.IdTextInput;
        socialButtonLinksSocialButtonLinkLink?: Types.Basic.Link;
        iconSize?: "2x2" | "3x3" | "4x4";
    }
): React.JSX.Element