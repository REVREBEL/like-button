"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { AuthorSection } from "./AuthorSection";

export function AuthorPageBlock(
    {
        as: _Component = _Builtin.Block,
        authorSectionMetaPicture = "",
        authorSectionMetaAuthorImageAltText = "__wf_reserved_inherit",
        authorSectionMetaAuthorNameTag = "h1",
        authorSectionMetaName = "FirstName LastName",
        authorSectionMetaAuthorHeadlineTextTag = "h2",
        authorSectionMetaAuthorHeadline = "Hospitality Rebel with an affinity for innovative building strategies.",
        authorSectionMetaLocation = "City, State",
        authorSectionMetaBioSummary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        authorSectionMetaEmailVisibility = true,
        authorSectionMetaEmailAddressText = "name@domain.com",

        authorSectionMetaEmailAddress = {
            href: "mailto:email@name.com"
        },

        authorSectionMetaWebsiteVisibility = true,
        authorSectionMetaWebsiteText = "website.com",

        authorSectionMetaWebsite = {
            href: "#"
        },

        socialsBlockVisibility = true,
        instagramInstagramVisibility = true,
        instagramIconSize = null,

        instagramInstagramProfileUrl = {
            href: "https://www.instagram.com/hello_revrebel",
            target: "_blank"
        },

        linkedinLinkedInVisibility = true,
        linkedinIconSize = null,

        linkedinLinkedinProfileLink = {
            href: "https://www.instagram.com/hello_revrebel",
            target: "_blank",
            preload: "none"
        },

        facebookFacebookVisibility = true,
        facebookIconSize = null,

        facebookFacebookProfileLink = {
            href: "https://www.instagram.com/hello_revrebel",
            target: "_blank"
        },

        xIconXVisibility = true,
        xIconIconSize = null,

        xIconXProfileLink = {
            href: "https://www.instagram.com/hello_revrebel",
            target: "_blank"
        },

        relatedBlogsHeadlineRelatedBlogsHeadlineVisibility = true,
        relatedBlogsHeadlineHeadlineTag = "h2",
        relatedBlogsHeadlineHeadlineText = "Related Blogs"
    }
) {
    return (
        <_Component className="container-medium-2" tag="div"><_Builtin.Block className="author_wrapper margin-top_large-2" tag="div"><AuthorSection
                    authorMetaAuthorLocationText={authorSectionMetaLocation}
                    authorMetaAuthorNameTag={authorSectionMetaAuthorNameTag}
                    authorMetaAuthorName={authorSectionMetaName}
                    authorMetaAuthorImage={authorSectionMetaPicture}
                    authorMetaAuthorImageAltText={authorSectionMetaAuthorImageAltText}
                    authorMetaAuthorHeadlineText={authorSectionMetaAuthorHeadline}
                    authorMetaAuthorHeadlineTextTag={authorSectionMetaAuthorHeadlineTextTag}
                    authorMetaAuthorBioSummary={authorSectionMetaBioSummary}
                    authorMetaEmailVisibility={authorSectionMetaEmailVisibility}
                    authorMetaEmailAddressText={authorSectionMetaEmailAddressText}
                    authorMetaEmailAddress={authorSectionMetaEmailAddress}
                    authorMetaWebsiteVisibility={authorSectionMetaWebsiteVisibility}
                    authorMetaWebsiteText={authorSectionMetaWebsiteText}
                    authorMetaWebsite={authorSectionMetaWebsite}
                    socialsVisibility={socialsBlockVisibility}
                    instagramInstagramLink={instagramInstagramProfileUrl}
                    instagramInstagramVisibility={instagramInstagramVisibility}
                    linkedinLinkedInLink={linkedinLinkedinProfileLink}
                    linkedinLinkedInVisibility={linkedinLinkedInVisibility}
                    facebookFacebookVisibility={facebookFacebookVisibility}
                    facebookFacebookLink={facebookFacebookProfileLink}
                    xXVisibility={xIconXVisibility}
                    xXLink={xIconXProfileLink}
                    linkedinIconSize={linkedinIconSize}
                    xIconSize={xIconIconSize}
                    facebookIconSize={facebookIconSize}
                    instagramIconSize={instagramIconSize} /><_Builtin.Block tag="div">{relatedBlogsHeadlineRelatedBlogsHeadlineVisibility ? <_Builtin.Heading
                        className="headline-small-2 text-color-brand-primany-2 font-weight-bold-2"
                        tag={relatedBlogsHeadlineHeadlineTag}>{relatedBlogsHeadlineHeadlineText}</_Builtin.Heading> : null}</_Builtin.Block></_Builtin.Block></_Component>
    );
}