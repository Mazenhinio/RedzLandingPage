"use client";
import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";
import { Download } from "lucide-react";

export default function QRPage() {
  const targetUrl = useMemo(() => {
    const base =
      process.env.NEXT_PUBLIC_SITE_URL ||
      "https://redzlandingpage-mazen-khalils-projects.vercel.app";
    return `${base}/`;
  }, []);

  const [dataUrl, setDataUrl] = useState<string>("");

  useEffect(() => {
    QRCode.toDataURL(targetUrl, {
      errorCorrectionLevel: "M",
      margin: 2,
      width: 640,
      color: { dark: "#111318", light: "#ffffff" },
    }).then(setDataUrl);
  }, [targetUrl]);

  return (
    <main className="min-h-[80svh] px-6 py-16 flex flex-col items-center gap-6">
      <h1 className="headline text-3xl md:text-5xl font-semibold">QR Code</h1>
      <p className="text-muted text-center max-w-prose">
        Scan to open the Redagents landing page.
      </p>
      <div className="p-4 rounded-xl border shadow-sm bg-white">
        {dataUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={dataUrl} alt="QR code to Redagents landing page" className="w-[320px] h-[320px] md:w-[480px] md:h-[480px]" />
        )}
      </div>
      {dataUrl && (
        <a
          href={dataUrl}
          download="redagents-qr.png"
          className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-brand text-white shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand hover:opacity-95"
        >
          <Download size={18} /> Download PNG
        </a>
      )}
      <p className="text-sm text-muted" aria-live="polite">
        Target URL: <span className="font-mono">{targetUrl}</span>
      </p>
    </main>
  );
}

