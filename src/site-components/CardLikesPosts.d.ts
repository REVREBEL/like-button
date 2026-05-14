import * as React from "react";
import * as Types from "./types";

declare function CardLikesPosts(
    props: {
        as?: React.ElementType;
        viewsAndLikesId?: Types.Basic.IdTextInput;
        viewsAndLikesViewsAndLikesVisibility?: Types.Visibility.VisibilityConditions;
        viewsAndLikesViewsVisibility?: Types.Visibility.VisibilityConditions;
        viewsAndLikesLikesVisibility?: Types.Visibility.VisibilityConditions;
        /** Number of Likes (Counter Element)*/
        likesLikeCount?: React.ReactNode;
        likesLikesCountRuntimeProps?: Types.Devlink.RuntimeProps;
        likesLikeCountSlot?: Types.Devlink.Slot;
        viewsViewsLabelText?: React.ReactNode;
        /** Number of Likes (Counter Element)*/
        viewsViewsCount?: React.ReactNode;
        viewsViewsCountRuntimeProps?: Types.Devlink.RuntimeProps;
        viewsViewsCountSlot?: Types.Devlink.Slot;
        viewsAndLikesColorVariant?: "Color" | "Blue" | "White/Red" | "Color Small" | "Blue Small" | "White/Red Small";
    }
): React.JSX.Element