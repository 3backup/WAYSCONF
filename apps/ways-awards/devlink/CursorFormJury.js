"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { PageGlobals } from "./PageGlobals";
import { Footer24 } from "./Footer24";
import * as _utils from "./utils";
import _styles from "./CursorFormJury.module.css";

export function CursorFormJury({
  as: _Component = _Builtin.Block,
  footer24Email = "hello@waysconf.com",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "page-wrapper-jury-form")}
      tag="div"
    >
      <PageGlobals />
      <_Builtin.Block className={_utils.cx(_styles, "main-wrapper")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "juryform-hero")}
          tag="section"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "container-2024")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "c4s-main-content")}
              tag="div"
            >
              <_Builtin.FormWrapper
                className={_utils.cx(_styles, "contact-form", "is--c4p")}
              >
                <_Builtin.FormForm
                  className={_utils.cx(_styles, "contact-form-wrapper")}
                  name="wf-form-Jury-Form-2025"
                  data-name="Jury Form 2025"
                  method="post"
                  data-keyprevent="true"
                  data-form="multistep"
                  id="wf-form-Jury-Form-2025"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "form-step")}
                    tag="div"
                    data-form="step"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "step-custom",
                        "juryform-hero-content"
                      )}
                      tag="div"
                    >
                      <_Builtin.Heading
                        className={_utils.cx(_styles, "ways25-heading2")}
                        tag="h1"
                      >
                        {"WaysAwards Jury 2025"}
                      </_Builtin.Heading>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "is--caption")}
                        tag="div"
                      >
                        {"APPLICATIONS DEADLINE 30th JUNE, 23:59"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "cfsform0-form-input_wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "contact24-form-input_label-2",
                          "contact24-hero-heading6"
                        )}
                        tag="div"
                      >
                        {"First and last name"}
                      </_Builtin.Block>
                      <_Builtin.FormTextInput
                        className={_utils.cx(_styles, "contact-form-input-2")}
                        name="Name"
                        maxLength={256}
                        data-name="Name"
                        placeholder="e.g. Tom Ford"
                        disabled={false}
                        type="text"
                        required={true}
                        autoFocus={false}
                        id="Name-3"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "cfsform0-form-input_wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "contact24-form-input_label-2",
                          "contact24-hero-heading6"
                        )}
                        tag="div"
                      >
                        {"EMAIL ADDRESS"}
                      </_Builtin.Block>
                      <_Builtin.FormTextInput
                        className={_utils.cx(_styles, "contact-form-input-2")}
                        name="Email"
                        maxLength={256}
                        data-name="Email"
                        placeholder="e.g. hello@waysconf.com"
                        disabled={false}
                        type="email"
                        required={true}
                        autoFocus={false}
                        id="Email-3"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "cfsform0-form-input_wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "contact24-form-input_label-2",
                          "contact24-hero-heading6"
                        )}
                        tag="div"
                      >
                        {"Phone number "}
                        <_Builtin.Span
                          className={_utils.cx(_styles, "c4s-optional")}
                        >
                          {"optional"}
                        </_Builtin.Span>
                      </_Builtin.Block>
                      <_Builtin.FormTextInput
                        className={_utils.cx(_styles, "contact-form-input-2")}
                        name="Phone-Number"
                        maxLength={256}
                        data-name="Phone Number"
                        placeholder="e.g. 00 48 123-456-789"
                        disabled={false}
                        type="tel"
                        required={false}
                        autoFocus={false}
                        id="Phone-Number-3"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "cfsform0-form-input_wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "contact24-form-input_label-2",
                          "contact24-hero-heading6"
                        )}
                        tag="div"
                      >
                        {"Do you have Linkedin profile?"}
                      </_Builtin.Block>
                      <_Builtin.FormTextInput
                        className={_utils.cx(_styles, "contact-form-input-2")}
                        name="LinkedIn-URL"
                        maxLength={256}
                        data-name="LinkedIn URL"
                        placeholder="Link to your profile"
                        disabled={false}
                        type="text"
                        required={false}
                        autoFocus={false}
                        id="LinkedIn-URL"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "cfsform0-form-input_wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "contact24-form-input_label-2",
                          "contact24-hero-heading6"
                        )}
                        tag="div"
                      >
                        {"JOBTITLE"}
                      </_Builtin.Block>
                      <_Builtin.FormTextInput
                        className={_utils.cx(_styles, "contact-form-input-2")}
                        name="Job-Title"
                        maxLength={256}
                        data-name="Job Title"
                        placeholder="eg. Senior Product Designer"
                        disabled={false}
                        type="text"
                        required={false}
                        autoFocus={false}
                        id="Job-Title"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "cfsform0-form-input_wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "contact24-form-input_label-2",
                          "contact24-hero-heading6"
                        )}
                        tag="div"
                      >
                        {"COMPANYNAME"}
                      </_Builtin.Block>
                      <_Builtin.FormTextInput
                        className={_utils.cx(_styles, "contact-form-input-2")}
                        name="Company-Name"
                        maxLength={256}
                        data-name="Company Name"
                        placeholder="eg. WaysConf"
                        disabled={false}
                        type="text"
                        required={false}
                        autoFocus={false}
                        id="Company-Name"
                      />
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "checkbox-radio-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "contact24-form-input_label-2",
                          "contact24-hero-heading6"
                        )}
                        tag="div"
                      >
                        {"Specializations (you can choose multiple)"}
                      </_Builtin.Block>
                      <_Builtin.FormCheckboxWrapper
                        className={_utils.cx(_styles, "radio-wrapper")}
                      >
                        <_Builtin.FormCheckboxInput
                          className={_utils.cx(
                            _styles,
                            "radio-button",
                            "checkbox"
                          )}
                          type="checkbox"
                          name="Website"
                          data-name="Website"
                          required={false}
                          checked={false}
                          id="Website"
                          form={{
                            type: "checkbox-input",
                            name: "Website",
                          }}
                          inputType="custom"
                          customClassName="w-checkbox-input--inputType-custom"
                        />
                        <_Builtin.FormInlineLabel
                          className={_utils.cx(_styles, "radio-label")}
                        >
                          {"Website"}
                        </_Builtin.FormInlineLabel>
                      </_Builtin.FormCheckboxWrapper>
                      <_Builtin.FormCheckboxWrapper
                        className={_utils.cx(_styles, "radio-wrapper")}
                      >
                        <_Builtin.FormCheckboxInput
                          className={_utils.cx(
                            _styles,
                            "radio-button",
                            "checkbox"
                          )}
                          type="checkbox"
                          name="Mobile-Apps"
                          data-name="Mobile Apps"
                          required={false}
                          checked={false}
                          id="Mobile-Apps"
                          form={{
                            type: "checkbox-input",
                            name: "Mobile Apps",
                          }}
                          inputType="custom"
                          customClassName="w-checkbox-input--inputType-custom"
                        />
                        <_Builtin.FormInlineLabel
                          className={_utils.cx(_styles, "radio-label")}
                        >
                          {"Mobile Apps"}
                        </_Builtin.FormInlineLabel>
                      </_Builtin.FormCheckboxWrapper>
                      <_Builtin.FormCheckboxWrapper
                        className={_utils.cx(_styles, "radio-wrapper")}
                      >
                        <_Builtin.FormCheckboxInput
                          className={_utils.cx(
                            _styles,
                            "radio-button",
                            "checkbox"
                          )}
                          type="checkbox"
                          name="Web-Apps"
                          data-name="Web Apps"
                          required={false}
                          checked={false}
                          id="Web-Apps"
                          form={{
                            type: "checkbox-input",
                            name: "Web Apps",
                          }}
                          inputType="custom"
                          customClassName="w-checkbox-input--inputType-custom"
                        />
                        <_Builtin.FormInlineLabel
                          className={_utils.cx(_styles, "radio-label")}
                        >
                          {"Web Apps"}
                        </_Builtin.FormInlineLabel>
                      </_Builtin.FormCheckboxWrapper>
                      <_Builtin.FormCheckboxWrapper
                        className={_utils.cx(_styles, "radio-wrapper")}
                      >
                        <_Builtin.FormCheckboxInput
                          className={_utils.cx(
                            _styles,
                            "radio-button",
                            "checkbox"
                          )}
                          type="checkbox"
                          name="[Specializations]-No-Code-Low-Code"
                          data-name="[Specializations] No Code & Low Code"
                          required={false}
                          checked={false}
                          id="[Specializations]-No-Code-Low-Code"
                          form={{
                            type: "checkbox-input",
                            name: "[Specializations] No Code & Low Code",
                          }}
                          inputType="custom"
                          customClassName="w-checkbox-input--inputType-custom"
                        />
                        <_Builtin.FormInlineLabel
                          className={_utils.cx(_styles, "radio-label")}
                        >
                          {"No Code & Low Code"}
                        </_Builtin.FormInlineLabel>
                      </_Builtin.FormCheckboxWrapper>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "checkbox-radio-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "contact24-form-input_label-2",
                          "contact24-hero-heading6"
                        )}
                        tag="div"
                      >
                        {"Area of expertise (you can choose multiple)"}
                      </_Builtin.Block>
                      <_Builtin.FormCheckboxWrapper
                        className={_utils.cx(_styles, "radio-wrapper")}
                      >
                        <_Builtin.FormCheckboxInput
                          className={_utils.cx(
                            _styles,
                            "radio-button",
                            "checkbox"
                          )}
                          type="checkbox"
                          name="Design"
                          data-name="Design"
                          required={false}
                          checked={false}
                          id="Design"
                          form={{
                            type: "checkbox-input",
                            name: "Design",
                          }}
                          inputType="custom"
                          customClassName="w-checkbox-input--inputType-custom"
                        />
                        <_Builtin.FormInlineLabel
                          className={_utils.cx(_styles, "radio-label")}
                        >
                          {"Design"}
                        </_Builtin.FormInlineLabel>
                      </_Builtin.FormCheckboxWrapper>
                      <_Builtin.FormCheckboxWrapper
                        className={_utils.cx(_styles, "radio-wrapper")}
                      >
                        <_Builtin.FormCheckboxInput
                          className={_utils.cx(
                            _styles,
                            "radio-button",
                            "checkbox"
                          )}
                          type="checkbox"
                          name="Research"
                          data-name="Research"
                          required={false}
                          checked={false}
                          id="Research"
                          form={{
                            type: "checkbox-input",
                            name: "Research",
                          }}
                          inputType="custom"
                          customClassName="w-checkbox-input--inputType-custom"
                        />
                        <_Builtin.FormInlineLabel
                          className={_utils.cx(_styles, "radio-label")}
                        >
                          {"Research"}
                        </_Builtin.FormInlineLabel>
                      </_Builtin.FormCheckboxWrapper>
                      <_Builtin.FormCheckboxWrapper
                        className={_utils.cx(_styles, "radio-wrapper")}
                      >
                        <_Builtin.FormCheckboxInput
                          className={_utils.cx(
                            _styles,
                            "radio-button",
                            "checkbox"
                          )}
                          type="checkbox"
                          name="Product-Management"
                          data-name="Product & Management"
                          required={false}
                          checked={false}
                          id="Product-Management"
                          form={{
                            type: "checkbox-input",
                            name: "Product & Management",
                          }}
                          inputType="custom"
                          customClassName="w-checkbox-input--inputType-custom"
                        />
                        <_Builtin.FormInlineLabel
                          className={_utils.cx(_styles, "radio-label")}
                          editable={true}
                        >
                          {"Product & Management"}
                        </_Builtin.FormInlineLabel>
                      </_Builtin.FormCheckboxWrapper>
                      <_Builtin.FormCheckboxWrapper
                        className={_utils.cx(_styles, "radio-wrapper")}
                      >
                        <_Builtin.FormCheckboxInput
                          className={_utils.cx(
                            _styles,
                            "radio-button",
                            "checkbox"
                          )}
                          type="checkbox"
                          name="[Expertise]-No-Code-Low-Code"
                          data-name="[Expertise] No Code & Low Code"
                          required={false}
                          checked={false}
                          id="[Expertise]-No-Code-Low-Code"
                          form={{
                            type: "checkbox-input",
                            name: "[Expertise] No Code & Low Code",
                          }}
                          inputType="custom"
                          customClassName="w-checkbox-input--inputType-custom"
                        />
                        <_Builtin.FormInlineLabel
                          className={_utils.cx(_styles, "radio-label")}
                        >
                          {"No Code & Low Code"}
                        </_Builtin.FormInlineLabel>
                      </_Builtin.FormCheckboxWrapper>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "cfsform0-form-input_wrapper"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(
                          _styles,
                          "contact24-form-input_label-2",
                          "contact24-hero-heading6"
                        )}
                        tag="div"
                      >
                        {
                          "Are you part of any other juries like the WaysConf awards? If yes, please list them."
                        }
                      </_Builtin.Block>
                      <_Builtin.FormTextInput
                        className={_utils.cx(_styles, "contact-form-input-2")}
                        name="Part-of-any-other-juries"
                        maxLength={256}
                        data-name="Part of any other juries"
                        placeholder="eg. KTR "
                        disabled={false}
                        type="text"
                        required={false}
                        autoFocus={false}
                        id="Part-of-any-other-juries"
                      />
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "form-step")}
                    tag="div"
                    data-form="step"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "form-step")}
                    tag="div"
                    data-form="step"
                  >
                    <_Builtin.Block tag="div">
                      <_Builtin.Heading tag="h2">
                        {"GDPR & Feedback"}
                      </_Builtin.Heading>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "contact-form-input_wrapper",
                        "is--c4p"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "checkbox-radio-wrapper")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "contact24-form-input_label-2",
                            "contact24-hero-heading6"
                          )}
                          tag="div"
                        >
                          {"Read the consent below and select your answer"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "margin-top", "_8px")}
                          tag="div"
                        >
                          <_Builtin.Paragraph
                            className={_utils.cx(
                              _styles,
                              "is--text-color-silver-3"
                            )}
                          >
                            {
                              "I consent to the processing of my personal data provided in the recruitment form as well as my image by DESIGNWAYS CONF Sp. z o.o. with its registered office at al. Powstania Warszawskiego 15, 31-539 Kraków, as the personal data controller, for purposes of the recruitment process of candidates to the participation in lectures during WaysConf 2023. I have been informed that submitting the above data is voluntary and that I have the right to access my data, rectify it and withdraw my consent at any time, as well as about other matters arising from Art. 13 of GDPR. "
                            }
                            <br />
                            {"‍"}
                            <_Builtin.Link
                              className={_utils.cx(_styles, "label-link")}
                              button={false}
                              block=""
                              options={{
                                href: "#",
                                target: "_blank",
                              }}
                            >
                              {"Check how we process data. "}
                            </_Builtin.Link>
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.FormRadioWrapper
                          className={_utils.cx(_styles, "radio-wrapper")}
                        >
                          <_Builtin.FormRadioInput
                            className={_utils.cx(_styles, "radio-button")}
                            type="radio"
                            name="Data-Consent"
                            value="I agree"
                            data-name="Data Consent"
                            required={true}
                            id="I-agree"
                            form={{
                              type: "radio-input",
                              name: "Data Consent",
                            }}
                            inputType="custom"
                            customClassName="w-form-formradioinput--inputType-custom"
                          />
                          <_Builtin.FormInlineLabel
                            className={_utils.cx(_styles, "radio-label")}
                          >
                            {"I accept"}
                          </_Builtin.FormInlineLabel>
                        </_Builtin.FormRadioWrapper>
                        <_Builtin.FormRadioWrapper
                          className={_utils.cx(_styles, "radio-wrapper")}
                        >
                          <_Builtin.FormRadioInput
                            className={_utils.cx(_styles, "radio-button")}
                            type="radio"
                            name="Data-Consent"
                            value="I disagree"
                            data-name="Data Consent"
                            required={false}
                            id="I-disagree"
                            form={{
                              type: "radio-input",
                              name: "Data Consent",
                            }}
                            inputType="custom"
                            customClassName="w-form-formradioinput--inputType-custom"
                          />
                          <_Builtin.FormInlineLabel
                            className={_utils.cx(_styles, "radio-label")}
                          >
                            {"I do not accept"}
                          </_Builtin.FormInlineLabel>
                        </_Builtin.FormRadioWrapper>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "contact-form-input_wrapper",
                        "is--c4p"
                      )}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "checkbox-radio-wrapper")}
                        tag="div"
                      >
                        <_Builtin.Block
                          className={_utils.cx(
                            _styles,
                            "contact24-form-input_label-2",
                            "contact24-hero-heading6"
                          )}
                          tag="div"
                        >
                          {"Read the consent below and select your answer"}
                        </_Builtin.Block>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "margin-top", "_8px")}
                          tag="div"
                        >
                          <_Builtin.Paragraph
                            className={_utils.cx(
                              _styles,
                              "is--text-color-silver-3"
                            )}
                          >
                            {"I accept the "}
                            <_Builtin.Link
                              className={_utils.cx(_styles, "label-link")}
                              button={false}
                              block=""
                              options={{
                                href: "#",
                              }}
                            >
                              {"WaysConf Speaker Requirements and Guidelines"}
                            </_Builtin.Link>
                            {
                              ", in particular relating to the licence and agree to receive email communication regarding my participation in WaysConf conference;"
                            }
                          </_Builtin.Paragraph>
                        </_Builtin.Block>
                        <_Builtin.FormRadioWrapper
                          className={_utils.cx(_styles, "radio-wrapper")}
                        >
                          <_Builtin.FormRadioInput
                            className={_utils.cx(_styles, "radio-button")}
                            type="radio"
                            name="RaG-Consent"
                            value="I accept"
                            data-name="RaG Consent"
                            required={true}
                            id="I-accept"
                            form={{
                              type: "radio-input",
                              name: "RaG Consent",
                            }}
                            inputType="custom"
                            customClassName="w-form-formradioinput--inputType-custom"
                          />
                          <_Builtin.FormInlineLabel
                            className={_utils.cx(_styles, "radio-label")}
                          >
                            {"I accept"}
                          </_Builtin.FormInlineLabel>
                        </_Builtin.FormRadioWrapper>
                        <_Builtin.FormRadioWrapper
                          className={_utils.cx(_styles, "radio-wrapper")}
                        >
                          <_Builtin.FormRadioInput
                            className={_utils.cx(_styles, "radio-button")}
                            type="radio"
                            name="RaG-Consent"
                            value="I do not accept"
                            data-name="RaG Consent"
                            required={false}
                            id="I-do-not-accept"
                            form={{
                              type: "radio-input",
                              name: "RaG Consent",
                            }}
                            inputType="custom"
                            customClassName="w-form-formradioinput--inputType-custom"
                          />
                          <_Builtin.FormInlineLabel
                            className={_utils.cx(_styles, "radio-label")}
                          >
                            {"I do not accept"}
                          </_Builtin.FormInlineLabel>
                        </_Builtin.FormRadioWrapper>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "media24-kit-content_list",
                        "smaller"
                      )}
                      tag="div"
                    />
                  </_Builtin.Block>
                  <_Builtin.DOM
                    className={_utils.cx(
                      _styles,
                      "ways25-button-secondary",
                      "white"
                    )}
                    tag="button"
                    slot=""
                    type="submit"
                  >
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "text-style-nowrap")}
                    >
                      {"Send application"}
                    </_Builtin.Paragraph>
                  </_Builtin.DOM>
                  <_Builtin.HtmlEmbed
                    className={_utils.cx(_styles, "form-embed")}
                    value="%3Cinput%20type%3D%22hidden%22%20name%3D%22_redirect%22%20value%3D%22https%3A%2F%2Fwaysconf.com%2Fcall-for-speakers%2Fsuccess%22%3E"
                  />
                </_Builtin.FormForm>
                <_Builtin.FormSuccessMessage
                  className={_utils.cx(_styles, "contact-form-success")}
                >
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "contact-form-success_wrapper"
                    )}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(
                        _styles,
                        "contact-form-success_header"
                      )}
                      tag="div"
                    >
                      <_Builtin.HtmlEmbed
                        className={_utils.cx(
                          _styles,
                          "contact-form-success_svg"
                        )}
                        value="%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%20126%20126%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Ccircle%20opacity%3D%220.12%22%20cx%3D%2263%22%20cy%3D%2263%22%20r%3D%2252.5%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M11.25%2063C11.25%2034.4193%2034.4193%2011.25%2063%2011.25C71.2632%2011.25%2079.072%2013.1861%2085.9996%2016.6288C86.3705%2016.8132%2086.8206%2016.6619%2087.005%2016.291C87.1893%2015.92%2087.038%2015.4699%2086.6671%2015.2856C79.5368%2011.7421%2071.5%209.75%2063%209.75C33.5908%209.75%209.75%2033.5908%209.75%2063C9.75%2092.4092%2033.5908%20116.25%2063%20116.25C92.4092%20116.25%20116.25%2092.4092%20116.25%2063C116.25%2061.0007%20116.14%2059.0269%20115.925%2057.0843C115.88%2056.6726%20115.509%2056.3757%20115.097%2056.4212C114.685%2056.4667%20114.389%2056.8374%20114.434%2057.2491C114.643%2059.137%20114.75%2061.0559%20114.75%2063C114.75%2091.5807%2091.5807%20114.75%2063%20114.75C34.4193%20114.75%2011.25%2091.5807%2011.25%2063ZM116.03%2021.5303C116.323%2021.2374%20116.323%2020.7626%20116.03%2020.4697C115.737%2020.1768%20115.263%2020.1768%20114.97%2020.4697L63%2072.4393L47.7803%2057.2197C47.4874%2056.9268%2047.0126%2056.9268%2046.7197%2057.2197C46.4268%2057.5126%2046.4268%2057.9874%2046.7197%2058.2803L62.4697%2074.0303C62.7626%2074.3232%2063.2374%2074.3232%2063.5303%2074.0303L116.03%2021.5303Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E"
                      />
                      <_Builtin.Heading tag="h2">
                        {"Thank you"}
                      </_Builtin.Heading>
                    </_Builtin.Block>
                    <_Builtin.Paragraph
                      className={_utils.cx(
                        _styles,
                        "is--paragraph",
                        "is--text-color-silver",
                        "text-align-center"
                      )}
                    >
                      {
                        "Thank you for submitting your call for papers. We appreciate your interest in sharing your knowledge and insights with our audience. You will receive a confirmation email shortly to confirm the receipt of your submission."
                      }
                    </_Builtin.Paragraph>
                    <_Builtin.Heading tag="h4">
                      {"See you at WaysConf 2025"}
                    </_Builtin.Heading>
                    <_Builtin.Link
                      className={_utils.cx(
                        _styles,
                        "main-button-3",
                        "is--form-success"
                      )}
                      button={true}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"Back to homepage"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.FormSuccessMessage>
                <_Builtin.FormErrorMessage
                  className={_utils.cx(_styles, "contact-form-error")}
                >
                  <_Builtin.Block tag="div">
                    {"Oops! Something went wrong while submitting the form."}
                  </_Builtin.Block>
                </_Builtin.FormErrorMessage>
              </_Builtin.FormWrapper>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <Footer24 email={footer24Email} />
      </_Builtin.Block>
    </_Component>
  );
}
