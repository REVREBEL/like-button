import * as React from "react";
import * as Types from "./types";

declare function LabelElement(
    props: {
        as?: React.ElementType;
        variant?: "Color Primary" | "Color Primary Outline" | "Color 1" | "Color 1 Outline" | "Color 2" | "Color 2 Outline" | "Color 3" | "Color 3 Outline" | "Color 4" | "Color 4 Outline" | "Color 5" | "Color 5 Outline" | "Color 6" | "Color 6 Outline" | "Color 7" | "Color 7 Outline" | "Color 8" | "Color 8 Outline" | "Color 9" | "Color 9 Outline" | "Color Light" | "Color Light Outline" | "Color Dark" | "Color Dark Outline";
        labelText?: React.ReactNode;
    }
): React.JSX.Element