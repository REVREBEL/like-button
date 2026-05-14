import * as React from "react";
import * as Types from "./types";

declare function ArticlesListComponent(
    props: {
        as?: React.ElementType;
        slot?: Types.Slots.SlotContent;
        categoryFeatureBlockId?: Types.Basic.IdTextInput;
        categoryFeatureBlockVisibility?: Types.Visibility.VisibilityConditions;
        categoryFeatureBlockTextColor?: "Light" | "Dark" | "Color 1" | "Color 2" | "Color 3" | "Color 4" | "Color 5" | "Color 6" | "Color 7" | "Color 8" | "Color 9";
        categoryFeatureBlockRuntimeProps?: Types.Devlink.RuntimeProps;
        categoryFeatureBlockSlot?: Types.Devlink.Slot;
        categoryFeatureBlockHeadlineVisibility?: Types.Visibility.VisibilityConditions;
        categoryFeatureBlockHeadlineTextTag?: Types.Basic.HeadingTag;
        categoryFeatureBlockHeadlineText?: React.ReactNode;
        categoryFeatureBlockSubHeadlineVisibility?: Types.Visibility.VisibilityConditions;
        categoryFeatureBlockSubHeadlineTextTag?: Types.Basic.HeadingTag;
        categoryFeatureBlockSubHeadlineText?: React.ReactNode;
        categoryFeatureBlockDescriptionOverviewVisibility?: Types.Visibility.VisibilityConditions;
        categoryFeatureBlockDescriptionOverviewText?: React.ReactNode;
        categoryFeatureBlockButtonId?: Types.Basic.IdTextInput;
        categoryFeatureBlockButtonVisibility?: Types.Visibility.VisibilityConditions;
        categoryFeatureBlockButtonTypeSize?: "Button Small" | "Button Regular" | "Button Large";
        categoryFeatureBlockButtonColor?: "Primary" | "Primary Inverse" | "Primary Outline" | "Light" | "Light Outline" | "Dark" | "Dark Outline" | "Color 1" | "Color 1 Outline" | "Color 1 Outline Inverse" | "Color 2" | "Color 2 Outline" | "Color 4" | "Color 5" | "Color 5 Outline" | "Color 6" | "Color 6 Outline" | "Color 7" | "Color 8" | "Color 8 Outline" | "Color 8 Outline Inverse" | "Color 9 Outline" | "Alert" | "Alert Outline" | "Disabled" | "Transparent";
        categoryFeatureBlockButtonText?: React.ReactNode;
        categoryFeatureBlockButtonLink?: Types.Basic.Link;
    }
): React.JSX.Element