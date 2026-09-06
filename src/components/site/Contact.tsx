import { useState } from "react";
import { motion } from "motion/react";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const projectTypes = [
  "Kitchen",
  "Bathroom",
  "Whole home",
  "Addition / ADU",
  "Exterior / deck",
  "Not sure yet",
];

const field =
  "w-full rounded-sm border border-bone/15 bg-bone/[0.04] px-4 py-3.5 text-sm text-bone placeholder:text-bone/35 outline-none transition-colors focus:border-verdigris";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: projectTypes[0],
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProject type: ${form.projectType}\n\n${form.message}`,
    );
    window.location.href = `mailto:dejnegapavlo3@gmail.com?subject=${encodeURIComponent(
      `Project inquiry — ${form.projectType}`,
    )}&body=${body}`;
    toast.success("Opening your email app to send the request.");
  };

  return (
    <section
      id="contact"
      className="ink-panel grain relative overflow-hidden py-24 md:py-36"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <p className="eyebrow text-verdigris">Request a quote</p>
            <h2 className="mt-5 text-[clamp(2rem,5vw,4rem)] leading-[1.02] text-bone">
              Tell us about
              <span className="block italic">your home.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-bone/55">
              Send a few details and we&rsquo;ll come out for a walkthrough,
              talk budget honestly, and follow up with a line-item estimate.
            </p>

            <div className="mt-12 space-y-5 border-t border-bone/12 pt-8">
              <a
                href="mailto:dejnegapavlo3@gmail.com"
                className="flex items-center gap-3 text-sm text-bone/75 transition-colors hover:text-verdigris"
              >
                <Mail className="h-4 w-4" /> dejnegapavlo3@gmail.com
              </a>
              <p className="flex items-center gap-3 text-sm text-bone/55">
                <MapPin className="h-4 w-4" /> Seattle, WA — Greater Puget Sound
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            onSubmit={onSubmit}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="eyebrow text-bone/45" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className={`${field} mt-3`}
                />
              </div>
              <div>
                <label className="eyebrow text-bone/45" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@email.com"
                  className={`${field} mt-3`}
                />
              </div>
              <div>
                <label className="eyebrow text-bone/45" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="(206) 000-0000"
                  className={`${field} mt-3`}
                />
              </div>
              <div>
                <label className="eyebrow text-bone/45" htmlFor="projectType">
                  Project type
                </label>
                <select
                  id="projectType"
                  value={form.projectType}
                  onChange={(e) =>
                    setForm({ ...form, projectType: e.target.value })
                  }
                  className={`${field} mt-3 appearance-none`}
                >
                  {projectTypes.map((t) => (
                    <option key={t} value={t} className="bg-forest-deep">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="eyebrow text-bone/45" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Scope, timeline, neighborhood, budget range…"
                  className={`${field} mt-3 resize-none`}
                />
              </div>
            </div>

            <button
              type="submit"
              className="group mt-8 inline-flex w-full items-center justify-between gap-6 rounded-sm bg-verdigris px-7 py-5 text-sm font-medium tracking-wide text-bone transition-colors hover:bg-bone hover:text-forest-deep sm:w-auto"
            >
              Send project request
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
