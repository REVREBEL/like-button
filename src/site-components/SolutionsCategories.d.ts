import * as React from "react";
import * as Types from "./webflow_modules/types";

declare function SolutionsCategories(props: {
  solutionsCategoriesCategory1CategoryText1?: React.ReactNode;
  solutionsCategoriesCategory1Link?: Types.Basic.Link;
  solutionsCategoriesCategory2CategoryText2?: React.ReactNode;
  solutionsCategoriesCategory2Link?: Types.Basic.Link;
  solutionsCategoriesCategory3CategoryText3?: React.ReactNode;
  solutionsCategoriesCategory3Link?: Types.Basic.Link;
  solutionsCategoriesCategory4CategoryText4?: React.ReactNode;
  solutionsCategoriesCategory4Link?: Types.Basic.Link;
  solutionsCategoriesCategory5CategoryText5?: React.ReactNode;
  solutionsCategoriesCategory5Link?: Types.Basic.Link;
  solutionsCategoriesHeadlineBottomAreaText?: React.ReactNode;
  solutionsCategoriesHeadlineCategorySubHeadlineText?: React.ReactNode;
  solutionsCategoriesHeadlineHeadlineTag?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
  solutionsCategoriesHeadlineHeadlineText?: React.ReactNode;
  solutionsCategoriesHeadlineSubHeadlineText?: React.ReactNode;
  solutionsCategoriesSettingsSectionId?: string;
  solutionsCategoriesSettingsSectionVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
