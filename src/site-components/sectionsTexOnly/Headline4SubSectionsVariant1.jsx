"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Grid from "../webflow_modules/Layout/components/Grid";
import Heading from "../webflow_modules/Basic/components/Heading";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import * as _interactions from "../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-41859":{"id":"e-41859","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-41860"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":800,"direction":null,"effectIn":true},"createdOn":1754711831046},"e-41861":{"id":"e-41861","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-41862"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34dea","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359},"e-41863":{"id":"e-41863","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-16","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-41864"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114}},"actionLists":{"a-16":{"id":"a-16","title":"sticky-headline_fade-in 2","actionItemGroups":[{"actionItems":[{"id":"a-16-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-16-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Headline4SubSectionsVariant1({
  highlightsHighlightsParagraph = "You could have the perfect package, a killer rate strategy, and the best room descriptions on the planet — but if your distribution isn’t firing on all cylinders, it’s like driving a Bugatti at 20mph. Independent hotels have an edge. We help you use that agility to outperform slower,brand-bound competitors with faster time to market, flexible rate strategies, and channel-specific precision.",
  highlightsHighlightsText = "Why it matters",
  item1Cta = (
    <>
      {"Every Channel Should Earn its Keep. "}
      <br />
      {"We’ll Make Sure it Does."}
    </>
  ),
  item1Paragraph = "We help you unlock the full value of your IBE, OTA, GDS,and direct distribution partnerships — from selecting theright mix to negotiating deals and executing integrationsthat actually perform.",
  item1SubheadineTag = "h3",
  item1Subheadline = (
    <>
      {"System Audits + "}
      <br />
      {"Config Clean-up"}
    </>
  ),
  item2Cta = (
    <>
      {"Welcome to the Part of the GDS Most Hotels Ignore. "}
      <br />
      {"We don’t."}
    </>
  ),
  item2Paragraph = "We leverage GDS insights, optimize content, and improvemerchandising so your property gets seen — and booked— by the right audiences. From travel agents to corporatebooking tools, we develop content to drive high conversion.",
  item2Subheadlines = (
    <>
      {"GDS Visibility "}
      <br />
      {"& Optimization"}
    </>
  ),
  item2SubheadlinesTag = "h3",
  item3Cta = "Your crs isn’t Haunted. it Just Needs a Good Exorcist (That’s Us).",
  item3Paragraph = "Full support in Revenue Strategy, Distribution & Performance Marketing, best for long term engagements. One integrated platform, zero fluff. Strategy, execution, optimization — all working in harmony like a tightly-run call sheet.",
  item3Subheadline = (
    <>
      {"Channel Strategy "}
      <br />
      {"& Partner Management"}
    </>
  ),
  item3SubheadlineTag = "h3",
  item4Cta = "ProjectPlans. Executed. Your Offer Hits the Market Only when it's Absolutely Flawless.",
  item4Paragraph = "Before a campaign goes live, we test the bookingexperience across every channel. If it’s broken, we fix it. Ifit’s confusing, we simplify it to ensure it’s conversionoptimized for the consumer.",
  item4Subheadline = (
    <>
      {"Test Shops & "}
      <br />
      {"Retail Readiness"}
    </>
  ),
  item4SubheadlineTag = "h3",
  mainSectionMainHeadline = "Optimized Distribution",
  mainSectionParagraph = "Distribution is more than just rates and rooms — it’s the engine behind your hotel’s revenueperformance. We help you build a lean, high-performance machine that connects the right offer tothe right guest at the right time — across every channel that matters. No fluff. No wasted motion.Just calibrated distribution that moves with purpose.",
  mainSectionSubheadline = "Start Your Engines. Let’s Drive Demand.",
  mainSectionSubheadlineTag = "h2",
  optionsBackgroundTextColorVariants = "Light",
  slotTag,
}) {
  _interactions.useInteractions(_interactionsData);

  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-ffcd85c4-9537-70d8-8653-0f08d392cbef",
    "Brand Color 1": "w-variant-ffcd85c4-9537-70d8-8653-0f08d392cbf0",
    "Brand Color 2": "w-variant-ffcd85c4-9537-70d8-8653-0f08d392cbf1",
    "Brand Color 3": "w-variant-ffcd85c4-9537-70d8-8653-0f08d392cbf2",
    "Brand Color 5": "w-variant-ffcd85c4-9537-70d8-8653-0f08d392cbf3",
    "Brand Color 4": "w-variant-ffcd85c4-9537-70d8-8653-0f08d392cbf4",
    "Brand Color 6": "w-variant-ffcd85c4-9537-70d8-8653-0f08d392cbf5",
    "Brand Color 7": "w-variant-ffcd85c4-9537-70d8-8653-0f08d392cbf6",
    "Brand Color 8": "w-variant-ffcd85c4-9537-70d8-8653-0f08d392cbf7",
    "Brand Color 1 Inverse": "w-variant-ffcd85c4-9537-70d8-8653-0f08d392cbf8",
    "Brand Color 2 Inverse": "w-variant-ffcd85c4-9537-70d8-8653-0f08d392cbf9",
    "Brand Color 3 Inverse": "w-variant-ffcd85c4-9537-70d8-8653-0f08d392cbfa",
    "Brand Color 4 Inverse": "w-variant-ffcd85c4-9537-70d8-8653-0f08d392cbfb",
    "Brand Color 5 Inverse": "w-variant-ffcd85c4-9537-70d8-8653-0f08d392cbfc",
    "Brand Color 6 Inverse": "w-variant-ffcd85c4-9537-70d8-8653-0f08d392cbfd",
    "Brand Color 7 Inverse": "w-variant-ffcd85c4-9537-70d8-8653-0f08d392cbfe",
    "Brand Color 8 Inverse": "w-variant-ffcd85c4-9537-70d8-8653-0f08d392cbff",
  };

  const _activeStyleVariant =
    _styleVariantMap[optionsBackgroundTextColorVariants];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Section
        className={`component_base ${_activeStyleVariant}`}
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
            className={`component_container ${_activeStyleVariant}`}
            grid={{
              type: "container",
            }}
            id={"fixed-root"}
            tag={"div"}
          >
            <Block
              className={`component_container ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Grid className={`flex_vertical ${_activeStyleVariant}`}>
                <Block
                  className={`card w-node-f09a0f37-72f6-9d82-9ecb-c27705eea668-05eea663 ${_activeStyleVariant}`}
                  id={"w-node-_35bf060b-8a13-deba-de16-d8c5035ee5c4-035ee5ba"}
                  tag={"div"}
                >
                  <Block
                    className={`card-body ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    <Heading
                      className={`headline-md ${_activeStyleVariant}`}
                      tag={"h2"}
                    >
                      {mainSectionMainHeadline}
                    </Heading>
                    <Heading
                      className={`headline-sm-16 text-color-3-2 margin-block_xs-2 ${_activeStyleVariant}`}
                      tag={mainSectionSubheadlineTag}
                    >
                      {mainSectionSubheadline}
                    </Heading>
                    <Paragraph
                      className={`paragraph-md-3 ${_activeStyleVariant}`}
                    >
                      {mainSectionParagraph}
                    </Paragraph>
                    <Block
                      className={`margin-top_sm-6 ${_activeStyleVariant}`}
                      id={
                        "w-node-f09a0f37-72f6-9d82-9ecb-c27705eea66d-05eea663"
                      }
                      tag={"div"}
                    >
                      <Block
                        className={`card_body-2 ${_activeStyleVariant}`}
                        id={
                          "w-node-f09a0f37-72f6-9d82-9ecb-c27705eea66e-05eea663"
                        }
                        tag={"div"}
                      >
                        {slotTag}
                        <Paragraph
                          className={`paragraph-18 ${_activeStyleVariant}`}
                        >
                          {highlightsHighlightsParagraph}
                        </Paragraph>
                      </Block>
                    </Block>
                  </Block>
                </Block>
                <Block
                  className={`space-xxl-2 ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <Block
                    className={`card_body-2 flex-strech-2 ${_activeStyleVariant}`}
                    id={"w-node-f09a0f37-72f6-9d82-9ecb-c27705eea678-05eea663"}
                    tag={"div"}
                  >
                    <Heading
                      className={`headline-xs-8 w-node-f09a0f37-72f6-9d82-9ecb-c27705eea679-05eea663 ${_activeStyleVariant}`}
                      id={
                        "w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"
                      }
                      tag={item2SubheadlinesTag}
                    >
                      {item2Subheadlines}
                    </Heading>
                    <Paragraph
                      className={`paragraph_sm-2 margin-block_xxs-2 ${_activeStyleVariant}`}
                    >
                      {item2Paragraph}
                    </Paragraph>
                    <Block
                      className={`line-seperator-2 is-1rem ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`headline_1-07rem w-node-f09a0f37-72f6-9d82-9ecb-c27705eea67c-05eea663 ${_activeStyleVariant}`}
                      id={
                        "w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"
                      }
                      tag={"div"}
                    >
                      {item2Cta}
                    </Block>
                  </Block>
                </Block>
                <Block
                  className={`grid_2-col-13 tablet_1-col gap-lg-xxl w-node-f09a0f37-72f6-9d82-9ecb-c27705eea672-05eea663 ${_activeStyleVariant}`}
                  id={"w-node-_504154c9-3a04-812a-2e25-b7b0c0c188de-035ee5ba"}
                  tag={"div"}
                >
                  <Block
                    className={`card_body flex-strech ${_activeStyleVariant}`}
                    id={"w-node-f09a0f37-72f6-9d82-9ecb-c27705eea673-05eea663"}
                    tag={"div"}
                  >
                    <Heading
                      className={`headline-xs-8 w-node-f09a0f37-72f6-9d82-9ecb-c27705eea674-05eea663 ${_activeStyleVariant}`}
                      id={
                        "w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"
                      }
                      tag={item1SubheadineTag}
                    >
                      {item3Subheadline}
                    </Heading>
                    <Paragraph
                      className={`paragraph_sm-2 margin-block_xxs-2 ${_activeStyleVariant}`}
                    >
                      {item1Paragraph}
                    </Paragraph>
                    <Block
                      className={`line-seperator-2 is-1rem ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`headline_1-07rem w-node-f09a0f37-72f6-9d82-9ecb-c27705eea677-05eea663 ${_activeStyleVariant}`}
                      id={
                        "w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"
                      }
                      tag={"div"}
                    >
                      {item1Cta}
                    </Block>
                  </Block>
                  <Block
                    className={`card-body flex-strech ${_activeStyleVariant}`}
                    id={"w-node-f09a0f37-72f6-9d82-9ecb-c27705eea67d-05eea663"}
                    tag={"div"}
                  >
                    <Heading
                      className={`headline-xs-8 w-node-f09a0f37-72f6-9d82-9ecb-c27705eea67e-05eea663 ${_activeStyleVariant}`}
                      id={
                        "w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"
                      }
                      tag={item3SubheadlineTag}
                    >
                      {item1Subheadline}
                    </Heading>
                    <Paragraph
                      className={`paragraph_sm-2 margin-block_xxs-2 ${_activeStyleVariant}`}
                    >
                      {item3Paragraph}
                    </Paragraph>
                    <Block
                      className={`line-seperator-2 is-1rem ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`headline_1-07rem w-node-f09a0f37-72f6-9d82-9ecb-c27705eea681-05eea663 ${_activeStyleVariant}`}
                      id={
                        "w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"
                      }
                      tag={"div"}
                    >
                      {item3Cta}
                    </Block>
                  </Block>
                  <Block
                    className={`card_body-2 flex-strech-2 ${_activeStyleVariant}`}
                    id={"w-node-f09a0f37-72f6-9d82-9ecb-c27705eea682-05eea663"}
                    tag={"div"}
                  >
                    <Heading
                      className={`headline-xs-8 w-node-f09a0f37-72f6-9d82-9ecb-c27705eea683-05eea663 ${_activeStyleVariant}`}
                      id={
                        "w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"
                      }
                      tag={item4SubheadlineTag}
                    >
                      {item4Subheadline}
                    </Heading>
                    <Paragraph
                      className={`paragraph_sm-2 margin-block_xxs-2 ${_activeStyleVariant}`}
                    >
                      {item4Paragraph}
                    </Paragraph>
                    <Block
                      className={`line-seperator-2 is-1rem ${_activeStyleVariant}`}
                      tag={"div"}
                    />
                    <Block
                      className={`headline_1-07rem w-node-f09a0f37-72f6-9d82-9ecb-c27705eea686-05eea663 ${_activeStyleVariant}`}
                      id={
                        "w-node-_504154c9-3a04-812a-2e25-b7b0c0c188e1-035ee5ba"
                      }
                      tag={"div"}
                    >
                      {item4Cta}
                    </Block>
                  </Block>
                </Block>
              </Grid>
            </Block>
          </BlockContainer>
        </Section>
      </Section>
    </div>
  );
}
