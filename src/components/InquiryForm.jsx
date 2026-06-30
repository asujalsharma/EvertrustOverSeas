import { siteMeta } from "../data/siteData";
import { useTranslationContext } from "../context/TranslationContext";
import useTranslatedText from "../hooks/useTranslatedText";
import { useState } from "react";

export default function InquiryForm() {
  const { data } = useTranslationContext();
  const activeSiteMeta = data.siteMeta || siteMeta;
  const title = useTranslatedText("Request by Direct Contact");
  const copy = useTranslatedText(
    "We are not using an online inquiry backend yet. Please contact us directly for quotes, product requirements, private-label requests, and manufacturer discussions.",
  );
  const emailLabel = useTranslatedText("Business Email");
  const phoneLabel = useTranslatedText("Phone");
  const whatsappLabel = useTranslatedText("WhatsApp");
  const websiteLabel = useTranslatedText("Website");
  const emailButton = useTranslatedText("Send Email");
  const whatsappButton = useTranslatedText("Open WhatsApp");
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(activeSiteMeta.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.location.href = `mailto:${activeSiteMeta.email}`;
  };
  return (
    <div className="card-panel p-6 sm:p-8">
      <h3 className="text-2xl font-semibold text-evergreen">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-ink/66">{copy}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-navy/8 bg-white/85 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {emailLabel}
          </p>
          <a
            href={`mailto:${activeSiteMeta.email}`}
            className="mt-3 block text-lg font-semibold text-evergreen"
          >
            {activeSiteMeta.email}
          </a>
        </div>
        <div className="rounded-2xl border border-navy/8 bg-white/85 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {phoneLabel}
          </p>
          <a
            href={`tel:${activeSiteMeta.phone}`}
            className="mt-3 block text-lg font-semibold text-evergreen"
          >
            {activeSiteMeta.phone}
          </a>
        </div>
        <div className="rounded-2xl border border-navy/8 bg-white/85 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {whatsappLabel}
          </p>
          <a
            href={`https://wa.me/${activeSiteMeta.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block text-lg font-semibold text-evergreen"
          >
            {activeSiteMeta.phone}
          </a>
        </div>
        <div className="rounded-2xl border border-navy/8 bg-white/85 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {websiteLabel}
          </p>
          <a
            href={`https://${activeSiteMeta.website}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block text-lg font-semibold text-evergreen"
          >
            {activeSiteMeta.website}
          </a>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={`mailto:${activeSiteMeta.email}`}
          onClick={handleEmailClick}
          className="btn-primary w-40 text-center"
        >
          {copied ? "Email Copied!" : emailButton}
        </a>
        <a
          href={`https://wa.me/${activeSiteMeta.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          {whatsappButton}
        </a>
      </div>
    </div>
  );
}
