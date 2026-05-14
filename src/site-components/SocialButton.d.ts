import * as React from "react";

declare function SocialButton(
    props: {
        as?: React.ElementType;
        socialPlatform?: "Base" | "Instagram" | "Instagram Outline" | "Linkedin" | "LinkedIn Outline" | "Facebook" | "Facebook Outline" | "X" | "X Outline" | "Blog" | "Blog Outline" | "Github" | "Google" | "Google Drive";
    }
): React.JSX.Element