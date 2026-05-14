"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function BlogArticleVerticalList(
    {
        as: _Component = _Builtin.BlockContainer,
        blogMetaDataComponentVisibility = true,
        category1LabelText = "Category Label",
        blogMetaDataCategory1Visibility = true,
        blogMetaDataCategory2Visibility = true,
        blogMetaDataCategory2LabelText = "Category Label",
        blogMetaDataDateText = "Month YYYY",
        blogMetaDataDateVisibility = true,
        blogMetaDataComponentId,
        mainContentBlogListHeadline = "Unlock Hotel Revenue Secrets",
        mainContentBlogListHeadlineTag = "h3",
        mainContentParagraph = "Discover the latest trends, tips, and stories shaping the travel and hospitality industry. Stay ahead with expert insights and actionable advice.",
        category1CategoryVisibility = true,
        category1CategoryNameText = "Category Name",
        category1CategorySlug = "Category Slug",
        category2CategoryVisibility = true,
        category2CategoryNameText = "Category Name",
        category2CategorySlug = "Category Slug",
        originalPublishDateDateVisibility = true,
        originalPublishDateOriginalPublishDate = "Month YYYY",
        blogListHeadlineText = "Heading",
        blogListHeadlineTextTag = "h3",
        blogListParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        exploreAllPostsLinkText = "Explore All Articles",
        blogListLinkText = "Read More",
        exploreAllPostsUnderlineVisibility = false,

        exploreAllPostsLink = {
            href: "#"
        },

        exploreAllPostsLinkColor = null,

        mainContentButtonLink = {
            href: "#"
        },

        mainContentTypeSize = null,
        mainContentColor = null,
        mainContentLabelText = "[ Discover Trend ] ",
        blogListLinkColor = null,

        blogListLink = {
            href: "#"
        },

        sectionId,
        sectionVisibility = true
    }
) {
    return sectionVisibility ? <_Component
        className="component_wrapper"
        grid={{
            type: "container"
        }}
        tag="div"
        id={sectionId}><_Builtin.BlockContainer
            className="component_container-8"
            grid={{
                type: "container"
            }}
            tag="div" /></_Component> : null;
}