import * as React from "react";
import * as Types from "./types";

declare function FormFieldWebsite(
    props: {
        as?: React.ElementType;
        formFieldVisibility?: Types.Visibility.VisibilityConditions;
        formId?: Types.Basic.IdTextInput;
        formFieldStyleFormFieldColor?: "Light" | "Dark";
    }
): React.JSX.Element