"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import BlockContainer from "../webflow_modules/Layout/components/BlockContainer";
import Section from "../webflow_modules/Layout/components/Section";

export function ArticlesListComponent({
  buttonButtonColorVariants = "Color Primary",
  buttonButtonSizeVariants = null,
  buttonButtonText = "[ Icon Button ] ",

  buttonLink = {
    href: "#",
  },

  categoryFeatureBlockButtonId = "",
  categoryFeatureBlockButtonVisibility = true,
  categoryFeatureBlockDescriptionOverviewText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  categoryFeatureBlockDescriptionOverviewVisibility = true,
  categoryFeatureBlockHeadlineText = "Heading",
  categoryFeatureBlockHeadlineTextTag = "h3",
  categoryFeatureBlockHeadlineVisibility = true,
  categoryFeatureBlockId = "",
  categoryFeatureBlockRuntimeProps = {},
  categoryFeatureBlockSlot = "",
  categoryFeatureBlockSubHeadlineText = "Sub Headline",
  categoryFeatureBlockSubHeadlineTextTag = "h4",
  categoryFeatureBlockSubHeadlineVisibility = true,
  categoryFeatureBlockTextColor = null,
  categoryFeatureBlockVisibility = true,

  exploreMoreLink = {
    href: "#",
  },

  exploreMoreText = "Explore all blog posts",
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Section className={"component_wrapper-27"} tag={"section"}>
        <BlockContainer
          className={"component_container-27"}
          grid={{
            type: "container",
          }}
          tag={"div"}
        />
      </Section>
    </div>
  );
}
