"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FormFieldWebsite(
    {
        as: _Component = _Builtin.FormTextInput,
        formFieldVisibility = true,
        formId = "Company-Website",
        formFieldStyleFormFieldColor = "Light"
    }
) {
    const _styleVariantMap = {
        "Light": "",
        "Dark": "w-variant-6c5c1f86-3b45-8cd3-1f0d-2dabfad02754"
    };

    const _activeStyleVariant = _styleVariantMap[formFieldStyleFormFieldColor];

    return formFieldVisibility ? <_Component
        className={`rebel-style--form_input rebel-style--is-website ${_activeStyleVariant}`}
        name="Website"
        maxLength={256}
        data-name="Website"
        placeholder="Company Website"
        disabled={false}
        type="text"
        required={true}
        autoFocus={true}
        autoComplete="url"
        wized="input_website"
        user-input="company-website"
        id={formId} /> : null;
}