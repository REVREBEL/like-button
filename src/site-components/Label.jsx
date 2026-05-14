"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { LabelElement } from "./LabelElement";

export function Label(
    {
        as: _Component = _Builtin.Link,
        labelLabelText = "Mavericks4Life",
        labelLabelColor = null,

        labelLabelLink = {
            href: "#"
        },

        labelId,
        labelVisibility = true
    }
) {
    return labelVisibility ? <_Component button={false} id={labelId} block="inline" options={labelLabelLink}><LabelElement variant={labelLabelColor} labelText={labelLabelText} /></_Component> : null;
}