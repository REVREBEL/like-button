import * as React from "react";
import * as Types from "./types";

declare function FaqExpandingDropdownHorizontalSection(
    props: {
        as?: React.ElementType;
        headlineEyebrowText?: React.ReactNode;
        headlineHeadlineTag?: Types.Basic.HeadingTag;
        headlineHeadlineText?: React.ReactNode;
        headlineSunHeadlineText?: React.ReactNode;
        question1QuestionText?: React.ReactNode;
        question1AnswerRichText?: Types.Basic.RichTextChildren;
        question2QuestionText?: React.ReactNode;
        question2AnswerRichText?: Types.Basic.RichTextChildren;
        question3QuestionText?: React.ReactNode;
        question3AnswerRichText?: Types.Basic.RichTextChildren;
        question4QuestionText?: React.ReactNode;
        question5QuestionText?: React.ReactNode;
        question4AnswerRichText?: Types.Basic.RichTextChildren;
        question5AnswerRichText?: Types.Basic.RichTextChildren;
        variant?: "Light" | "Dark";
    }
): React.JSX.Element