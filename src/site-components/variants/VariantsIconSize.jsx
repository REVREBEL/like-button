"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function VariantsIconSize({
  iconSizeVariant = "Regular",
  slotIconSize,
}) {
  const _styleVariantMap = {
    "Extra Small": "w-variant-0ecce393-0caf-3dc8-3e04-18b705f18678",
    Small: "w-variant-0ecce393-0caf-3dc8-3e04-18b705f18679",
    Regular: "",
    Medium: "w-variant-0ecce393-0caf-3dc8-3e04-18b705f1867a",
    Large: "w-variant-0ecce393-0caf-3dc8-3e04-18b705f1867b",
    "Extra Large": "w-variant-0ecce393-0caf-3dc8-3e04-18b705f1867c",
  };

  const _activeStyleVariant = _styleVariantMap[iconSizeVariant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`variants_icon-size ${_activeStyleVariant}`}
        tag={"div"}
      >
        {slotIconSize}
      </Block>
    </div>
  );
}
