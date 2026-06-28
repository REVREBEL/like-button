"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";
import Paragraph from "../webflow_modules/Basic/components/Paragraph";

export function FaqAccordion({
  anwserText = "No, it’s designed to be user-friendly for all, with an easy interface and support team to help with any issues.",
  borderVariants = "Base",
  questionText = "Need technical skills to use RiseVerse?",
}) {
  const _styleVariantMap = {
    Base: "",
    "No Borders": "w-variant-ad717698-c3c9-98ba-a06d-8fcf4c4200e5",
    Borders: "w-variant-afdb6480-479c-15cd-81de-b72dffc2efd7",
    Underline: "w-variant-60219bcb-a5c0-4a26-1439-2a88de1e80c9",
  };

  const _activeStyleVariant = _styleVariantMap[borderVariants];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`rebel-style--global-component_container rebel-style--font-weight-semibold ${_activeStyleVariant}`}
        id={"w-node-c03d0cf0-4b0f-5791-d5ca-6ba8357f2008-357f2008"}
        tag={"div"}
      >
        <Block
          className={`rebel-style--faq14_accordion-wrapper ${_activeStyleVariant}`}
          fs-accordion-element={"group"}
          fs-accordion-initial={"none"}
          fs-accordion-single={"true"}
          tag={"div"}
        >
          <Block
            className={`rebel-style--faq14_accordion-item ${_activeStyleVariant}`}
            fs-accordion-element={"accordion"}
            fs-accordion-initial={"none"}
            tag={"div"}
          >
            <Block
              aria-controls={"accordion-1-content-1"}
              aria-expanded={"false"}
              className={`rebel-style--faq14_accordion-header ${_activeStyleVariant}`}
              fs-accordion-element={"trigger"}
              role={"button"}
              tabIndex={"0"}
              tag={"div"}
            >
              <Heading
                className={`rebel-style--headline-xxs rebel-style--is-faq-headline ${_activeStyleVariant}`}
                tag={"h3"}
              >
                {questionText}
              </Heading>
              <HtmlEmbed
                className={`rebel-style--icon-1x1-small ${_activeStyleVariant}`}
                content={""}
                fs-accordion-element={"arrow"}
                value={
                  "%3Csvg%20viewBox%3D%220%200%20100%20100%22%20fill%3D%22currentColor%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M21.984%2050.868l26.055%2036.418c.47.66%201.23%201.04%202.04%201.05%200%200%200%200%200%200%20.81-.01%201.57-.4%202.04-1.06l25.88-36.42c.54-.77.61-1.78.18-2.62%20-.43-.84-1.3-1.37-2.24-1.37H63.74l0-32.709c0-1.39-1.125-2.52-2.52-2.52l-22.55%200c-1.39-.01-2.52%201.12-2.52%202.516v32.705H23.973c-.94%200-1.81.53-2.24%201.36%20-.44.83-.36%201.84.19%202.61Z%22%2F%3E%3C%2Fsvg%3E"
                }
              />
            </Block>
            <Block
              aria-labelledby={"accordion-1-header-1"}
              className={`rebel-style--faq14_accordion-content ${_activeStyleVariant}`}
              fs-accordion-element={"content"}
              tag={"div"}
            >
              <Block
                className={`rebel-style--faq14_accordion-body ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Paragraph
                  className={`rebel-style--text-size-small rebel-style--text-color-secondary ${_activeStyleVariant}`}
                >
                  {anwserText}
                </Paragraph>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
