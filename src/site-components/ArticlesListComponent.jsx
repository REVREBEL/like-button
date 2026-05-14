"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { LargeFeatureColorBlock } from "./LargeFeatureColorBlock";

const _interactionsData = JSON.parse(
    '{"events":{"e-13394":{"id":"e-13394","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4756","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-13395"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758820901395,"origin":["6946540cc72b976861f8c836","e-664"]}},"actionLists":{"a-4756":{"id":"a-4756","origin":["6946540cc72b976861f8c836","a-165"],"title":"Preview Card [HIDE] 28","actionItemGroups":[{"actionItems":[{"id":"a-4756-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rebel-style--component_wrapper","selectorGuids":["9f4372d4-dcdd-e08e-46e2-0c42204bd69a"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758820974099}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ArticlesListComponent(
    {
        as: _Component = _Builtin.Section,
        slot,
        categoryFeatureBlockId,
        categoryFeatureBlockVisibility = true,
        categoryFeatureBlockTextColor = null,
        categoryFeatureBlockRuntimeProps = {},
        categoryFeatureBlockSlot,
        categoryFeatureBlockHeadlineVisibility = true,
        categoryFeatureBlockHeadlineTextTag = "h3",
        categoryFeatureBlockHeadlineText = "Heading",
        categoryFeatureBlockSubHeadlineVisibility = true,
        categoryFeatureBlockSubHeadlineTextTag = "h4",
        categoryFeatureBlockSubHeadlineText = "Sub Headline",
        categoryFeatureBlockDescriptionOverviewVisibility = true,
        categoryFeatureBlockDescriptionOverviewText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        categoryFeatureBlockButtonId,
        categoryFeatureBlockButtonVisibility = true,
        categoryFeatureBlockButtonTypeSize = null,
        categoryFeatureBlockButtonColor = null,
        categoryFeatureBlockButtonText = "[ Button ] ",

        categoryFeatureBlockButtonLink = {
            href: "#"
        }
    }
) {
    _interactions.useInteractions(_interactionsData);

    return (
        <_Component
            className="rebel-style--component_wrapper"
            tag="section"
            data-copilot="true"
            data-record-id="aa78945c-ebcf-8e11-a011-8f4645b1fb8a"><_Builtin.BlockContainer
                className="rebel-style--component_container"
                grid={{
                    type: "container"
                }}
                tag="div"><_Builtin.BlockContainer
                    className="rebel-style--component_padding rebel-style--max-width_md rebel-style--padding-inline_sm rebel-style--padding-block_md"
                    grid={{
                        type: "container"
                    }}
                    tag="div"><_Builtin.Grid className="rebel-style--grid_2-col"><_Builtin.Block id="w-node-_90cbe67c-6181-9a11-72d6-fabc6574417d-65744179" tag="div"><LargeFeatureColorBlock
                                settingsVisibility={categoryFeatureBlockVisibility}
                                settingsTextColor={categoryFeatureBlockTextColor}
                                categoryFeatureBlockHeadlineText={categoryFeatureBlockHeadlineText}
                                categoryFeatureBlockHeadlineTextTag={categoryFeatureBlockHeadlineTextTag}
                                categoryFeatureBlockVisibility={categoryFeatureBlockHeadlineVisibility}
                                categoryFeatureBlockId={categoryFeatureBlockId}
                                categoryFeatureBlockButtonLink={categoryFeatureBlockButtonLink}
                                categoryFeatureBlockButtonText={categoryFeatureBlockButtonText}
                                categoryFeatureBlockButtonColor={categoryFeatureBlockButtonColor}
                                categoryFeatureBlockButtonTypeSize={categoryFeatureBlockButtonTypeSize}
                                categoryFeatureBlockButtonId={categoryFeatureBlockButtonId}
                                categoryFeatureBlockButtonVisibility={categoryFeatureBlockButtonVisibility}
                                categoryFeatureBlockRuntimeProps={categoryFeatureBlockRuntimeProps}
                                categoryFeatureBlockSlot={categoryFeatureBlockSlot}
                                categoryFeatureBlockSubHeadlineVisibility={categoryFeatureBlockSubHeadlineVisibility}
                                categoryFeatureBlockSubHeadlineTextTag={categoryFeatureBlockSubHeadlineTextTag}
                                categoryFeatureBlockSubHeadlineText={categoryFeatureBlockSubHeadlineText}
                                categoryFeatureBlockDescriptionOverviewVisibility={categoryFeatureBlockDescriptionOverviewVisibility}
                                categoryFeatureBlockDescriptionOverviewText={categoryFeatureBlockDescriptionOverviewText} /></_Builtin.Block><_Builtin.Block
                            className="rebel-style--flex_vertical w-node-_90cbe67c-6181-9a11-72d6-fabc6574417f-65744179"
                            id="w-node-_678e5512-efc0-e6c2-82d1-566e0aa480c2-0aa480b2"
                            tag="div"><_Builtin.Block className=" rebel-style--articles-list_headline" tag="div">{"Recent Posts"}</_Builtin.Block><_Builtin.Block className="rebel-style--articles-list_wrapper" tag="div"><_Builtin.NotSupported _atom="Slot" /></_Builtin.Block><_Builtin.Link
                                className="rebel-style--label"
                                button={false}
                                block=""
                                options={{
                                    href: "#"
                                }}>{"Explore all blog posts"}</_Builtin.Link></_Builtin.Block></_Builtin.Grid></_Builtin.BlockContainer></_Builtin.BlockContainer></_Component>
    );
}