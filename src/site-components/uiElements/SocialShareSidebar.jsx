"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Grid from "../webflow_modules/Layout/components/Grid";

export function SocialShareSidebar({
  socialShareBottomLabelText = "subscribe",
  socialShareHashtags = "",
  socialShareTopLabelText = "Share On",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={"social-share_component"}
        data-share-hashtags={socialShareHashtags}
        data-share-root={""}
        tag={"aside"}
      >
        <Block className={"social-share"} tag={"div"}>
          <Grid className={"social-share_grid"} tag={"div"}>
            <Block className={"label-sm-2 text-align_center"} tag={"div"}>
              {socialShareTopLabelText}
            </Block>
            <Block className={"social-share_icon-size"} tag={"div"}>
              <Block
                className={"btn-share icon-solid_email filter_email"}
                data-share={"email"}
                data-utm={"utm_source=email&utm_medium=share&utm_campaign=post"}
                tag={"div"}
              />
            </Block>
            <Block className={"social-share_icon-size"} tag={"div"}>
              <Block
                className={"btn-share icon-solid_linkedin filter_linkedin-2"}
                data-share={"linkedin"}
                data-utm={
                  "utm_source=linkedin&utm_medium=share&utm_campaign=post"
                }
                tag={"div"}
              />
            </Block>
            <Block className={"social-share_icon-size"} tag={"div"}>
              <Block
                className={"btn-share icon-solid_x filter_x-2"}
                data-share={"x"}
                data-utm={"utm_source=x&utm_medium=share&utm_campaign=post"}
                tag={"div"}
              />
            </Block>
            <Block className={"social-share_icon-size"} tag={"div"}>
              <Block
                className={"btn-share icon-solid_telegram filter-telegram-2"}
                data-share={"telegram"}
                data-utm={
                  "utm_source=telegram&utm_medium=share&utm_campaign=post"
                }
                tag={"div"}
              />
            </Block>
            <Block className={"social-share_icon-size"} tag={"div"}>
              <Block
                className={"btn-share icon-solid_facebook filter_facebook"}
                data-share={"facebook"}
                data-utm={
                  "utm_source=facebook&utm_medium=share&utm_campaign=post"
                }
                tag={"div"}
              />
            </Block>
            <Block className={"social-share_icon-size"} tag={"div"}>
              <Block
                className={"btn-share icon-solid_blog-rss filter_blog-rss-2"}
                data-share={"blog-ress"}
                data-utm={
                  "utm_source=blogrss&utm_medium=share&utm_campaign=post"
                }
                tag={"div"}
              />
            </Block>
            <Block className={"label-sm-2 text-align_center"} tag={"div"}>
              {socialShareBottomLabelText}
            </Block>
          </Grid>
        </Block>
      </Block>
    </div>
  );
}
