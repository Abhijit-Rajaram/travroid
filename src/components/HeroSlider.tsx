import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { FiSearch, FiCalendar, FiUsers, FiMapPin } from "react-icons/fi";
import { heroSlides } from "@/data/tours";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function HeroSlider() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" {...(i === 0 ? {} : { loading: "lazy" as const })} />
              <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
              <div className="absolute inset-0 flex items-center">
                <div className="container-x text-white">
                  <motion.span
                    key={`eyebrow-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] backdrop-blur"
                  >
                    Handcrafted Holidays
                  </motion.span>
                  <motion.h1
                    key={`title-${i}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="mt-5 max-w-3xl font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    key={`sub-${i}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-5 max-w-xl text-lg text-white/85"
                  >
                    {slide.subtitle}
                  </motion.p>
                  <motion.div
                    key={`cta-${i}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-8 flex flex-wrap gap-3"
                  >
                    <Link to="/tours" className="btn-accent">Explore Packages</Link>
                    <Link to="/contact" className="btn-outline">Talk To Expert</Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Search bar */}
      {/* <div className="absolute inset-x-0 bottom-10 z-10 px-4">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onSubmit={(e) => e.preventDefault()}
          className="container-x grid grid-cols-1 gap-3 rounded-3xl bg-background/95 p-3 shadow-[var(--shadow-elegant)] backdrop-blur md:grid-cols-[1.4fr_1fr_1fr_auto]"
        >
          <Field icon={<FiMapPin />} label="Destination" placeholder="Where to?" />
          <Field icon={<FiCalendar />} label="When" placeholder="Any date" type="text" />
          <Field icon={<FiUsers />} label="Guests" placeholder="2 adults" />
          <button className="btn-primary justify-center !py-4">
            <FiSearch className="h-4 w-4" /> Search
          </button>
        </motion.form>
      </div> */}
    </section>
  );
}

function Field({ icon, label, placeholder, type = "text" }: { icon: React.ReactNode; label: string; placeholder: string; type?: string }) {
  return (
    <label className="flex items-center gap-3 rounded-2xl px-4 py-3 hover:bg-secondary/60 transition-colors">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-primary">{icon}</span>
      <span className="flex-1">
        <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
        <input type={type} placeholder={placeholder} className="block w-full bg-transparent text-sm font-medium outline-none placeholder:text-muted-foreground/70" />
      </span>
    </label>
  );
}
