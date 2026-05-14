"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function FormFieldUserMessage(
    {
        as: _Component = _Builtin.FormTextarea,
        formFieldVisibility = true,
        formFieldId = "Message",
        formFieldStyleFormFieldColor = "Light"
    }
) {
    const _styleVariantMap = {
        "Light": "",
        "Dark": "w-variant-1c257cd7-3fbf-d479-537f-1bac545c8d70"
    };

    const _activeStyleVariant = _styleVariantMap[formFieldStyleFormFieldColor];

    return formFieldVisibility ? <_Component
        className={`rebel-style--form_input rebel-style--is-text-area ${_activeStyleVariant}`}
        name="Message"
        maxLength={5000}
        data-name="Message"
        placeholder="Any Additional Information?"
        required={false}
        autoFocus={false}
        id={formFieldId} /> : null;
}