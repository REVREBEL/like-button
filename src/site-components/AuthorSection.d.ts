import * as React from "react";
import * as Types from "./types";

declare function AuthorSection(
    props: {
        as?: React.ElementType;
        authorMetaAuthorImage?: Types.Asset.Image;
        authorMetaAuthorImageAltText?: Types.Basic.AltText;
        /** FirstName LastName*/
        authorMetaAuthorName?: React.ReactNode;
        authorMetaAuthorNameTag?: Types.Basic.HeadingTag;
        authorMetaAuthorLocationText?: React.ReactNode;
        authorMetaAuthorHeadlineText?: React.ReactNode;
        authorMetaAuthorHeadlineTextTag?: Types.Basic.HeadingTag;
        authorMetaAuthorBioSummary?: React.ReactNode;
        socialsVisibility?: Types.Visibility.VisibilityConditions;
        instagramInstagramLink?: Types.Basic.Link;
        instagramInstagramVisibility?: Types.Visibility.VisibilityConditions;
        linkedinLinkedInLink?: Types.Basic.Link;
        linkedinLinkedInVisibility?: Types.Visibility.VisibilityConditions;
        xXLink?: Types.Basic.Link;
        xXVisibility?: Types.Visibility.VisibilityConditions;
        facebookFacebookLink?: Types.Basic.Link;
        facebookFacebookVisibility?: Types.Visibility.VisibilityConditions;
        authorMetaEmailVisibility?: Types.Visibility.VisibilityConditions;
        authorMetaEmailAddressText?: React.ReactNode;
        authorMetaEmailAddress?: Types.Basic.Link;
        authorMetaWebsiteVisibility?: Types.Visibility.VisibilityConditions;
        authorMetaWebsiteText?: React.ReactNode;
        authorMetaWebsite?: Types.Basic.Link;
        instagramIconSize?: "2x2" | "3x3" | "4x4";
        linkedinIconSize?: "2x2" | "3x3" | "4x4";
        facebookIconSize?: "2x2" | "3x3" | "4x4";
        xIconSize?: "2x2" | "3x3" | "4x4";
    }
): React.JSX.Element