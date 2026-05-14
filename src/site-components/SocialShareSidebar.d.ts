import * as React from "react";
import * as Types from "./types";

declare function SocialShareSidebar(
    props: {
        as?: React.ElementType;
        socialShareTopLabelText?: React.ReactNode;
        socialShareBottomLabelText?: React.ReactNode;
        /** This value is applied when content is shared, and the chosen channel receives the associated hashtags, provided they are supported.*/
        socialShareHashtags?: Types.Builtin.Text;
    }
): React.JSX.Element