import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FiTarget, FiEye, FiHeart } from "react-icons/fi";
import SectionHeader from "@/components/SectionHeader";
import hero from "@/assets/hero-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Travroid — Our Story & Team" },
      { name: "description", content: "Travroid Holidays has been crafting unforgettable journeys for - years across 60+ destinations worldwide." },
      { property: "og:title", content: "About Travroid Holidays" },
      { property: "og:description", content: "Meet the team behind 50,000+ happy travelers." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* <section className="relative overflow-hidden bg-[var(--gradient-primary)] py-20 text-primary-foreground md:py-28"> */} 
           <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-16 text-primary-foreground md:py-24">
        <div className="container-x relative">
          {/* <span className="eyebrow !text-accent-glow">Our story</span> */}
          <span className="eyebrow inline-flex items-center gap-2 text-slate-600 font-medium">
      <div className="w-2 h-2 bg-blue-500 rounded-full" />
      Our Story
    </span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold md:text-6xl">Travel is the only thing you buy that makes you richer.</h1>
          <p className="mt-5 max-w-2xl text-slate-600 text-primary-foreground/85">For - years, Travroid has been turning bucket lists into boarding passes. We're a team of travelers, not just agents.</p>
        </div>
      </section>

{/* <section className="relative overflow-hidden bg-gradient-to-r from-blue-100 to-blue-200 py-20 text-gray-900 md:py-28">
  <div className="container-x relative">
    <span className="eyebrow !text-blue-600">Our story</span>
    <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold md:text-6xl">Travel is the only thing you buy that makes you richer.</h1>
    <p className="mt-5 max-w-2xl text-gray-800/85">For 15+ years, Travroid has been turning bucket lists into boarding passes. We're a team of travelers, not just agents.</p>
  </div>
</section> */}

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-2 items-center">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={hero}
            alt="Travel"
            loading="lazy"
            className="rounded-3xl shadow-[var(--shadow-elegant)] aspect-[4/3] object-cover"
          />
          <div>
            <span className="eyebrow text-blue-600">Who we are</span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Crafting journeys that become memories</h2>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              {/* Born in Mumbai in 2010, Travroid started as a passion project between three college friends obsessed with maps. Today we run handcrafted holidays across 60+ countries, with offices in Mumbai, Bangalore and Dubai. */}
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="mt-4 text-foreground/80 leading-relaxed">
              Every itinerary is hand-built by destination experts who have been there. No copy-paste templates. No call center.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-secondary/30">
        <div className="container-x">
          <SectionHeader eyebrow="What drives us" title="Mission, vision & values" />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: FiTarget, title: "Mission", text: "Make luxury travel personal, sustainable and stress-free for every Indian traveler." },
              { icon: FiEye, title: "Vision", text: "To be South Asia's most loved boutique travel company by 2030." },
              { icon: FiHeart, title: "Values", text: "Honesty over hard-sell. Curation over volume. Stories over checklists." },
            ].map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-elegant !p-7 bg-card">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-warm)] text-accent-foreground"><v.icon className="h-5 w-5" /></span>
                <h3 className="mt-4 font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div className="container-x">
          <div className="rounded-3xl bg-[var(--gradient-primary)] px-6 py-12 text-primary-foreground md:px-16">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              {[
                { v: "50K+", l: "Happy travelers" },
                { v: "60+", l: "Countries covered" },
                { v: "15", l: "Years of magic" },
                { v: "4.9", l: "Customer rating" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-4xl font-bold md:text-5xl">{s.v}</p>
                  <p className="mt-1 text-sm text-primary-foreground/80">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

<section className="section">
  <div className="container-x">
    <div className="rounded-3xl bg-[var(--gradient-primary)] px-6 py-12 text-black md:px-16">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
        {[
          { v: "-", l: "Happy travelers" },
          { v: "-", l: "Countries covered" },
          { v: "-", l: "Years of magic" },
          { v: "-", l: "Customer rating" },
        ].map((s) => (
          <div key={s.l}>
            <p className="font-display text-4xl text-blue-500 font-bold md:text-5xl">{s.v}</p>
            <p className="mt-1 text-sm text-black/80">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="The crew" title="Meet the explorers behind your trip" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Aditya Rao", role: "Founder & CEO", initials: "AR" },
              { name: "Meera Nair", role: "Head of Experiences", initials: "MN" },
              { name: "Karan Singh", role: "Europe Specialist", initials: "KS" },
              { name: "Tara Khan", role: "Honeymoon Curator", initials: "TK" },
            ].map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-elegant text-center !p-6 bg-card">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[var(--gradient-primary)] font-display text-2xl font-bold text-primary-foreground">{m.initials}</div>
                <h4 className="mt-4 font-display text-lg font-bold">{m.name}</h4>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
