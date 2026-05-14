import * as React from "react";
import * as Types from "./types";

declare function BlogHeroImageSection(
    props: {
        as?: React.ElementType;
        photoCreditText?: Types.Basic.RichTextChildren;
        heroSectionHeroImage?: Types.Asset.Image;
        heroSectionHeroImageAltText?: Types.Basic.AltText;
        socialShareSidebarSocialShareBottomLabelText?: React.ReactNode;
        /** This value is applied when content is shared, and the chosen channel receives the associated hashtags, provided they are supported.*/
        socialShareSidebarSocialShareHashtags?: Types.Builtin.Text;
    }
): React.JSX.Element