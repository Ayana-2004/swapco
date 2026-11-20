"use client";

import { useId, useState } from "react";

// A mailto: link does nothing on a computer with no email app set up, which
// testers read as a broken button (Bug_028). The address is shown as text
// and can be copied, so it works either way.
export default function EmailActions({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const id = useId();

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Clipboard API blocked (old browser or insecure context): select the
      // address so the visitor can copy it themselves.
      const el = document.getElementById(id);
      if (el) window.getSelection()?.selectAllChildren(el);
      return;
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mt-6">
      <p id={id} className="select-all font-semibold text-navy">
        {email}
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          Send email
        </a>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy ring-1 ring-navy/15 transition-colors hover:ring-navy/40"
        >
          <span aria-live="polite">{copied ? "Copied" : "Copy address"}</span>
        </button>
      </div>
    </div>
  );
}
