import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiClock, FiUsers, FiMapPin, FiCompass, FiCheck, FiX, FiChevronDown, FiStar } from "react-icons/fi";
import { getTour, tours, type Tour } from "@/data/tours";
import InquiryForm from "@/components/InquiryForm";

export const Route = createFileRoute("/tour/$slug")({
  loader: ({ params }) => {
    const tour = getTour(params.slug);
    if (!tour) throw notFound();
    return tour;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Travroid Holidays` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.description },
          { property: "og:image", content: loaderData.image },
        ]
      : [{ title: "Tour — Travroid" }],
  }),
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="font-display text-4xl font-bold">Tour not found</h1>
      <Link to="/tours" className="btn-primary mt-6">Browse all tours</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container-x py-32 text-center">
      <p>{error.message}</p>
      <button onClick={reset} className="btn-primary mt-4">Retry</button>
    </div>
  ),
  component: TourDetailPage,
});

function TourDetailPage() {
  const tour = Route.useLoaderData() as Tour;
  const [openDay, setOpenDay] = useState(1);

  return (
    <>
      {/* Hero banner */}
      <section className="relative -mt-24 h-[70svh] min-h-[500px] w-full overflow-hidden">
        <img src={tour.image} alt={tour.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container-x pb-12 text-white">
            <Link to="/tours" className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-accent transition-colors">← All tours</Link>
            <span className="chip mt-3 !bg-accent !text-accent-foreground">{tour.category}</span>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">{tour.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-5 text-sm">
              <span className="inline-flex items-center gap-1.5"><FiMapPin /> {tour.destination}</span>
              <span className="inline-flex items-center gap-1.5"><FiClock /> {tour.duration}</span>
              <span className="inline-flex items-center gap-1.5"><FiStar className="text-accent fill-current" /> {tour.rating} ({tour.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            {/* Overview cards */}
            <div className="grid grid-cols-2 gap-3 rounded-3xl bg-card p-5 shadow-[var(--shadow-soft)] md:grid-cols-4">
              {[
                { icon: FiClock, label: "Duration", value: tour.duration },
                { icon: FiUsers, label: "Group", value: tour.groupSize },
                { icon: FiMapPin, label: "Destination", value: tour.destination },
                { icon: FiCompass, label: "Type", value: tour.travelType },
              ].map((it) => (
                <div key={it.label} className="flex items-center gap-3 rounded-2xl p-2">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary"><it.icon /></span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{it.label}</p>
                    <p className="text-sm font-semibold">{it.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold md:text-3xl">Trip overview</h2>
              <p className="mt-3 text-foreground/80 leading-relaxed">{tour.description}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {tour.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm">
                    <FiCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className="mt-12">
              <h2 className="font-display text-2xl font-bold md:text-3xl">Day-by-day itinerary</h2>
              <div className="mt-6 space-y-3">
                {tour.itinerary.map((d) => {
                  const open = openDay === d.day;
                  return (
                    <div key={d.day} className="overflow-hidden rounded-2xl border border-border bg-card">
                      <button
                        onClick={() => setOpenDay(open ? 0 : d.day)}
                        className="flex w-full items-center gap-4 p-4 text-left transition-colors hover:bg-secondary/50"
                      >
                        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[var(--gradient-primary)] text-sm font-bold text-primary-foreground">
                          D{d.day}
                        </span>
                        <span className="flex-1 font-semibold">{d.title}</span>
                        <FiChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="px-4 pb-4 pl-20 text-sm text-muted-foreground leading-relaxed">{d.details}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Included / Excluded */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-card p-6 shadow-[var(--shadow-soft)]">
                <h3 className="font-display text-xl font-bold">Included</h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {tour.included.map((i) => (
                    <li key={i} className="flex items-start gap-2"><FiCheck className="mt-0.5 h-4 w-4 text-primary" /> {i}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-card p-6 shadow-[var(--shadow-soft)]">
                <h3 className="font-display text-xl font-bold">Not included</h3>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {tour.excluded.map((i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground"><FiX className="mt-0.5 h-4 w-4 text-destructive" /> {i}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery */}
            <div className="mt-12">
              <h2 className="font-display text-2xl font-bold md:text-3xl">Gallery</h2>
              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                {tour.gallery.map((g, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}
                  >
                    <img src={g} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start space-y-6">
            <div className="rounded-3xl bg-[var(--gradient-primary)] p-6 text-primary-foreground shadow-[var(--shadow-elegant)]">
              <p className="text-xs uppercase tracking-widest text-primary-foreground/80">Starting from</p>
              <p className="mt-1 font-display text-4xl font-bold">₹{tour.price.toLocaleString("en-IN")}</p>
              <p className="text-xs text-primary-foreground/80">per person on twin sharing</p>
            </div>
            <InquiryForm defaultDestination={tour.destination} />
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="section bg-secondary/30">
        <div className="container-x">
          <h2 className="font-display text-2xl font-bold md:text-3xl">You may also like</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tours.filter((t) => t.slug !== tour.slug).slice(0, 3).map((t, i) => (
              <Link key={t.slug} to="/tour/$slug" params={{ slug: t.slug }} className="card-elegant group block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={t.image} alt={t.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.duration} · ₹{t.price.toLocaleString("en-IN")}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
