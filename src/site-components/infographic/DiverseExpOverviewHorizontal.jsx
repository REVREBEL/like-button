"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import Heading from "../webflow_modules/Basic/components/Heading";
import Span from "../webflow_modules/Basic/components/Span";

export function DiverseExpOverviewHorizontal({ variant = "Stacked Layout" }) {
  const _styleVariantMap = {
    "Stacked Layout": "",
    "Vertical Layout": "w-variant-e7e1f4b6-c230-c5c4-63ed-040d575278fc",
    "Horizontal Layout": "w-variant-a0b48b0e-a120-bce2-ab81-d7a1ef7996b2",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`diverse-exp_overview-wrapper text-color_primary-5 is-horizontal ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`diverse-exp_headline-wrapper ${_activeStyleVariant}`}
          id={"w-node-c63d60d2-d03e-9184-7d44-9da4b9278c2a-b9278c29"}
          tag={"div"}
        >
          <Heading
            className={`diverse-exp_headline ${_activeStyleVariant}`}
            tag={"h2"}
          >
            {"Diverse Experience Across All Types of Hotels"}
          </Heading>
        </Block>
        <Block
          className={`grid-col2-2 is-diverse-exp is-horizontal ${_activeStyleVariant}`}
          tag={"div"}
        >
          <Block
            className={`diverse-exp_stats-headline-wrapper ${_activeStyleVariant}`}
            tag={"div"}
          >
            <Heading
              className={`stat-metric_headline ${_activeStyleVariant}`}
              tag={"h1"}
            >
              {"Markets with unique business outliners"}
            </Heading>
          </Block>
          <Block
            className={`diverse-exp-stat-wrapper ${_activeStyleVariant}`}
            id={"w-node-_207573f3-a1ce-7355-fca9-9bd7182050fe-b9278c29"}
            tag={"div"}
          >
            <Block
              className={`diverse-exp-stat is-inverse ${_activeStyleVariant}`}
              id={"w-node-c63d60d2-d03e-9184-7d44-9da4b9278c31-b9278c29"}
              tag={"div"}
            >
              <Block
                className={`diverse-exp_metric-wrapper is-inverse ${_activeStyleVariant}`}
                id={"w-node-c63d60d2-d03e-9184-7d44-9da4b9278c32-b9278c29"}
                tag={"div"}
              >
                <Block
                  className={`stat-metric ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {"50"}
                  <Span className={`is-percent-sign ${_activeStyleVariant}`}>
                    {"%"}
                  </Span>
                </Block>
                <Block tag={"div"}>
                  <Block
                    className={`stat-metric_primary text-size-sm-6 ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {"market driven"}
                    <br />
                  </Block>
                  <Block
                    className={`stat-metric_secondary text-size-xl-3 ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {"wholesale mix"}
                    <br />
                  </Block>
                </Block>
              </Block>
              <Block
                className={`diverse-exp_stat-wrapper ${_activeStyleVariant}`}
                id={"w-node-c63d60d2-d03e-9184-7d44-9da4b9278c3d-b9278c29"}
                tag={"div"}
              >
                <Heading
                  className={`feature-types_stat is-stacked ${_activeStyleVariant}`}
                  tag={"h1"}
                >
                  {"03"}
                </Heading>
                <Block
                  className={`feature-types_label is-horizontal ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {"HOTELS"}
                </Block>
              </Block>
            </Block>
          </Block>
          <Block
            className={`diverse-exp-stat-wrapper ${_activeStyleVariant}`}
            id={"w-node-c63d60d2-d03e-9184-7d44-9da4b9278c43-b9278c29"}
            tag={"div"}
          >
            <Block
              className={`diverse-exp-stat ${_activeStyleVariant}`}
              id={"w-node-c63d60d2-d03e-9184-7d44-9da4b9278c44-b9278c29"}
              tag={"div"}
            >
              <Block
                className={`diverse-exp_stat-wrapper s-stacked ${_activeStyleVariant}`}
                id={"w-node-c63d60d2-d03e-9184-7d44-9da4b9278c45-b9278c29"}
                tag={"div"}
              >
                <Heading
                  className={`feature-types_stat is-stacked ${_activeStyleVariant}`}
                  tag={"h1"}
                >
                  {"10"}
                </Heading>
                <Block
                  className={`feature-types_label is-horizontal ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {"HOTELS"}
                </Block>
              </Block>
              <Block
                className={`diverse-exp_metric-wrapper ${_activeStyleVariant}`}
                id={"w-node-c63d60d2-d03e-9184-7d44-9da4b9278c4a-b9278c29"}
                tag={"div"}
              >
                <Block
                  className={`stat-metric ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {"90"}
                  <Span className={`is-percent-sign ${_activeStyleVariant}`}>
                    {"%"}
                  </Span>
                </Block>
                <Block tag={"div"}>
                  <Block
                    className={`stat-metric_primary is-line-height_1 ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {"Annual"}
                    <br />
                  </Block>
                  <Block
                    className={`stat-metric_secondary ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {"OCCUPANY"}
                    <br />
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
          <Block
            className={`diverse-exp-stat-wrapper ${_activeStyleVariant}`}
            id={"w-node-c63d60d2-d03e-9184-7d44-9da4b9278c55-b9278c29"}
            tag={"div"}
          >
            <Block
              className={`diverse-exp-stat is-inverse ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`diverse-exp_metric-wrapper is-inverse ${_activeStyleVariant}`}
                id={"w-node-c63d60d2-d03e-9184-7d44-9da4b9278c57-b9278c29"}
                tag={"div"}
              >
                <Block
                  className={`stat-metric ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {"60"}
                  <Span className={`is-percent-sign ${_activeStyleVariant}`}>
                    {"%"}
                  </Span>
                </Block>
                <Block tag={"div"}>
                  <Block
                    className={`stat-metric_primary text-size-sm-6 ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {"BUSINESS MIX"}
                    <br />
                  </Block>
                  <Block
                    className={`stat-metric_secondary text-size-sm-6 ${_activeStyleVariant}`}
                    tag={"div"}
                  >
                    {"corporate"}
                    <br />
                  </Block>
                </Block>
              </Block>
              <Block
                className={`diverse-exp_stat-wrapper s-stacked ${_activeStyleVariant}`}
                id={"w-node-c63d60d2-d03e-9184-7d44-9da4b9278c64-b9278c29"}
                tag={"div"}
              >
                <Heading
                  className={`feature-types_stat is-stacked ${_activeStyleVariant}`}
                  tag={"h1"}
                >
                  {"06"}
                </Heading>
                <Block
                  className={`feature-types_label is-horizontal ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {"HOTELS"}
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </div>
  );
}
