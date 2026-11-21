"use client";

import { useState, type FormEvent } from "react";
import { Send, Mail, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { site } from "@/content/site";

const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Two honest modes:
 *  - NEXT_PUBLIC_FORM_ENDPOINT set (e.g. Formspree) → submits directly.
 *  - Not set → opens the visitor's email app with the message pre-filled.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const connected = Boolean(ENDPOINT);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (data._gotcha) return; // spam honeypot

    if (!connected) {
      const subject = encodeURIComponent(`Enquiry from ${data.name}${data.company ? `, ${data.company}` : ""}`);
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name}\n${data.company || ""}\n${data.email}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: data.name, email: data.email, company: data.company, message: data.message }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-start rounded-[1.75rem] bg-white p-8">
        <CheckCircle2 className="h-8 w-8 text-mint-700" aria-hidden="true" />
        <p className="mt-4 text-xl font-semibold text-night">Thank you — message received.</p>
        <p className="mt-2 text-ink-700">I’ll reply personally, usually within one working day.</p>
      </div>
    );
  }

  const field =
    "mt-2 block w-full rounded-xl border border-[#E4E8EE] bg-[#F7F8FA] px-4 py-3 text-[0.95rem] text-ink-900 placeholder:text-ink-500/70 transition-colors focus:border-mint focus:bg-white focus:outline-none focus:ring-4 focus:ring-mint/20";
  const label = "text-sm font-semibold text-night";

  return (
    <form onSubmit={onSubmit} className="rounded-[1.75rem] bg-white p-6 shadow-2xl shadow-night/10 md:p-9" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name</label>
          <input id="name" name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className={label}>Company <span className="font-normal text-ink-500">(optional)</span></label>
          <input id="company" name="company" autoComplete="organization" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={label}>How can I help?</label>
          <textarea id="message" name="message" required rows={5} className={`${field} resize-y`}
            placeholder="A few lines on the challenge, timescales or role you have in mind." />
        </div>
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 flex items-start gap-2 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />
          Sorry, that didn’t send. Please email me directly at {site.email}.
        </p>
      )}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-ink-500 sm:max-w-[60%]">
          {connected
            ? "Your details are used only to reply to your enquiry. "
            : "This opens your email app with your message ready to send. "}
          See the <a href="/privacy" className="underline underline-offset-2 hover:text-night">privacy notice</a>.
        </p>
        <button type="submit" disabled={status === "sending"} className="btn group bg-night text-white hover:bg-night-800 disabled:opacity-60">
          {status === "sending" ? (
            <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…</>
          ) : connected ? (
            <>Send message <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" /></>
          ) : (
            <>Continue in email <Mail className="h-4 w-4" aria-hidden="true" /></>
          )}
        </button>
      </div>
    </form>
  );
}
