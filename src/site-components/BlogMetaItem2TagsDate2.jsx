"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function BlogMetaItem2TagsDate2(
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
        category2CategoryInverseColor,
        category1Tag = "div",
        category2Tag = "div"
    }
) {
    return settingsComponentVisibility ? <_Component className="card-meta_wrapper" tag="div" id={settingsComponentId}><_Builtin.Block className="card_meta" tag="div"><_Builtin.Block className="blog_category-wrapper" tag="div">{category1CategoryVisibility ? <_Builtin.DOM
                    tag="wf-join-attr"
                    slot=""
                    category-primary-color={category1CategoryPrimaryColor}
                    category-inverse-color={category1CategoryInverseColor}
                    category-slug={category1CategorySlug}><_Builtin.DOM className="blog_category-4" slot="" tag={category1Tag} _class="output">{category1CategoryNameText}</_Builtin.DOM></_Builtin.DOM> : null}{category2CategoryVisibility ? <_Builtin.DOM
                    tag="wf-join-attr"
                    slot=""
                    category-primary-color={category2CategoryPrimaryColor}
                    category-inverse-color={category2CategoryInverseColor}
                    category-slug={category2CategorySlug}><_Builtin.DOM className="blog_category-4" slot="" tag={category2Tag} _class="output">{category2CategoryNameText}</_Builtin.DOM></_Builtin.DOM> : null}</_Builtin.Block><_Builtin.Block className="meta-date_wrapper" tag="div">{dateDateVisibility ? <_Builtin.Block className="meta-date_text" tag="div" editable={false}>{dateOriginalPublishDate}</_Builtin.Block> : null}</_Builtin.Block></_Builtin.Block></_Component> : null;
}