"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FormFieldFirstName(
    {
        as: _Component = _Builtin.FormTextInput,
        formFieldVisibility = true,
        formFieldId = "First-Name",
        formFieldStyleFormFieldColor = "Light"
    }
) {
    const _styleVariantMap = {
        "Light": "",
        "Dark": "w-variant-78074f05-d091-032c-8dd6-fdc2d1fdd6a8"
    };

    const _activeStyleVariant = _styleVariantMap[formFieldStyleFormFieldColor];

    return formFieldVisibility ? <_Component
        className={`rebel-style--form_input rebel-style--is-first-name ${_activeStyleVariant}`}
        id="w-node-fbc2261e-c3d4-1d7e-4922-66431facff10-1facff10"
        name="First-Name"
        maxLength={256}
        data-name="First Name"
        placeholder="First Name"
        disabled={false}
        type="text"
        required={true}
        autoFocus={false}
        autoComplete="given-name"
        wized="first-name"
        user-input="first-name" /> : null;
}