"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";

export function InnerComponentLikesCounter({
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
  likesCounterLikesCounterLabelText = "Likes",
  likesCounterLikesCounterLabelVisibility = true,
  likesCounterLikesCounterVisibility = true,
  likesCounterLikesCountId = "This is the default text value",
  likesCounterLikesCountRuntimeProps = {},
  likesCounterLikesCountSlot = "",
  likesCounterLikesCountText = "0",
  viewsCounterViewsCounterLabelRuntimeProps = {},
  viewsCounterViewsCounterLabelSlot = "",
  viewsCounterViewsCounterLabelText = (
    <>
      {"Views"}
      <br />
    </>
  ),
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
    Stacked: "w-variant-7c0fa7a3-7164-2ad8-c271-9a814f7d59fc",
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
        className={`views-likes-layout-2 ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`views-likes_count-wrapper-2 ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`views-likes_label-2 ${_activeStyleVariant}`}
            data-metric-view={"post_123"}
            id={"This is the default text value"}
            tag={"div"}
          >
            {"0"}
            <br />
          </Block>
          {likesCounterLikesCounterLabelVisibility ? (
            <Block
              className={`views-likes_label-2 ${_activeStyleVariant}`}
              tag={"div"}
              {...likesCounterLikesCounterLabelRuntimeProps}
            >
              {likesCounterLikesCounterLabelText}
            </Block>
          ) : null}
        </Block>
      </Block>
    </div>
  );
}
