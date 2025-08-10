"use client";
import Script from "next/script";

export default function Booking() {
  // GHL embed snippet
  const iframeId = "wOlyiO91MrkrgUgqc857_1754840296544";
  // Some GHL accounts require the widgets domain instead of api.*; using the public widget host below.
  const src = "https://link.msgsndr.com/widget/booking/wOlyiO91MrkrgUgqc857";
  return (
    <section id="booking" className="mx-auto container-max px-6 py-16">
      <h2 className="headline text-3xl md:text-4xl font-semibold">Book an appointment</h2>
      <p className="mt-2 text-muted max-w-prose">Choose a time that works for you. The calendar is loaded from our scheduling provider.</p>

      <div className="mt-6 rounded-xl border bg-white shadow-sm overflow-hidden">
        <iframe
          src={src}
          style={{ width: "100%", height: "900px", border: "none", overflow: "hidden" }}
          scrolling="no"
          id={iframeId}
          title="Redagents appointment scheduler"
          allow="clipboard-write *;"
        />
      </div>
      {/* Provider script to auto-size the iframe */}
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      <p className="mt-3 text-sm text-muted">
        If the calendar doesn’t load, <a className="underline" href={src} target="_blank" rel="noreferrer">open it in a new tab</a>.
      </p>
    </section>
  );
}

