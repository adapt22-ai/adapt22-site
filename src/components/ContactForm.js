"use client";
import Script from "next/script";
import Link from "next/link";
import { useRef, useState } from "react";
export default function ContactForm({ enabled, siteKey }) {
  const [state, setState] = useState("idle");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");
  const widget = useRef(null);
  const widgetId = useRef(null);
  const submissionId = useRef(null);
  function mount() {
    if (widget.current && window.turnstile && widgetId.current === null) {
      widgetId.current = window.turnstile.render(widget.current, {
        sitekey: siteKey,
        action: "contact",
        theme: "light",
        callback: setToken,
        "expired-callback": () => setToken(""),
        "error-callback": () => {
          setToken("");
          setMessage(
            "The verification could not load. Please reload or email Jackson directly.",
          );
        },
      });
    }
  }
  async function submit(e) {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    setMessage("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    submissionId.current ??= crypto.randomUUID();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          token,
          submissionId: submissionId.current,
        }),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(
          result.error || "Your message could not be sent. Please try again.",
        );
      setState("sent");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error.message ||
          "Your message could not be sent. Please email Jackson directly.",
      );
      setToken("");
      if (window.turnstile && widgetId.current !== null)
        window.turnstile.reset(widgetId.current);
    }
  }
  if (state === "sent")
    return (
      <div className="contact-form form-success" role="status">
        <p className="eyebrow">Message submitted</p>
        <h2>Thanks for getting in touch.</h2>
        <p>
          Your message was accepted for delivery to Jackson. You can also use
          the scheduling link to find a time to talk.
        </p>
        <button
          className="text-link"
          onClick={() => {
            submissionId.current = null;
            widgetId.current = null;
            setToken("");
            setState("idle");
          }}
        >
          Write another message ↗
        </button>
      </div>
    );
  return (
    <form
      className="contact-form"
      onSubmit={submit}
      aria-busy={state === "sending"}
    >
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
          />
        </label>
        <label>
          <span>Work email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </label>
      </div>
      <label>
        <span>
          Company <small>(optional)</small>
        </span>
        <input name="company" autoComplete="organization" maxLength={150} />
      </label>
      <label>
        <span>What are you working through?</span>
        <textarea
          name="message"
          required
          minLength={20}
          maxLength={5000}
          rows={6}
        />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>
          Leave this blank
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {enabled ? (
        <>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
            strategy="afterInteractive"
            onReady={mount}
          />
          <div ref={widget} />
        </>
      ) : (
        <p className="form-status">
          The message form is not available in this preview. You can email{" "}
          <a href="mailto:jackson@adapt22.ai">jackson@adapt22.ai</a> or book a
          conversation.
        </p>
      )}
      <p className="consent">
        We’ll use these details to respond to your inquiry. Please don’t include
        passwords, confidential records, or sensitive personal information. Read
        our <Link href="/privacy-policy">privacy notice</Link>.
      </p>
      {message && (
        <p className="form-status form-error" role="alert">
          {message}
        </p>
      )}
      <button
        className="button"
        type="submit"
        disabled={!enabled || !token || state === "sending"}
      >
        {state === "sending" ? "Sending…" : "Send your message"}{" "}
        <span aria-hidden="true">↗</span>
      </button>
    </form>
  );
}
