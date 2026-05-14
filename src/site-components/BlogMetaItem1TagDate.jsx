"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function BlogMetaItem1TagDate(
    {
        as: _Component = _Builtin.Block,
        settingsBlogMetaVisibility = true,
        settingsBlogMetaId,
        categoryCategoryNameVisibility = true,
        categoryCategoryNameText = "Category Name",
        dateOriginalPublishDateVisibility = true,
        dateOriginalPublishDate = "Month YYYY",
        customCodeCategorySlug = "Category Slug",
        customCodeCategoryInverseColor = "",
        customCodeCategoryPrimaryColor = "",
        dateDateColor = "Normal",
        blogMetaStyleLabelFontSize = "Normal"
    }
) {
    const _styleVariantMap = {
        "Normal": "",
        "Small": "w-variant-fbd53ca9-fee1-1b20-67ba-702076966040",
        "Medium": "w-variant-fbd53ca9-fee1-1b20-67ba-702076966041",
        "Large": "w-variant-fbd53ca9-fee1-1b20-67ba-702076966042"
    };

    const _activeStyleVariant = _styleVariantMap[blogMetaStyleLabelFontSize];

    return settingsBlogMetaVisibility ? <_Component
        className={`div-block-651 ${_activeStyleVariant}`}
        tag="div"
        id={settingsBlogMetaId}><_Builtin.Block className={`blog_meta ${_activeStyleVariant}`} tag="div">{categoryCategoryNameVisibility ? <_Builtin.DOM
                className={`_wf-join-attr ${_activeStyleVariant}`}
                tag="wf-join-attr"
                slot=""
                category-primary-color={listOfElementsToText(customCodeCategoryPrimaryColor)}
                category-inverse-color={listOfElementsToText(customCodeCategoryInverseColor)}
                category-slug={listOfElementsToText(customCodeCategorySlug)}><_Builtin.DOM
                    className={`blog_category-2 ${_activeStyleVariant}`}
                    tag="div"
                    slot=""
                    _class="output">{categoryCategoryNameText}</_Builtin.DOM></_Builtin.DOM> : null}{dateOriginalPublishDateVisibility ? <_Builtin.Block className={`meta-date_color ${_activeStyleVariant}`} tag="div"><_Builtin.Block className={`meta-date ${_activeStyleVariant}`} tag="div">{dateOriginalPublishDate}</_Builtin.Block></_Builtin.Block> : null}</_Builtin.Block></_Component> : null;
}