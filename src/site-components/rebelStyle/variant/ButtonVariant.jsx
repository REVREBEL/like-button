"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../../devlinkScope";
import Block from "../../webflow_modules/Basic/components/Block";
import Link from "../../webflow_modules/Basic/components/Link";
import { Icon } from "../uiElements/Icon";

export function ButtonVariant({
  buttonButtonSizeVariants = "Base",
  buttonButtonText = "[ Button ]",
  buttonId = "",

  buttonLink = {
    href: "#",
  },

  buttonVisibility = true,
  iconIconAltText = "__wf_reserved_inherit",
  iconIconColorVariants = "Primary",
  iconIconImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/69bbaf001e6c808db7cc0880_dc74d28945fbee49b97bb2bd3097c22e_generic.svg",
  iconIconSizeVariants = "Extra Small",
  iconIconVisibility = true,
}) {
  const _styleVariantMap = {
    Small: "w-variant-fc7b81d6-7dc1-3a0c-2702-fb98bd9ee650",
    Base: "",
    Large: "w-variant-5559da37-8f79-7d20-aee3-28163468b4b9",
  };

  const _activeStyleVariant = _styleVariantMap[buttonButtonSizeVariants];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`rebel-style--button-variant_wrapper ${_activeStyleVariant}`}
        tag={"div"}
      >
        {buttonVisibility ? (
          <Link
            block={""}
            button={true}
            className={`rebel-style--buton-variant ${_activeStyleVariant}`}
            id={buttonId}
            options={buttonLink}
          >
            {buttonButtonText}
          </Link>
        ) : null}
        <Block
          className={`rebel-style--icon_wrapper ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Icon
            icon={iconIconImage}
            iconAltText={iconIconAltText}
            iconColor={iconIconColorVariants}
            iconSizeVariant={iconIconSizeVariants}
            iconVisibility={iconIconVisibility}
          />
        </Block>
      </Block>
    </div>
  );
}
