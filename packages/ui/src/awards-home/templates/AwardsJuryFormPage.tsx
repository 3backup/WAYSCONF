import * as React from "react";
import { AwardsFooter } from "../organisms/AwardsFooter";

type CheckboxOption = {
  id: string;
  name: string;
  label: string;
};

const SPECIALIZATIONS: CheckboxOption[] = [
  { id: "specialization-website", name: "Website", label: "Website" },
  {
    id: "specialization-mobile-apps",
    name: "Mobile Apps",
    label: "Mobile Apps",
  },
  { id: "specialization-web-apps", name: "Web Apps", label: "Web Apps" },
  {
    id: "specialization-no-code-low-code",
    name: "[Specializations] No Code & Low Code",
    label: "No Code & Low Code",
  },
];

const EXPERTISE: CheckboxOption[] = [
  { id: "expertise-design", name: "Design", label: "Design" },
  { id: "expertise-research", name: "Research", label: "Research" },
  {
    id: "expertise-product-management",
    name: "Product & Management",
    label: "Product & Management",
  },
  {
    id: "expertise-no-code-low-code",
    name: "[Expertise] No Code & Low Code",
    label: "No Code & Low Code",
  },
];

export type AwardsJuryFormPageProps = {
  footerEmail?: string;
};

function CheckboxField({
  id,
  name,
  label,
}: CheckboxOption) {
  return (
    <label className="radio-wrapper" htmlFor={id}>
      <input
        className="radio-button checkbox"
        type="checkbox"
        name={name}
        data-name={name}
        id={id}
      />
      <span className="radio-label">{label}</span>
    </label>
  );
}

function RadioField({
  id,
  name,
  label,
  required = false,
}: {
  id: string;
  name: string;
  label: string;
  required?: boolean;
}) {
  return (
    <label className="radio-wrapper" htmlFor={id}>
      <input
        className="radio-button"
        type="radio"
        name={name}
        value={label}
        data-name={name}
        id={id}
        required={required}
      />
      <span className="radio-label">{label}</span>
    </label>
  );
}

