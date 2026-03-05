"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./FormInput.module.css";

export function FormInput({
  as: _Component = _Builtin.Block,
  contactFormInputLabelText = "NAME",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "contact-form-input_wrapper")}
      tag="div"
    >
      <_Builtin.FormTextInput
        className={_utils.cx(_styles, "contact-form-input")}
        autoFocus={false}
        maxLength={256}
        name="Name-2"
        data-name="Name 2"
        placeholder="e.g. Tom"
        type="text"
        disabled={false}
        required={true}
        id="Name-2"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "contact-form-input_label")}
        tag="div"
      >
        {contactFormInputLabelText}
      </_Builtin.Block>
    </_Component>
  );
}
