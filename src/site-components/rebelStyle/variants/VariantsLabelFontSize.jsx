"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../../devlinkScope";
import Block from "../../webflow_modules/Basic/components/Block";

export function VariantsLabelFontSize({
  settingsResponsiveTextVariants = "Regular Label",
  slotResponsiveTextSlotResponsiveText,
}) {
  const _styleVariantMap = {
    "Medium Label": "w-variant-45e0c150-ea2b-2af4-2474-4676295f03c1",
    "Regular Label": "",
    "Small Label": "w-variant-45e0c150-ea2b-2af4-2474-4676295f03c0",
    "Extra Small Label": "w-variant-45e0c150-ea2b-2af4-2474-4676295f03bf",
  };

  const _activeStyleVariant = _styleVariantMap[settingsResponsiveTextVariants];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`rebel-style--variants_label-text-size ${_activeStyleVariant}`}
        tag={"div"}
      >
        {slotResponsiveTextSlotResponsiveText}
      </Block>
    </div>
  );
}
