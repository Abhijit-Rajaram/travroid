import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiArrowRight } from "react-icons/fi";
import { blogPosts } from "@/data/tours";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Travel Stories & Guides — Travroid Blog" },
      { name: "description", content: "Travel tips, destination guides and expert advice from Travroid travel curators." },
      { property: "og:title", content: "Travroid Travel Blog" },
      { property: "og:description", content: "Stories from the road — guides, tips and inspiration." },
    ],
  }),
  component: BlogPage,
});

const categories = ["All", "Travel Tips", "Budget Travel", "Honeymoon", "Destinations"];

function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = blogPosts.filter((p) => {
    if (cat !== "All" && p.category !== cat) return false;
    if (q && !p.title.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-16 text-primary-foreground md:py-24">
        <div className="container-x">
        <span className="eyebrow inline-flex items-center gap-2 text-slate-600 font-medium">
      <div className="w-2 h-2 bg-blue-500 rounded-full" />
      Journal
    </span>
          <h1 className="mt-3  font-display text-4xl font-bold md:text-6xl">Stories from the road</h1>
          <p className="mt-4 max-w-xl text-slate-600 text-primary-foreground/85">Guides, tips and travel inspiration from our destination experts.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <div className="mb-8 flex items-center gap-3 rounded-full border border-border bg-card p-2 shadow-[var(--shadow-soft)] max-w-xl">
              <FiSearch className="ml-3 h-5 w-5 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search stories..." className="flex-1 bg-transparent outline-none" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {filtered.map((p, i) => (
                <motion.article
                  key={p.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="card-elegant group bg-card"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="chip !bg-accent/15 !text-accent">{p.category}</span>
                      <span className="text-muted-foreground">{p.date}</span>
                    </div>
                    <h2 className="mt-3 font-display text-xl font-bold leading-tight group-hover:text-primary transition-colors">{p.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
                    {/* <button className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors">Read more <FiArrowRight /></button> */}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="card-elegant !p-5 bg-card">
              <h3 className="font-display text-lg font-bold">Categories</h3>
              <ul className="mt-3 space-y-1.5">
                {categories.map((c) => (
                  <li key={c}>
                    <button onClick={() => setCat(c)} className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors ${cat === c ? "bg-accent/15 text-accent font-semibold" : "text-foreground/80 hover:bg-secondary"}`}>
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-[var(--gradient-primary)] p-6 text-primary-foreground">
              <h3 className="font-display text-lg font-bold">Subscribe</h3>
              <p className="mt-1 text-sm text-primary-foreground/85">Monthly handpicked stories.</p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
                <input type="email" placeholder="Your email" className="flex-1 rounded-full border border-white/30 bg-white/15 px-4 py-2.5 text-sm placeholder:text-primary-foreground/70 outline-none focus:border-white" />
                <button className="rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground">Join</button>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
