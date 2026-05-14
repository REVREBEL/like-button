"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../devlinkScope";
import Block from "../webflow_modules/Basic/components/Block";
import { PageNavInnerComponent } from "../zzComponentsParts/PageNavInnerComponent";

export function PageNav({
  contactLinkButtonLink = {
    href: "#",
  },

  contactLinkButtonSize = "Responsive Size",
  contactLinkButtonText = "Let's Work Together",
  contactLinkButtonVisibility = true,
  contactLinkIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb94943cded46d23608af_9f7495ecacdf316f47f8490a05efa373_asterisk.svg",
  contactLinkIconAltText = "__wf_reserved_inherit",
  contactLinkUnderlineVisibility = true,
  headlineMenuNavHeadline = "explore",
  headlineMenuNavHeadlineTag = "h2",
  m3Submenu1Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79294_726a15c1e835325a1ae274a424187e88_get-quote.svg",
  m3Submenu1IconAltText = "__wf_reserved_inherit",
  m3Submenu1IconVisibility = false,
  m3Submenu1SubmenuHeadline = "Revenue Strategy",
  m3Submenu1SubmenuHeadlineTag = "h3",
  m3Submenu1SubmenuParagraph = "Maximize topline and margin with data-backed strategy",
  m3Submenu1SubmenuTag = "Maximize Your Topline",
  m3Submenu2Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79294_726a15c1e835325a1ae274a424187e88_get-quote.svg",
  m3Submenu2IconAltText = "__wf_reserved_inherit",
  m3Submenu2IconVisibility = false,
  m3Submenu2SubmenuHeadline = "BRAND ACTIVATION",
  m3Submenu2SubmenuHeadlineTag = "h3",
  m3Submenu2SubmenuParagraph = "Create demand and drive bookings with targeted marketing.",
  m3Submenu2SubmenuTag = "Generate Demand",
  m3Submenu3Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79294_726a15c1e835325a1ae274a424187e88_get-quote.svg",
  m3Submenu3IconAltText = "__wf_reserved_inherit",
  m3Submenu3IconVisibility = false,
  m3Submenu3SubmenuHeadline = "Optimized Distribution",
  m3Submenu3SubmenuHeadlineTag = "h3",
  m3Submenu3SubmenuParagraph = "Amplify your presence, control your channels, increase conversions.",
  m3Submenu3SubmenuTag = "Connect Strategically",
  m3Submenu4Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79294_726a15c1e835325a1ae274a424187e88_get-quote.svg",
  m3Submenu4IconAltText = "__wf_reserved_inherit",
  m3Submenu4IconVisibility = false,
  m3Submenu4SubmenuHeadline = "Tech Integration",
  m3Submenu4SubmenuHeadlineTag = "h3",
  m3Submenu4SubmenuParagraph = "Deploy and align the systems that power your hotel.",
  m3Submenu4SubmenuTag = "Build Your Engine",
  m4Submenu1Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79294_726a15c1e835325a1ae274a424187e88_get-quote.svg",
  m4Submenu1IconAltText = "__wf_reserved_inherit",
  m4Submenu1IconVisibility = true,
  m4Submenu1Image = "",
  m4Submenu1ImageAltText = "__wf_reserved_inherit",
  m4Submenu1ImageVisibility = true,
  m4Submenu1SubmenuHeadline = "CTRLShift Blog",
  m4Submenu1SubmenuHeadlineTag = "h3",
  m4Submenu1SubmenuParagraph = "Where we shareour tips and ideas ongeneratingrevenue atyour property",
  m4Submenu1SubmenuTag = "Expore the trends",
  m4Submenu2Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79295_d542d97d71213306b087706fc9f5ef01_plane.svg",
  m4Submenu2IconAltText = "__wf_reserved_inherit",
  m4Submenu2IconVisibility = true,
  m4Submenu2Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb94943cded46d23608a5_c03a47b0e3a13518e259481a39ec9be3_f8c4eb24-5293-46bd-b73f-5950bcef20b0.avif",
  m4Submenu2ImageAltText = "__wf_reserved_inherit",
  m4Submenu2ImageVisibility = true,
  m4Submenu2SubmenuHeadline = "Travel Trends",
  m4Submenu2SubmenuHeadlineTag = "h3",
  m4Submenu2SubmenuParagraph = "A collection of trends from the largest travel sites, researchers, and companies",
  m4Submenu2SubmenuTag = "Explore the trends",
  m4Submenu3Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79297_c9bb3cba00d02a45f7710f7bfd302570_gear.svg",
  m4Submenu3IconAltText = "__wf_reserved_inherit",
  m4Submenu3IconVisibility = true,
  m4Submenu3Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb94943cded46d23608a0_35f9a8f91c072b0c89f6c849cf016af4_revrebel_a-stylish-bartender-wearing-a-dark-canvas-apron-wi__94603.jpeg",
  m4Submenu3ImageAltText = "__wf_reserved_inherit",
  m4Submenu3ImageVisibility = true,
  m4Submenu3SubmenuHeadline = "Revenue Toolkits",
  m4Submenu3SubmenuHeadlineTag = "h3",
  m4Submenu3SubmenuParagraph = "Packed with strategies and resources to help increase revenue.",
  m4Submenu3SubmenuTag = "Expore the trends",
  m4Submenu4Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79296_13f6256409a2a7a3236ad3d688e95c99_labtop-with-cursor.svg",
  m4Submenu4IconAltText = "__wf_reserved_inherit",
  m4Submenu4IconVisibility = true,
  m4Submenu4Image = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb94943cded46d236089c_e3e49faf91fdbe89bf3b17a7d2f65b34_revrebel_edit_a-medium-shot-captures-a-30yearold-white-man-in-be__83443.jpg",
  m4Submenu4ImageAltText = "__wf_reserved_inherit",
  m4Submenu4ImageVisibility = true,
  m4Submenu4SubmenuHeadline = "Client Hub",
  m4Submenu4SubmenuHeadlineTag = "h3",
  m4Submenu4SubmenuParagraph = "Real-time metrics + a full view of our current engagement or project.",
  m4Submenu4SubmenuTag = "Expore the trends",

  menuLink1MenuLink = {
    href: "#",
  },

  menuLink1MenuText = "Home",

  menuLink2MeetTheRebels = {
    href: "#",
  },

  menuLink2MenuText = "Meet the rebels",
  menuLink3MenuLink3Visibility = true,
  menuLink3MenuText = "Solutions",

  menuLink3SubmenuLink1 = {
    href: "#",
  },

  menuLink3SubmenuLink2 = {
    href: "#",
  },

  menuLink3SubmenuLink3 = {
    href: "#",
  },

  menuLink3SubmenuLink4 = {
    href: "#",
  },

  menuLink4MenuLink4Visibility = true,
  menuLink4MenuText = "Resources",

  menuLink4SubmenuLink1 = {
    href: "#",
  },

  menuLink4SubmenuLink2 = {
    href: "#",
  },

  menuLink4SubmenuLink3 = {
    href: "#",
  },

  menuLink4SubmenuLink4 = {
    href: "#",
  },

  menuLink5MenuLink = {
    href: "#",
  },

  menuLink5MenuLink5Visibility = true,
  menuLink5MenuLinkText = "Partners",

  menuLink6MenuLink = {
    href: "#",
  },

  menuLink6MenuLink6Visibility = true,
  menuLink6MenuLinkText = "faq",

  menuLink7MenuLink = {
    href: "#",
  },

  menuLink7MenuLink7Visibility = true,
  menuLink7MenuLinkText = "CLient login",
  settingsIconAltText = "__wf_reserved_inherit",
  settingsMenuIconVisibility = true,
  settingsMenuOpenIcon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb94943cded46d23608af_9f7495ecacdf316f47f8490a05efa373_asterisk.svg",
  settingsMenuText = "Menu",
  settingsMenuTextVisibility = true,
  settingsNavBarId = "",
  settingsNavBarMainText = "MENU",
  settingsNavBarVisibility = true,
}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={"page-nav_wrapper text-align_center_mobile-p"}
        tag={"div"}
      >
        <PageNavInnerComponent
          contactLinkButtonLink={contactLinkButtonLink}
          contactLinkButtonSize={contactLinkButtonSize}
          contactLinkButtonText={contactLinkButtonText}
          contactLinkButtonVisibility={contactLinkButtonVisibility}
          contactLinkIcon={contactLinkIcon}
          contactLinkIconAltText={contactLinkIconAltText}
          contactLinkUnderlineVisibility={contactLinkUnderlineVisibility}
          dropdownMenuLink3MenuLink3Visibility={menuLink3MenuLink3Visibility}
          dropdownMenuLink3MenuText={menuLink3MenuText}
          dropdownMenuLink3SubmenuLink1={menuLink3SubmenuLink1}
          dropdownMenuLink3SubmenuLink2={menuLink3SubmenuLink2}
          dropdownMenuLink3SubmenuLink3={menuLink3SubmenuLink3}
          dropdownMenuLink3SubmenuLink4={menuLink3SubmenuLink4}
          dropdownMenuLink4MenuLink4Visibility={menuLink4MenuLink4Visibility}
          dropdownMenuLink4MenuText={menuLink4MenuText}
          dropdownMenuLink4SubmenuLink1={menuLink4SubmenuLink1}
          dropdownMenuLink4SubmenuLink2={menuLink4SubmenuLink2}
          dropdownMenuLink4SubmenuLink3={menuLink4SubmenuLink3}
          dropdownMenuLink4SubmenuLink4={menuLink4SubmenuLink4}
          headlineMenuNavHeadline={headlineMenuNavHeadline}
          headlineMenuNavHeadlineTag={headlineMenuNavHeadlineTag}
          m3Submenu1Icon={m3Submenu1Icon}
          m3Submenu1IconAltText={m3Submenu1IconAltText}
          m3Submenu1IconVisibility={m3Submenu1IconVisibility}
          m3Submenu1SubmenuHeadline={m3Submenu1SubmenuHeadline}
          m3Submenu1SubmenuHeadlineTag={m3Submenu1SubmenuHeadlineTag}
          m3Submenu1SubmenuParagraph={m3Submenu1SubmenuParagraph}
          m3Submenu1SubmenuTag={m3Submenu1SubmenuTag}
          m3Submenu2Icon={m3Submenu2Icon}
          m3Submenu2IconAltText={m3Submenu2IconAltText}
          m3Submenu2IconVisibility={m3Submenu2IconVisibility}
          m3Submenu2SubmenuHeadline={m3Submenu2SubmenuHeadline}
          m3Submenu2SubmenuHeadlineTag={m3Submenu2SubmenuHeadlineTag}
          m3Submenu2SubmenuParagraph={m3Submenu2SubmenuParagraph}
          m3Submenu2SubmenuTag={m3Submenu2SubmenuTag}
          m3Submenu3Icon={m3Submenu3Icon}
          m3Submenu3IconAltText={m3Submenu3IconAltText}
          m3Submenu3IconVisibility={m3Submenu3IconVisibility}
          m3Submenu3SubmenuHeadline={m3Submenu3SubmenuHeadline}
          m3Submenu3SubmenuHeadlineTag={m3Submenu3SubmenuHeadlineTag}
          m3Submenu3SubmenuParagraph={m3Submenu3SubmenuParagraph}
          m3Submenu3SubmenuTag={m3Submenu3SubmenuTag}
          m3Submenu4Icon={m3Submenu4Icon}
          m3Submenu4IconAltText={m3Submenu4IconAltText}
          m3Submenu4IconVisibility={m3Submenu4IconVisibility}
          m3Submenu4SubmenuHeadline={m3Submenu4SubmenuHeadline}
          m3Submenu4SubmenuHeadlineTag={m3Submenu4SubmenuHeadlineTag}
          m3Submenu4SubmenuParagraph={m3Submenu4SubmenuParagraph}
          m3Submenu4SubmenuTag={m3Submenu4SubmenuTag}
          m4Submenu1Icon={m4Submenu1Icon}
          m4Submenu1IconAltText={m4Submenu1IconAltText}
          m4Submenu1IconVisibility={m4Submenu1IconVisibility}
          m4Submenu1Image={m4Submenu1Image}
          m4Submenu1ImageAltText={m4Submenu1ImageAltText}
          m4Submenu1ImageVisibility={m4Submenu1ImageVisibility}
          m4Submenu1SubmenuHeadline={m4Submenu1SubmenuHeadline}
          m4Submenu1SubmenuHeadlineTag={m4Submenu1SubmenuHeadlineTag}
          m4Submenu1SubmenuParagraph={m4Submenu1SubmenuParagraph}
          m4Submenu1SubmenuTag={m4Submenu1SubmenuTag}
          m4Submenu2Icon={m4Submenu2Icon}
          m4Submenu2IconAltText={m4Submenu2IconAltText}
          m4Submenu2IconVisibility={m4Submenu2IconVisibility}
          m4Submenu2Image={m4Submenu2Image}
          m4Submenu2ImageAltText={m4Submenu2ImageAltText}
          m4Submenu2ImageVisibility={m4Submenu2ImageVisibility}
          m4Submenu2SubmenuHeadline={m4Submenu2SubmenuHeadline}
          m4Submenu2SubmenuHeadlineTag={m4Submenu2SubmenuHeadlineTag}
          m4Submenu2SubmenuParagraph={m4Submenu2SubmenuParagraph}
          m4Submenu2SubmenuTag={m4Submenu2SubmenuTag}
          m4Submenu3Icon={m4Submenu3Icon}
          m4Submenu3IconAltText={m4Submenu3IconAltText}
          m4Submenu3IconVisibility={m4Submenu3IconVisibility}
          m4Submenu3Image={m4Submenu3Image}
          m4Submenu3ImageAltText={m4Submenu3ImageAltText}
          m4Submenu3ImageVisibility={m4Submenu3ImageVisibility}
          m4Submenu3SubmenuHeadline={m4Submenu3SubmenuHeadline}
          m4Submenu3SubmenuHeadlineTag={m4Submenu3SubmenuHeadlineTag}
          m4Submenu3SubmenuParagraph={m4Submenu3SubmenuParagraph}
          m4Submenu3SubmenuTag={m4Submenu3SubmenuTag}
          m4Submenu4Icon={m4Submenu4Icon}
          m4Submenu4IconAltText={m4Submenu4IconAltText}
          m4Submenu4IconVisibility={m4Submenu4IconVisibility}
          m4Submenu4Image={m4Submenu4Image}
          m4Submenu4ImageAltText={m4Submenu4ImageAltText}
          m4Submenu4ImageVisibility={m4Submenu4ImageVisibility}
          m4Submenu4SubmenuHeadline={m4Submenu4SubmenuHeadline}
          m4Submenu4SubmenuHeadlineTag={m4Submenu4SubmenuHeadlineTag}
          m4Submenu4SubmenuParagraph={m4Submenu4SubmenuParagraph}
          m4Submenu4SubmenuTag={m4Submenu4SubmenuTag}
          menuLink1MenuLink={menuLink1MenuLink}
          menuLink1MenuText={menuLink1MenuText}
          menuLink2MenuLink={menuLink2MeetTheRebels}
          menuLink2MenuText={menuLink2MenuText}
          menuLink5MenuLink={menuLink5MenuLink}
          menuLink5MenuLink5Visibility={menuLink5MenuLink5Visibility}
          menuLink5MenuLinkText={menuLink5MenuLinkText}
          menuLink6MenuLink={menuLink6MenuLink}
          menuLink6MenuLink6Visibility={menuLink6MenuLink6Visibility}
          menuLink6MenuLinkText={menuLink6MenuLinkText}
          menuLink7MenuLink={menuLink7MenuLink}
          menuLink7MenuLink7Visibility={menuLink7MenuLink7Visibility}
          menuLink7MenuLinkText={menuLink7MenuLinkText}
          settingsMenuOpenIcon={settingsMenuOpenIcon}
          settingsMenuText={settingsMenuText}
          settingsNavBarId={settingsNavBarId}
          settingsNavBarVisibility={settingsNavBarVisibility}
          triggerMenuIconVisibility={settingsMenuIconVisibility}
          triggerMenuTextVisibility={settingsMenuTextVisibility}
        />
      </Block>
    </div>
  );
}
