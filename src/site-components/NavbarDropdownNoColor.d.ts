import * as React from "react";
import * as Types from "./types";

declare function NavbarDropdownNoColor(
    props: {
        as?: React.ElementType;
        id?: Types.Basic.IdTextInput;
        settingsVisibility?: Types.Visibility.VisibilityConditions;
        card1CardIconVisibility?: Types.Visibility.VisibilityConditions;
        card1TagVisibility?: Types.Visibility.VisibilityConditions;
        card1TagTagColor?: "Clear" | "Color Primary" | "Color Primary Outline" | "Color 1" | "Color 1 Outline" | "Color 2" | "Color 2 Outline" | "Color 3" | "Color 3 Outline" | "Color 4" | "Color 4 Outline" | "Color 5" | "Color 5 Outline" | "Color 6" | "Color 6 Outline" | "Color 7" | "Color 7 Outline" | "Color 8" | "Color 8 Outline" | "Color 9" | "Color 9 Outline" | "Color Light" | "Color Light Outline" | "Color Dark" | "Color Dark Outline";
        /** For the icon to display, first enable visibility here, then choose one of the icons below and enable visibility for it as well.*/
        card1TagIconVisibility?: Types.Visibility.VisibilityConditions;
        card1TagIconArrowVisibility?: Types.Visibility.VisibilityConditions;
        card1TagClickableLink?: "Tag Non-Clickable" | "Tag is Clickable";
        card1TagTagText?: React.ReactNode;
        card1TagLink?: Types.Basic.Link;
        card2CardIconVisibility?: Types.Visibility.VisibilityConditions;
        card2TagVisibility?: Types.Visibility.VisibilityConditions;
        card2TagTagColor?: "Clear" | "Color Primary" | "Color Primary Outline" | "Color 1" | "Color 1 Outline" | "Color 2" | "Color 2 Outline" | "Color 3" | "Color 3 Outline" | "Color 4" | "Color 4 Outline" | "Color 5" | "Color 5 Outline" | "Color 6" | "Color 6 Outline" | "Color 7" | "Color 7 Outline" | "Color 8" | "Color 8 Outline" | "Color 9" | "Color 9 Outline" | "Color Light" | "Color Light Outline" | "Color Dark" | "Color Dark Outline";
        /** For the icon to display, first enable visibility here, then choose one of the icons below and enable visibility for it as well.*/
        card2TagIconVisibility?: Types.Visibility.VisibilityConditions;
        card2TagIconArrowVisibility?: Types.Visibility.VisibilityConditions;
        card2TagClickableLink?: "Tag Non-Clickable" | "Tag is Clickable";
        card2TagTagText?: React.ReactNode;
        card2TagLink?: Types.Basic.Link;
        card3CardIconVisibility?: Types.Visibility.VisibilityConditions;
        card1HeadlineText?: React.ReactNode;
        card2HeadlineText?: React.ReactNode;
        card3HeadlineText?: React.ReactNode;
        card3TagVisibility?: Types.Visibility.VisibilityConditions;
        card3TagTagColor?: "Clear" | "Color Primary" | "Color Primary Outline" | "Color 1" | "Color 1 Outline" | "Color 2" | "Color 2 Outline" | "Color 3" | "Color 3 Outline" | "Color 4" | "Color 4 Outline" | "Color 5" | "Color 5 Outline" | "Color 6" | "Color 6 Outline" | "Color 7" | "Color 7 Outline" | "Color 8" | "Color 8 Outline" | "Color 9" | "Color 9 Outline" | "Color Light" | "Color Light Outline" | "Color Dark" | "Color Dark Outline";
        card3TagIconArrowVisibility?: Types.Visibility.VisibilityConditions;
        /** For the icon to display, first enable visibility here, then choose one of the icons below and enable visibility for it as well.*/
        card3TagIconVisibility?: Types.Visibility.VisibilityConditions;
        card3TagClickableLink?: "Tag Non-Clickable" | "Tag is Clickable";
        card3TagTagText?: React.ReactNode;
        card3TagLink?: Types.Basic.Link;
        card4HeadlineText?: React.ReactNode;
        card4CardIconVisibility?: Types.Visibility.VisibilityConditions;
        card1ParagraphText?: React.ReactNode;
        card2ParagraphText?: React.ReactNode;
        card3ParagraphText?: React.ReactNode;
        card4ParagraphText?: React.ReactNode;
        card1LinkText?: React.ReactNode;
        card2LinkText?: React.ReactNode;
        card3LinkText?: React.ReactNode;
        card4CardIcon?: Types.Asset.Image;
        card1CardIconImage?: Types.Asset.Image;
        card2CardIcon?: Types.Asset.Image;
        card3CardIcon?: Types.Asset.Image;
        card1CardIconAltText?: Types.Basic.AltText;
        card2CardIconAltText?: Types.Basic.AltText;
        card3CardIconAltText?: Types.Basic.AltText;
        card4CardIconAltText?: Types.Basic.AltText;
        card4TagVisibility?: Types.Visibility.VisibilityConditions;
        card4TagTagColor?: "Clear" | "Color Primary" | "Color Primary Outline" | "Color 1" | "Color 1 Outline" | "Color 2" | "Color 2 Outline" | "Color 3" | "Color 3 Outline" | "Color 4" | "Color 4 Outline" | "Color 5" | "Color 5 Outline" | "Color 6" | "Color 6 Outline" | "Color 7" | "Color 7 Outline" | "Color 8" | "Color 8 Outline" | "Color 9" | "Color 9 Outline" | "Color Light" | "Color Light Outline" | "Color Dark" | "Color Dark Outline";
        /** For the icon to display, first enable visibility here, then choose one of the icons below and enable visibility for it as well.*/
        card4TagIconVisibility?: Types.Visibility.VisibilityConditions;
        card4TagIconArrowVisibility?: Types.Visibility.VisibilityConditions;
        card4TagClickableLink?: "Tag Non-Clickable" | "Tag is Clickable";
        card4TagTagText?: React.ReactNode;
        card4TagLink?: Types.Basic.Link;
    }
): React.JSX.Element