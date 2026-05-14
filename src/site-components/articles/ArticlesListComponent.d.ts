import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ArticlesListComponent(props: {
  buttonButtonColorVariants?:
    | "Base"
    | "Color Primary"
    | "Color Primary Inverse"
    | "Color Primary Outline"
    | "Light"
    | "Light Outline"
    | "Color 1"
    | "Color 1 Outline"
    | "Color 1 Outline Inverse"
    | "Color 2"
    | "Color 2 Outline"
    | "Color 2 Outline Inverse"
    | "Color 3"
    | "Color 3 Outline"
    | "Color 4"
    | "Color 5"
    | "Color 5 Outline"
    | "Color 5 Outline Inverse"
    | "Color 6"
    | "Color 6 Outline"
    | "Color 7"
    | "Color 8"
    | "Color 8 Outline"
    | "Color 8 Inverse"
    | "Color 9"
    | "Color 9 Outline"
    | "Alert"
    | "Alert Outline"
    | "Disabled";
  buttonButtonSizeVariants?: unknown;
  buttonButtonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  categoryFeatureBlockButtonId?: string;
  categoryFeatureBlockButtonVisibility?: Types.Visibility.VisibilityConditions;
  categoryFeatureBlockDescriptionOverviewText?: React.ReactNode;
  categoryFeatureBlockDescriptionOverviewVisibility?: Types.Visibility.VisibilityConditions;
  categoryFeatureBlockHeadlineText?: React.ReactNode;
  categoryFeatureBlockHeadlineTextTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  categoryFeatureBlockHeadlineVisibility?: Types.Visibility.VisibilityConditions;
  categoryFeatureBlockId?: string;
  categoryFeatureBlockRuntimeProps?: Types.Devlink.RuntimeProps;
  categoryFeatureBlockSlot?: Types.Devlink.Slot;
  categoryFeatureBlockSubHeadlineText?: React.ReactNode;
  categoryFeatureBlockSubHeadlineTextTag?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
  categoryFeatureBlockSubHeadlineVisibility?: Types.Visibility.VisibilityConditions;
  categoryFeatureBlockTextColor?: unknown;
  categoryFeatureBlockVisibility?: Types.Visibility.VisibilityConditions;
  exploreMoreLink?: Types.Basic.Link;
  exploreMoreText?: React.ReactNode;
}): React.JSX.Element;
