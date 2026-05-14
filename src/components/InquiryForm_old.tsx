import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FiCheck, FiAlertCircle, FiLoader, FiSend } from "react-icons/fi";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  destination: string;
  date: string;
  message: string;
};

export default function InquiryForm({ defaultDestination = "" }: { defaultDestination?: string }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    defaultValues: { destination: defaultDestination },
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const onSubmit = async (_data: FormValues) => {
    setStatus("loading");
    try {
      // EmailJS integration: replace SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY when ready.
      // import emailjs from "@emailjs/browser";
      // await emailjs.send("SERVICE_ID","TEMPLATE_ID", _data, "PUBLIC_KEY");
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      reset({ destination: defaultDestination });
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-3xl bg-card p-6 shadow-[var(--shadow-soft)] md:p-8"
    >
      <h3 className="font-display text-2xl font-bold">Send An Inquiry</h3>
      <p className="text-sm text-muted-foreground -mt-2">Our travel expert will get back within 2 hours.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Full name" error={errors.name?.message} {...register("name", { required: "Name is required", maxLength: { value: 80, message: "Too long" } })} />
        <Input label="Phone" type="tel" error={errors.phone?.message} {...register("phone", { required: "Phone is required", pattern: { value: /^[+0-9\s-]{7,18}$/, message: "Invalid phone" } })} />
      </div>
      <Input label="Email" type="email" error={errors.email?.message} {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" } })} />
      <div className="grid gap-4 sm:grid-cols-2">
        <Input label="Destination" error={errors.destination?.message} {...register("destination", { required: "Destination is required", maxLength: 80 })} />
        <Input label="Travel date" type="date" error={errors.date?.message} {...register("date", { required: "Date is required" })} />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">Message</label>
        <textarea
          {...register("message", { maxLength: { value: 1000, message: "Max 1000 characters" } })}
          rows={4}
          placeholder="Tell us about your dream trip..."
          className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
      </div>

      <button disabled={status === "loading"} className="btn-primary w-full justify-center">
        {status === "loading" ? <><FiLoader className="h-4 w-4 animate-spin" /> Sending...</> : <><FiSend className="h-4 w-4" /> Send Inquiry</>}
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm font-medium text-primary">
          <FiCheck className="h-4 w-4" /> Thanks! We've received your inquiry.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 rounded-xl bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
          <FiAlertCircle className="h-4 w-4" /> Something went wrong. Please try again.
        </p>
      )}
    </motion.form>
  );
}

const Input = ({ label, error, ...props }: { label: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement> & Record<string, unknown>) => (
  <div>
    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">{label}</label>
    <input
      {...props}
      className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
    />
    {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
  </div>
);
