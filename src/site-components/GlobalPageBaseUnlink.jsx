"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GlobalStyles } from "./GlobalStyles";

export function GlobalPageBaseUnlink(
    {
        as: _Component = _Builtin.BlockContainer
    }
) {
    return (
        <_Component
            className="rebel-style--global_page-wrapper"
            grid={{
                type: "container"
            }}
            tag="div"><_Builtin.BlockContainer
                className="rebel-style--global_fixed-root"
                tag="div"
                grid={{
                    type: "container"
                }}
                id="fixed-root"><_Builtin.Block
                    className="rebel-style--page-nav_wrapper rebel-style--fixed-root_child"
                    tag="div" /></_Builtin.BlockContainer><GlobalStyles /><_Builtin.BlockContainer
                className="rebel-style--global_container"
                tag="div"
                grid={{
                    type: "container"
                }}><_Builtin.Block tag="div" /><_Builtin.BlockContainer
                    className="rebel-style--global_page-padding"
                    tag="div"
                    grid={{
                        type: "container"
                    }}><_Builtin.Section
                        className="rebel-style--global_colors"
                        tag="section"
                        grid={{
                            type: "section"
                        }}><_Builtin.Section
                            className="rebel-style--page_padding rebel-style--padding-md"
                            tag="section"
                            grid={{
                                type: "section"
                            }} /></_Builtin.Section></_Builtin.BlockContainer><_Builtin.Block tag="div" /></_Builtin.BlockContainer></_Component>
    );
}