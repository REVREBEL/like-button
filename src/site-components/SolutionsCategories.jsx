"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import { SolutionsCategories as SolutionsCategories2 } from "./rebelStyle/sections/SolutionsCategories";

export function SolutionsCategories({
  solutionsCategoriesCategory1CategoryText1 = "Revenue Strategy",

  solutionsCategoriesCategory1Link = {
    href: "https://revrebel.webflow.io/revenue-management",
  },

  solutionsCategoriesCategory2CategoryText2 = "Distribution",

  solutionsCategoriesCategory2Link = {
    href: "https://revrebel.webflow.io/distribution",
  },

  solutionsCategoriesCategory3CategoryText3 = "Brand Activation",

  solutionsCategoriesCategory3Link = {
    href: "https://revrebel.webflow.io/hotel-brand-activation-marketing",
  },

  solutionsCategoriesCategory4CategoryText4 = "Tech Integration",

  solutionsCategoriesCategory4Link = {
    href: "https://revrebel.webflow.io/hospitality-tech",
  },

  solutionsCategoriesCategory5CategoryText5 = "New Hotels + Transitions",

  solutionsCategoriesCategory5Link = {
    href: "https://revrebel.webflow.io/solutions-overview",
  },

  solutionsCategoriesHeadlineBottomAreaText = "Flexible options include short and long-term engagements, project management, or the full support of RevRebel to power your entire strategy.",
  solutionsCategoriesHeadlineCategorySubHeadlineText = "Custom-Tailored Solutions",
  solutionsCategoriesHeadlineHeadlineTag = "h1",
  solutionsCategoriesHeadlineHeadlineText = "Experience with Every Kind of Hotel",
  solutionsCategoriesHeadlineSubHeadlineText = "Known for crafting unique strategies that get noticed while optimizing your hotel’s performance in each revenue generation area, driving bottom-line impact and more profit.",
  solutionsCategoriesSettingsSectionId = "",
  solutionsCategoriesSettingsSectionVisibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block tag={"div"}>
        <SolutionsCategories2
          category1CategoryText={solutionsCategoriesCategory1CategoryText1}
          category1Link={solutionsCategoriesCategory1Link}
          category2CategoryText={solutionsCategoriesCategory2CategoryText2}
          category2Link={solutionsCategoriesCategory2Link}
          category3CategoryText={solutionsCategoriesCategory3CategoryText3}
          category3Link={solutionsCategoriesCategory3Link}
          category4CategoryText={solutionsCategoriesCategory4CategoryText4}
          category4Link={solutionsCategoriesCategory4Link}
          category5CategoryText={solutionsCategoriesCategory5CategoryText5}
          category5Link={solutionsCategoriesCategory5Link}
          headlineBottomAreaText={solutionsCategoriesHeadlineBottomAreaText}
          headlineCategorySubHeadlineText={
            solutionsCategoriesHeadlineCategorySubHeadlineText
          }
          headlineHeadlineTag={solutionsCategoriesHeadlineHeadlineTag}
          headlineHeadlineText={solutionsCategoriesHeadlineHeadlineText}
          headlineSubHeadlineText={solutionsCategoriesHeadlineSubHeadlineText}
          settingsSectionId={solutionsCategoriesSettingsSectionId}
          settingsSectionVisibility={
            solutionsCategoriesSettingsSectionVisibility
          }
        />
      </Block>
    </div>
  );
}
