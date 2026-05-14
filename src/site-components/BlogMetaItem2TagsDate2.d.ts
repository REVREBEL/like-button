import * as React from "react";
import * as Types from "./types";

declare function BlogMetaItem2TagsDate2(
    props: {
        as?: React.ElementType;
        settingsComponentVisibility?: Types.Visibility.VisibilityConditions;
        settingsComponentId?: Types.Basic.IdTextInput;
        category1CategoryVisibility?: Types.Visibility.VisibilityConditions;
        category2CategoryVisibility?: Types.Visibility.VisibilityConditions;
        category2CategoryNameText?: React.ReactNode;
        category1CategoryNameText?: React.ReactNode;
        dateDateVisibility?: Types.Visibility.VisibilityConditions;
        dateOriginalPublishDate?: React.ReactNode;
        category1CategorySlug?: Types.Builtin.Text;
        category1CategoryPrimaryColor?: Types.Builtin.Text;
        category2CategorySlug?: Types.Builtin.Text;
        category2CategoryPrimaryColor?: Types.Builtin.Text;
        category1CategoryInverseColor?: Types.Builtin.Text;
        category2CategoryInverseColor?: Types.Builtin.Text;
        category1Tag?: Types.Basic.TagType;
        category2Tag?: Types.Basic.TagType;
    }
): React.JSX.Element