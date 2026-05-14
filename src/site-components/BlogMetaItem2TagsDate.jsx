"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function BlogMetaItem2TagsDate(
    {
        as: _Component = _Builtin.Block,
        settingsComponentVisibility = true,
        settingsComponentId,
        category1CategoryVisibility = true,
        category2CategoryVisibility = true,
        category2CategoryNameText = "Category Name",
        category1CategoryNameText = "Category Name",
        dateDateVisibility = true,
        dateOriginalPublishDate = "Month YYYY",
        category1CategorySlug = "Category Slug",
        category1CategoryPrimaryColor,
        category2CategorySlug = "Category Slug",
        category2CategoryPrimaryColor,
        category1CategoryInverseColor,
        category2CategoryInverseColor
    }
) {
    return settingsComponentVisibility ? <_Component tag="div" id={settingsComponentId}><_Builtin.Block className="blog_meta-3" tag="div">{category1CategoryVisibility ? <_Builtin.DOM
                tag="wf-category-tag"
                slot=""
                category-primary-color={category1CategoryPrimaryColor}
                category-inverse-color={category1CategoryInverseColor}
                category-slug={category1CategorySlug}><_Builtin.DOM className="blog_category-3" tag="div" slot="" _class="output">{category1CategoryNameText}</_Builtin.DOM></_Builtin.DOM> : null}{category2CategoryVisibility ? <_Builtin.DOM
                tag="wf-join-attr"
                slot=""
                category-primary-color={category2CategoryPrimaryColor}
                category-inverse-color={category2CategoryInverseColor}
                category-slug={category2CategorySlug}><_Builtin.DOM className="blog_category-3" tag="div" slot="" _class="output">{category2CategoryNameText}</_Builtin.DOM></_Builtin.DOM> : null}{dateDateVisibility ? <_Builtin.Block className="meta-date-2" tag="div" editable={false}>{dateOriginalPublishDate}</_Builtin.Block> : null}</_Builtin.Block></_Component> : null;
}