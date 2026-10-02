import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Github, Mail, Phone } from "lucide-react";
import Reveal from "../components/Reveal";
import { usePortfolioLanguage } from "../context/usePortfolioLanguage";

const contactEmail = "ahmedhassansumu@gmail.com";

const ContactMe = () => {
  const { t } = usePortfolioLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submissionMessage, setSubmissionMessage] = useState({ text: "", success: false });
  const [emailFallbackUrl, setEmailFallbackUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setSubmissionMessage({ text: "", success: false });
    setEmailFallbackUrl("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_1ce59rk",
        "template_ot55r3t",
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: contactEmail,
          message: formData.message,
        },
        "JqXTmq6GgW1-tNr48"
      );
      setFormData({ name: "", email: "", message: "" });
      setSubmissionMessage({ text: t.messageSent, success: true });
      setEmailFallbackUrl("");
    } catch (error) {
      const isOriginBlocked = Number(error?.status) === 412;
      const message = isOriginBlocked
        ? t.emailjsBlocked.replace("{origin}", window.location.origin)
        : t.messageFailed;
      const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
      const body = encodeURIComponent(`${t.nameLabel}: ${formData.name}\n${t.emailFieldLabel}: ${formData.email}\n\n${formData.message}`);
      setSubmissionMessage({ text: message, success: false });
      setEmailFallbackUrl(`mailto:${contactEmail}?subject=${subject}&body=${body}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contactme" className="section contact-section">
      <div className="page-wrap contact-layout">
        <Reveal className="contact-copy">
          <p className="section-eyebrow">06 — {t.nav.contact}</p>
          <h2 className="section-title">{t.contactTitle}</h2>
          <p className="section-copy">{t.contactIntro}</p>
          <a className="contact-detail" href={`mailto:${contactEmail}`}><Mail aria-hidden="true" /><span><small>{t.emailLabel}</small>{contactEmail}</span><ArrowUpRight aria-hidden="true" /></a>
          <a className="contact-detail" href="tel:+250734332198"><Phone aria-hidden="true" /><span><small>{t.phoneLabel}</small>+250 734 332 198</span><ArrowUpRight aria-hidden="true" /></a>
          <a className="contact-detail" href="https://github.com/wadhass" target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" /><span><small>{t.github}</small>github.com/wadhass</span><ArrowUpRight aria-hidden="true" /></a>
        </Reveal>
        <Reveal className="contact-form-wrap" delay={0.1}>
          <form onSubmit={handleSubmit} className="contact-form" aria-busy={isSubmitting}>
            <label htmlFor="contact-name">{t.nameLabel}</label>
            <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} autoComplete="name" required maxLength={120} />
            <label htmlFor="contact-email">{t.emailFieldLabel}</label>
            <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="email" placeholder={t.emailPlaceholder} required maxLength={254} />
            <label htmlFor="contact-message">{t.messageLabel}</label>
            <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} placeholder={t.messagePlaceholder} required minLength={10} maxLength={3000} rows={5} />
            <button className="button contact-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? t.sending : t.sendMessage}<ArrowUpRight aria-hidden="true" /></button>
            <div className={`form-status${submissionMessage.success ? " form-status--success" : ""}`} aria-live="polite" role="status">
              {submissionMessage.text && <p>{submissionMessage.text}</p>}
              {emailFallbackUrl && <a className="form-fallback" href={emailFallbackUrl}>{t.emailFallback}: {contactEmail}</a>}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export default ContactMe;