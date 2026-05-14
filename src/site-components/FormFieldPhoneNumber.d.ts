import * as React from "react";
import * as Types from "./types";

declare function FormFieldPhoneNumber(
    props: {
        as?: React.ElementType;
        formFieldStyleFormFieldColor?: "Light" | "Dark";
        formFieldId?: Types.Basic.IdTextInput;
        formFieldVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element