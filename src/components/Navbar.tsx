import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiMapPin, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/tours", label: "Tours" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/15 backdrop-blur-md shadow-[0_4px_20px_-12px_rgba(0,0,0,0.15)]" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-18 items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-soft)]">
            <FiMapPin className="h-5 w-5" />
          </span>
          <span className={scrolled ? "text-foreground" : "text-white drop-shadow"}>
            TRAV<span className="text-blue-500">ROID</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                scrolled ? "text-foreground/80 hover:bg-secondary" : "text-white/90 hover:bg-white/15"
              }`}
              activeProps={{ className: "!bg-accent/15 !text-accent" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          {/* <button className={`ml-2 inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium ${scrolled ? "text-foreground/80 hover:bg-secondary" : "text-white/90 hover:bg-white/15"}`}>
            INR <FiChevronDown className="h-3.5 w-3.5" />
          </button> */}
          <Link to="/tours" className="btn-accent ml-2 !py-2.5 !px-5 text-sm">Plan My Trip</Link>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className={`md:hidden grid h-10 w-10 place-items-center rounded-full ${scrolled ? "bg-secondary text-foreground" : "bg-white/15 text-white backdrop-blur"}`}
          aria-label="Menu"
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-foreground hover:bg-secondary"
                  activeProps={{ className: "!bg-accent/15 !text-accent" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/tours" onClick={() => setOpen(false)} className="btn-accent mt-2">Plan My Trip</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
