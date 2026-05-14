import * as React from "react";
import * as Types from "./types";

declare function NavbarColorDropdownIcons(
    props: {
        as?: React.ElementType;
        card1CardIconVisibility?: Types.Visibility.VisibilityConditions;
        card1CardIconAltText?: Types.Basic.AltText;
        card1CardIcon?: Types.Asset.Image;
        card2CardIconImage?: Types.Asset.Image;
        card2CardIconAltText?: Types.Basic.AltText;
        card2CardIconVisibility?: Types.Visibility.VisibilityConditions;
        card3CardIconVisibility?: Types.Visibility.VisibilityConditions;
        card3CardIconImage?: Types.Asset.Image;
        card3CardIconAltText?: Types.Basic.AltText;
        card4CardIconImage?: Types.Asset.Image;
        card4CardIconVisibility?: Types.Visibility.VisibilityConditions;
        card4CardIconAltText?: Types.Basic.AltText;
    }
): React.JSX.Element