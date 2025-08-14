"use client";
import { useState, useEffect } from "react";
import Script from "next/script";

// Light theme tokens (white-first)
const tokens = {
  bg: "#FFFFFF",
  bgSubtle: "#F7F8FB",
  card: "#FFFFFF",
  border: "#E7E9F0",
  divider: "#E0E3EA",
  textStrong: "#0F1222",
  text: "#2B3040",
  textDim: "#656C7A",
  textMuted: "#8D94A3",
  brand: "#E3122D",
  brandHover: "#C40F26",
  brand50: "#FFF1F3",
  focus: "#E3122D",
  roseGlow: "#FF6B81",
};

function Container({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-6 sm:px-8 ${className}`}>{children}</div>
  );
}

function Field({ label, id, type = "text", as, placeholder, rows, options, value, onChange, required }: { 
  label: React.ReactNode; 
  id: string; 
  type?: string; 
  as?: string; 
  placeholder?: string; 
  rows?: number; 
  options?: { value: string; label: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
}) {
  const Comp = as === "textarea" ? "textarea" : as === "select" ? "select" : "input";
  
  return (
    <label htmlFor={id} className="block text-sm">
      <span className="mb-2 block" style={{ color: tokens.text }}>{label}</span>
      {as === "select" ? (
                <select
          id={id}
          name={id}
          value={value || ""}
          onChange={onChange}
          required={required}
          className="w-full rounded-xl px-4 py-3 pr-8 outline-none transition appearance-none"
          style={{
            background: tokens.card,
            border: `1px solid ${tokens.border}`,
            color: tokens.text,
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23656C7A' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: 'right 12px center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '16px',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "#000000";
            e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0,0,0,0.1)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = tokens.border;
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <option value="">{placeholder}</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <Comp
          id={id}
          name={id}
          placeholder={placeholder}
          rows={rows}
          type={as === "textarea" ? undefined : type}
          onChange={onChange}
          required={required}
          className="w-full rounded-xl px-4 py-3 outline-none transition"
          style={{
            background: tokens.card,
            border: `1px solid ${tokens.border}`,
            color: tokens.text,
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "#000000";
            e.currentTarget.style.boxShadow = "0 0 0 2px rgba(0,0,0,0.1)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = tokens.border;
            e.currentTarget.style.boxShadow = "none";
          }}
        />
      )}
    </label>
  );
}

export default function ContactForm() {
  const [selectedTrack, setSelectedTrack] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    message: ""
  });
  
  // GHL embed snippet
  const iframeId = "wOlyiO91MrkrgUgqc857_1754840296544";
  const src = "https://link.msgsndr.com/widget/booking/wOlyiO91MrkrgUgqc857";

  // Check for selected track from localStorage on component mount and listen for changes
  useEffect(() => {
    const checkForStoredTrack = () => {
      const storedTrack = localStorage.getItem('selectedTrack');
      if (storedTrack) {
        setSelectedTrack(storedTrack);
        // Clear the stored track so it doesn't persist
        localStorage.removeItem('selectedTrack');
      }
    };

    // Check on mount
    checkForStoredTrack();

    // Listen for storage events (when localStorage changes from another component)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'selectedTrack' && e.newValue) {
        setSelectedTrack(e.newValue);
        localStorage.removeItem('selectedTrack');
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Also check periodically for changes (fallback for same-tab updates)
    const interval = setInterval(checkForStoredTrack, 100);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showForm, setShowForm] = useState(true);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          track: selectedTrack,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: "",
          email: "",
          country: "",
          message: ""
        });
        setSelectedTrack("");
        // Close form immediately
        setShowForm(false);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-32" style={{ background: '#FAFBFC' }}>
        <Container>
                    <div className="space-y-12">
            {/* Booking Calendar */}
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl" style={{ color: tokens.textStrong }}>
                Book an appointment
              </h2>
              <p className="mt-2 max-w-prose" style={{ color: tokens.textDim }}>
                Choose a time that works for you. The calendar is loaded from our scheduling provider.
              </p>

              <div className="-mt-4">
                <iframe
                  src={src}
                  style={{ width: "100%", height: "700px", border: "none", overflow: "hidden" }}
                  scrolling="no"
                  id={iframeId}
                  title="Redagents appointment scheduler"
                  allow="clipboard-write *;"
                />
                
                <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
                
                <p className="mt-4 text-sm" style={{ color: tokens.textMuted }}>
                  If the calendar doesn&apos;t load, <a className="underline" href={src} target="_blank" rel="noreferrer">open it in a new tab</a>.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contact-form">
              <h2 className="mt-40 text-2xl font-bold sm:text-3xl" style={{ color: tokens.textStrong }}>
                Send us a message
              </h2>
              <p className="mt-3 max-w-2xl" style={{ color: tokens.textDim }}>
                Have questions about fit, time, or cost? Shoot us an email and we will get back to you as soon as possible.
              </p>
              
              {showForm ? (
                <form onSubmit={handleFormSubmit} className="mt-8 grid grid-cols-1 gap-4 rounded-2xl p-6 sm:grid-cols-2" style={{ background: tokens.card, border: `1px solid ${tokens.border}`, boxShadow: "0 8px 30px rgba(15,18,34,0.06)" }}>
                <Field 
                  label="Name" 
                  id="name" 
                  placeholder="Your full name" 
                  as={undefined} 
                  rows={undefined}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <Field 
                  label={<span>Track <span style={{ color: '#E3122D' }}>*</span></span>}
                  id="track" 
                  placeholder="Select a program" 
                  as="select" 
                  rows={undefined}
                  value={selectedTrack}
                  onChange={(e) => setSelectedTrack(e.target.value)}
                  required={true}
                  options={[
                    { value: "Sales Foundations", label: "Sales Foundations" },
                    { value: "Customer Support", label: "Customer Support" },
                    { value: "Health & Safety (UK)", label: "Health & Safety (UK)" },
                    { value: "Teaching & Assessing", label: "Teaching & Assessing" },
                    { value: "unsure", label: "Not sure yet" }
                  ]}
                />
                <div className="sm:col-span-2">
                  <Field 
                    label={<span>Email <span style={{ color: '#E3122D' }}>*</span></span>}
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    as={undefined} 
                    rows={undefined}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required={true}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Field 
                    label={<span>Message <span style={{ color: '#E3122D' }}>*</span></span>}
                    id="message" 
                    as="textarea" 
                    placeholder="Tell us what you want to achieve" 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required={true}
                  />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-3 text-lg font-normal text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "#000000", boxShadow: "0 12px 40px rgba(0,0,0,0.18)" }}
                    onMouseEnter={(e) => (!isSubmitting && (e.currentTarget.style.backgroundColor = "#333333"))}
                    onMouseLeave={(e) => (!isSubmitting && (e.currentTarget.style.backgroundColor = "#000000"))}
                  >
                    {isSubmitting ? 'Sending...' : 'Send message'}
                  </button>
                  

                  
                  {submitStatus === 'error' && (
                    <div className="mt-4 p-4 rounded-xl text-red-700 bg-red-50 border border-red-200">
                      Sorry, there was an error sending your message. Please try again.
                    </div>
                  )}
                </div>
              </form>
              ) : (
                <div className="mt-8 p-8 rounded-2xl text-center" style={{ background: tokens.card, border: `1px solid ${tokens.border}`, boxShadow: "0 8px 30px rgba(15,18,34,0.06)" }}>
                  <div className="text-green-600 text-2xl mb-4">✓</div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: tokens.textStrong }}>
                    Message Sent Successfully!
                  </h3>
                  <p className="mb-6" style={{ color: tokens.textDim }}>
                    Thank you for your message. We&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => {
                      setShowForm(true);
                      setSubmitStatus('idle');
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-white"
                    style={{ backgroundColor: tokens.brand }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = tokens.brandHover}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = tokens.brand}
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
  );
}

