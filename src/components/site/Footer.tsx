export function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-forest-deep py-12">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-xl text-bone">Deinega</span>
          <span className="eyebrow text-verdigris">Remodel</span>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-bone/40">
          Design-build · Seattle, WA
        </p>
        <p className="text-xs text-bone/40">
          © {new Date().getFullYear()} Deinega Remodel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
