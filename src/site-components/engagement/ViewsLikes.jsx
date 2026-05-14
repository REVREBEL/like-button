"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import NotSupported from "../webflow_modules/Builtin/components/NotSupported";

export function ViewsLikes({}) {
  const _styleVariantMap = {
    "1x": "w-variant-1x",
    "1.25x": "w-variant-1.25x",
    "1.5x": "w-variant-1.5x",
    "1.75x": "w-variant-1.75x",
    "2x": "w-variant-2x",
  };

  const _activeStyleVariant = _styleVariantMap[size];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <NotSupported _atom={"Code Island"} />
    </div>
  );
}
