"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Ways25Form.module.css";

export function Ways25Form({ as: _Component = _Builtin.FormWrapper }) {
  return (
    <_Component
      className={_utils.cx(_styles, "home24-blocker-form_wrapper")}
      id={_utils.cx(
        _styles,
        "w-node-_89943a2d-33bd-c9a0-ec71-548b99b0e339-99b0e339"
      )}
    >
      <_Builtin.FormForm
        className={_utils.cx(_styles, "ways25-blocker-form", "is--speaker")}
        name="wf-form-partners-email"
        data-name="partners-email"
        method="get"
        id="wf-form-partners-email"
      >
        <_Builtin.FormTextInput
          className={_utils.cx(
            _styles,
            "form-input",
            "is--home25",
            "is--phone_number"
          )}
          autoFocus={false}
          maxLength={256}
          name="Phone"
          data-name="Phone"
          placeholder="Phone number"
          type="tel"
          disabled={false}
          required={true}
          id="Phone"
        />
        <_Builtin.FormTextInput
          className={_utils.cx(_styles, "form-input", "is--home25")}
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
            "ways25-form-button-partners"
          )}
          tag="button"
          slot=""
          type="submit"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-style-nowrap")}
            tag="div"
          >
            {"Download"}
          </_Builtin.Block>
        </_Builtin.DOM>
      </_Builtin.FormForm>
      <_Builtin.FormSuccessMessage
        className={_utils.cx(_styles, "success-message")}
      >
        <_Builtin.Block tag="div">
          {"Thank you! We will be in contact with you as soon as possible."}
        </_Builtin.Block>
      </_Builtin.FormSuccessMessage>
      <_Builtin.FormErrorMessage
        className={_utils.cx(_styles, "error-message-2")}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "", "", "text-block-3")}
          tag="div"
        >
          {"Oops! Something went wrong while submitting the form."}
        </_Builtin.Block>
      </_Builtin.FormErrorMessage>
    </_Component>
  );
}
