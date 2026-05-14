import * as React from "react";
import * as Types from "./types";

declare function AuthorCard(
    props: {
        as?: React.ElementType;
        settingsAuthorCardVisibility?: Types.Visibility.VisibilityConditions;
        authorAuthorPicture?: Types.Asset.Image;
        authorAuthorParagraphText?: React.ReactNode;
        authorAuthorName?: React.ReactNode;
        /** The location for the author.*/
        authorAuthorLocation?: React.ReactNode;
        authorAuthorPageLink?: Types.Basic.Link;
        readMoreButtonButtonVisibility?: Types.Visibility.VisibilityConditions;
        readMoreButtonButtonId?: Types.Basic.IdTextInput;
        readMoreButtonButtonText?: React.ReactNode;
        readMoreButtonLink?: Types.Basic.Link;
        readMoreButtonIcon?: Types.Asset.Image;
        readMoreButtonIconAltText?: Types.Basic.AltText;
        readMoreButtonSize?: "Big" | "Regular" | "Small" | "Responsive";
        readMoreButtonUnderlineVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element