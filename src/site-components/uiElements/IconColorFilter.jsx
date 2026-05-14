"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Image from "../webflow_modules/Basic/components/Image";

export function IconColorFilter({
  icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/69b7f6f4ed8a0a3aa4894812_4bd3cb687cce89ceb1f320fdf1d88e15_sky-mask.svg",
  iconAltText = "__wf_reserved_inherit",
  iconColor = "Primary",
  iconVisibility = true,
}) {
  const _styleVariantMap = {
    Primary: "",
    "Color 1": "w-variant-46edfba6-ed74-d16d-5d23-ad81b55cb2c6",
    "Color 2": "w-variant-46edfba6-ed74-d16d-5d23-ad81b55cb2c7",
    "Color 3": "w-variant-46edfba6-ed74-d16d-5d23-ad81b55cb2c8",
    "Color 4": "w-variant-46edfba6-ed74-d16d-5d23-ad81b55cb2c9",
    "Color 5": "w-variant-46edfba6-ed74-d16d-5d23-ad81b55cb2ca",
    "Color 6": "w-variant-46edfba6-ed74-d16d-5d23-ad81b55cb2cb",
    "Color 7": "w-variant-46edfba6-ed74-d16d-5d23-ad81b55cb2cc",
    "Color 8": "w-variant-46edfba6-ed74-d16d-5d23-ad81b55cb2cd",
    "Color 9": "w-variant-46edfba6-ed74-d16d-5d23-ad81b55cb2ce",
    Light: "w-variant-46edfba6-ed74-d16d-5d23-ad81b55cb2cf",
    Dark: "w-variant-46edfba6-ed74-d16d-5d23-ad81b55cb2d0",
    "Grey 1": "w-variant-46edfba6-ed74-d16d-5d23-ad81b55cb2d1",
    "Grey 2": "w-variant-46edfba6-ed74-d16d-5d23-ad81b55cb2d2",
    "Grey 3": "w-variant-46edfba6-ed74-d16d-5d23-ad81b55cb2d3",
    None: "w-variant-46edfba6-ed74-d16d-5d23-ad81b55cb2d4",
  };

  const _activeStyleVariant = _styleVariantMap[iconColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`variants_icon-filter-color ${_activeStyleVariant}`}
        tag={"div"}
      >
        {iconVisibility ? (
          <Image height={"auto"} loading={"lazy"} src={icon} width={"auto"} />
        ) : null}
      </Block>
    </div>
  );
}
