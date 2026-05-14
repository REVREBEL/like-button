import * as React from "react";
import * as Types from "./types";

declare function MainItem4CardsSection(
    props: {
        as?: React.ElementType;
        sectionStyleSectionColor?: "Light" | "Brand Color Primary Light" | "Brand Color Primary Dark" | "Brand Color 8" | "Brand Color 7";
        settingsSectionId?: Types.Basic.IdTextInput;
        settingsSectionVisibility?: Types.Visibility.VisibilityConditions;
        mainItemEyebrowText?: React.ReactNode;
        mainItemHeadlineText?: React.ReactNode;
        mainItemHeadlineTextTag?: Types.Basic.HeadingTag;
        mainItemSubHeadlineTag?: Types.Basic.HeadingTag;
        mainItemSubHeadline?: React.ReactNode;
        mainItemParagraphText?: React.ReactNode;
        item1ParagraphText?: React.ReactNode;
        item1HeadlineText?: React.ReactNode;
        item1HeadlineTextTag?: Types.Basic.HeadingTag;
        item2HeadlineText?: React.ReactNode;
        item2HeadlineTextTag?: Types.Basic.HeadingTag;
        item3HeadlineText?: React.ReactNode;
        item4HeadlineText?: React.ReactNode;
        item4HeadlineTextTag?: Types.Basic.HeadingTag;
        item1Icon?: Types.Asset.Image;
        item1IconAltText?: Types.Basic.AltText;
        item2Icon?: Types.Asset.Image;
        item2IconAltText?: Types.Basic.AltText;
        item4IconAltText?: Types.Basic.AltText;
        item4Icon?: Types.Asset.Image;
        item3Icon?: Types.Asset.Image;
        item3IconAltText?: Types.Basic.AltText;
        item3IconVisible?: Types.Visibility.VisibilityConditions;
        item1IconVisible?: Types.Visibility.VisibilityConditions;
        item2ParagraphText?: React.ReactNode;
        item4ParagraphText?: React.ReactNode;
        item3ParagraphText?: React.ReactNode;
        item2IconVisible?: Types.Visibility.VisibilityConditions;
        item4IconVisible?: Types.Visibility.VisibilityConditions;
        /** Give the cards is this component a unique group name. The custom code will them equalizes the height of elements that share the same data-match-height group name attribute.*/
        customCodeMatchHeightGroupName?: Types.Builtin.Text;
        mainItemEyebrowVisibility?: Types.Visibility.VisibilityConditions;
        mainItemSubHeadlineVisibility?: Types.Visibility.VisibilityConditions;
        item1ItemVisibility?: Types.Visibility.VisibilityConditions;
        item2ItemVisibility?: Types.Visibility.VisibilityConditions;
        item3ItemVisibility?: Types.Visibility.VisibilityConditions;
        item4ItemVisibility?: Types.Visibility.VisibilityConditions;
    }
): React.JSX.Element