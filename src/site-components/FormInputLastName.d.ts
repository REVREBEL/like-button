import * as React from "react";
import * as Types from "./types";

declare function FormInputLastName(
    props: {
        as?: React.ElementType;
        formFieldVisible?: Types.Visibility.VisibilityConditions;
        formFieldId?: Types.Basic.IdTextInput;
        formStyleFormFieldColor?: "Light" | "Dark";
    }
): React.JSX.Element