export function AwardsJuryFormPage({
  footerEmail = "hello@waysconf.com",
}: AwardsJuryFormPageProps) {
  return (
    <div className="awards-jury-form-scope">
      <div className="page-wrapper-jury-form">
        <section className="juryform-hero">
          <div className="container-2024">
            <div className="c4s-main-content">
              <div className="contact-form is--c4p">
                <form
                  className="contact-form-wrapper"
                  name="Jury-Form-2025"
                  data-name="Jury Form 2025"
                  method="post"
                  id="jury-form-2025"
                >
                  <div className="form-step">
                    <div className="step-custom juryform-hero-content">
                      <h1 className="ways25-heading2">WaysAwards Jury 2025</h1>
                      <div className="is--caption">
                        APPLICATIONS DEADLINE 30th JUNE, 23:59
                      </div>
                    </div>

                    <div className="cfsform0-form-input_wrapper">
                      <div className="contact24-form-input_label-2 contact24-hero-heading6">
                        First and last name
                      </div>
                      <input
                        className="contact-form-input-2"
                        name="Name"
                        maxLength={256}
                        data-name="Name"
                        placeholder="e.g. Tom Ford"
                        type="text"
                        required
                        id="jury-name"
                      />
                    </div>

                    <div className="cfsform0-form-input_wrapper">
                      <div className="contact24-form-input_label-2 contact24-hero-heading6">
                        EMAIL ADDRESS
                      </div>
                      <input
                        className="contact-form-input-2"
                        name="Email"
                        maxLength={256}
                        data-name="Email"
                        placeholder="e.g. hello@waysconf.com"
                        type="email"
                        required
                        id="jury-email"
                      />
                    </div>

                    <div className="cfsform0-form-input_wrapper">
                      <div className="contact24-form-input_label-2 contact24-hero-heading6">
                        Phone number <span className="c4s-optional">optional</span>
                      </div>
                      <input
                        className="contact-form-input-2"
                        name="Phone Number"
                        maxLength={256}
                        data-name="Phone Number"
                        placeholder="e.g. 00 48 123-456-789"
                        type="tel"
                        id="jury-phone"
                      />
                    </div>

                    <div className="cfsform0-form-input_wrapper">
                      <div className="contact24-form-input_label-2 contact24-hero-heading6">
                        Do you have Linkedin profile?
                      </div>
                      <input
                        className="contact-form-input-2"
                        name="LinkedIn URL"
                        maxLength={256}
                        data-name="LinkedIn URL"
                        placeholder="Link to your profile"
                        type="text"
                        id="jury-linkedin"
                      />
                    </div>

                    <div className="cfsform0-form-input_wrapper">
                      <div className="contact24-form-input_label-2 contact24-hero-heading6">
                        JOBTITLE
                      </div>
                      <input
                        className="contact-form-input-2"
                        name="Job Title"
                        maxLength={256}
                        data-name="Job Title"
                        placeholder="e.g. Senior Product Designer"
                        type="text"
                        id="jury-job-title"
                      />
                    </div>

                    <div className="cfsform0-form-input_wrapper">
                      <div className="contact24-form-input_label-2 contact24-hero-heading6">
                        COMPANYNAME
                      </div>
                      <input
                        className="contact-form-input-2"
                        name="Company Name"
                        maxLength={256}
                        data-name="Company Name"
                        placeholder="e.g. WaysConf"
                        type="text"
                        id="jury-company-name"
                      />
                    </div>

                    <div className="checkbox-radio-wrapper">
                      <div className="contact24-form-input_label-2 contact24-hero-heading6">
                        Specializations (you can choose multiple)
                      </div>
                      {SPECIALIZATIONS.map((option) => (
                        <CheckboxField key={option.id} {...option} />
                      ))}
                    </div>

                    <div className="checkbox-radio-wrapper">
                      <div className="contact24-form-input_label-2 contact24-hero-heading6">
                        Area of expertise (you can choose multiple)
                      </div>
                      {EXPERTISE.map((option) => (
                        <CheckboxField key={option.id} {...option} />
                      ))}
                    </div>

                    <div className="cfsform0-form-input_wrapper">
                      <div className="contact24-form-input_label-2 contact24-hero-heading6">
                        Are you part of any other juries like the WaysConf awards? If yes,
                        please list them.
                      </div>
                      <input
                        className="contact-form-input-2"
                        name="Part of any other juries"
                        maxLength={256}
                        data-name="Part of any other juries"
                        placeholder="e.g. KTR"
                        type="text"
                        id="jury-other-juries"
                      />
                    </div>

                    <div>
                      <h2>GDPR &amp; Feedback</h2>
                    </div>

                    <div className="contact-form-input_wrapper is--c4p">
                      <div className="checkbox-radio-wrapper">
                        <div className="contact24-form-input_label-2 contact24-hero-heading6">
                          Read the consent below and select your answer
                        </div>
                        <div className="margin-top _8px">
                          <p className="is--text-color-silver-3">
                            I consent to the processing of my personal data provided in the
                            recruitment form as well as my image by DESIGNWAYS CONF Sp. z o.o.
                            with its registered office at al. Powstania Warszawskiego 15, 31-539
                            Kraków, as the personal data controller, for purposes of the
                            recruitment process.
                            <br />
                            <a
                              className="label-link"
                              href="https://www.waysconf.com/privacy-policy/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Check how we process data.
                            </a>
                          </p>
                        </div>
                        <RadioField
                          id="jury-data-consent-accept"
                          name="Data Consent"
                          label="I accept"
                          required
                        />
                        <RadioField
                          id="jury-data-consent-decline"
                          name="Data Consent"
                          label="I do not accept"
                        />
                      </div>
                    </div>

                    <div className="contact-form-input_wrapper is--c4p">
                      <div className="checkbox-radio-wrapper">
                        <div className="contact24-form-input_label-2 contact24-hero-heading6">
                          Read the consent below and select your answer
                        </div>
                        <div className="margin-top _8px">
                          <p className="is--text-color-silver-3">
                            I accept the{" "}
                            <a className="label-link" href="#">
                              WaysConf Speaker Requirements and Guidelines
                            </a>
                            , in particular relating to the licence and agree to receive email
                            communication regarding my participation in WaysConf conference.
                          </p>
                        </div>
                        <RadioField
                          id="jury-rag-consent-accept"
                          name="RaG Consent"
                          label="I accept"
                          required
                        />
                        <RadioField
                          id="jury-rag-consent-decline"
                          name="RaG Consent"
                          label="I do not accept"
                        />
                      </div>
                    </div>
                  </div>

                  <button className="ways25-button-secondary white" type="submit">
                    <span className="text-style-nowrap">Send application</span>
                  </button>
                  <input
                    type="hidden"
                    name="_redirect"
                    value="https://waysconf.com/call-for-speakers/success"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
        <AwardsFooter email={footerEmail} />
      </div>
    </div>
  );
}
