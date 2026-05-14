"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { ViewsLikesLayoutVariants } from "../variants/ViewsLikesLayoutVariants";

export function ViewsLikesCounter({
  likesButtonDataLikedText = "Liked",
  likesButtonDataStorageKey = "post_123",
  likesButtonDataUnlikedText = "Like?",
  likesButtonIsActive = false,
  likesButtonLikesButtonColorVariants = "Primary",
  likesButtonLikesButtonId = "",
  likesButtonLikesButtonLabelRuntimeProps = {},
  likesButtonLikesButtonLabelText = "Like",
  likesButtonLikesButtonLayoutVariants = "Horizontal",
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
  likesCounterLikesCounterVisibility = false,
  likesCounterLikesCountId = "number-likes-count",
  likesCounterLikesCountRuntimeProps = {},
  likesCounterLikesCountSlot = "",
  likesCounterLikesCountText = "0",
  viewsCounterViewsCounterId = "number-views-count",
  viewsCounterViewsCounterLabelRuntimeProps = {},
  viewsCounterViewsCounterLabelSlot = "",
  viewsCounterViewsCounterLabelText = (
    <>
      {"Views"}
      <br />
    </>
  ),
  viewsCounterViewsCounterLabelVisibility = true,
  viewsCounterViewsCounterVisibility = true,
  viewsCounterViewsCountRuntimeProps = {},
  viewsCounterViewsCountSlot = "",
  viewsCounterViewsCountText = (
    <>
      {"0"}
      <br />
    </>
  ),
  viewsCounterViewsCountVisibility = true,
  viewsLikesViewsLikesId = "",
  viewsLikesViewsLikesVisibility = true,
}) {
  const _styleVariantMap = {
    Light: "w-variant-3aac892e-0dff-d98c-95e1-45dec033c268",
    Primary: "",
    "Color 2": "w-variant-3aac892e-0dff-d98c-95e1-45dec033c269",
    "Color 7": "w-variant-3aac892e-0dff-d98c-95e1-45dec033c26a",
  };

  const _activeStyleVariant =
    _styleVariantMap[likesButtonLikesButtonColorVariants];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      {viewsLikesViewsLikesVisibility ? (
        <Block
          className={`global-component_base ${_activeStyleVariant}`}
          data-action-view={""}
          id={viewsLikesViewsLikesId}
          tag={"div"}
        >
          <Block
            className={`global-component_wrapper ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`global-component_container ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`views-likes_variants_font-color ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={`views-likes_responsive_wrapper ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  <ViewsLikesLayoutVariants
                    likesButtonDataLikedText={likesButtonDataLikedText}
                    likesButtonDataUnlikedText={likesButtonDataUnlikedText}
                    likesButtonIsActive={likesButtonIsActive}
                    likesButtonLikesButtonId={likesButtonLikesButtonId}
                    likesButtonLikesButtonLabelRuntimeProps={
                      likesButtonLikesButtonLabelRuntimeProps
                    }
                    likesButtonLikesButtonLabelText={
                      likesButtonLikesButtonLabelText
                    }
                    likesButtonLikesButtonRuntimeProps={
                      likesButtonLikesButtonRuntimeProps
                    }
                    likesButtonLikesButtonVisibility={
                      likesButtonLikesButtonVisibility
                    }
                    likesCounterIconLikesCounterBlueIconOnOff={
                      likesCounterIconLikesCounterBlueIconOnOff
                    }
                    likesCounterIconLikesCounterIconId={
                      likesCounterIconLikesCounterIconId
                    }
                    likesCounterIconLikesCounterIconRuntimeProps={
                      likesCounterIconLikesCounterIconRuntimeProps
                    }
                    likesCounterIconLikesCounterRedIconOnOff={
                      likesCounterIconLikesCounterRedIconOnOff
                    }
                    likesCounterLikesCounterLabelRuntimeProps={
                      likesCounterLikesCounterLabelRuntimeProps
                    }
                    likesCounterLikesCounterLabelSlot={""}
                    likesCounterLikesCounterLabelText={
                      likesCounterLikesCounterLabelText
                    }
                    likesCounterLikesCounterLabelVisibility={
                      likesCounterLikesCounterLabelVisibility
                    }
                    likesCounterLikesCounterVisibility={
                      likesCounterLikesCounterVisibility
                    }
                    likesCounterLikesCountId={likesCounterLikesCountId}
                    likesCounterLikesCountRuntimeProps={
                      likesCounterLikesCountRuntimeProps
                    }
                    likesCounterLikesCountSlot={""}
                    likesCounterLikesCountText={likesCounterLikesCountText}
                    viewsCounterViewsCounterLabelRuntimeProps={
                      viewsCounterViewsCounterLabelRuntimeProps
                    }
                    viewsCounterViewsCounterLabelSlot={
                      viewsCounterViewsCounterLabelSlot
                    }
                    viewsCounterViewsCounterLabelText={
                      viewsCounterViewsCounterLabelText
                    }
                    viewsCounterViewsCounterVisibility={
                      viewsCounterViewsCounterVisibility
                    }
                    viewsCounterViewsCountId={viewsCounterViewsCounterId}
                    viewsCounterViewsCountRuntimeProps={
                      viewsCounterViewsCountRuntimeProps
                    }
                    viewsCounterViewsCountSlot={viewsCounterViewsCountSlot}
                    viewsCounterViewsCountText={viewsCounterViewsCountText}
                    viewsLikesDataStorageKey={likesButtonDataStorageKey}
                    viewsLikesLayoutVariants={
                      likesButtonLikesButtonLayoutVariants
                    }
                  />
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      ) : null}
    </div>
  );
}
