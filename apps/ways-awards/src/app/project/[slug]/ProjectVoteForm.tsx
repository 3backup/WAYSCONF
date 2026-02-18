"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@waysconf/ui";

type Props = {
  projectId: string;
  projectName: string;
};

export function ProjectVoteForm({ projectId, projectName }: Props) {
  const [email, setEmail] = useState("");
  const [rules, setRules] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const canSubmit = email.length > 0 && rules && !loading;

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);
    try {
      const res = await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, email, marketing: rules }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        status?: string;
        message?: string;
      };
      const ok = res.ok && data?.status === "SUCCESS";
      if (ok) {
        setMessage({
          type: "success",
          text: "Thank you! Check your email and confirm your vote.",
        });
        setEmail("");
      } else {
        setMessage({
          type: "error",
          text: data?.message ?? "Something went wrong. Please try again.",
        });
      }
    } catch {
      setMessage({ type: "error", text: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form-wrapper">
      <input type="hidden" name="projectId" value={projectId} />
      <h4>Vote for {projectName}</h4>
      <p className="is--paragraph-small is--text-color-silver">
        Thank you for participating in the WaysAwards! As a token of our
        appreciation, you&apos;ll receive a 10% discount, which you can claim
        after casting your vote. With your email address you can only vote for
        one project in each category.
      </p>

      <div className="contact-form-input_wrapper">
        <input
          id="vote-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="e.g. hello@waysconf.com"
          className="contact-form-input w-input"
          disabled={loading}
        />
        <div className="contact-form-input_label">Email</div>
      </div>

      <label
        className="checkbox-field is--consent"
        onClick={() => setRules((current) => !current)}
      >
        <div
          className={`w-checkbox-input w-checkbox-input--inputType-custom checkbox-box ${
            rules ? "w--redirected-checked" : ""
          }`}
        />
        <input
          type="checkbox"
          checked={rules}
          readOnly
          value={rules ? "checked" : undefined}
          style={{
            opacity: 0,
            position: "absolute",
            inset: 0,
            width: "20px",
            height: "20px",
            cursor: "pointer",
          }}
        />
        <span
          className="checkbox-label is-awards w-form-label"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setRules((current) => !current);
          }}
        >
          I accept the terms and conditions (Required) and agree to receive
          emails regarding the WaysConf Awards and related promotions,
          including a 10% discount on WaysConf tickets. This consent is
          necessary to confirm your vote and receive the discount.
        </span>
      </label>

      {message?.type === "success" && (
        <div className="contact-form-success w-form-done">
          <div>{message.text}</div>
        </div>
      )}
      {message?.type === "error" && (
        <div className="error-form-contact w-form-fail">
          <div>{message.text}</div>
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        size="large"
        disabled={!canSubmit}
        className={canSubmit ? "" : "opacity-50"}
      >
        {loading ? "Sending..." : "Vote for this project →"}
      </Button>
    </form>
  );
}
