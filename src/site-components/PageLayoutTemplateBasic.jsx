"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GlobalStyles } from "./GlobalStyles";

export function PageLayoutTemplateBasic(
    {
        as: _Component = _Builtin.Block,
        slot,
        slot,
        slot,
        slot,
        slot,
        slot
    }
) {
    return (
        <_Component className="rebel-style--global_page-wrapper" tag="div"><_Builtin.BlockContainer
                className="rebel-style--global_fixed-root"
                grid={{
                    type: "container"
                }}
                tag="div"
                id="fixed-root"><_Builtin.Block
                    className="rebel-style--page-nav_wrapper rebel-style--fixed-root_child"
                    tag="div"><_Builtin.NotSupported _atom="Slot" /></_Builtin.Block></_Builtin.BlockContainer><GlobalStyles /><_Builtin.BlockContainer
                className="rebel-style--global_container rebel-style--fixed-root_child"
                grid={{
                    type: "container"
                }}
                tag="div"><_Builtin.NotSupported _atom="Slot" /><_Builtin.BlockContainer
                    className="rebel-style--page_container"
                    grid={{
                        type: "container"
                    }}
                    tag="div"><_Builtin.Section
                        className="rebel-style--page_padding"
                        grid={{
                            type: "section"
                        }}
                        tag="section"><_Builtin.Section
                            grid={{
                                type: "section"
                            }}
                            tag="section"><_Builtin.NotSupported _atom="Slot" /><_Builtin.NotSupported _atom="Slot" /><_Builtin.NotSupported _atom="Slot" /></_Builtin.Section></_Builtin.Section></_Builtin.BlockContainer><_Builtin.NotSupported _atom="Slot" /></_Builtin.BlockContainer></_Component>
    );
}