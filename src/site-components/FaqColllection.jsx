"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import NotSupported from "./webflow_modules/Builtin/components/NotSupported";
import { FaqAccordion } from "./rebelStyle/FaqAccordion";

export function FaqColllection({ borderVariants = "Borders" }) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"text-primary"} tag={"div"}>
        <NotSupported _atom={"Collection List"} />
      </Block>
    </div>
  );
}
