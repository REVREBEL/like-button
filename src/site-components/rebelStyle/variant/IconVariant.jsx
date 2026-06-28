"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../../devlinkScope";
import Image from "../../webflow_modules/Basic/components/Image";

export function IconVariant({
  icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68fa0f9c2e5c213941af2442_7ffe101a8bec806f54aec9e0844e5a6e_Arrow-currentColor.svg",
  iconAltText = "__wf_reserved_inherit",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Image
        className={"rebel-style--icon-variant"}
        height={"auto"}
        id={"w-node-_90afaf17-cf2c-b376-761b-a77ba051795d-a051795d"}
        loading={"lazy"}
        src={
          "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68d1035f06f481121f0f783d_6893a4440a25599917e86e40258e04cc_arrow-right.svg"
        }
        width={"auto"}
      />
    </div>
  );
}
