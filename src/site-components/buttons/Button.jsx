"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Link from "../webflow_modules/Basic/components/Link";
import { listOfElementsToText } from "../webflow_modules/Basic/helpers/listOfElementsToText";

export function Button({
  buttonButtonId = "",

  buttonButtonLink = {
    href: "#",
  },

  buttonButtonText = "[ Button ]",
  buttonStyleButtonColor = "Brand Primary",
  buttonStyleButtonSize = "normal",
  buttonVisible = true,
}) {
  const _styleVariantMap = {
    "Brand Primary": "",
    "Brand Primary Outline": "w-variant-ab56fc48-f1c2-aa63-2fab-a4c4e4f7e795",
    White: "w-variant-ab56fc48-f1c2-aa63-2fab-a4c4e4f7e796",
    "White Outline": "w-variant-ab56fc48-f1c2-aa63-2fab-a4c4e4f7e797",
    "Brand Color 3": "w-variant-ab56fc48-f1c2-aa63-2fab-a4c4e4f7e798",
    "Brand Color 3 Outline": "w-variant-ab56fc48-f1c2-aa63-2fab-a4c4e4f7e799",
    "Brand Color 4": "w-variant-ab56fc48-f1c2-aa63-2fab-a4c4e4f7e79a",
    "Brand Color 4 Outline": "w-variant-ab56fc48-f1c2-aa63-2fab-a4c4e4f7e79b",
    "Brand Color 5": "w-variant-ab56fc48-f1c2-aa63-2fab-a4c4e4f7e79c",
    "Brand Color 5 Outline": "w-variant-ab56fc48-f1c2-aa63-2fab-a4c4e4f7e79d",
    "Brand Color 8": "w-variant-ab56fc48-f1c2-aa63-2fab-a4c4e4f7e79e",
    "Brand Color 8 Outline": "w-variant-ab56fc48-f1c2-aa63-2fab-a4c4e4f7e79f",
    Alert: "w-variant-ab56fc48-f1c2-aa63-2fab-a4c4e4f7e7a0",
    "Alert Outline": "w-variant-ab56fc48-f1c2-aa63-2fab-a4c4e4f7e7a1",
    Disabled: "w-variant-ab56fc48-f1c2-aa63-2fab-a4c4e4f7e7a2",
    "Disabled Outline": "w-variant-ab56fc48-f1c2-aa63-2fab-a4c4e4f7e7a3",
  };

  const _activeStyleVariant = _styleVariantMap[buttonStyleButtonColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {buttonVisible ? (
        <Link
          block={""}
          button={true}
          className={` component-button ${_activeStyleVariant}`}
          data-button-size={listOfElementsToText(buttonStyleButtonSize)}
          id={buttonButtonId}
          options={buttonButtonLink}
        >
          {buttonButtonText}
        </Link>
      ) : null}
    </div>
  );
}
