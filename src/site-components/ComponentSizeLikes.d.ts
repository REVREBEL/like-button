import * as React from "react";
import * as Types from "./types";

declare function ComponentSizeLikes(
    props: {
        as?: React.ElementType;
        /** For use when the button has been selected or liked.*/
        likeButtonIsActive?: Types.Visibility.VisibilityConditions;
        likeButtonPositionVariant?: "1" | "1.5x" | "2x" | "2.5x" | "3x";
        likeButtonLabelText?: React.ReactNode;
        labelRuntimeProps?: Types.Devlink.RuntimeProps;
        labelLabelVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element