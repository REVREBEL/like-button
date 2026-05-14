"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../../devlinkScope";
import Block from "../../webflow_modules/Basic/components/Block";
import { listOfElementsToText } from "../../webflow_modules/Basic/helpers/listOfElementsToText";

export function InnerComponentViewsCounter({
  componentLikeIconLikeInnerIconIsActive = true,
  likesButtonDataLikedText = "Liked",
  likesButtonDataUnlikedText = "Like?",
  likesButtonIsActive = false,
  likesButtonLikesButtonId = "",
  likesButtonLikesButtonLabelRuntimeProps = {},
  likesButtonLikesButtonLabelText = "Like",
  likesButtonLikesButtonRuntimeProps = {},
  likesButtonLikesButtonVisibility = true,
  likesCounterIconLikesCounterBlueIconOnOff = false,
  likesCounterIconLikesCounterIconId = "likes-icon",
  likesCounterIconLikesCounterIconRuntimeProps = {},
  likesCounterIconLikesCounterRedIconOnOff = true,
  likesCounterLikesCounterLabelRuntimeProps = {},
  likesCounterLikesCounterLabelSlot = "",
  likesCounterLikesCounterLabelText = "Likes",
  likesCounterLikesCounterLabelVisibility = true,
  likesCounterLikesCounterVisibility = true,
  likesCounterLikesCountId = "This is the default text value",
  likesCounterLikesCountRuntimeProps = {},
  likesCounterLikesCountSlot = "",
  likesCounterLikesCountText = "0",
  likesIconComponentLikeIconSizeVariant = "Regular",
  likesIconLikeIconColorVariant = "Primary",
  likesIconLikeIconImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/697b6edb647bab90a3f620d2_7147de7aff4529a7d3a38715f91519b1_Liike.png",
  likesIconLikeIconImageAltText = "__wf_reserved_inherit",
  likesIconLikeInnerIconColorVariant = "Color 7",
  likesIconLikeInnerIconImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/697b6edb647bab90a3f620cd_610b3cb61cb960b5e740df212d21c742_Like%20Inner.png",
  likesIconLikeInnerIconImageAltText = "__wf_reserved_inherit",
  viewsCounterViewsCounterLabelRuntimeProps = {},
  viewsCounterViewsCounterLabelSlot = "",
  viewsCounterViewsCounterLabelText = "Views +",
  viewsCounterViewsCounterVisibility = true,
  viewsCounterViewsCountId = "number-views-count",
  viewsCounterViewsCountRuntimeProps = {},
  viewsCounterViewsCountSlot = "",
  viewsCounterViewsCountText = (
    <>
      {"0"}
      <br />
    </>
  ),
  viewsLikesDataStorageKey = "post_123",
  viewsLikesLayoutVariants = "Horizontal",
}) {
  const _styleVariantMap = {
    Horizontal: "",
    Stacked: "w-variant-0f21e3b7-af5e-cd74-3b31-8a6535db1d6c",
  };

  const _activeStyleVariant = _styleVariantMap[viewsLikesLayoutVariants];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`rebel-style--views-likes-layout ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`rebel-style--views-likes_count-wrapper rebel-style--is-views ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`rebel-style--views-likes_label ${_activeStyleVariant}`}
            data-metric-like={listOfElementsToText(viewsLikesDataStorageKey)}
            tag={"div"}
          >
            {viewsCounterViewsCounterLabelSlot ??
              viewsCounterViewsCounterLabelText}
          </Block>
          <Block
            className={`rebel-style--views-likes_label ${_activeStyleVariant}`}
            data-metric-view={listOfElementsToText(viewsLikesDataStorageKey)}
            id={"This is the default text value"}
            tag={"div"}
            {...viewsCounterViewsCountRuntimeProps}
          >
            {viewsCounterViewsCountSlot ?? viewsCounterViewsCountText}
          </Block>
        </Block>
      </Block>
    </div>
  );
}
