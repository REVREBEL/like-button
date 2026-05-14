"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FormFieldEmailAddress(
    {
        as: _Component = _Builtin.FormTextInput,
        formFieldVisibility = true,
        formFieldId = "Email-Address",
        formFieldStyleFormFieldColor = "Light"
    }
) {
    const _styleVariantMap = {
        "Light": "",
        "Dark": "w-variant-70b4319b-3789-bce8-d8cf-eed1c1e24ee9"
    };

    const _activeStyleVariant = _styleVariantMap[formFieldStyleFormFieldColor];

    return formFieldVisibility ? <_Component
        className={`rebel-style--form_input rebel-style--is-email-address ${_activeStyleVariant}`}
        name="Email"
        maxLength={256}
        data-name="Email"
        placeholder="Email Address"
        disabled={false}
        type="email"
        required={true}
        autoFocus={false}
        autoComplete="email"
        wized="input_email"
        user-input="email"
        id={formFieldId} /> : null;
}