"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { GlobalStyles } from "./GlobalStyles";

export function GlobalPageTemplate(
    {
        as: _Component = _Builtin.BlockContainer
    }
) {
    return (
        <_Component
            className="global_page-wrapper"
            tag="div"
            grid={{
                type: "container"
            }}><_Builtin.BlockContainer
                className="global_fixed-root"
                tag="div"
                grid={{
                    type: "container"
                }}
                id="fixed-root"><_Builtin.Block className="page-nav_wrapper fixed-root_child" tag="div" /></_Builtin.BlockContainer><GlobalStyles /><_Builtin.BlockContainer
                className="global_container"
                tag="div"
                grid={{
                    type: "container"
                }}><_Builtin.Block tag="div" /><_Builtin.BlockContainer
                    className="global_page-padding"
                    tag="div"
                    grid={{
                        type: "container"
                    }}><_Builtin.Section
                        className="global_colors"
                        tag="section"
                        grid={{
                            type: "section"
                        }}><_Builtin.Section
                            className="page_padding padding-md"
                            tag="section"
                            grid={{
                                type: "section"
                            }} /></_Builtin.Section></_Builtin.BlockContainer><_Builtin.Block tag="div" /></_Builtin.BlockContainer></_Component>
    );
}