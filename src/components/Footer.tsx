import { Link } from "@tanstack/react-router";
import { FiMapPin, FiPhone, FiMail, FiInstagram, FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground">
              <FiMapPin className="h-5 w-5" />
            </span>
        TRAV<span className="text-blue-500">ROID</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Curated luxury holidays across India and 60+ countries. Designed for travelers who want stories, not itineraries.
          </p>
          {/* <div className="mt-5 flex gap-2">
            {[FiInstagram, FiFacebook, FiTwitter, FiYoutube].map((Icon, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-background border border-border text-foreground/70 transition-all hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div> */}
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {[
              { to: "/tours", label: "All Tours" },
              { to: "/about", label: "About Us" },
              { to: "/blog", label: "Travel Stories" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}><Link to={l.to} className="text-muted-foreground hover:text-accent transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>


        <div>
          <h4 className="font-semibold text-foreground mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><FiMapPin className="mt-0.5 h-4 w-4 text-accent shrink-0" /> 2nd Floor, SJ Modern Tower, Vallalar Salai Road Kamaraj Nagar, Puducherry - 605011</li>
            <li className="flex gap-3"><FiPhone className="mt-0.5 h-4 w-4 text-accent shrink-0" /> +91 </li>
            <li className="flex gap-3"><FiMail className="mt-0.5 h-4 w-4 text-accent shrink-0" /> hr@travroid.com</li>
          </ul>
        </div>

        {/* <div>
          <h4 className="font-semibold text-foreground mb-4">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-4">Get monthly handpicked deals & travel inspiration.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
            />
            <button className="btn-primary !px-5 !py-2.5 text-sm">Join</button>
          </form>
        </div> */}
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} WanderLux Holidays. All rights reserved.</p>
          <p>Crafted with ♡ for explorers everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
