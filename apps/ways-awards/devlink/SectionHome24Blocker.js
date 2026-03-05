"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SectionHome24Blocker.module.css";

export function SectionHome24Blocker({
  as: _Component = _Builtin.Section,
  ctAs = false,
  form = true,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "section_home24-blocker")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "section-hero-wrapper")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "home24-blocker-content", "s-in")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "ways25-heading2")}
            tag="div"
          >
            {"17-18th September "}
            <br />
            {"Join Our Newsletter"}
          </_Builtin.Block>
          {form ? (
            <_Builtin.FormWrapper
              className={_utils.cx(_styles, "home24-blocker-form_wrapper")}
            >
              <_Builtin.FormForm
                className={_utils.cx(_styles, "home24-blocker-form")}
                name="wf-form-home24-newsletter"
                data-name="home24-newsletter"
                action="https://waysconf.us22.list-manage.com/subscribe/post?u=f9881816f01b81b1876955a75&id=069dcdd85b&f_id=001fc6e1f0"
                method="get"
                id="wf-form-home24-newsletter"
              >
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "form-input", "is--home24")}
                  name="Email-2"
                  maxLength={256}
                  data-name="Email 2"
                  placeholder="eg . hello@waysconf.com"
                  disabled={false}
                  type="email"
                  required={true}
                  autoFocus={false}
                  id="Email-2"
                />
                <_Builtin.DOM
                  className={_utils.cx(
                    _styles,
                    "button",
                    "is-navbar18-button",
                    "is--home24-hero"
                  )}
                  tag="button"
                  slot=""
                  type="submit"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-style-nowrap")}
                    tag="div"
                  >
                    {"Sign up"}
                    <br />
                  </_Builtin.Block>
                  <_Builtin.Image
                    className={_utils.cx(_styles, "form-button_submit-icon")}
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt=""
                    src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d032_arrow.webp"
                  />
                </_Builtin.DOM>
                <_Builtin.Link
                  className={_utils.cx(_styles, "newsletter-info")}
                  button={false}
                  block=""
                  options={{
                    href: "#",
                  }}
                >
                  {"Information Clause"}
                </_Builtin.Link>
              </_Builtin.FormForm>
              <_Builtin.FormSuccessMessage>
                <_Builtin.Block tag="div">
                  {"Thank you! Your submission has been received!"}
                </_Builtin.Block>
              </_Builtin.FormSuccessMessage>
              <_Builtin.FormErrorMessage>
                <_Builtin.Block tag="div">
                  {"Oops! Something went wrong while submitting the form."}
                </_Builtin.Block>
              </_Builtin.FormErrorMessage>
            </_Builtin.FormWrapper>
          ) : null}
          {ctAs ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "cta-group")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "buttononclick",
                  "is-navbar18-button",
                  "is-smaller"
                )}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "text-style-nowrap")}
                >
                  {"Become our speaker"}
                </_Builtin.Paragraph>
                <_Builtin.Image
                  className={_utils.cx(_styles, "form-button_submit-icon")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d030_arrow.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "buttononclick",
                  "is-navbar18-button",
                  "is-transparent"
                )}
                button={false}
                block="inline"
                options={{
                  href: "#",
                }}
              >
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "text-style-nowrap")}
                >
                  {"Add reminder"}
                </_Builtin.Paragraph>
                <_Builtin.Image
                  className={_utils.cx(_styles, "form-button_submit-icon")}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6846a22a95d3c778d528ce77/6846a22a95d3c778d528d030_arrow.svg"
                />
              </_Builtin.Link>
            </_Builtin.Block>
          ) : null}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
