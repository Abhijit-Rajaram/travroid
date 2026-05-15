import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FiArrowRight, FiStar, FiShield, FiHeart, FiAward, FiSend } from "react-icons/fi";
import HeroSlider from "@/components/HeroSlider";
import TourCard from "@/components/TourCard";
import SectionHeader from "@/components/SectionHeader";
import { tours, categories, testimonials } from "@/data/tours";
import "swiper/css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Travroid Holidays — Curated Luxury Travel" },
      { name: "description", content: "Discover handcrafted holiday packages to Maldives, Switzerland, Bali, Kerala and 60+ destinations worldwide." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* Trust strip */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-x grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {[
            { icon: FiAward, value: "15+ yrs", label: "Crafting journeys" },
            { icon: FiHeart, value: "50,000+", label: "Happy travelers" },
            { icon: FiShield, value: "100%", label: "Safe & secure" },
            { icon: FiStar, value: "4.9/5", label: "Average rating" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--gradient-primary)] text-primary-foreground"><Icon className="h-5 w-5" /></span>
              <div>
                <p className="font-display text-xl font-bold">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular packages */}
      <section className="section">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 mb-12">
            <div>
              <span className="eyebrow text-blue-600">Popular Packages</span>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">Trips travelers love</h2>
            </div>
            <Link to="/tours" className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors">View all <FiArrowRight /></Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tours.slice(0, 6).map((t, i) => <TourCard key={t.slug} tour={t} index={i} />)}
          </div>
        </div>
      </section>

      {/* Destination categories */}
      <section className="section bg-secondary/30">
        <div className="container-x">
          <SectionHeader eyebrow="Browse by style" title="Find your kind of holiday" subtitle="From honeymoon hideaways to family adventures, every traveler has a place here." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link to="/tours" className="group relative block aspect-[3/4] overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
                  <img src={cat.image} alt={cat.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-xs uppercase tracking-widest text-white/75">{cat.count} packages</p>
                    <h3 className="font-display text-2xl font-bold">{cat.name}</h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm text-accent">Explore <FiArrowRight className="transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-x">
          <SectionHeader eyebrow="Travelers say" title="Stories from our explorers" />
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000 }}
            loop
            spaceBetween={24}
            pagination={{ clickable: true }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            slidesPerView={1}
            className="!pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="card-elegant !p-6 h-full bg-card">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: t.rating }).map((_, j) => <FiStar key={j} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="mt-4 text-foreground/85 leading-relaxed">"{t.text}"</p>
                  <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-[var(--gradient-primary)] text-sm font-bold text-primary-foreground">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.trip}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Newsletter */}
      {/* <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-[var(--gradient-primary)] px-6 py-14 text-primary-foreground md:px-16 md:py-20">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative max-w-2xl">
              <span className="eyebrow !text-accent-glow">Get inspired</span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">Travel stories in your inbox</h2>
              <p className="mt-4 text-primary-foreground/85">Monthly handpicked deals, hidden gems and trip ideas — no spam, just wanderlust.</p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-7 flex flex-col gap-3 sm:flex-row">
                <input type="email" required placeholder="you@email.com" className="flex-1 rounded-full border border-white/30 bg-white/15 px-5 py-3.5 text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:border-white" />
                <button className="btn-accent !py-3.5"><FiSend className="h-4 w-4" /> Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 px-6 py-14 text-gray-900 md:px-16 md:py-20 shadow-xl">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
            <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl" />
            <div className="relative max-w-2xl">
              <span className="eyebrow !text-blue-600 font-semibold">Get inspired</span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl text-gray-900">Travel stories in your inbox</h2>
              <p className="mt-4 text-gray-800">Monthly handpicked deals, hidden gems and trip ideas — no spam, just wanderlust.</p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-7 flex flex-col gap-3 sm:flex-row">
                <input 
                  type="email" 
                  required 
                  placeholder="you@email.com" 
                  className="flex-1 rounded-full border border-blue-200 bg-white/80 px-5 py-3.5 text-gray-900 placeholder:text-gray-500 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200/50 transition-all duration-200 shadow-sm" 
                />
                <button className="btn-accent !py-3.5"><FiSend className="h-4 w-4" /> Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
