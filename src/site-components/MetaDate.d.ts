import * as React from "react";
import * as Types from "./types";

declare function MetaDate(
    props: {
        as?: React.ElementType;
        settingsVisibility?: Types.Visibility.VisibilityConditions;
        settingsTextColor?: "Light" | "Dark" | "Color 1" | "Color 2" | "Color 3" | "Color 4" | "Color 5" | "Color 6" | "Color 7" | "Color 8" | "Color 9";
        settingsText?: React.ReactNode;
    }
): React.JSX.Element