"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { MetaDate } from "./MetaDate";

export function CardMetaItem(
    {
        as: _Component = _Builtin.BlockContainer,
        settingsVisibility = true,
        settingsId,
        globalOptionsFontSize = "T3 Base",
        category1CategoryVisibility = true,
        category1CategoryNameText = "Category Name",
        category2CategoryVisibility = true,
        category2CategoryNameText = "Category Name",
        dateDateVisibility = true,
        dateDateTextColor = "T3 Base",
        dateDate = "Month YYYY",

        category1Link = {
            href: "#"
        },

        category1CategorySlug = "{{CATEGORY-SLUG}}",
        category1CategoryTextColor = "{{TEXT-COLOR}}",
        category1CategoryPrimaryColor = "{{PRIMARY-COLOR}}",
        category1CategoryBackgroundColor = "{{BACKGROUND-COLOR}}",
        category1CategoryInverseColor = "{{INVERSE-COLOR}}",

        category2Link = {
            href: "#"
        },

        category2CategorySlug = "{{CATEGORY-SLUG}}",
        category2CategoryTextColor = "{{TEXT-COLOR}}",
        category2CategoryPrimaryColor = "{{PRIMARY-COLOR}}",
        category2CategoryBackgroundColor = "{{BACKGROUND-COLOR}}",
        category2CategoryInverseColor = "{{INVERSE-COLOR}}"
    }
) {
    const _styleVariantMap = {
        "T6 XXS": "w-variant-06df48a7-6bdd-083a-00df-240dd18fd55f",
        "T5 XS": "w-variant-c6096379-791a-4d37-a580-b8b0d7ff082f",
        "T4 SM": "w-variant-511a967a-b411-f08a-9882-db680b1d54fe",
        "T3 Base": "",
        "T2 MD": "w-variant-eebdf314-bdfe-f1e4-a83c-9626bc352883",
        "T1 LG": "w-variant-b1d43679-a20e-3d90-5812-e310762336f5"
    };

    const _activeStyleVariant = _styleVariantMap[globalOptionsFontSize];

    return settingsVisibility ? <_Component
        className={`rebel-style--component_base ${_activeStyleVariant}`}
        grid={{
            type: "container"
        }}
        tag="div"
        id={settingsId}><_Builtin.Block
            className={`rebel-style--variants_font-size rebel-style--components_font-size rebel-style--flex-align_top ${_activeStyleVariant}`}
            tag="div"><_Builtin.Block className={`rebel-style--card_meta ${_activeStyleVariant}`} tag="div">{category1CategoryVisibility ? <_Builtin.Link
                    className={`rebel-style--card_category-link-block ${_activeStyleVariant}`}
                    button={false}
                    block="inline"
                    options={category1Link}><_Builtin.DOM
                        className={`rebel-style--articles-category ${_activeStyleVariant}`}
                        tag="wfCategoryTag"
                        slot=""
                        _class="output"
                        category-slug={listOfElementsToText(category1CategorySlug)}
                        category-primary-color={listOfElementsToText(category1CategoryPrimaryColor)}
                        category-inverse-color={listOfElementsToText(category1CategoryInverseColor)}
                        category-text-color={listOfElementsToText(category1CategoryTextColor)}
                        category-background-color={listOfElementsToText(category1CategoryBackgroundColor)}>{category1CategoryNameText}</_Builtin.DOM></_Builtin.Link> : null}{category2CategoryVisibility ? <_Builtin.Link
                    className={`rebel-style--card_category-link-block ${_activeStyleVariant}`}
                    button={false}
                    block="inline"
                    options={category2Link}><_Builtin.DOM
                        className={`rebel-style--articles-category ${_activeStyleVariant}`}
                        tag="wfCategoryTag"
                        slot=""
                        _class="output"
                        category-slug={category2CategorySlug}
                        category-primary-color={category2CategoryPrimaryColor}
                        category-inverse-color={category2CategoryInverseColor}
                        category-text-color={category2CategoryTextColor}
                        category-background-color={category2CategoryBackgroundColor}>{category2CategoryNameText}</_Builtin.DOM></_Builtin.Link> : null}<_Builtin.Block
                    className={`rebel-style--card_category-date-wrapper ${_activeStyleVariant}`}
                    id="w-node-_2e460918-d998-1594-c6f0-ecc1bf023ed1-bf023eca"
                    tag="div"><MetaDate
                        settingsTextColor={dateDateTextColor}
                        settingsText={dateDate}
                        settingsVisibility={dateDateVisibility} /></_Builtin.Block></_Builtin.Block></_Builtin.Block></_Component> : null;
}