import * as React from "react";
import * as Types from "./types";

declare function AuthorPageBlock(
    props: {
        as?: React.ElementType;
        text?: React.ReactNode;
        authorSectionMetaPicture?: Types.Asset.Image;
        authorSectionMetaAuthorImageAltText?: Types.Basic.AltText;
        authorSectionMetaAuthorNameTag?: Types.Basic.HeadingTag;
        /** FirstName LastName*/
        authorSectionMetaName?: React.ReactNode;
        authorSectionMetaAuthorHeadlineTextTag?: Types.Basic.HeadingTag;
        authorSectionMetaAuthorHeadline?: React.ReactNode;
        authorSectionMetaLocation?: React.ReactNode;
        authorSectionMetaBioSummary?: React.ReactNode;
        authorSectionMetaEmailVisibility?: Types.Visibility.VisibilityConditions;
        authorSectionMetaEmailAddressText?: React.ReactNode;
        authorSectionMetaEmailAddress?: Types.Basic.Link;
        authorSectionMetaWebsiteVisibility?: Types.Visibility.VisibilityConditions;
        authorSectionMetaWebsiteText?: React.ReactNode;
        authorSectionMetaWebsite?: Types.Basic.Link;
        socialsBlockVisibility?: Types.Visibility.VisibilityConditions;
        instagramInstagramVisibility?: Types.Visibility.VisibilityConditions;
        instagramIconSize?: "2x2" | "3x3" | "4x4";
        instagramInstagramProfileUrl?: Types.Basic.Link;
        linkedinLinkedInVisibility?: Types.Visibility.VisibilityConditions;
        linkedinIconSize?: "2x2" | "3x3" | "4x4";
        linkedinLinkedinProfileLink?: Types.Basic.Link;
        facebookFacebookVisibility?: Types.Visibility.VisibilityConditions;
        facebookIconSize?: "2x2" | "3x3" | "4x4";
        facebookFacebookProfileLink?: Types.Basic.Link;
        xIconXVisibility?: Types.Visibility.VisibilityConditions;
        xIconIconSize?: "2x2" | "3x3" | "4x4";
        xIconXProfileLink?: Types.Basic.Link;
        relatedBlogsHeadlineRelatedBlogsHeadlineVisibility?: Types.Visibility.VisibilityConditions;
        relatedBlogsHeadlineHeadlineTag?: Types.Basic.HeadingTag;
        relatedBlogsHeadlineHeadlineText?: React.ReactNode;
    }
): React.JSX.Element