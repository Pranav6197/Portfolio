import { motion } from "framer-motion";
import { Code2, Loader2, Mail, Send } from "lucide-react";
import { IconGithub, IconLinkedin } from "../ui/SocialIcons";
import { useState, type FormEvent } from "react";
import { profile } from "../../data/profile";
import { fadeUp, defaultViewport } from "../../lib/motion";
import { SectionHeading } from "../ui/SectionHeading";
import { GlowButton } from "../ui/GlowButton";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const socialButtons = [
  { href: profile.social.email, icon: Mail, label: "Email" },
  { href: profile.social.github, icon: IconGithub, label: "GitHub" },
  { href: profile.social.linkedin, icon: IconLinkedin, label: "LinkedIn" },
  { href: profile.social.leetcode, icon: Code2, label: "LeetCode" },
];

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = "Please enter your name (at least 2 characters).";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.subject.trim() || form.subject.trim().length < 3) {
    errors.subject = "Subject must be at least 3 characters.";
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validation = validate(form);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      setStatus("success");
      setFeedback(data.message || "Message sent successfully!");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something remarkable"
          subtitle="Open to internships, full-time roles, and collaboration on ambitious engineering work."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeUp}
          >
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Whether you&apos;re hiring, mentoring, or exploring a project—reach out. I typically
              respond within 24–48 hours.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {socialButtons.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl glass-panel text-zinc-300 hover:text-cyan-300 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-panel rounded-2xl p-6 md:p-8 space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field
                label="Name"
                id="name"
                value={form.name}
                error={errors.name}
                onChange={(v) => handleChange("name", v)}
              />
              <Field
                label="Email"
                id="email"
                type="email"
                value={form.email}
                error={errors.email}
                onChange={(v) => handleChange("email", v)}
              />
            </div>
            <Field
              label="Subject"
              id="subject"
              value={form.subject}
              error={errors.subject}
              onChange={(v) => handleChange("subject", v)}
            />
            <Field
              label="Message"
              id="message"
              value={form.message}
              error={errors.message}
              onChange={(v) => handleChange("message", v)}
              multiline
            />

            {feedback && (
              <p
                className={`text-sm ${
                  status === "success" ? "text-cyan-300" : "text-red-400"
                }`}
                role="status"
              >
                {feedback}
              </p>
            )}

            <GlowButton
              type="submit"
              variant="primary"
              className="w-full sm:w-auto"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </GlowButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  id: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  multiline?: boolean;
};

function Field({ label, id, value, error, onChange, type = "text", multiline }: FieldProps) {
  const base =
    "w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition-all";
  const border = error ? "border-red-500/50" : "border-white/10 focus:border-cyan-400/40";

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-zinc-300 mb-2">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${base} ${border} resize-none`}
          placeholder={`Your ${label.toLowerCase()}...`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${base} ${border}`}
          placeholder={`Your ${label.toLowerCase()}...`}
        />
      )}
      {error && <p className="mt-1.5 text-xs text-red-400">{error}</p>}
    </div>
  );
}
