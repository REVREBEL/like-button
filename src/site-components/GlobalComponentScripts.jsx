"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function GlobalComponentScripts(
    {
        as: _Component = _Builtin.HtmlEmbed
    }
) {
    return (
        <_Component
            className="code-embed-3"
            value="%3C!----%3E%20START%20Social-Buttons%20--%3E%0A%3Cscript%3E%0A%2F**%20Component%20Name%20Social-Buttons%20*%2F%0A(function()%20%7B%0A%20%20function%20handleSocialIconSizing()%20%7B%0A%20%20%20%20console.log(%22socials_icon-size%20script%20running%22)%3B%0A%20%20%20%20%2F%2F%20Check%20if%20the%20script%20has%20already%20been%20initialized%0A%20%20%20%20if%20(window.socialsIconSizeInitialized)%20%7B%0A%20%20%20%20%20%20return%3B%0A%20%20%20%20%7D%0A%20%20%20%20window.socialsIconSizeInitialized%20%3D%20true%3B%0A%20%20%20%20console.log(%22socials_icon-size%20script%20initialized%22)%3B%0A%20%20%20%20const%20validSizes%20%3D%20%5B%221x1%22%2C%20%222x2%22%2C%20%223x3%22%2C%20%224x4%22%5D%3B%0A%20%20%20%20%2F%2F%20Find%20all%20elements%20with%20the%20class%20'socials_icon-size'%0A%20%20%20%20const%20icons%20%3D%20document.querySelectorAll(%22.socials_icon-size%22)%3B%0A%20%20%20%20icons.forEach(icon%20%3D%3E%20%7B%0A%20%20%20%20%20%20const%20size%20%3D%20icon.getAttribute(%22data-icon-size%22)%3B%0A%20%20%20%20%20%20%2F%2F%20If%20the%20size%20is%20not%20valid%2C%20set%20it%20to%20the%20default%20size%20'3x3'%0A%20%20%20%20%20%20if%20(!validSizes.includes(size))%20%7B%0A%20%20%20%20%20%20%20%20icon.setAttribute(%22data-icon-size%22%2C%20%223x3%22)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%20%20%7D%0A%7D)()%3B%0A%3C%2Fscript%3E%0A%3C!----%3E%20END%20Social-Buttons%20--%3E" />
    );
}