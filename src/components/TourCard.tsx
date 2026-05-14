import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FiClock, FiStar, FiArrowRight, FiMapPin } from "react-icons/fi";
import type { Tour } from "@/data/tours";

export default function TourCard({ tour, index = 0 }: { tour: Tour; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      className="card-elegant group"
    >
      <Link to="/tour/$slug" params={{ slug: tour.slug }} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={tour.image}
            alt={tour.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[var(--gradient-card)]" />
          <div className="absolute top-4 left-4 chip !bg-white/90 !text-foreground">{tour.category}</div>
          <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-accent-foreground">
            <FiStar className="h-3 w-3 fill-current" /> {tour.rating}
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-1 text-white text-sm font-medium">
            <FiMapPin className="h-4 w-4" /> {tour.destination}
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-display text-lg font-bold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {tour.title}
          </h3>
          <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{tour.description}</p>

          <div className="mt-4 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <FiClock className="h-4 w-4 text-primary" /> {tour.duration}
            </span>
            <span className="text-xs text-muted-foreground">{tour.reviews} reviews</span>
          </div>

          <div className="mt-5 flex items-end justify-between border-t border-border pt-4">
            <div>
              <p className="text-xs text-muted-foreground">From</p>
              <p className="font-display text-xl font-bold text-foreground">
                ₹{tour.price.toLocaleString("en-IN")}
                <span className="ml-1 text-xs font-normal text-muted-foreground">/person</span>
              </p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-2 text-xs font-semibold text-foreground transition-all group-hover:bg-primary group-hover:text-primary-foreground">
              View <FiArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
