import * as React from "react";
import * as Types from "./types";

declare function ReadMoreSpinningJack(
    props: {
        as?: React.ElementType;
        settingsButtonId?: Types.Basic.IdTextInput;
        readMoreButtonButtonCtaText?: React.ReactNode;
        readMoreButtonLink?: Types.Basic.Link;
        readMoreButtonIcon?: Types.Asset.Image;
        readMoreButtonIconAltText?: Types.Basic.AltText;
        settingsButtonVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element