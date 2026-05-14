"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import { IconColorFilter } from "../rebelStyle/uiElements/IconColorFilter";
import { VariantsIconSize } from "../rebelStyle/variants/VariantsIconSize";

export function InnerHotelMetricStyle1({
  hotelStatName = (
    <>
      {"Urban "}
      <br />
      {"Metros"}
    </>
  ),
  hotelStatNo = "32",
  icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/69b7f6f4ed8a0a3aa4894812_4bd3cb687cce89ceb1f320fdf1d88e15_sky-mask.svg",
  iconIconAltText = "__wf_reserved_inherit",
  iconIconColor = "Color 4",
  iconIconSize = "Medium",
  iconIconVisibility = true,
  variant = "Horizontal Layout",
}) {
  const _styleVariantMap = {
    "Horizontal Layout": "",
    "Vertical Layout": "w-variant-e9adab2b-f055-e71e-140e-4b29131093a9",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`hotel-stat_container ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`hotel-stat_item ${_activeStyleVariant}`}
          id={"w-node-_279c7149-a9e2-ccf1-0e3e-5bfda5db9c77-a5db9c76"}
          tag={"div"}
        >
          <Block
            className={`hotel-stat_grid ${_activeStyleVariant}`}
            id={"w-node-_279c7149-a9e2-ccf1-0e3e-5bfda5db9c78-a5db9c76"}
            tag={"div"}
          >
            <Block
              className={`hotel-stat_icon-wrapper ${_activeStyleVariant}`}
              id={"w-node-_279c7149-a9e2-ccf1-0e3e-5bfda5db9c79-a5db9c76"}
              tag={"div"}
            >
              <Block
                className={`hotel-stat_icon-align ${_activeStyleVariant}`}
                tag={"div"}
              >
                <VariantsIconSize
                  iconSizeVariant={iconIconSize}
                  slotIconSize={
                    <IconColorFilter
                      icon={icon}
                      iconAltText={iconIconAltText}
                      iconColor={iconIconColor}
                      iconVisibility={iconIconVisibility}
                    />
                  }
                />
              </Block>
            </Block>
            <Block
              className={`hotel-stat_count-wrapper ${_activeStyleVariant}`}
              id={"w-node-_279c7149-a9e2-ccf1-0e3e-5bfda5db9c7d-a5db9c76"}
              tag={"div"}
            >
              <Heading
                className={`hotel-stat_count ${_activeStyleVariant}`}
                tag={"h1"}
              >
                {hotelStatNo}
              </Heading>
              <Block
                className={`hotel-stat_count-label ${_activeStyleVariant}`}
                id={"w-node-_279c7149-a9e2-ccf1-0e3e-5bfda5db9c7f-a5db9c76"}
                tag={"div"}
              >
                {"# of properties"}
              </Block>
            </Block>
            <Block
              className={`hotel-stat_name-wrapper ${_activeStyleVariant}`}
              id={"w-node-_279c7149-a9e2-ccf1-0e3e-5bfda5db9c81-a5db9c76"}
              tag={"div"}
            >
              <Block
                className={`hotel-stat_name ${_activeStyleVariant}`}
                tag={"div"}
              >
                {hotelStatName}
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
