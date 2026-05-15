import { useState } from "react";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with your WhatsApp number
    const whatsappNumber = "918870500948";

    const whatsappMessage = `
🌍 *New Travel Inquiry*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
✈️ *Destination:* ${formData.destination}

📝 *Message:*
${formData.message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    // Clear form after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      destination: "",
      message: "",
    });
  };

  return (
    <div className="card-elegant bg-card p-6 rounded-3xl shadow-xl">
      <h2 className="text-2xl font-bold mb-2">
        Plan Your Dream Vacation
      </h2>

      <p className="text-muted-foreground mb-6">
        Fill in your details and our travel experts will contact you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          type="text"
          name="destination"
          placeholder="Preferred Destination"
          value={formData.destination}
          onChange={handleChange}
          className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-green-400"
        />

        <textarea
          name="message"
          placeholder="Tell us about your trip..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-green-400"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Send on WhatsApp
        </button>
      </form>
    </div>
  );
}
