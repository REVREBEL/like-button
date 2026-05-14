"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FormFieldPhoneNumber(
    {
        as: _Component = _Builtin.FormTextInput,
        formFieldStyleFormFieldColor = "Light",
        formFieldId = "Phone-Number",
        formFieldVisibility = true
    }
) {
    const _styleVariantMap = {
        "Light": "",
        "Dark": "w-variant-024618c8-e975-3ad6-3205-3105301a1c74"
    };

    const _activeStyleVariant = _styleVariantMap[formFieldStyleFormFieldColor];

    return formFieldVisibility ? <_Component
        className={`rebel-style--form_input rebel-style--is-phone-number ${_activeStyleVariant}`}
        name="tel"
        maxLength={256}
        data-name="tel"
        placeholder="Phone Number"
        disabled={false}
        type="tel"
        required={true}
        autoFocus={false}
        autoComplete="tel-area-code"
        user-input-phone-number="ca,gb,us"
        wized="input_phone"
        id={formFieldId} /> : null;
}