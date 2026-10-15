
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const linkGroups = [
    {
      title: "Explore",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Restaurants", href: "/restaurants" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Help & Support",
      links: [
        { label: "FAQs", href: "/faq" },
        { label: "Help Center", href: "/help" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms & Conditions", href: "/terms" },
      ],
    },
  ];

  const handleSubscribe = (event) => {
    event.preventDefault();
    setMessage("Thanks! Newsletter signup needs a backend connection.");
    setEmail("");
  };

  return (
    <footer className="relative isolate mt-16 w-full min-w-0 overflow-hidden bg-[#101713] text-white">
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 -z-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl"
      />

      {/* Full-width content container */}
      <div className="mx-auto w-full max-w-none px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Newsletter */}
        <section className="border-b border-white/10 py-12 sm:py-16">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="min-w-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Fresh updates
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Good food.
                <span className="block text-emerald-400">
                  Great mood.
                </span>
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
                Discover new restaurants, exclusive deals, and delicious
                updates delivered straight to your inbox.
              </p>
            </div>

            <div className="min-w-0">
              <form
                onSubmit={handleSubscribe}
                className="flex w-full flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-2 sm:flex-row sm:items-center sm:rounded-full"
              >
                <label htmlFor="fresh-newsletter" className="sr-only">
                  Email address
                </label>

                <input
                  id="fresh-newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setMessage("");
                  }}
                  placeholder="Enter your email address"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-emerald-400/50 sm:pl-5"
                />

                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-400 px-6 py-3 text-sm font-bold text-[#101713] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 active:scale-95 sm:rounded-full"
                >
                  Subscribe <span aria-hidden="true">→</span>
                </button>
              </form>

              <p aria-live="polite" className="mt-3 text-xs leading-5 text-gray-400">
                {message || "No spam. Just delicious updates."}
              </p>
            </div>
          </div>
        </section>

        {/* Footer columns */}
        <section className="grid grid-cols-1 gap-x-8 gap-y-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-12 lg:py-16">
          {/* Brand */}
          <div className="min-w-0">
            <a href="/" className="group inline-flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-400 text-2xl transition duration-300 group-hover:rotate-6 group-hover:scale-105">
                🍃
              </span>

              <span className="text-3xl font-extrabold tracking-tight">
                Fresh<span className="text-emerald-400">.</span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Your cravings, our mission. Discover amazing restaurants and
              enjoy delicious meals delivered right to your door.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { label: "Instagram", text: "ig", href: "https://instagram.com" },
                { label: "Facebook", text: "fb", href: "https://facebook.com" },
                { label: "X", text: "𝕏", href: "https://x.com" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-bold text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-400 hover:text-[#101713]"
                >
                  {social.text}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {linkGroups.map((group) => (
            <div key={group.title} className="min-w-0">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
                {group.title}
              </h3>

              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex max-w-full items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-emerald-400"
                    >
                      <span className="h-1 w-0 shrink-0 rounded-full bg-emerald-400 transition-all duration-300 group-hover:w-2" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white">
              Get in touch
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="text-lg text-emerald-400" aria-hidden="true">
                  ✉
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500">Email us</p>
                  <a
                    href="mailto:hello@fresh.example"
                    className="mt-1 block break-words text-sm text-gray-300 transition-colors hover:text-emerald-400"
                  >
                    hello@fresh.example
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg text-emerald-400" aria-hidden="true">
                  ◷
                </span>
                <div>
                  <p className="text-xs text-gray-500">Support hours</p>
                  <p className="mt-1 text-sm text-gray-300">
                    Every day, all day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App download banner */}
        <section className="mb-10 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="min-w-0">
            <h3 className="text-lg font-bold sm:text-xl">
              Your next meal is just a tap away.
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Great food, wherever life takes you.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50"
            >
              <span className="text-xl" aria-hidden="true"></span>
              <span>
                <span className="block text-[10px] text-gray-400">
                  Download on the
                </span>
                <span className="text-sm font-semibold">App Store</span>
              </span>
            </a>

            <a
              href="#"
              onClick={(event) => event.preventDefault()}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50"
            >
              <span className="text-xl" aria-hidden="true">▶</span>
              <span>
                <span className="block text-[10px] text-gray-400">
                  GET IT ON
                </span>
                <span className="text-sm font-semibold">Google Play</span>
              </span>
            </a>
          </div>
        </section>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} Fresh. Made with{" "}
            <span className="text-emerald-400">♥</span> for food lovers.
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="text-sm font-medium text-gray-400 transition hover:text-emerald-400"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
