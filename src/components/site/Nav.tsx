import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Transformations", href: "#before-after" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Studio", href: "#about" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "border-b border-bone/10 bg-forest-deep/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-xl tracking-tight text-bone">
            Deinega
          </span>
          <span className="eyebrow text-verdigris">Remodel</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.18em] text-bone/60 transition-colors hover:text-bone"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-sm border border-bone/25 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-bone transition-colors hover:border-verdigris hover:bg-verdigris sm:inline-block"
          >
            Get a quote
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-bone lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-bone/10 bg-forest-deep/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex w-full max-w-[1400px] flex-col px-6 py-4">
            {links.concat({ label: "Contact", href: "#contact" }).map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-bone/10 py-4 text-sm uppercase tracking-[0.18em] text-bone/75 last:border-0"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
