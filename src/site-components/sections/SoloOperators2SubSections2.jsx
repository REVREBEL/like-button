"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-6703":{"id":"e-6703","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-6668"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-6705":{"id":"e-6705","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-6670"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114}},"actionLists":{"a-16":{"id":"a-16","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-16-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SoloOperators2SubSections2({
  button1ButtonColor = null,

  button1ButtonLink = {
    href: "#",
  },

  button1ButtonText = "[ Icon Button ] ",
  button1ButtonTypeSize = null,
  button1ButtonVisibility = true,
  button2ButtonColor = null,

  button2ButtonLink = {
    href: "#",
  },

  button2ButtonText = "[ Icon Button ] ",
  button2ButtonTypeSize = null,
  button2ButtonVisibility = true,
  headlineHeadlineTag = "h1",
  headlineHeadlineText = (
    <>
      {"Your value proposition "}
      {"."}
      <br />
    </>
  ),
  headlineSubHeadlineText = "This is a subheading about one sentence in length. Use it to explain how your product solves a meaningful problem.",
  heroImageEyebrowText = "Key Focus Areas",
  heroImageHeroImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68f928cddb1717c51ea64382_ea1bda0fc46729c48bde987578a7dc09_revrebel_a-guest-relaxes-at-the-balcony-of-a-palm-springs-m__83436.avif",
  heroImageHeroImageAltText = "__wf_reserved_inherit",
  heroImageIconAltText = "__wf_reserved_inherit",
  heroImageIconOverImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68f928cddb1717c51ea64381_24e5e3edaf0f0e4643971b62db990a92_bar-chart.svg",
  variant = "Light",
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-3781b1e9-64c2-4ac4-a98e-e56fdaf6810f",
    "Brand Color 1": "w-variant-3781b1e9-64c2-4ac4-a98e-e56fdaf68110",
    "Brand Color 2": "w-variant-3781b1e9-64c2-4ac4-a98e-e56fdaf68111",
    "Brand Color 3": "w-variant-3781b1e9-64c2-4ac4-a98e-e56fdaf68112",
    "Brand Color 5": "w-variant-3781b1e9-64c2-4ac4-a98e-e56fdaf68113",
    "Brand Color 4": "w-variant-3781b1e9-64c2-4ac4-a98e-e56fdaf68114",
    "Brand Color 6": "w-variant-3781b1e9-64c2-4ac4-a98e-e56fdaf68115",
    "Brand Color 7": "w-variant-3781b1e9-64c2-4ac4-a98e-e56fdaf68116",
    "Brand Color 8": "w-variant-3781b1e9-64c2-4ac4-a98e-e56fdaf68117",
    "Brand Color 1 Inverse": "w-variant-3781b1e9-64c2-4ac4-a98e-e56fdaf68118",
    "Brand Color 2 Inverse": "w-variant-3781b1e9-64c2-4ac4-a98e-e56fdaf68119",
    "Brand Color 3 Inverse": "w-variant-3781b1e9-64c2-4ac4-a98e-e56fdaf6811a",
    "Brand Color 4 Inverse": "w-variant-3781b1e9-64c2-4ac4-a98e-e56fdaf6811b",
    "Brand Color 5 Inverse": "w-variant-3781b1e9-64c2-4ac4-a98e-e56fdaf6811c",
    "Brand Color 6 Inverse": "w-variant-3781b1e9-64c2-4ac4-a98e-e56fdaf6811d",
    "Brand Color 7 Inverse": "w-variant-3781b1e9-64c2-4ac4-a98e-e56fdaf6811e",
    "Brand Color 8 Inverse": "w-variant-3781b1e9-64c2-4ac4-a98e-e56fdaf6811f",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Section
        className={`component_base bg-color-light ${_activeStyleVariant}`}
        data-copilot={"true"}
        tag={"section"}
      >
        <Section
          className={`component_wrapper ${_activeStyleVariant}`}
          grid={{
            type: "section",
          }}
          tag={"section"}
        >
          <BlockContainer
            className={`component_container margin-block_lg ${_activeStyleVariant}`}
            grid={{
              type: "container",
            }}
            id={"fixed-root"}
            tag={"div"}
          >
            <Block
              className={`component_size text-color_primary ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`component_padding is-mobile-padding_2rem ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`color-variants ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`padding-inline_md ${_activeStyleVariant}`}
                    tag={"div"}
                  />
                  <Block
                    className={`card_body margin-top_large w-node-_6b74488c-a3cd-eb65-2312-100790f45169-90f45162 ${_activeStyleVariant}`}
                    id={"w-node-_35bf060b-8a13-deba-de16-d8c5035ee5be-035ee5ba"}
                    tag={"div"}
                  >
                    <Heading
                      className={`headline-lg ${_activeStyleVariant}`}
                      tag={"h2"}
                    >
                      {"STRATEGIC BACKUP FOR SOLO OPERATORS."}
                    </Heading>
                    <Paragraph
                      className={`subheadline-md ${_activeStyleVariant}`}
                    >
                      {
                        "Going independent doesn’t mean going without expert support. We plug in like a regional — guiding your team, optimizing your systems, or giving you the support to ensure your hotel performs like it has a whole fleet behind it."
                      }
                    </Paragraph>
                  </Block>
                  <Block
                    className={`grid_2-col gap-md-4 w-node-_6b74488c-a3cd-eb65-2312-100790f4516e-90f45162 ${_activeStyleVariant}`}
                    id={"w-node-_35bf060b-8a13-deba-de16-d8c5035ee5c4-035ee5ba"}
                    tag={"div"}
                  >
                    <Block
                      className={`card_body ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`icon margin-bottom_xs is-hidden ${_activeStyleVariant}`}
                        tag={"div"}
                      />
                      <Block
                        className={`eyebrow ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {"revenue management support"}
                      </Block>
                      <Heading
                        className={`headline-base w-node-_6b74488c-a3cd-eb65-2312-100790f45173-90f45162 ${_activeStyleVariant}`}
                        id={
                          "w-node-_35bf060b-8a13-deba-de16-d8c5035ee5ca-035ee5ba"
                        }
                        tag={"h3"}
                      >
                        {"A DEDICATED STRATEGY ADVISOR"}
                      </Heading>
                      <Heading
                        className={`subheadline-base text-color-primary-fade w-node-_6b74488c-a3cd-eb65-2312-100790f45175-90f45162 ${_activeStyleVariant}`}
                        id={
                          "w-node-_35bf060b-8a13-deba-de16-d8c5035ee5ca-035ee5ba"
                        }
                        tag={"h3"}
                      >
                        {"GUIDANCE LIKE A BRAND. FREEDOM LIKE AN INDIE."}
                      </Heading>
                      <Paragraph
                        className={`paragraph margin-bottom_xs ${_activeStyleVariant}`}
                      >
                        {
                          "For independent operators, the absence of brand or management support often translates to siloed strategy, under leveraged tech, and a lack of a dedicated revenue sounding board. "
                        }
                        <br />
                        <br />
                        {
                          "We provide regional-level revenue support without the overhead. Consider us your remote, integrated revenue command center, from complex system setup questions to delivering sharp, data-backed insightsdirectly to your weekly strategy calls."
                        }
                        <br />
                      </Paragraph>
                      <Paragraph className={`label ${_activeStyleVariant}`}>
                        {
                          "Skip the guesswork, get actionable intelligence and the answers when you need them most."
                        }
                      </Paragraph>
                    </Block>
                    <Image
                      alt={""}
                      className={`gallery04_image ${_activeStyleVariant}`}
                      height={"auto"}
                      loading={"lazy"}
                      src={
                        "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6975b05c73bc8349fcc749de_902fa4f38d4d6e73e0eb851aa8b34f2f_Brainstorming%20Sketches%2C%20Wireframes%2C%20%26%20Design%20Mockups%20Alt.avif"
                      }
                      width={"auto"}
                    />
                  </Block>
                  <Block
                    className={`grid_2-col gap-lg margin-top_xl w-node-_6b74488c-a3cd-eb65-2312-100790f45180-90f45162 ${_activeStyleVariant}`}
                    id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188de-035ee5ba"}
                    tag={"div"}
                  >
                    <Block
                      className={`card_body ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`icon margin-bottom_xs is-hidden ${_activeStyleVariant}`}
                        tag={"div"}
                      />
                      <Block
                        className={`eyebrow ${_activeStyleVariant}`}
                        tag={"div"}
                      >
                        {"rate loading, connecting new partners +more"}
                      </Block>
                      <Heading
                        className={`headline-base w-node-_6b74488c-a3cd-eb65-2312-100790f45185-90f45162 ${_activeStyleVariant}`}
                        id={
                          "w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"
                        }
                        tag={"h3"}
                      >
                        {"DISTRIBUTIONSUPPORT"}
                      </Heading>
                      <Heading
                        className={`subheadline-base text-color-primary-fade w-node-_6b74488c-a3cd-eb65-2312-100790f45187-90f45162 ${_activeStyleVariant}`}
                        id={
                          "w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"
                        }
                        tag={"h3"}
                      >
                        {"GET YOUR RATES TOGETHER (LITERALLY)."}
                      </Heading>
                      <Paragraph
                        className={`paragraph margin-bottom_xs ${_activeStyleVariant}`}
                      >
                        {
                          "For independent operators, the absence of brand or management support often translates to siloed strategy, under leveraged tech, and a lack of a dedicated revenue sounding board. We provide regional-level revenue support without the overhead. "
                        }
                        <br />
                        <br />
                        {
                          "Consider us your remote, integrated revenue command center, from complex system setup questions to delivering sharp, data-backed insightsdirectly to your weekly strategy calls."
                        }
                      </Paragraph>
                      <Paragraph className={`label ${_activeStyleVariant}`}>
                        {
                          "Skip the guesswork, get actionable intelligence and the answers when you need them most."
                        }
                      </Paragraph>
                    </Block>
                    <Block
                      className={`card_body margin-top-md ${_activeStyleVariant}`}
                      tag={"div"}
                    >
                      <Block
                        className={`line-seperator margin-top_none ${_activeStyleVariant}`}
                        tag={"div"}
                      />
                      <Heading
                        className={`headline-xxs w-node-_6b74488c-a3cd-eb65-2312-100790f45192-90f45162 ${_activeStyleVariant}`}
                        id={
                          "w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"
                        }
                        tag={"h3"}
                      >
                        {
                          "STREAMLINED SUPPORT FOR SEAMLESS DISTRIBUTION EXECUTION"
                        }
                      </Heading>
                      <Paragraph
                        className={`paragraph margin_bottom-none ${_activeStyleVariant}`}
                      >
                        {
                          "Our step in distribution support liberates your team to architect + focus on strategy while we engineerthe execution. From full system builds and seasonal recalibrations to RFP-season reinforcements, wedon't just input rates; we optimize the entire flow. "
                        }
                        <br />
                        <br />
                        {
                          "Our expertise in advanced CRS pricing rules and conversion-centric policy logic transforms configuration from a checklist item into a potent performance tool."
                        }
                      </Paragraph>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </BlockContainer>
        </Section>
      </Section>
    </div>
  );
}
