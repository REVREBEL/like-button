"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { ComponentLikeIcon } from "../innerComponents/ComponentLikeIcon";
import { InnerComponentLikesCounter } from "../innerComponents/InnerComponentLikesCounter";
import { InnerComponentViewsCounter } from "../rebelStyle/innerComponents/InnerComponentViewsCounter";
import { VariantsLabelFontSize } from "../rebelStyle/variants/VariantsLabelFontSize";
import { VariantsTextColor } from "../rebelStyle/variants/VariantsTextColor";

export function ViewsLikesCounter({
  componentDataStorageKey = "post_123",
  componentLayoutVariant = "Align Right",
  componentViewsLikesLayoutVariants = "Horizontal",
  likeIconIconSizeVariant = "Regular",
  likeIconInnerIconColorVariants = "Color 7",
  likeIconInnerIconImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/697b6edb647bab90a3f620cd_610b3cb61cb960b5e740df212d21c742_Like%20Inner.png",
  likeIconIsActive = true,
  likeIconLikeIconColorVariant = "Color 7",
  likeIconLikeIconSizeVariant = "Small",
  likeIconLikeInnerIconColorVariant = "Color 7",
  likeIconLikeInnerIconImageAltText = "__wf_reserved_inherit",
  likeIconMainIconAltText = "__wf_reserved_inherit",
  likeIconMainIconColorVariants = "Primary",
  likeIconMainIconImage = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/69bbaf001e6c808db7cc087a_b29fbfdf61255e42d3985da94a4b8d54_heart.svg",
  likesCounterLikesCounterLabelRuntimeProps = {},
  likesCounterLikesCounterLabelText = "Likes",
  likesCounterLikesCounterLabelVisibility = true,
  likesCounterLikesCountId = "This is the default text value",
  likesCounterLikesCountRuntimeProps = {},
  likesCounterLikesCountText = "0",
  responsiveTextVariants = "Regular Label",
  viewsCounterFontColorVariants = "Primary",
  viewsCounterLayoutVariants = "Horizontal",
  viewsCounterViewsCounterLabelSlot = "",
  viewsCounterViewsCounterLabelText = "Views +",
  viewsCounterViewsCountRuntimeProps = {},
  viewsCounterViewsCountSlot = "",
  viewsCounterViewsCountText = (
    <>
      {"0"}
      <br />
    </>
  ),
}) {
  const _styleVariantMap = {
    "Align Left": "w-variant-1146cc21-26c5-7155-695f-0b6a4f01070d",
    "Align Center": "",
    "Align Right": "w-variant-1146cc21-26c5-7155-695f-0b6a4f01070e",
    Variant: "w-variant-1146cc21-26c5-7155-695f-0b6a4f01070f",
  };

  const _activeStyleVariant = _styleVariantMap[componentLayoutVariant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`global-component_base-3 component_views-likes-counter ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`global-component_wrapper-3 ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`global-component_container-3 ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Block
              className={`component_views-likes-counter-layout ${_activeStyleVariant}`}
              tag={"div"}
            >
              <VariantsLabelFontSize
                settingsResponsiveTextVariants={responsiveTextVariants}
                slotResponsiveTextSlotResponsiveText={
                  <>
                    <VariantsTextColor
                      id={
                        "w-node-_59f2fa16-2981-ecfd-153f-17fb6e1b86ee-6e1b86e9"
                      }
                      settingsFontColorVariants={viewsCounterFontColorVariants}
                      slotTextColorSlotFontColor={
                        <InnerComponentViewsCounter
                          likesIconComponentLikeIconSizeVariant={
                            likeIconLikeIconSizeVariant
                          }
                          likesIconLikeIconColorVariant={
                            likeIconLikeIconColorVariant
                          }
                          likesIconLikeInnerIconColorVariant={
                            likeIconLikeInnerIconColorVariant
                          }
                          viewsCounterViewsCounterLabelSlot={
                            viewsCounterViewsCounterLabelSlot
                          }
                          viewsCounterViewsCounterLabelText={
                            viewsCounterViewsCounterLabelText
                          }
                          viewsCounterViewsCountRuntimeProps={
                            viewsCounterViewsCountRuntimeProps
                          }
                          viewsCounterViewsCountSlot={
                            viewsCounterViewsCountSlot
                          }
                          viewsCounterViewsCountText={
                            viewsCounterViewsCountText
                          }
                          viewsLikesDataStorageKey={componentDataStorageKey}
                          viewsLikesLayoutVariants={viewsCounterLayoutVariants}
                        />
                      }
                    />
                    <ComponentLikeIcon
                      iconSizeVariant={likeIconIconSizeVariant}
                      innerIconAltText={likeIconLikeInnerIconImageAltText}
                      innerIconColorVariants={likeIconInnerIconColorVariants}
                      innerIconImage={likeIconInnerIconImage}
                      isActive={likeIconIsActive}
                      mainIconAltText={likeIconMainIconAltText}
                      mainIconColorVariants={likeIconMainIconColorVariants}
                      mainIconImage={likeIconMainIconImage}
                    />
                    <VariantsTextColor
                      id={
                        "w-node-_59f2fa16-2981-ecfd-153f-17fb6e1b86f1-6e1b86e9"
                      }
                      settingsFontColorVariants={viewsCounterFontColorVariants}
                      slotTextColorSlotFontColor={
                        <InnerComponentLikesCounter
                          likesCounterLikesCounterLabelRuntimeProps={
                            likesCounterLikesCounterLabelRuntimeProps
                          }
                          likesCounterLikesCounterLabelText={
                            likesCounterLikesCounterLabelText
                          }
                          likesCounterLikesCounterLabelVisibility={
                            likesCounterLikesCounterLabelVisibility
                          }
                          likesCounterLikesCountId={likesCounterLikesCountId}
                          likesCounterLikesCountRuntimeProps={
                            likesCounterLikesCountRuntimeProps
                          }
                          likesCounterLikesCountSlot={""}
                          likesCounterLikesCountText={
                            likesCounterLikesCountText
                          }
                          viewsLikesDataStorageKey={componentDataStorageKey}
                          viewsLikesLayoutVariants={
                            componentViewsLikesLayoutVariants
                          }
                        />
                      }
                    />
                  </>
                }
              />
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
