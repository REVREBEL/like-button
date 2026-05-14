import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ViewsLikesLayoutVariants(props: {
  /** Text when not liked*/
  likesButtonDataLikedText?: React.ReactNode;
  /** Text when liked*/
  likesButtonDataUnlikedText?: React.ReactNode;
  /** For use when the button has been selected or liked.*/
  likesButtonIsActive?: Types.Visibility.VisibilityConditions;
  likesButtonLikesButtonId?: string;
  likesButtonLikesButtonLabelRuntimeProps?: Types.Devlink.RuntimeProps;
  likesButtonLikesButtonLabelText?: React.ReactNode;
  likesButtonLikesButtonRuntimeProps?: Types.Devlink.RuntimeProps;
  likesButtonLikesButtonVisibility?: Types.Visibility.VisibilityConditions;
  likesCounterIconLikesCounterBlueIconOnOff?: Types.Visibility.VisibilityConditions;
  likesCounterIconLikesCounterIconId?: string;
  likesCounterIconLikesCounterIconRuntimeProps?: Types.Devlink.RuntimeProps;
  likesCounterIconLikesCounterRedIconOnOff?: Types.Visibility.VisibilityConditions;
  likesCounterLikesCounterLabelRuntimeProps?: Types.Devlink.RuntimeProps;
  likesCounterLikesCounterLabelSlot?: Types.Devlink.Slot;
  /** Display text regardless of the component state.*/
  likesCounterLikesCounterLabelText?: React.ReactNode;
  likesCounterLikesCounterLabelVisibility?: Types.Visibility.VisibilityConditions;
  likesCounterLikesCounterVisibility?: Types.Visibility.VisibilityConditions;
  likesCounterLikesCountId?: React.ReactNode;
  likesCounterLikesCountRuntimeProps?: Types.Devlink.RuntimeProps;
  likesCounterLikesCountSlot?: Types.Devlink.Slot;
  likesCounterLikesCountText?: React.ReactNode;
  viewsCounterViewsCounterLabelRuntimeProps?: Types.Devlink.RuntimeProps;
  viewsCounterViewsCounterLabelSlot?: Types.Devlink.Slot;
  /** Count Total Views*/
  viewsCounterViewsCounterLabelText?: React.ReactNode;
  viewsCounterViewsCounterVisibility?: Types.Visibility.VisibilityConditions;
  viewsCounterViewsCountId?: string;
  viewsCounterViewsCountRuntimeProps?: Types.Devlink.RuntimeProps;
  viewsCounterViewsCountSlot?: Types.Devlink.Slot;
  viewsCounterViewsCountText?: React.ReactNode;
  /** Unique ID for this item*/
  viewsLikesDataStorageKey?: React.ReactNode;
  viewsLikesLayoutVariants?: "Horizontal" | "Stacked";
}): React.JSX.Element;
