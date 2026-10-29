import React from "react";

interface HoneypotFieldsProps {
  className?: string;
}

/**
 * Invisible Honeypot Fields to catch and trap spam bots and automated scrapers.
 * Bots auto-fill these hidden inputs, allowing the server to silently drop their submissions.
 * Real users never see or interact with them.
 */
export function HoneypotFields({ className }: HoneypotFieldsProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        left: "-9999px",
        top: "-9999px",
        opacity: 0,
        height: 0,
        width: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: -1,
      }}
      tabIndex={-1}
      className={className}
    >
      <label htmlFor="hp_company_field">Company Fax Number</label>
      <input
        id="hp_company_field"
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        defaultValue=""
      />

      <label htmlFor="hp_website_field">Website URL</label>
      <input
        id="hp_website_field"
        type="text"
        name="business_fax"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        defaultValue=""
      />
    </div>
  );
}
