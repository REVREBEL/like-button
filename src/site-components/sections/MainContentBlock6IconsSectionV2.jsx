"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Heading from "../webflow_modules/Basic/components/Heading";
import Image from "../webflow_modules/Basic/components/Image";
import List from "../webflow_modules/Basic/components/List";
import ListItem from "../webflow_modules/Basic/components/ListItem";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";
import Section from "../webflow_modules/Layout/components/Section";
import * as _interactions from "../webflow_modules/interactions";
import { TagIcon } from "../uiElements/TagIcon";

const _interactionsData = JSON.parse(
  '{"events":{"e-21729":{"id":"e-21729","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-21730"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"a4d1183e-0a30-73b4-11dc-9a2782f34de8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":800,"direction":null,"effectIn":true},"createdOn":1754711831046}},"actionLists":{"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function MainContentBlock6IconsSectionV2({
  image2 = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d19bbb0edee3fc410f87f4_44b7d11e83c56c5e8d430c3960c681ab_SHR%20Group.svg",
  image4 = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6975a1e8345e31264c966df5_2b5c5eeff72973a039d0df2a477be078_Olive%20AI.svg",
  imageImage1 = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d19bbb0edee3fc410f87dc_059ce2328f6d84875340ed536281bf47_amadeus_circle.png",
  imageImage3 = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6975a1e8345e31264c966dee_70210e47daf990e96cca4b9a4d1bdddb_Duetto%20RMS.svg",
  imageImage5 = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6975a1e8345e31264c966df6_d0b053453d6b2969a93918031caab674_IDeas%20RMS.svg",
  imageImage6 = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6975a1e8345e31264c966df7_4de5b1803feb5ee7b3733ee5b2cc948c_Trip%20Tease.svg",
  imageImage7 = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6975a1e8345e31264c966dec_5e9701efe1ab1f10c59524453e0ca8a9_Lighthouse.svg",
  imageImage8 = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6975a1e8345e31264c966ded_a6c493d99376e2b5fbe2a61655939056_Oracle%20Hospitality.svg",
  imageImage9 = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6975a1e8345e31264c966df3_404337b6b7240964a116bdfeb3671237_Sabre%20Hospitality.svg",
  mainEyebrowText = "Tech Fluency",
  mainHeadlineTag = "h2",
  mainHeadlineText = "Technology Mastery. ",
  mainSubHeadlineTag = "h3",
  mainSubHeadlineText = "We Speak it Fluently.",
  paragraphText = (
    <>
      {
        "We help hotels harness the full potential of their technology. In an industry often tied to conventional approaches, we take a different path—leveraging deep expertise to streamline operations, optimize platforms, and drive results. "
      }
      <br />
      <br />
      {
        "From Opera Cloud and Sabre Hospitality Solutions to the latest PMS and distribution tools, our team doesn’t just use systems—we master them, ensuring your technology works harder for you."
      }
    </>
  ),
  settingsSectionId = "",
  settingsSectionVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {settingsSectionVisibility ? (
        <Section
          className={"component_wrapper-22"}
          grid={{
            type: "section",
          }}
          id={settingsSectionId}
          tag={"section"}
        >
          <Block
            className={"component_container-22 text-color_primary-2"}
            tag={"div"}
          >
            <Section
              className={"component_wrapper-22"}
              grid={{
                type: "section",
              }}
              tag={"section"}
            >
              <Block
                className={"component_padding-22 padding-inline_lg-2"}
                tag={"div"}
              >
                <BlockContainer
                  className={"component_container-22"}
                  grid={{
                    type: "container",
                  }}
                  id={"fixed-root"}
                  tag={"div"}
                >
                  <Block className={"headline_slot"} tag={"div"}>
                    <Block className={"eyebrow-10 text-color-2-2"} tag={"div"}>
                      {"Tech Fluency"}
                    </Block>
                    <Heading className={"headline-base"} tag={"h3"}>
                      {"MASTERS IN HOSPITALITY TECH."}
                    </Heading>
                    <Heading className={"headline-md-8"} tag={"h1"}>
                      {"We Speak it Fluently."}
                    </Heading>
                    <Paragraph className={"paragraph-lg-3"}>
                      {
                        "In a world of clunky systems and cookie-cutter rollouts, we brings clarity, fluency, and just the right amount of obsession to your hotel’s tech stack. We don’t just plug into platforms like Opera Cloud, SynXis, and iDeas — we master them, configure them, and train your team to make the most of them. "
                      }
                      <br />
                    </Paragraph>
                    <Paragraph className={"paragraph-lg-3"}>
                      {
                        "Whether it’s a single-property deployment or a full chain rollout, we ensure everything runs smoother than your check-in queue at 3pm on a Friday."
                      }
                      <br />
                    </Paragraph>
                  </Block>
                  <Block
                    className={"grid_2-col-8 gap-md-3 is-column-1-2"}
                    tag={"div"}
                  >
                    <Block
                      className={"headline-wrapper-3 text-color-blue"}
                      id={
                        "w-node-_9ae906eb-799a-4c01-2d4a-a74445904ea6-45904e93"
                      }
                      tag={"div"}
                    >
                      <Block
                        className={
                          "grid_2-col-8 gap-sm-3 is-col-1-2 is-inverse"
                        }
                        tag={"div"}
                      >
                        <Block
                          className={"column-left"}
                          id={
                            "w-node-_9ae906eb-799a-4c01-2d4a-a74445904ea8-45904e93"
                          }
                          tag={"div"}
                        >
                          <Block tag={"div"}>
                            <Heading
                              className={"headline-xs-5"}
                              id={
                                "w-node-_9ae906eb-799a-4c01-2d4a-a74445904eaa-45904e93"
                              }
                              tag={"h3"}
                            >
                              {"MORE THAN SUPPORT."}
                            </Heading>
                            <Heading
                              className={"headline-xs-5"}
                              id={
                                "w-node-_9ae906eb-799a-4c01-2d4a-a74445904eac-45904e93"
                              }
                              tag={"h3"}
                            >
                              {" A STRATEGIC TECH ALLY."}
                            </Heading>
                            <Paragraph
                              className={"paragraph_variant-2 text-size-rg"}
                            >
                              {
                                "We’re not just another consultant clicking through checklists. We’re yournerdy-but-socially-adept tech crew — the ones who:"
                              }
                            </Paragraph>
                            <List
                              className={"list-bullet-points"}
                              tag={"ul"}
                              unstyled={false}
                            >
                              <ListItem className={"bullet-pont_text-size"}>
                                {
                                  "Know how to make PMS/CRS/CRM tools actually talk to each other."
                                }
                              </ListItem>
                              <ListItem className={"bullet-pont_text-size"}>
                                {
                                  "Translate complex setup into human-friendly language."
                                }
                              </ListItem>
                              <ListItem className={"bullet-pont_text-size"}>
                                {
                                  "Help find for the best tools, for your environment, not just the ones everyone else uses."
                                }
                              </ListItem>
                            </List>
                          </Block>
                        </Block>
                        <Block className={"column-right"} tag={"div"}>
                          <Block tag={"div"}>
                            <Block
                              className={"flex-vertical-4 flex-align-left"}
                              tag={"div"}
                            >
                              <TagIcon
                                iconArrowIcon={false}
                                iconIconVisibility={false}
                                optionsTagColor={"Horizontal"}
                                tagTagSizeVariant={
                                  "6cceecd5-eb0e-4b89-a99e-b6e0958ff334"
                                }
                                tagTagText={"Why It Matters"}
                              />
                              <Paragraph
                                className={
                                  "paragraph_variant-2 text-size-regular-2"
                                }
                              >
                                {
                                  "Most hotels tap into a fraction of their tech’s potential. We turn the other 60% into performance gains.— and start using it like your secret weapon."
                                }
                              </Paragraph>
                            </Block>
                          </Block>
                        </Block>
                      </Block>
                    </Block>
                    <Block
                      className={"partners_logo-wrapper is-gap-1-5"}
                      id={
                        "w-node-_9ae906eb-799a-4c01-2d4a-a74445904ebe-45904e93"
                      }
                      tag={"div"}
                    >
                      <Block
                        className={"partners_icon-wrapper"}
                        id={
                          "w-node-_9ae906eb-799a-4c01-2d4a-a74445904ebf-45904e93"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={"Integration icon"}
                          className={"partner-icon"}
                          height={"auto"}
                          id={
                            "w-node-_9ae906eb-799a-4c01-2d4a-a74445904ec0-45904e93"
                          }
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d19bbb0edee3fc410f87dc_059ce2328f6d84875340ed536281bf47_amadeus_circle.png"
                          }
                          width={"Auto"}
                        />
                      </Block>
                      <Block
                        className={"partners_icon-wrapper"}
                        id={
                          "w-node-_9ae906eb-799a-4c01-2d4a-a74445904ec1-45904e93"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={"Integration icon"}
                          className={"partner-icon"}
                          height={"auto"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d19bbb0edee3fc410f87f4_44b7d11e83c56c5e8d430c3960c681ab_SHR%20Group.svg"
                          }
                          width={"auto"}
                        />
                      </Block>
                      <Block
                        className={"partners_icon-wrapper"}
                        id={
                          "w-node-_9ae906eb-799a-4c01-2d4a-a74445904ec3-45904e93"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={"Integration icon"}
                          className={"partner-icon"}
                          height={"auto"}
                          id={
                            "w-node-_9ae906eb-799a-4c01-2d4a-a74445904ec4-45904e93"
                          }
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6975a1e8345e31264c966dee_70210e47daf990e96cca4b9a4d1bdddb_Duetto%20RMS.svg"
                          }
                          width={"auto"}
                        />
                      </Block>
                      <Block
                        className={"partners_icon-wrapper"}
                        id={
                          "w-node-_9ae906eb-799a-4c01-2d4a-a74445904ec5-45904e93"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={"Integration icon"}
                          className={"partner-icon"}
                          height={"auto"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6975a1e8345e31264c966df5_2b5c5eeff72973a039d0df2a477be078_Olive%20AI.svg"
                          }
                          width={"auto"}
                        />
                      </Block>
                      <Block
                        className={"partners_icon-wrapper"}
                        id={
                          "w-node-_9ae906eb-799a-4c01-2d4a-a74445904ec7-45904e93"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={"Integration icon"}
                          className={"partner-icon"}
                          height={"auto"}
                          id={
                            "w-node-_9ae906eb-799a-4c01-2d4a-a74445904ec8-45904e93"
                          }
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6975a1e8345e31264c966df6_d0b053453d6b2969a93918031caab674_IDeas%20RMS.svg"
                          }
                          width={"auto"}
                        />
                      </Block>
                      <Block
                        className={"partners_icon-wrapper"}
                        id={
                          "w-node-_9ae906eb-799a-4c01-2d4a-a74445904ec9-45904e93"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={"Integration icon"}
                          className={"partner-icon"}
                          height={"auto"}
                          id={
                            "w-node-_9ae906eb-799a-4c01-2d4a-a74445904eca-45904e93"
                          }
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6975a1e8345e31264c966df7_4de5b1803feb5ee7b3733ee5b2cc948c_Trip%20Tease.svg"
                          }
                          width={"auto"}
                        />
                      </Block>
                      <Block
                        className={"partners_icon-wrapper"}
                        id={
                          "w-node-_9ae906eb-799a-4c01-2d4a-a74445904ecb-45904e93"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={"Integration icon"}
                          className={"partner-icon"}
                          height={"auto"}
                          id={
                            "w-node-_9ae906eb-799a-4c01-2d4a-a74445904ecc-45904e93"
                          }
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6975a1e8345e31264c966dec_5e9701efe1ab1f10c59524453e0ca8a9_Lighthouse.svg"
                          }
                          width={"auto"}
                        />
                      </Block>
                      <Block
                        className={"partners_icon-wrapper"}
                        id={
                          "w-node-_9ae906eb-799a-4c01-2d4a-a74445904ecd-45904e93"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={"Integration icon"}
                          className={"partner-icon"}
                          height={"auto"}
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6975a1e8345e31264c966ded_a6c493d99376e2b5fbe2a61655939056_Oracle%20Hospitality.svg"
                          }
                          width={"auto"}
                        />
                      </Block>
                      <Block
                        className={"partners_icon-wrapper"}
                        id={
                          "w-node-_9ae906eb-799a-4c01-2d4a-a74445904ecf-45904e93"
                        }
                        tag={"div"}
                      >
                        <Image
                          alt={"Integration icon"}
                          className={"partner-icon"}
                          height={"auto"}
                          id={
                            "w-node-_9ae906eb-799a-4c01-2d4a-a74445904ed0-45904e93"
                          }
                          loading={"lazy"}
                          src={
                            "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/6975a1e8345e31264c966df3_404337b6b7240964a116bdfeb3671237_Sabre%20Hospitality.svg"
                          }
                          width={"auto"}
                        />
                      </Block>
                    </Block>
                  </Block>
                </BlockContainer>
              </Block>
            </Section>
          </Block>
        </Section>
      ) : null}
    </div>
  );
}
