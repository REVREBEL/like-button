import * as React from "react";
import * as Types from "./types";

declare function FormFieldCompanyName(
    props: {
        as?: React.ElementType;
        formFieldVisibility?: Types.Visibility.VisibilityConditions;
        formFieldId?: Types.Basic.IdTextInput;
        formFieldStyleFormFieldColor?: "Light" | "Dark";
    }
): React.JSX.Element