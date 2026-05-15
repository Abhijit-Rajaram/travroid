import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/918870500948"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.55)] transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
      <FaWhatsapp className="relative h-7 w-7" />
    </a>
  );
}
