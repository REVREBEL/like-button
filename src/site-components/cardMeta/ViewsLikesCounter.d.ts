import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ViewsLikesCounter(props: {
  /** Unique ID for this item*/
  componentDataStorageKey?: React.ReactNode;
  componentLayoutVariant?:
    | "Align Left"
    | "Align Center"
    | "Align Right"
    | "Variant";
  componentViewsLikesLayoutVariants?: "Horizontal" | "Stacked";
  likeIconIconSizeVariant?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  /** The inner part of the icon that displays after being liked.*/
  likeIconInnerIconColorVariants?:
    | "Primary"
    | "Color 1"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9"
    | "Light"
    | "Dark"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3"
    | "None";
  likeIconInnerIconImage?: Types.Asset.Image;
  /** For use when the button has been selected or liked.*/
  likeIconIsActive?: Types.Visibility.VisibilityConditions;
  likeIconLikeIconColorVariant?:
    | "Primary"
    | "Color 1"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9"
    | "Light"
    | "Dark"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3"
    | "None";
  likeIconLikeIconSizeVariant?:
    | "Extra Small"
    | "Small"
    | "Regular"
    | "Medium"
    | "Large"
    | "Extra Large";
  likeIconLikeInnerIconColorVariant?:
    | "Primary"
    | "Color 1"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9"
    | "Light"
    | "Dark"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3"
    | "None";
  likeIconLikeInnerIconImageAltText?: Types.Basic.AltText;
  likeIconMainIconAltText?: Types.Basic.AltText;
  /** The main icon color when is normal status (before being liked)*/
  likeIconMainIconColorVariants?:
    | "Primary"
    | "Color 1"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9"
    | "Light"
    | "Dark"
    | "Grey 1"
    | "Grey 2"
    | "Grey 3"
    | "None";
  likeIconMainIconImage?: Types.Asset.Image;
  likesCounterLikesCounterLabelRuntimeProps?: Types.Devlink.RuntimeProps;
  /** Display text regardless of the component state.*/
  likesCounterLikesCounterLabelText?: React.ReactNode;
  likesCounterLikesCounterLabelVisibility?: Types.Visibility.VisibilityConditions;
  likesCounterLikesCountId?: React.ReactNode;
  likesCounterLikesCountRuntimeProps?: Types.Devlink.RuntimeProps;
  /** Displays the number of views/likes for the corresponding ID/Slug*/
  likesCounterLikesCountText?: React.ReactNode;
  responsiveTextVariants?:
    | "Medium Label"
    | "Regular Label"
    | "Small Label"
    | "Extra Small Label";
  viewsCounterFontColorVariants?:
    | "Primary"
    | "Color 1"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9"
    | "Color 1 Inverse"
    | "Color 2 Inverse"
    | "Color 3 Inverse"
    | "Color 4 Inverse"
    | "Color 5 Inverse"
    | "Color 6 Inverse"
    | "Color 7 Inverse"
    | "Color 8 Inverse"
    | "Color 9 Inverse"
    | "Light"
    | "Dark";
  viewsCounterLayoutVariants?: "Horizontal" | "Stacked";
  viewsCounterViewsCounterLabelSlot?: Types.Devlink.Slot;
  /** Count Total Views*/
  viewsCounterViewsCounterLabelText?: React.ReactNode;
  viewsCounterViewsCountRuntimeProps?: Types.Devlink.RuntimeProps;
  viewsCounterViewsCountSlot?: Types.Devlink.Slot;
  /** Displays the number of views/likes for the corresponding ID/Slug*/
  viewsCounterViewsCountText?: React.ReactNode;
}): React.JSX.Element;
