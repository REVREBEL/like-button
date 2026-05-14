import * as React from "react";
import * as Types from "./types";

declare function Disclaimer(
    props: {
        as?: React.ElementType;
        settingsSectionId?: Types.Basic.IdTextInput;
        settingsSectionVisibility?: Types.Visibility.VisibilityConditions;
        contentRichTextContent?: Types.Basic.RichTextChildren;
    }
): React.JSX.Element