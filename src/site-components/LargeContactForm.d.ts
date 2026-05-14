import * as React from "react";
import * as Types from "./types";

declare function LargeContactForm(
    props: {
        as?: React.ElementType;
        formStyleFormColor?: "Dark" | "Light";
        settingsFormVisibility?: Types.Visibility.VisibilityConditions;
        settingsFormId?: Types.Basic.IdTextInput;
        contactUsContactUsHeadlineTag?: Types.Basic.HeadingTag;
        contactUsContactUsHeadline?: React.ReactNode;
        contactUsContactUsText?: React.ReactNode;
        contactUsContactUsEmailText?: React.ReactNode;
        emailAddressEmailAddressText?: React.ReactNode;
        emailAddressEmailAddressLink?: Types.Basic.Link;
        emailAddressEmailAddressIcon?: Types.Asset.Image;
        addressAddressText?: React.ReactNode;
        addressAddressIconAltText?: Types.Basic.AltText;
        addressAddressIcon?: Types.Asset.Image;
        phoneNumberPhoneNumberText?: React.ReactNode;
        phoneNumberPhoneNumberLink?: Types.Basic.Link;
        phoneNumberPhoneNumberIcon?: Types.Asset.Image;
        phoneNumberPhoneNumberIconAltText?: Types.Basic.AltText;
        contactUsContactUsEmailLink?: Types.Basic.Link;
        contactUsContactUsText2?: React.ReactNode;
        emailAddressFormText?: React.ReactNode;
        emailAddressEmailAddressLink2?: React.ReactNode;
        buttonButtonText?: Types.Builtin.Text;
        buttonButtonLoadingMessage?: Types.Builtin.Text;
    }
): React.JSX.Element