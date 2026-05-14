"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";

export function GlobalComponentStyles({}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <HtmlEmbed content={""} />
    </div>
  );
}
