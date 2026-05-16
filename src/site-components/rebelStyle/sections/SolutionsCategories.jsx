"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../../devlinkScope";
import Block from "../../webflow_modules/Basic/components/Block";
import Heading from "../../webflow_modules/Basic/components/Heading";
import Link from "../../webflow_modules/Basic/components/Link";
import * as _interactions from "../../webflow_modules/interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-50930":{"id":"e-50930","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-50931"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":null,"originalId":"d25c4e9f-82e7-5976-4ef3-4bba60870881","appliesTo":"CLASS"},"targets":[{"selector":null,"originalId":"d25c4e9f-82e7-5976-4ef3-4bba60870881","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":30,"scrollOffsetUnit":"%","delay":3,"direction":"BOTTOM","effectIn":true},"createdOn":1754711868359,"origin":["6a08e7cb405c19ccffa3d4b7","e-71"]},"e-50932":{"id":"e-50932","name":"","animationType":"custom","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22180","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-50933"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"},"targets":[{"selector":".rebel-style--paragraph.rebel-style--text-color-component.rebel-style--scroll-in-view_sticky-fade-in","originalId":"ca2a2051-cf6c-b280-f4bb-1d8d503b2ee2","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1756564804114,"origin":["6a08e7cb405c19ccffa3d4b7","e-458"]},"e-50990":{"id":"e-50990","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-50991"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5537494f-8053-56c7-8ad6-d2a5c5060807","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5537494f-8053-56c7-8ad6-d2a5c5060807","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":200,"direction":"LEFT","effectIn":true},"createdOn":1774044200953,"origin":["6a08e7cb405c19ccffa3d4b7","e-1078"]},"e-50992":{"id":"e-50992","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-50993"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5537494f-8053-56c7-8ad6-d2a5c506080d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5537494f-8053-56c7-8ad6-d2a5c506080d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774044214213,"origin":["6a08e7cb405c19ccffa3d4b7","e-1080"]},"e-50994":{"id":"e-50994","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-50995"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5537494f-8053-56c7-8ad6-d2a5c5060814","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5537494f-8053-56c7-8ad6-d2a5c5060814","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774044225013,"origin":["6a08e7cb405c19ccffa3d4b7","e-1082"]},"e-50996":{"id":"e-50996","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-50997"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5537494f-8053-56c7-8ad6-d2a5c506081b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5537494f-8053-56c7-8ad6-d2a5c506081b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774044249207,"origin":["6a08e7cb405c19ccffa3d4b7","e-1086"]},"e-50998":{"id":"e-50998","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-50999"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5537494f-8053-56c7-8ad6-d2a5c5060822","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5537494f-8053-56c7-8ad6-d2a5c5060822","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774044234221,"origin":["6a08e7cb405c19ccffa3d4b7","e-1084"]},"e-51000":{"id":"e-51000","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"FADE_EFFECT","instant":false,"config":{"actionListId":"fadeIn","autoStopEventId":"e-51001"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"5537494f-8053-56c7-8ad6-d2a5c5060829","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"5537494f-8053-56c7-8ad6-d2a5c5060829","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":400,"direction":null,"effectIn":true},"createdOn":1774044260388,"origin":["6a08e7cb405c19ccffa3d4b7","e-1088"]}},"actionLists":{"a-22180":{"id":"a-22180","origin":["6a08e7cb405c19ccffa3d4b7","a-22"],"title":"sticky-headline_fade-in 3","actionItemGroups":[{"actionItems":[{"id":"a-22180-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-22180-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":500,"target":{"useEventTarget":true,"id":"6884e83432ebea93d1bc32d0|e5986f46-72ab-3c7e-a6ff-7be0072d68ee"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1753542422006},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]},"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]},"fadeIn":{"id":"fadeIn","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function SolutionsCategories({
  category1CategoryText = "Revenue Strategy",

  category1Link = {
    href: "#",
  },

  category2CategoryText = "Optimized Distribution",

  category2Link = {
    href: "#",
  },

  category3CategoryText = "Brand Activation",

  category3Link = {
    href: "#",
  },

  category4CategoryText = "Tech Integration",

  category4Link = {
    href: "#",
  },

  category5CategoryText = "New Hotels + Transitions",

  category5Link = {
    href: "#",
  },

  headlineBottomAreaText = "Flexible options include short and long-term engagements, project management, or the full support of RevRebel to power your entire strategy.",
  headlineCategorySubHeadlineText = "Custom-Tailored Solutions",
  headlineHeadlineTag = "h1",
  headlineHeadlineText = "Experience with Every Kind of Hotel",
  headlineSubHeadlineText = "Known for crafting unique strategies that get noticed while optimizing your hotel’s performance in each revenue generation area, driving bottom-line impact and more profit.",
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
        <Block
          className={"rebel-style--component_solutions-categories"}
          id={settingsSectionId}
          tag={"div"}
        >
          <Block
            className={
              "rebel-style--solutions_text-wrapper rebel-style--text-primary"
            }
            tag={"div"}
          >
            <Block
              className={"rebel-style--solutions_text-block"}
              data-w-id={"630afabb-4582-9700-3647-d1671a38e9fe"}
              tag={"div"}
            >
              <Block
                className={
                  "rebel-style--solutions_text text-xl text-weight-semibold text-color-black-900"
                }
                tag={"div"}
              >
                <Heading
                  className={
                    "rebel-style--headline-sm rebel-style--font-weight-bold rebel-style--headline-animated-block"
                  }
                  data-w-id={"5537494f-8053-56c7-8ad6-d2a5c5060807"}
                  tag={headlineHeadlineTag}
                >
                  {headlineHeadlineText}
                </Heading>
                <Block className={"rebel-style--subheadline-sm"} tag={"div"}>
                  {headlineSubHeadlineText}
                </Block>
              </Block>
            </Block>
            <Block className={"rebel-style--content-wrapper"} tag={"div"}>
              <Block
                className={
                  "rebel-style--section-headline-text text-sm text-weight-semibold text-color-black-900"
                }
                tag={"div"}
              >
                <Block
                  className={
                    "rebel-style--headline-xxs rebel-style--margin-bottom_none"
                  }
                  tag={"div"}
                >
                  {headlineCategorySubHeadlineText}
                </Block>
              </Block>
              <Block
                className={"rebel-style--solutions_content-wrapper"}
                tag={"div"}
              >
                <Link
                  block={"inline"}
                  button={false}
                  className={
                    "rebel-style--solutions_card-wrapper rebel-style--is-color-primary"
                  }
                  data-w-id={"5537494f-8053-56c7-8ad6-d2a5c506080d"}
                  options={category1Link}
                >
                  <Block
                    className={"rebel-style--solutions_number-text"}
                    tag={"div"}
                  >
                    <Block className={"rebel-style--label"} tag={"div"}>
                      {"01"}
                    </Block>
                  </Block>
                  <Block
                    className={
                      "rebel-style--line-22px rebel-style--is-color-primary rebel-style--is-inverse"
                    }
                    tag={"div"}
                  />
                  <Block
                    className={
                      "rebel-style--solutions_category-wrapper text-xl-2 text-weight-semibold text-color-black-900"
                    }
                    tag={"div"}
                  >
                    <Block
                      className={"rebel-style--solutions_category"}
                      tag={"div"}
                    >
                      {category1CategoryText}
                    </Block>
                  </Block>
                </Link>
                <Link
                  block={"inline"}
                  button={false}
                  className={
                    "rebel-style--solutions_card-wrapper rebel-style--is-color-5"
                  }
                  data-w-id={"5537494f-8053-56c7-8ad6-d2a5c5060814"}
                  options={category2Link}
                >
                  <Block
                    className={"rebel-style--solutions_number-text"}
                    tag={"div"}
                  >
                    <Block className={"rebel-style--label"} tag={"div"}>
                      {"02"}
                    </Block>
                  </Block>
                  <Block
                    className={
                      "rebel-style--line-22px rebel-style--is-color-5 rebel-style--is-inverse"
                    }
                    tag={"div"}
                  />
                  <Block
                    className={"rebel-style--solutions_category-wrapper"}
                    tag={"div"}
                  >
                    <Block
                      className={"rebel-style--solutions_category"}
                      tag={"div"}
                    >
                      {category2CategoryText}
                    </Block>
                  </Block>
                </Link>
                <Link
                  block={"inline"}
                  button={false}
                  className={
                    "rebel-style--solutions_card-wrapper rebel-style--is-color-2"
                  }
                  data-w-id={"5537494f-8053-56c7-8ad6-d2a5c506081b"}
                  options={category3Link}
                >
                  <Block
                    className={"rebel-style--solutions_number-text"}
                    tag={"div"}
                  >
                    <Block className={"rebel-style--label"} tag={"div"}>
                      {"03"}
                    </Block>
                  </Block>
                  <Block
                    className={
                      "rebel-style--line-22px rebel-style--is-color-2 rebel-style--is-inverse"
                    }
                    tag={"div"}
                  />
                  <Block
                    className={"rebel-style--solutions_category-wrapper"}
                    tag={"div"}
                  >
                    <Block
                      className={"rebel-style--solutions_category"}
                      tag={"div"}
                    >
                      {category3CategoryText}
                    </Block>
                  </Block>
                </Link>
                <Link
                  block={"inline"}
                  button={false}
                  className={
                    "rebel-style--solutions_card-wrapper rebel-style--is-color-8"
                  }
                  data-w-id={"5537494f-8053-56c7-8ad6-d2a5c5060822"}
                  options={category4Link}
                >
                  <Block
                    className={"rebel-style--solutions_number-text"}
                    tag={"div"}
                  >
                    <Block className={"rebel-style--label"} tag={"div"}>
                      {"04"}
                    </Block>
                  </Block>
                  <Block
                    className={
                      "rebel-style--line-22px rebel-style--is-color-8 rebel-style--is-inverse"
                    }
                    tag={"div"}
                  />
                  <Block
                    className={"rebel-style--solutions_category-wrapper"}
                    tag={"div"}
                  >
                    <Block
                      className={"rebel-style--solutions_category"}
                      tag={"div"}
                    >
                      {category4CategoryText}
                    </Block>
                  </Block>
                </Link>
                <Link
                  block={"inline"}
                  button={false}
                  className={
                    "rebel-style--solutions_card-wrapper rebel-style--is-color-7"
                  }
                  data-w-id={"5537494f-8053-56c7-8ad6-d2a5c5060829"}
                  options={category5Link}
                >
                  <Block
                    className={
                      "rebel-style--solutions_number-text text-base text-color-black-900"
                    }
                    tag={"div"}
                  >
                    <Block className={"rebel-style--label"} tag={"div"}>
                      {"05"}
                    </Block>
                  </Block>
                  <Block
                    className={
                      "rebel-style--line-22px rebel-style--is-color-7 rebel-style--is-inverse"
                    }
                    tag={"div"}
                  />
                  <Block
                    className={"rebel-style--solutions_category-wrapper"}
                    tag={"div"}
                  >
                    <Block
                      className={"rebel-style--solutions_category"}
                      tag={"div"}
                    >
                      {category5CategoryText}
                    </Block>
                  </Block>
                </Link>
              </Block>
              <Block className={"rebel-style--paragraph"} tag={"div"}>
                {headlineBottomAreaText}
              </Block>
            </Block>
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
