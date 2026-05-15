import { createFileRoute } from "@tanstack/react-router";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import InquiryForm from "@/components/InquiryForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Travroid Holidays — Talk To A Travel Expert" },
      { name: "description", content: "Reach our team in Pondi. Plan your next trip with a real human in 2 hours." },
      { property: "og:title", content: "Contact Travroid" },
      { property: "og:description", content: "Talk to a travel expert today." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      {/* <section className="bg-[var(--gradient-primary)] py-20 text-primary-foreground md:py-24"> */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-16 text-primary-foreground md:py-24">
        <div className="container-x">
          {/* <span className="eyebrow !text-accent-glow">Say hello</span> */}
          <span className="eyebrow inline-flex items-center gap-2 text-slate-600 font-medium">
      <div className="w-2 h-2 bg-blue-500 rounded-full" />
      Say hello
    </span>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-6xl">Let's plan your next escape</h1>
          <p className="mt-4 max-w-xl text-slate-600 text-primary-foreground/85">Tell us where you're dreaming of — we'll handcraft a private quote in 2 hours.</p>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: FiMapPin, title: "Visit us", text: "2nd Floor, SJ Modern Tower, Vallalar Salai Road Kamaraj Nagar, Puducherry - 605011" },
                { icon: FiPhone, title: "Call us", text: "+91 8870500948" },
                { icon: FiMail, title: "Email", text: "Travroid.in@gmail.com" },
                { icon: FiClock, title: "Hours", text: "All Days · 9 AM – 8 PM" },
              ].map((c) => (
                <div key={c.title} className="card-elegant !p-5 bg-card flex items-start gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground"><c.icon /></span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</p>
                    <p className="font-semibold">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-soft)] aspect-[16/10]">
              <iframe
                title="Office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=79.7968%2C11.9215%2C79.8268%2C11.9515&layer=mapnik&marker=11.9365%2C79.8118"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
