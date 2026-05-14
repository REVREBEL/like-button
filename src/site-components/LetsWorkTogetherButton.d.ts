import * as React from "react";
import * as Types from "./types";

declare function LetsWorkTogetherButton(
    props: {
        as?: React.ElementType;
        settingsButtonVisibility?: Types.Visibility.VisibilityConditions;
        settingsButtonId?: Types.Basic.IdTextInput;
        optionsUnderlineVisibility?: Types.Visibility.VisibilityConditions;
        buttonButtonLink?: Types.Basic.Link;
        buttonButtonText?: React.ReactNode;
        iconIcon?: Types.Asset.Image;
        iconIconAltText?: Types.Basic.AltText;
        optionsSize?: "Big Left Align" | "Big Center Align" | "Regular Left Align" | "Regular Center Align" | "Small Left Align" | "Small Center Align" | "Responsive Size";
    }
): React.JSX.Element