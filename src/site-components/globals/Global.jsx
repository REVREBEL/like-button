"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import HtmlEmbed from "../webflow_modules/Embed/components/HtmlEmbed";

export function Global({}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <HtmlEmbed
        className={"globalembed"}
        content={""}
        value={
          "%3Cstyle%3E%0Abody%20%7B%0A%20%2F*%20Adjust%20font%20size%20*%2F%0A%20%20%20%20font-size%3A%20100%25%3B%0A%20%20%20%20-webkit-text-size-adjust%3A%20100%25%3B%0A%20%20%20%20%2F*%20Font%20varient%20*%2F%0A%20%20%20%20font-variant-ligatures%3A%20none%3B%0A%20%20%20%20-webkit-font-variant-ligatures%3A%20none%3B%0A%20%20%20%20%2F*%20Smoothing%20*%2F%0A%20%20%20%20text-rendering%3A%20optimizeLegibility%3B%0A%20%20%20%20-moz-osx-font-smoothing%3A%20grayscale%3B%0A%20%20%20%20-webkit-font-smoothing%3A%20subpixel-antialiased%0A%20%20%20%20%2F*%20%20-webkit-font-smoothing%3A%20antialiased%3B%20%20%20*%2F%0A%20%20%20%20font-smoothing%3A%20antialiased%3B%0A%20%20%20%20font-smooth%3A%20always%3B%0A%20%20%20%20-webkit-font-smoothing%3A%20antialiased%3B%0A%20%20%20%20text-shadow%3A%20rgba(0%2C%200%2C%200%2C%20.01)%200%200%201px%3B%0A%20%20%20%20transform%3A%20rotate(-0.0000000001deg)%0A%20%20%20%20%2F*%20%20%20%20text-shadow%3A%200%200%201px%20rgba(0%2C0%2C0%2C0.3)%3B%20%20*%2F%0A%7D%0A%3C%2Fstyle%3E"
        }
      />
    </div>
  );
}
