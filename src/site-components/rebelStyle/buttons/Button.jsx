"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../../devlinkScope";
import Block from "../../webflow_modules/Basic/components/Block";
import BlockContainer from "../../webflow_modules/Layout/components/BlockContainer";
import Section from "../../webflow_modules/Layout/components/Section";
import * as _interactions from "../../webflow_modules/interactions";
import { ButtonVariant } from "../variant/ButtonVariant";
import { VariantsButtonColors } from "../variants/VariantsButtonColors";

const _interactionsData = JSON.parse(
  '{"events":{"e-51085":{"id":"e-51085","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-22172","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-51086"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"b5462d4c-b48d-d687-7618-bfed4342046e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1758820901395,"origin":["6a08e7cb405c19ccffa3d4b7","e-664"]}},"actionLists":{"a-22172":{"id":"a-22172","origin":["6a08e7cb405c19ccffa3d4b7","a-165"],"title":"Preview Card [HIDE]","actionItemGroups":[{"actionItems":[{"id":"a-22172-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".rebel-style--component_wrapper","selectorGuids":["badf8dfb-cf71-8fdd-afc6-2c7f40c43b10"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1758820974099}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Button({
  buttonColor = "Color Primary",
  buttonId = "",

  buttonLink = {
    href: "#",
  },

  buttonSize = "Base",
  buttonText = "[ Icon Button ] ",
  buttonVisibility = true,
  iconIconAltText = "__wf_reserved_inherit",
  iconIconColorVariants = "Primary",
  iconIconImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/69bbaf001e6c808db7cc0880_dc74d28945fbee49b97bb2bd3097c22e_generic.svg",
  iconIconSizeVariants = "Extra Small",
  iconIconVisibility = false,
}) {
  _interactions.useInteractions(_interactionsData);

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {buttonVisibility ? (
        <Block
          className={"rebel-style--component_headlne-4-subsections"}
          id={buttonId}
          tag={"div"}
        >
          <Section
            className={
              "rebel-style--component_wrapper rebel-style--component_button"
            }
            grid={{
              type: "section",
            }}
            tag={"section"}
          >
            <BlockContainer
              className={
                "rebel-style--component_container rebel-style--component_button-margin"
              }
              grid={{
                type: "container",
              }}
              tag={"div"}
            >
              <VariantsButtonColors
                optionsButtonColorVariants={buttonColor}
                slotButtonColor={
                  <ButtonVariant
                    buttonButtonSizeVariants={buttonSize}
                    buttonButtonText={buttonText}
                    buttonId={buttonId}
                    buttonLink={buttonLink}
                    buttonVisibility={buttonVisibility}
                    iconIconAltText={iconIconAltText}
                    iconIconColorVariants={iconIconColorVariants}
                    iconIconImage={iconIconImage}
                    iconIconSizeVariants={iconIconSizeVariants}
                    iconIconVisibility={iconIconVisibility}
                  />
                }
              />
            </BlockContainer>
          </Section>
        </Block>
      ) : null}
    </div>
  );
}
