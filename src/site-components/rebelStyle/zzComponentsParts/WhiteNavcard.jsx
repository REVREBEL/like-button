"use client";
import React from "react";
import { DEVLINK_SCOPE_CLASS } from "../../devlinkScope";
import Block from "../../webflow_modules/Basic/components/Block";
import Heading from "../../webflow_modules/Basic/components/Heading";
import HtmlEmbed from "../../webflow_modules/Embed/components/HtmlEmbed";
import Image from "../../webflow_modules/Basic/components/Image";
import Link from "../../webflow_modules/Basic/components/Link";

export function WhiteNavcard({
  optionsWhiteNavCardColor = "Light",
  whiteCard1HeadlineTag = "h3",
  whiteCard1HeadlineText = "Revenue Strategy",
  whiteCard1Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3a9f_726a15c1e835325a1ae274a424187e88_get-quote.svg",
  whiteCard1IconAltText = "__wf_reserved_inherit",

  whiteCard1Link = {
    href: "#",
  },

  whiteCard1LinkText = "Maximize Your Topline",
  whiteCard1Paragraph = "Maximize topline and margin with data-backed strategy",
  whiteCard2HeadlineTag = "h3",
  whiteCard2HeadlineText = "Brand Activation",
  whiteCard2Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3a9f_726a15c1e835325a1ae274a424187e88_get-quote.svg",
  whiteCard2IconAltText = "__wf_reserved_inherit",

  whiteCard2Link = {
    href: "#",
  },

  whiteCard2LinkText = "Generate Demand",
  whiteCard2Paragraph = "Create demand and drive bookings with targeted marketing.",
  whiteCard3HeadlineTag = "h3",
  whiteCard3HeadlineText = "Optimized Distribution",
  whiteCard3Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3a9f_726a15c1e835325a1ae274a424187e88_get-quote.svg",
  whiteCard3IconAltText = "__wf_reserved_inherit",

  whiteCard3Link = {
    href: "#",
  },

  whiteCard3LinkText = "Connect Strategically",
  whiteCard3Paragraph = "Amplify your presence, control your channels, increase conversions.",
  whiteCard4HeadlineTag = "h3",
  whiteCard4HeadlineText = "Tech Integration",
  whiteCard4Icon = "https://cdn.prod.website-files.com/68ce13370afdfa5ff87473be/68db69cbb0e0680b0b3c3a9f_726a15c1e835325a1ae274a424187e88_get-quote.svg",
  whiteCard4IconAltText = "__wf_reserved_inherit",

  whiteCard4Link = {
    href: "#",
  },

  whiteCard4LinkText = "Build Your Engine",
  whiteCard4Paragraph = "Deploy and align the systems that power your hotel.",
}) {
  const _styleVariantMap = {
    Light: "",
    Dark: "w-variant-234cddc7-1b9c-22c8-b54b-4cc870413746",
  };

  const _activeStyleVariant = _styleVariantMap[optionsWhiteNavCardColor];

  return (
    <div
      className={DEVLINK_SCOPE_CLASS}
      style={{
        display: "contents",
      }}
    >
      <Block
        className={`rebel-style--navcard_dropdown-container ${_activeStyleVariant}`}
        tag={"div"}
      >
        <Block
          className={`rebel-style--navcard-wrapper ${_activeStyleVariant}`}
          id={"w-node-bed3c81c-abaa-be13-387f-ac35124703c3-124703c2"}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={`rebel-style--white-navcard ${_activeStyleVariant}`}
            options={whiteCard1Link}
          >
            <Block
              className={`rebel-style--white-navcard_top-content ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`rebel-style--navcard_headline-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Heading
                  className={`rebel-style--navcard_headline rebel-style--dropdown-1_max-width ${_activeStyleVariant}`}
                  tag={whiteCard1HeadlineTag}
                >
                  {whiteCard1HeadlineText}
                </Heading>
              </Block>
            </Block>
            <Block
              className={`rebel-style--white-navcard_bottom-content ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`rebel-style--navcard_paragraph ${_activeStyleVariant}`}
                tag={"div"}
              >
                {whiteCard1Paragraph}
              </Block>
              <Block
                className={`rebel-style--navcard_label-link ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={` rebel-style--navcard_label-text ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {whiteCard1LinkText}
                </Block>
                <HtmlEmbed
                  className={`rebel-style--code-embed_arrow ${_activeStyleVariant}`}
                  content={""}
                  value={
                    "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20id%3D%22arrow%22%20data-name%3D%22arrow%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22currentColor%22%20width%3D%2215px%22%20height%3D%2215px%22%20viewBox%3D%220%200%20400%20400%22%3E%0A%20%20%3Cpath%20d%3D%22M388.84%2C229.402l-.299-.758c-9.093-22.005-18.909-45.589-29.051-68.917l-.572-1.365c-1.83-4.389-3.903-9.363-7.125-12.595l-.207-.191c-27.72-23.371-83.048-69.988-121.532-102.411l-35.8-30.164c-.083-.07-.162-.146-.237-.227-5.307-5.702-12.392-7.635-18.151-4.918-5.403%2C2.549-8.721%2C8.562-9.103%2C16.495l-.005.195c-.031%2C9.405-.025%2C23.267-.019%2C35.661.004%2C7.617.007%2C14.679.001%2C19.807%2C0%2C.014-.002.028-.002.041-.108%2C1.963-1.44%2C3.51-3.104%2C3.513-14.817.026-54.83.018-88.026.011-25.113-.006-46.534-.011-50.841.002-4.127.096-9.723%2C2.585-13.057%2C9.285l-.094.202c-2.482%2C5.786-2.266%2C11.365-2.059%2C16.762.103%2C2.662.209%2C5.413.006%2C8.278l-.011.279c-.026%2C4.038-.066%2C8.607-.108%2C13.529-.494%2C57.932-.277%2C90.536%2C2.304%2C96.97%2C5.828%2C13.954%2C11.956%2C28.472%2C17.882%2C42.513%2C4.298%2C10.182%2C8.58%2C20.327%2C12.758%2C30.281.078.185.138.38.186.579%2C3.755%2C15.514%2C28.739%2C15.275%2C57.596%2C15.006%2C4.86-.046%2C9.886-.093%2C14.88-.062%2C6.848-.083%2C14.996-.449%2C22.874-.805%2C12.139-.545%2C24.68-1.111%2C33.106-.685.739.037%2C1.443.37%2C1.976.975%2C1.855%2C2.105%2C3.722%2C7.098%2C5.048%2C10.643.965%2C2.582%2C1.877%2C5.02%2C2.825%2C6.848%2C1.465%2C3.023%2C3.33%2C8.068%2C5.49%2C13.909%2C7.504%2C20.295%2C16.737%2C45.27%2C28.872%2C45.267.728%2C0%2C1.468-.09%2C2.217-.276l.282-.07.266-.13c8.997-4.39%2C58.627-46.791%2C117.7-97.582%2C24.118-20.737%2C44.947-38.647%2C49.055-41.628l.179-.139c5.753-4.849%2C7.621-16.516%2C3.898-24.129ZM32.245%2C212.775l-.004-93.684c0-2.036%2C1.396-3.687%2C3.117-3.687l150.764.005c1.722%2C0%2C3.117-1.65%2C3.117-3.686v-58.332c0-2.995%2C2.86-4.74%2C4.924-3.005l133.401%2C112.137c1.745%2C1.467%2C1.749%2C4.53.008%2C6.003l-133.405%2C112.864c-2.063%2C1.745-4.931.002-4.931-2.998v-58.243c0-2.036-1.396-3.686-3.117-3.686H35.362c-1.722%2C0-3.117-1.65-3.117-3.686Z%22%2F%3E%0A%3C%2Fsvg%3E"
                  }
                />
              </Block>
            </Block>
          </Link>
        </Block>
        <Block
          className={`rebel-style--navcard-wrapper ${_activeStyleVariant}`}
          id={"w-node-bed3c81c-abaa-be13-387f-ac35124703cf-124703c2"}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={`rebel-style--white-navcard ${_activeStyleVariant}`}
            options={whiteCard2Link}
          >
            <Block
              className={`rebel-style--white-navcard_top-content ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`rebel-style--navcard_headline-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Heading
                  className={`rebel-style--navcard_headline rebel-style--dropdown-1_max-width ${_activeStyleVariant}`}
                  tag={whiteCard2HeadlineTag}
                >
                  {whiteCard2HeadlineText}
                </Heading>
              </Block>
            </Block>
            <Block
              className={`rebel-style--white-navcard_bottom-content rebel-style--flex-vertical ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`rebel-style--navcard_paragraph ${_activeStyleVariant}`}
                tag={"div"}
              >
                {whiteCard2Paragraph}
              </Block>
              <Block
                className={`rebel-style--navcard_label-link rebel-style--is-color-2 ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={` rebel-style--navcard_label-text ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {whiteCard2LinkText}
                </Block>
                <HtmlEmbed
                  className={`rebel-style--code-embed_arrow ${_activeStyleVariant}`}
                  content={""}
                  value={
                    "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20id%3D%22arrow%22%20data-name%3D%22arrow%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22currentColor%22%20width%3D%2215px%22%20height%3D%2215px%22%20viewBox%3D%220%200%20400%20400%22%3E%0A%20%20%3Cpath%20d%3D%22M388.84%2C229.402l-.299-.758c-9.093-22.005-18.909-45.589-29.051-68.917l-.572-1.365c-1.83-4.389-3.903-9.363-7.125-12.595l-.207-.191c-27.72-23.371-83.048-69.988-121.532-102.411l-35.8-30.164c-.083-.07-.162-.146-.237-.227-5.307-5.702-12.392-7.635-18.151-4.918-5.403%2C2.549-8.721%2C8.562-9.103%2C16.495l-.005.195c-.031%2C9.405-.025%2C23.267-.019%2C35.661.004%2C7.617.007%2C14.679.001%2C19.807%2C0%2C.014-.002.028-.002.041-.108%2C1.963-1.44%2C3.51-3.104%2C3.513-14.817.026-54.83.018-88.026.011-25.113-.006-46.534-.011-50.841.002-4.127.096-9.723%2C2.585-13.057%2C9.285l-.094.202c-2.482%2C5.786-2.266%2C11.365-2.059%2C16.762.103%2C2.662.209%2C5.413.006%2C8.278l-.011.279c-.026%2C4.038-.066%2C8.607-.108%2C13.529-.494%2C57.932-.277%2C90.536%2C2.304%2C96.97%2C5.828%2C13.954%2C11.956%2C28.472%2C17.882%2C42.513%2C4.298%2C10.182%2C8.58%2C20.327%2C12.758%2C30.281.078.185.138.38.186.579%2C3.755%2C15.514%2C28.739%2C15.275%2C57.596%2C15.006%2C4.86-.046%2C9.886-.093%2C14.88-.062%2C6.848-.083%2C14.996-.449%2C22.874-.805%2C12.139-.545%2C24.68-1.111%2C33.106-.685.739.037%2C1.443.37%2C1.976.975%2C1.855%2C2.105%2C3.722%2C7.098%2C5.048%2C10.643.965%2C2.582%2C1.877%2C5.02%2C2.825%2C6.848%2C1.465%2C3.023%2C3.33%2C8.068%2C5.49%2C13.909%2C7.504%2C20.295%2C16.737%2C45.27%2C28.872%2C45.267.728%2C0%2C1.468-.09%2C2.217-.276l.282-.07.266-.13c8.997-4.39%2C58.627-46.791%2C117.7-97.582%2C24.118-20.737%2C44.947-38.647%2C49.055-41.628l.179-.139c5.753-4.849%2C7.621-16.516%2C3.898-24.129ZM32.245%2C212.775l-.004-93.684c0-2.036%2C1.396-3.687%2C3.117-3.687l150.764.005c1.722%2C0%2C3.117-1.65%2C3.117-3.686v-58.332c0-2.995%2C2.86-4.74%2C4.924-3.005l133.401%2C112.137c1.745%2C1.467%2C1.749%2C4.53.008%2C6.003l-133.405%2C112.864c-2.063%2C1.745-4.931.002-4.931-2.998v-58.243c0-2.036-1.396-3.686-3.117-3.686H35.362c-1.722%2C0-3.117-1.65-3.117-3.686Z%22%2F%3E%0A%3C%2Fsvg%3E"
                  }
                />
              </Block>
            </Block>
          </Link>
        </Block>
        <Block
          className={`rebel-style--navcard-wrapper ${_activeStyleVariant}`}
          id={"w-node-bed3c81c-abaa-be13-387f-ac35124703db-124703c2"}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={`rebel-style--white-navcard ${_activeStyleVariant}`}
            options={whiteCard3Link}
          >
            <Block
              className={`rebel-style--white-navcard_top-content ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`rebel-style--navcard_headline-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Heading
                  className={`rebel-style--navcard_headline rebel-style--dropdown-1_max-width ${_activeStyleVariant}`}
                  tag={whiteCard3HeadlineTag}
                >
                  {whiteCard3HeadlineText}
                </Heading>
              </Block>
            </Block>
            <Block
              className={`rebel-style--white-navcard_bottom-content rebel-style--flex-vertical ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`rebel-style--navcard_paragraph ${_activeStyleVariant}`}
                tag={"div"}
              >
                {whiteCard3Paragraph}
              </Block>
              <Block
                className={`rebel-style--navcard_label-link rebel-style--is-color-5 ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={` rebel-style--navcard_label-text ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {whiteCard3LinkText}
                </Block>
                <HtmlEmbed
                  className={`rebel-style--code-embed_arrow ${_activeStyleVariant}`}
                  content={""}
                  value={
                    "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20id%3D%22arrow%22%20data-name%3D%22arrow%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22currentColor%22%20width%3D%2215px%22%20height%3D%2215px%22%20viewBox%3D%220%200%20400%20400%22%3E%0A%20%20%3Cpath%20d%3D%22M388.84%2C229.402l-.299-.758c-9.093-22.005-18.909-45.589-29.051-68.917l-.572-1.365c-1.83-4.389-3.903-9.363-7.125-12.595l-.207-.191c-27.72-23.371-83.048-69.988-121.532-102.411l-35.8-30.164c-.083-.07-.162-.146-.237-.227-5.307-5.702-12.392-7.635-18.151-4.918-5.403%2C2.549-8.721%2C8.562-9.103%2C16.495l-.005.195c-.031%2C9.405-.025%2C23.267-.019%2C35.661.004%2C7.617.007%2C14.679.001%2C19.807%2C0%2C.014-.002.028-.002.041-.108%2C1.963-1.44%2C3.51-3.104%2C3.513-14.817.026-54.83.018-88.026.011-25.113-.006-46.534-.011-50.841.002-4.127.096-9.723%2C2.585-13.057%2C9.285l-.094.202c-2.482%2C5.786-2.266%2C11.365-2.059%2C16.762.103%2C2.662.209%2C5.413.006%2C8.278l-.011.279c-.026%2C4.038-.066%2C8.607-.108%2C13.529-.494%2C57.932-.277%2C90.536%2C2.304%2C96.97%2C5.828%2C13.954%2C11.956%2C28.472%2C17.882%2C42.513%2C4.298%2C10.182%2C8.58%2C20.327%2C12.758%2C30.281.078.185.138.38.186.579%2C3.755%2C15.514%2C28.739%2C15.275%2C57.596%2C15.006%2C4.86-.046%2C9.886-.093%2C14.88-.062%2C6.848-.083%2C14.996-.449%2C22.874-.805%2C12.139-.545%2C24.68-1.111%2C33.106-.685.739.037%2C1.443.37%2C1.976.975%2C1.855%2C2.105%2C3.722%2C7.098%2C5.048%2C10.643.965%2C2.582%2C1.877%2C5.02%2C2.825%2C6.848%2C1.465%2C3.023%2C3.33%2C8.068%2C5.49%2C13.909%2C7.504%2C20.295%2C16.737%2C45.27%2C28.872%2C45.267.728%2C0%2C1.468-.09%2C2.217-.276l.282-.07.266-.13c8.997-4.39%2C58.627-46.791%2C117.7-97.582%2C24.118-20.737%2C44.947-38.647%2C49.055-41.628l.179-.139c5.753-4.849%2C7.621-16.516%2C3.898-24.129ZM32.245%2C212.775l-.004-93.684c0-2.036%2C1.396-3.687%2C3.117-3.687l150.764.005c1.722%2C0%2C3.117-1.65%2C3.117-3.686v-58.332c0-2.995%2C2.86-4.74%2C4.924-3.005l133.401%2C112.137c1.745%2C1.467%2C1.749%2C4.53.008%2C6.003l-133.405%2C112.864c-2.063%2C1.745-4.931.002-4.931-2.998v-58.243c0-2.036-1.396-3.686-3.117-3.686H35.362c-1.722%2C0-3.117-1.65-3.117-3.686Z%22%2F%3E%0A%3C%2Fsvg%3E"
                  }
                />
              </Block>
            </Block>
          </Link>
        </Block>
        <Block
          className={`rebel-style--navcard-wrapper ${_activeStyleVariant}`}
          id={"w-node-bed3c81c-abaa-be13-387f-ac35124703e7-124703c2"}
          tag={"div"}
        >
          <Link
            block={"inline"}
            button={false}
            className={`rebel-style--white-navcard ${_activeStyleVariant}`}
            options={whiteCard4Link}
          >
            <Block
              className={`rebel-style--white-navcard_top-content ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`rebel-style--navcard_headline-wrapper ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Heading
                  className={`rebel-style--navcard_headline rebel-style--dropdown-1_max-width ${_activeStyleVariant}`}
                  tag={whiteCard4HeadlineTag}
                >
                  {whiteCard4HeadlineText}
                </Heading>
              </Block>
            </Block>
            <Block
              className={`rebel-style--white-navcard_bottom-content rebel-style--flex-vertical ${_activeStyleVariant}`}
              tag={"div"}
            >
              <Block
                className={`rebel-style--navcard_paragraph ${_activeStyleVariant}`}
                tag={"div"}
              >
                {whiteCard4Paragraph}
              </Block>
              <Block
                className={`rebel-style--navcard_label-link rebel-style--is-color-8 ${_activeStyleVariant}`}
                tag={"div"}
              >
                <Block
                  className={` rebel-style--navcard_label-text ${_activeStyleVariant}`}
                  tag={"div"}
                >
                  {whiteCard4LinkText}
                </Block>
                <HtmlEmbed
                  className={`rebel-style--code-embed_arrow ${_activeStyleVariant}`}
                  content={""}
                  value={
                    "%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%0A%3Csvg%20id%3D%22arrow%22%20data-name%3D%22arrow%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22currentColor%22%20width%3D%2215px%22%20height%3D%2215px%22%20viewBox%3D%220%200%20400%20400%22%3E%0A%20%20%3Cpath%20d%3D%22M388.84%2C229.402l-.299-.758c-9.093-22.005-18.909-45.589-29.051-68.917l-.572-1.365c-1.83-4.389-3.903-9.363-7.125-12.595l-.207-.191c-27.72-23.371-83.048-69.988-121.532-102.411l-35.8-30.164c-.083-.07-.162-.146-.237-.227-5.307-5.702-12.392-7.635-18.151-4.918-5.403%2C2.549-8.721%2C8.562-9.103%2C16.495l-.005.195c-.031%2C9.405-.025%2C23.267-.019%2C35.661.004%2C7.617.007%2C14.679.001%2C19.807%2C0%2C.014-.002.028-.002.041-.108%2C1.963-1.44%2C3.51-3.104%2C3.513-14.817.026-54.83.018-88.026.011-25.113-.006-46.534-.011-50.841.002-4.127.096-9.723%2C2.585-13.057%2C9.285l-.094.202c-2.482%2C5.786-2.266%2C11.365-2.059%2C16.762.103%2C2.662.209%2C5.413.006%2C8.278l-.011.279c-.026%2C4.038-.066%2C8.607-.108%2C13.529-.494%2C57.932-.277%2C90.536%2C2.304%2C96.97%2C5.828%2C13.954%2C11.956%2C28.472%2C17.882%2C42.513%2C4.298%2C10.182%2C8.58%2C20.327%2C12.758%2C30.281.078.185.138.38.186.579%2C3.755%2C15.514%2C28.739%2C15.275%2C57.596%2C15.006%2C4.86-.046%2C9.886-.093%2C14.88-.062%2C6.848-.083%2C14.996-.449%2C22.874-.805%2C12.139-.545%2C24.68-1.111%2C33.106-.685.739.037%2C1.443.37%2C1.976.975%2C1.855%2C2.105%2C3.722%2C7.098%2C5.048%2C10.643.965%2C2.582%2C1.877%2C5.02%2C2.825%2C6.848%2C1.465%2C3.023%2C3.33%2C8.068%2C5.49%2C13.909%2C7.504%2C20.295%2C16.737%2C45.27%2C28.872%2C45.267.728%2C0%2C1.468-.09%2C2.217-.276l.282-.07.266-.13c8.997-4.39%2C58.627-46.791%2C117.7-97.582%2C24.118-20.737%2C44.947-38.647%2C49.055-41.628l.179-.139c5.753-4.849%2C7.621-16.516%2C3.898-24.129ZM32.245%2C212.775l-.004-93.684c0-2.036%2C1.396-3.687%2C3.117-3.687l150.764.005c1.722%2C0%2C3.117-1.65%2C3.117-3.686v-58.332c0-2.995%2C2.86-4.74%2C4.924-3.005l133.401%2C112.137c1.745%2C1.467%2C1.749%2C4.53.008%2C6.003l-133.405%2C112.864c-2.063%2C1.745-4.931.002-4.931-2.998v-58.243c0-2.036-1.396-3.686-3.117-3.686H35.362c-1.722%2C0-3.117-1.65-3.117-3.686Z%22%2F%3E%0A%3C%2Fsvg%3E"
                  }
                />
              </Block>
            </Block>
          </Link>
        </Block>
      </Block>
    </div>
  );
}
