import * as React from "react";
import * as Types from "./types";

declare function SolutionsSection(
    props: {
        as?: React.ElementType;
        mainSectionHeadlineText?: React.ReactNode;
        mainSectionSubHeadlineText?: React.ReactNode;
        mainSectionParagraphText?: React.ReactNode;
        item1HeadlineTag?: Types.Basic.HeadingTag;
        item1Headline?: React.ReactNode;
        item1DescriptionText?: React.ReactNode;
        item2HeadlineTag?: Types.Basic.HeadingTag;
        item2Headline?: React.ReactNode;
        item2DescriptionText?: React.ReactNode;
        item3HeadlineTag?: Types.Basic.HeadingTag;
        item3Headline?: React.ReactNode;
        item3DescriptionText?: React.ReactNode;
        item4HeadlineTag?: Types.Basic.HeadingTag;
        item4Headline?: React.ReactNode;
        item4DescriptionText?: React.ReactNode;
        item1Icon?: Types.Asset.Image;
        item2Icon?: Types.Asset.Image;
        item3Icon?: Types.Asset.Image;
        item4Icon?: Types.Asset.Image;
        item4IconAltText?: Types.Basic.AltText;
        item3IconAltText?: Types.Basic.AltText;
        item2IconAltText?: Types.Basic.AltText;
        item1IconAltText?: Types.Basic.AltText;
        variant?: "Light" | "Dark";
    }
): React.JSX.Element