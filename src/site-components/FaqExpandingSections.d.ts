import * as React from "react";
import * as Types from "./types";

declare function FaqExpandingSections(
    props: {
        as?: React.ElementType;
        settingsSectionId?: Types.Basic.IdTextInput;
        settingsSectionVisibility?: Types.Visibility.VisibilityConditions;
        headlineEyebrowVisibility?: Types.Visibility.VisibilityConditions;
        headlineEyebrowText?: React.ReactNode;
        headlineHeadlineText?: React.ReactNode;
        headlineHeadlineTag?: Types.Basic.HeadingTag;
        headlineSubHeadlineVisibility?: Types.Visibility.VisibilityConditions;
        headlineSubHeadlineText?: React.ReactNode;
        question1QuestionText?: React.ReactNode;
        question2QuestionText?: React.ReactNode;
        question3QuestionText?: React.ReactNode;
        question3AnswerText?: React.ReactNode;
        question4QuestionText?: React.ReactNode;
        question5QuestionText?: React.ReactNode;
        question1AnswerText?: React.ReactNode;
        question2AnswerText?: React.ReactNode;
        question4AnswerText?: React.ReactNode;
        question5AnswerText?: React.ReactNode;
        variant?: "Light" | "Dark";
    }
): React.JSX.Element