"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FormInputLastName(
    {
        as: _Component = _Builtin.FormTextInput,
        formFieldVisible = true,
        formFieldId = "Last-Name",
        formStyleFormFieldColor = "Light"
    }
) {
    const _styleVariantMap = {
        "Light": "",
        "Dark": "w-variant-e574aecc-e57e-c09c-ba0e-a57e2f3805e9"
    };

    const _activeStyleVariant = _styleVariantMap[formStyleFormFieldColor];

    return formFieldVisible ? <_Component
        className={`rebel-style--form_input rebel-style--is-last-name ${_activeStyleVariant}`}
        name="lastName"
        maxLength={256}
        data-name="lastName"
        placeholder="Last Name"
        disabled={false}
        type="text"
        required={true}
        autoFocus={false}
        autoComplete="family-name"
        wized="input_last-name"
        user-input="first-name"
        id={formFieldId} /> : null;
}