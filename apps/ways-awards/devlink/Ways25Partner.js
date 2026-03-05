"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Ways25Partner.module.css";

export function Ways25Partner({
  as: _Component = _Builtin.FormWrapper,
  home24BlockerFormWrapperVisibility = true,
}) {
  return home24BlockerFormWrapperVisibility ? (
    <_Component className={_utils.cx(_styles, "home24-blocker-form_wrapper")}>
      <_Builtin.FormForm
        className={_utils.cx(_styles, "ways25-blocker-form")}
        name="wf-form-home24-newsletter"
        data-name="home24-newsletter"
        action="https://waysconf.us22.list-manage.com/subscribe/post?u=f9881816f01b81b1876955a75&id=069dcdd85b&f_id=001fc6e1f0"
        method="get"
        id="wf-form-home24-newsletter"
      >
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
            "ways25-form-button"
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
        </_Builtin.DOM>
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
    </_Component>
  ) : null;
}
