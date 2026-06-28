"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "./devlinkScope";
import Block from "./webflow_modules/Basic/components/Block";
import { ArticlesListComponent } from "./articles/ArticlesListComponent";
import { Button } from "./rebelStyle/buttons/Button";
import { NavcardColor } from "./rebelStyle/cards/NavcardColor";
import { NavcardWhite } from "./rebelStyle/cards/NavcardWhite";
import { NavigationBar } from "./rebelStyle/navFooter/NavigationBar";
import { TagIcon } from "./rebelStyle/uiElements/TagIcon";

export function SiteNavigation({}) {
  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block className={"nav_border div-block-800"} tag={"div"}>
        <NavigationBar
          buttonButton={
            <Button
              buttonLink={{
                href: "https://revrebel.webflow.io/contact",
              }}
              buttonSize={"Small"}
              buttonText={"[ Get In Touch ] "}
            />
          }
          menuDropdown1DropdownMenu1Card1={
            <NavcardWhite
              whiteCardLink={{
                href: "https://revrebel.webflow.io/revenue-management",
              }}
              whiteCardTagSlot={
                <TagIcon
                  tagTagBackgroundClickable={"Solid Clickable"}
                  tagTagSize={"Small"}
                  tagTagText={"Maximize Your Topline"}
                />
              }
            />
          }
          menuDropdown1DropdownMenu1Card2={
            <NavcardWhite
              whiteCardHeadlineText={"Brand Activation"}
              whiteCardLink={{
                href: "https://revrebel.webflow.io/hotel-brand-activation-marketing",
              }}
              whiteCardParagraph={
                "Create demand and drive bookings with targeted marketing."
              }
              whiteCardTagSlot={
                <TagIcon
                  tagColor={"Color 2"}
                  tagTagSize={"Small"}
                  tagTagText={"Generate Demand"}
                />
              }
            />
          }
          menuDropdown1DropdownMenu1Card3={
            <NavcardWhite
              whiteCardHeadlineText={"Optimized Distribution"}
              whiteCardLink={{
                href: "https://revrebel.webflow.io/distribution",
              }}
              whiteCardParagraph={
                "Amplify your presence, control your channels, increase conversions."
              }
              whiteCardTagSlot={
                <TagIcon
                  tagColor={"Color 5"}
                  tagTagSize={"Small"}
                  tagTagText={"Connect Strategically"}
                />
              }
            />
          }
          menuDropdown1DropdownMenu1Card4={
            <NavcardWhite
              whiteCardHeadlineText={"Tech Integration"}
              whiteCardLink={{
                href: "https://revrebel.webflow.io/hospitality-tech",
              }}
              whiteCardParagraph={
                "Create demand and drive bookings with targeted marketing."
              }
              whiteCardTagSlot={
                <TagIcon
                  tagColor={"Color 8"}
                  tagTagId={""}
                  tagTagText={"Build Your Engine"}
                />
              }
            />
          }
          menuDropdown2DropdownMenu2Card1={
            <NavcardColor
              cardCardBackgroundTextColor={"BG Primary"}
              iconIcon={
                "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3a9f_726a15c1e835325a1ae274a424187e88_get-quote.svg"
              }
              iconIconColor={"Color 4"}
            />
          }
          menuDropdown2DropdownMenu2Card2={
            <NavcardColor
              cardCardBackgroundTextColor={"BG Color 2"}
              cardCardButtonText={"Explore Trends"}
              cardCardHeadlineText={"Travel Trends"}
              cardCardImage={
                "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb94943cded46d23608a5_c03a47b0e3a13518e259481a39ec9be3_f8c4eb24-5293-46bd-b73f-5950bcef20b0.avif"
              }
              cardCardParagraphText={
                "A collection of trends from the largest travel sites, researchers, and companies."
              }
              iconIcon={
                "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79295_d542d97d71213306b087706fc9f5ef01_plane.svg"
              }
              iconIconColor={"Color 5"}
            />
          }
          menuDropdown2DropdownMenu2Card3={
            <NavcardColor
              cardCardBackgroundTextColor={"BG Color 5"}
              cardCardHeadlineText={"Strategy Toolkits"}
              cardCardImage={
                "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb94943cded46d23608a0_35f9a8f91c072b0c89f6c849cf016af4_revrebel_a-stylish-bartender-wearing-a-dark-canvas-apron-wi__94603.jpeg"
              }
              cardCardParagraphText={
                "Packed with strategies and resources to help increase revenue."
              }
              iconIcon={
                "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68f94877b5b71534ca461015_12ed20033a39e931c05a9bc9a0ea3244_gear.svg"
              }
              iconIconColor={"Color 6"}
            />
          }
          menuDropdown2DropdownMenu2Card4={
            <NavcardColor
              cardCardBackgroundTextColor={"BG Color 8"}
              cardCardButtonText={"Get the Brief"}
              cardCardHeadlineText={"The Client Hub"}
              cardCardImage={
                "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb94943cded46d236089c_e3e49faf91fdbe89bf3b17a7d2f65b34_revrebel_edit_a-medium-shot-captures-a-30yearold-white-man-in-be__83443.jpg"
              }
              cardCardParagraphText={
                "Real-time metrics witha full view of our current engagement or project."
              }
              iconIcon={
                "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68deb8d801f9f71b92d79296_13f6256409a2a7a3236ad3d688e95c99_labtop-with-cursor.svg"
              }
            />
          }
          menuLink1MenuLink={{
            href: "#",
          }}
          menuLink4MenuLinkVisibility={false}
          menuLink5MenuLinkVisibility={false}
          settingsNavigationVisibility={true}
        />
        <ArticlesListComponent />
      </Block>
    </div>
  );
}
