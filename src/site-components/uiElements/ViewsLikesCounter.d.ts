import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ViewsLikesCounter(props: {
  /** Text when not liked*/
  likesButtonDataLikedText?: React.ReactNode;
  /** Unique ID for this item*/
  likesButtonDataStorageKey?: React.ReactNode;
  /** Text when liked*/
  likesButtonDataUnlikedText?: React.ReactNode;
  /** For use when the button has been selected or liked.*/
  likesButtonIsActive?: Types.Visibility.VisibilityConditions;
  likesButtonLikesButtonColorVariants?:
    | "Light"
    | "Primary"
    | "Color 2"
    | "Color 7";
  likesButtonLikesButtonId?: string;
  likesButtonLikesButtonLabelRuntimeProps?: Types.Devlink.RuntimeProps;
  likesButtonLikesButtonLabelText?: React.ReactNode;
  likesButtonLikesButtonLayoutVariants?: "Horizontal" | "Stacked";
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
  viewsCounterViewsCounterId?: string;
  viewsCounterViewsCounterLabelRuntimeProps?: Types.Devlink.RuntimeProps;
  viewsCounterViewsCounterLabelSlot?: Types.Devlink.Slot;
  /** Count Total Views*/
  viewsCounterViewsCounterLabelText?: React.ReactNode;
  viewsCounterViewsCounterLabelVisibility?: Types.Visibility.VisibilityConditions;
  viewsCounterViewsCounterVisibility?: Types.Visibility.VisibilityConditions;
  viewsCounterViewsCountRuntimeProps?: Types.Devlink.RuntimeProps;
  viewsCounterViewsCountSlot?: Types.Devlink.Slot;
  viewsCounterViewsCountText?: React.ReactNode;
  viewsCounterViewsCountVisibility?: Types.Visibility.VisibilityConditions;
  viewsLikesViewsLikesId?: string;
  viewsLikesViewsLikesVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
