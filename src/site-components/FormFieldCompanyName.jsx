"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FormFieldCompanyName(
    {
        as: _Component = _Builtin.FormTextInput,
        formFieldVisibility = true,
        formFieldId = "Company-Name",
        formFieldStyleFormFieldColor = "Light"
    }
) {
    const _styleVariantMap = {
        "Light": "",
        "Dark": "w-variant-5553b84c-550f-ae7c-7fb8-86c9286b423f"
    };

    const _activeStyleVariant = _styleVariantMap[formFieldStyleFormFieldColor];

    return formFieldVisibility ? <_Component
        className={`rebel-style--form_input rebel-style--is-company-name ${_activeStyleVariant}`}
        id="w-node-fc8d110c-1f11-f6e3-3443-cef885f1eb71-85f1eb71"
        name="Company-Name"
        maxLength={256}
        data-name="Company Name"
        placeholder="Hotel or Company Name"
        disabled={false}
        type="text"
        required={true}
        autoFocus={true}
        autoComplete="organization"
        wized="input_hotel_company" /> : null;
}