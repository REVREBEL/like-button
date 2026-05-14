import * as React from "react";
import * as Types from "./types";

declare function WhiteNavcardFullpage(
    props: {
        as?: React.ElementType;
        whiteCard1Icon?: Types.Asset.Image;
        whiteCard1IconAltText?: Types.Basic.AltText;
        whiteCard1HeadlineTag?: Types.Basic.HeadingTag;
        whiteCard1HeadlineText?: React.ReactNode;
        whiteCard1Paragraph?: React.ReactNode;
        whiteCard1Link?: Types.Basic.Link;
        whiteCard1LinkText?: React.ReactNode;
        whiteCard2Icon?: Types.Asset.Image;
        whiteCard2IconAltText?: Types.Basic.AltText;
        whiteCard2HeadlineTag?: Types.Basic.HeadingTag;
        whiteCard2HeadlineText?: React.ReactNode;
        whiteCard2Paragraph?: React.ReactNode;
        whiteCard2Link?: Types.Basic.Link;
        whiteCard2LinkText?: React.ReactNode;
        whiteCard3Icon?: Types.Asset.Image;
        whiteCard3IconAltText?: Types.Basic.AltText;
        whiteCard3HeadlineText?: React.ReactNode;
        whiteCard3HeadlineTag?: Types.Basic.HeadingTag;
        whiteCard3Paragraph?: React.ReactNode;
        whiteCard3Link?: Types.Basic.Link;
        whiteCard3LinkText?: React.ReactNode;
        whiteCard4Icon?: Types.Asset.Image;
        whiteCard4IconAltText?: Types.Basic.AltText;
        whiteCard4HeadlineText?: React.ReactNode;
        whiteCard4HeadlineTag?: Types.Basic.HeadingTag;
        whiteCard4Paragraph?: React.ReactNode;
        whiteCard4Link?: Types.Basic.Link;
        whiteCard4LinkText?: React.ReactNode;
        optionsWhiteNavCardColor?: "Light" | "Dark";
    }
): React.JSX.Element