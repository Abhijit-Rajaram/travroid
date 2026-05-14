import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FiSearch, FiFilter, FiX } from "react-icons/fi";
import TourCard from "@/components/TourCard";
import { tours, type Tour } from "@/data/tours";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "All Tours & Packages — WanderLux Holidays" },
      { name: "description", content: "Browse our full collection of curated tours: international, domestic, honeymoon and family holiday packages." },
      { property: "og:title", content: "All Tours — WanderLux" },
      { property: "og:description", content: "Browse curated holiday packages worldwide." },
    ],
  }),
  component: ToursPage,
});

const categories: Tour["category"][] = ["International", "Domestic", "Honeymoon", "Family"];
const durations = ["1-4 Days", "5-7 Days", "8+ Days"];

function ToursPage() {
  const [q, setQ] = useState("");
  const [cats, setCats] = useState<string[]>([]);
  const [dur, setDur] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(200000);
  const [openFilters, setOpenFilters] = useState(false);

  const filtered = useMemo(() => {
    return tours.filter((t) => {
      if (q && !`${t.title} ${t.destination}`.toLowerCase().includes(q.toLowerCase())) return false;
      if (cats.length && !cats.includes(t.category)) return false;
      if (t.price > maxPrice) return false;
      if (dur.length) {
        const days = parseInt(t.duration);
        const ok = dur.some((d) => (d === "1-4 Days" ? days <= 4 : d === "5-7 Days" ? days >= 5 && days <= 7 : days >= 8));
        if (!ok) return false;
      }
      return true;
    });
  }, [q, cats, dur, maxPrice]);

  const toggle = (arr: string[], v: string, set: (s: string[]) => void) =>
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);

  return (
    <>
      {/* Page hero */}
      {/* <section className="relative overflow-hidden bg-[var(--gradient-primary)] py-16 text-primary-foreground md:py-24">
        <div className="absolute -right-32 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div className="container-x relative">
          <span className="eyebrow !text-accent-glow">Explore</span>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">All holiday packages</h1>
          <p className="mt-4 max-w-xl text-primary-foreground/85">Find the perfect trip from our handpicked collection of {tours.length}+ packages.</p>

          <div className="mt-8 flex items-center gap-3 rounded-full bg-white/95 p-2 shadow-[var(--shadow-elegant)] max-w-2xl">
            <FiSearch className="ml-3 h-5 w-5 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search Maldives, Kerala, Switzerland..."
              className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
            />
            <button onClick={() => setOpenFilters(true)} className="md:hidden btn-primary !py-2 !px-4 text-sm"><FiFilter /> Filters</button>
          </div>
        </div>
      </section> */}

{/* <section className="relative overflow-hidden bg-gradient-to-r from-blue-100 to-blue-200 py-20 md:py-28"> */}
<section className="bg-gradient-to-r from-blue-100 to-blue-200 py-16 text-primary-foreground md:py-24">
  {/* Subtle background elements */}
  <div className="absolute -right-40 -top-32 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
  <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-slate-100/60 blur-3xl" />

  <div className="container-x relative z-10">
    <span className="eyebrow inline-flex items-center gap-2 text-slate-600 font-medium">
      <div className="w-2 h-2 bg-blue-500 rounded-full" />
      Explore
    </span>
    
    <h1 className="mt-4 font-display text-4xl md:text-6xl font-bold text-light leading-tight">All holiday packages</h1>
    
    <p className="mt-6 max-w-xl text-lg text-slate-600">Find the perfect trip from our handpicked collection of <span className="font-semibold text-slate-900">{tours.length}+</span> packages.</p>

    <div className="mt-12 flex items-center gap-3 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 max-w-2xl group">
      <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors">
        <FiSearch className="h-5 w-5 text-blue-600" />
      </div>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search Maldives, Kerala, Switzerland..."
        className="flex-1 bg-transparent text-slate-900 placeholder:text-slate-500 outline-none px-4 py-4 text-lg"
      />
      <button 
        onClick={() => setOpenFilters(true)} 
        className="md:hidden flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-4 px-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap"
      >
        <FiFilter className="h-4 w-4" />
        Filters
      </button>
    </div>
  </div>
</section>

      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Filters sidebar */}
          <aside className={`${openFilters ? "fixed inset-0 z-50 overflow-auto bg-background p-6" : "hidden"} lg:relative lg:block lg:p-0`}>
            <div className="lg:sticky lg:top-28 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold">Filters</h3>
                <button onClick={() => setOpenFilters(false)} className="lg:hidden"><FiX className="h-6 w-6" /></button>
              </div>

              <FilterGroup title="Category">
                {categories.map((c) => (
                  <Check key={c} label={c} checked={cats.includes(c)} onChange={() => toggle(cats, c, setCats)} />
                ))}
              </FilterGroup>

              <FilterGroup title="Duration">
                {durations.map((d) => (
                  <Check key={d} label={d} checked={dur.includes(d)} onChange={() => toggle(dur, d, setDur)} />
                ))}
              </FilterGroup>

              <FilterGroup title="Max price">
                <input type="range" min={20000} max={200000} step={5000} value={maxPrice} onChange={(e) => setMaxPrice(+e.target.value)} className="w-full accent-[var(--color-primary)]" />
                <p className="text-sm text-muted-foreground">Up to ₹{maxPrice.toLocaleString("en-IN")}</p>
              </FilterGroup>

              <button onClick={() => { setCats([]); setDur([]); setMaxPrice(200000); setQ(""); }} className="text-sm font-semibold text-accent hover:underline">Reset all</button>
            </div>
          </aside>

          <div>
            <p className="mb-6 text-sm text-muted-foreground">{filtered.length} packages found</p>
            {filtered.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-border p-12 text-center">
                <p className="font-display text-xl font-semibold">No packages match your filters</p>
                <p className="mt-2 text-sm text-muted-foreground">Try widening your search.</p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((t, i) => <TourCard key={t.slug} tour={t} index={i} />)}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

const FilterGroup = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-2xl border border-border bg-card p-5">
    <h4 className="mb-3 font-semibold">{title}</h4>
    <div className="space-y-2.5">{children}</div>
  </div>
);

const Check = ({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) => (
  <label className="flex cursor-pointer items-center gap-2.5 text-sm">
    <input type="checkbox" checked={checked} onChange={onChange} className="h-4 w-4 rounded accent-[var(--color-primary)]" />
    {label}
  </label>
);
