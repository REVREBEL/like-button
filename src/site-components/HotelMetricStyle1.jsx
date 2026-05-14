"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import { InnerHotelMetricStyle1 } from "./innerComponents/InnerHotelMetricStyle1";
import { VariantsTextColor } from "./rebelStyle/variants/VariantsTextColor";

export function HotelMetricStyle1({
  hotelMetricsLayoutVariant = "Horizontal Layout",
  hotelMetricsText1 = "# of properties",
  hotelMetricsText2 = (
    <>
      {"Urban "}
      <br />
      {"Metros"}
    </>
  ),
  hotelMetricsTitle = "32",
  iconIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/69b7f6f4ed8a0a3aa4894812_4bd3cb687cce89ceb1f320fdf1d88e15_sky-mask.svg",
  iconIconAltText = "__wf_reserved_inherit",
  iconIconColor = "Color 2",
  iconIconSize = "Regular",
  iconIconVisibility = true,
  optionsFontColorVariants = "Dark",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block tag={"div"}>
        <VariantsTextColor
          settingsFontColorVariants={optionsFontColorVariants}
          slotTextColorSlotFontColor={
            <InnerHotelMetricStyle1
              hotelStatName={hotelMetricsText2}
              hotelStatNo={hotelMetricsTitle}
              icon={iconIcon}
              iconIconAltText={iconIconAltText}
              iconIconColor={iconIconColor}
              iconIconSize={iconIconSize}
              iconIconVisibility={iconIconVisibility}
              variant={hotelMetricsLayoutVariant}
            />
          }
        />
      </Block>
    </div>
  );
}
