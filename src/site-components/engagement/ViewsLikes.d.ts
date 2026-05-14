import * as React from "react";
import * as Types from "../webflow_modules/types";

declare function ViewsLikes(props: {
  baseUrl?: string;
  heartColor?:
    | "Primary"
    | "Color 1 - Inverse"
    | "Color 2"
    | "Color 3"
    | "Color 4"
    | "Color 5"
    | "Color 6"
    | "Color 7"
    | "Color 8"
    | "Color 9";
  showIcon?: Types.Visibility.VisibilityConditions;
  showLikesCount?: Types.Visibility.VisibilityConditions;
  showLikesLabel?: Types.Visibility.VisibilityConditions;
  showViewsCount?: Types.Visibility.VisibilityConditions;
  showViewsLabel?: Types.Visibility.VisibilityConditions;
  size?: "1x" | "1.25x" | "1.5x" | "1.75x" | "2x";
  storageKey?: string;
}): React.JSX.Element;
