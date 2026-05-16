import * as React from "react";
import * as Types from "../../webflow_modules/types";

declare function InnerComponentNavcard(props: {
  cardCardButtonText?: React.ReactNode;
  cardCardHeadlineText?: React.ReactNode;
  cardCardImage?: Types.Asset.Image;
  cardCardImageAltText?: Types.Basic.AltText;
  cardCardParagraphText?: React.ReactNode;
  cardSlotIcon?: React.ReactNode;
}): React.JSX.Element;
