"use client";
import Script from "next/script";

export default function ContactForm() {
  const src = "https://api.leadconnectorhq.com/widget/form/2h8muwH7PKbmXHFkG1uH";
  const iframeId = "inline-2h8muwH7PKbmXHFkG1uH";
  return (
    <section id="contact" className="bg-[#651a19] text-[#F7E1B5]">
      <div className="mx-auto container-max px-6 py-16">
        <h2 className="headline text-3xl md:text-4xl font-semibold">Contact Us</h2>
        <p className="mt-2 max-w-prose opacity-90">Have a question or want to start your journey? Fill in the form and we’ll get back to you.</p>

      <div className="mt-6 rounded-xl overflow-hidden">
        <iframe
          src={src}
          style={{ width: "100%", height: "100%", border: "none", borderRadius: "4px" }}
          id={iframeId}
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Contact Us"
          data-height="548"
          data-layout-iframe-id={iframeId}
          data-form-id="2h8muwH7PKbmXHFkG1uH"
          title="Contact Us"
        />
      </div>
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
      <p className="mt-3 text-sm opacity-90">
        If the form doesn’t load, <a className="underline text-white" href={src} target="_blank" rel="noreferrer">open it in a new tab</a>.
      </p>
      </div>
    </section>
  );
}

