"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { CardMetaItem } from "./CardMetaItem";
import { UnderlinedLink } from "./UnderlinedLink";

const _interactionsData = JSON.parse(
    '{"events":{"e-13394":{"id":"e-13394","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4756","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13395"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758820901395,"origin":["6946540cc72b976861f8c836","e-664"]}},"actionLists":{"a-4756":{"id":"a-4756","origin":["6946540cc72b976861f8c836","a-165"],"title":"Preview Card [HIDE] 28","actionItemGroups":[{"actionItems":[{"id":"a-4756-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rebel-style--component_wrapper","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd69a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758820974099}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SummaryPreviewCard(
    {
        as: _Component = _Builtin.Block,
        settingsCardVisibility = true,
        settingsCategoryNameVisibility = true,
        optionsLabelFontSize = null,
        previewCardHeadlineTextTag = "h3",
        previewCardHeadlineText = "Headline",
        previewCardDescriptionParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        metaOriginalPublishDate = "Month YYYY",
        metaCategorySlug = "Category Slug",
        metaCategoryInverseColor = "",
        metaCategoryPrimaryColor = "",

        linkLink = {
            href: "#"
        },

        linkLinkText = "Read Article",
        optionsUnderlineVisibility = true,
        metaCategoryNameText = "Category Name",
        settingsOriginalPublishDateVisibility = true,
        settingsLinkVisibility = true,
        settingsBlogMetaVisibility = true,
        settingsBlogMetaId,
        imageBackgroundImage = "",
        imageBackgroundImageAltText = "__wf_reserved_inherit",
        customCodeArticleSlugValue
    }
) {
    _interactions.useInteractions(_interactionsData);
    return;
}