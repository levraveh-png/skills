import { useState, type FormEvent } from "react";
import { business } from "@/data/business";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  zip: string;
  service: string;
  timeframe: string;
  message: string;
  consent: boolean;
  company: string; // honeypot — real users never fill this in
}

const EMPTY: FormValues = {
  name: "",
  phone: "",
  email: "",
  zip: "",
  service: "",
  timeframe: "",
  message: "",
  consent: false,
  company: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s()+-]{7,}$/;

function validate(values: FormValues) {
  const errors: Partial<Record<keyof FormValues, string>> = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!PHONE_RE.test(values.phone)) errors.phone = "Enter a valid phone number.";
  if (!EMAIL_RE.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.zip.trim()) errors.zip = "Enter the job site ZIP code.";
  if (!values.service) errors.service = "Select what you need.";
  if (!values.timeframe) errors.timeframe = "Select a timeframe.";
  if (!values.consent) errors.consent = "Consent is required to submit this form.";
  return errors;
}

export function EstimateForm() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    const next = { ...values, [key]: value };
    setValues(next);
    if (attempted) setErrors(validate(next));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (values.company) return; // honeypot tripped — silently drop

    setAttempted(true);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    try {
      if (business.formEndpoint) {
        const res = await fetch(business.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Submission failed");
        setStatus("success");
      } else {
        // No backend endpoint configured yet — fall back to opening the
        // customer's email client with the request pre-filled, so the
        // form is genuinely functional rather than a no-op. Replace
        // `business.formEndpoint` with a real endpoint to submit
        // directly instead.
        const body = [
          `Name: ${values.name}`,
          `Phone: ${values.phone}`,
          `Email: ${values.email}`,
          `Job site ZIP: ${values.zip}`,
          `Service: ${values.service}`,
          `Timeframe: ${values.timeframe}`,
          "",
          values.message,
        ].join("\n");
        window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
          `Estimate request — ${values.service}`,
        )}&body=${encodeURIComponent(body)}`;
        setStatus("success");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-3 border border-copper-500/30 bg-copper-50 p-8">
        <CheckCircle2 className="size-8 text-copper-600" />
        <h3 className="font-display text-xl text-ink">Request sent</h3>
        <p className="text-[15px] leading-relaxed text-muted-foreground">
          {business.formEndpoint
            ? "Thanks — we've received your request and will follow up shortly."
            : "Your email app should have opened with your request filled in — hit send there to reach us. For anything urgent, call instead."}
        </p>
        <Button variant="outline" size="sm" onClick={() => { setValues(EMPTY); setErrors({}); setAttempted(false); setStatus("idle"); }}>
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <input
        type="text"
        name="company"
        value={values.company}
        onChange={(e) => update("company", e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            className="mt-2"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            hasError={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            autoComplete="name"
          />
          {errors.name && <FieldError id="name-error">{errors.name}</FieldError>}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            className="mt-2"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            hasError={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            autoComplete="tel"
          />
          {errors.phone && <FieldError id="phone-error">{errors.phone}</FieldError>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            inputMode="email"
            className="mt-2"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            hasError={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            autoComplete="email"
          />
          {errors.email && <FieldError id="email-error">{errors.email}</FieldError>}
        </div>
        <div>
          <Label htmlFor="zip">Job site ZIP code</Label>
          <Input
            id="zip"
            inputMode="numeric"
            className="mt-2"
            value={values.zip}
            onChange={(e) => update("zip", e.target.value)}
            hasError={!!errors.zip}
            aria-describedby={errors.zip ? "zip-error" : undefined}
          />
          {errors.zip && <FieldError id="zip-error">{errors.zip}</FieldError>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="service">What do you need?</Label>
          <Select
            id="service"
            className="mt-2"
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            hasError={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="">Select one</option>
            <option value="Board-Up (24/7)">Board-Up (24/7)</option>
            <option value="Glass Replacement">Glass Replacement</option>
            <option value="Storefronts">Storefronts</option>
            <option value="Frameless Shower Glass">Frameless Shower Glass</option>
            <option value="Not sure">Not sure</option>
          </Select>
          {errors.service && <FieldError id="service-error">{errors.service}</FieldError>}
        </div>
        <div>
          <Label htmlFor="timeframe">Timeframe</Label>
          <Select
            id="timeframe"
            className="mt-2"
            value={values.timeframe}
            onChange={(e) => update("timeframe", e.target.value)}
            hasError={!!errors.timeframe}
            aria-describedby={errors.timeframe ? "timeframe-error" : undefined}
          >
            <option value="">Select one</option>
            <option value="Emergency — right now">Emergency — right now</option>
            <option value="Within a few days">Within a few days</option>
            <option value="Within a month">Within a month</option>
            <option value="Just getting a quote">Just getting a quote</option>
          </Select>
          {errors.timeframe && <FieldError id="timeframe-error">{errors.timeframe}</FieldError>}
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea
          id="message"
          className="mt-2"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Anything that helps us understand the job — what happened, the size of the opening, etc."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          checked={values.consent}
          onChange={(e) => update("consent", e.target.checked)}
          className="mt-1 size-4 shrink-0 border-input accent-copper-500"
          aria-describedby={errors.consent ? "consent-error" : undefined}
        />
        <label htmlFor="consent" className="text-[13.5px] leading-relaxed text-muted-foreground">
          I agree to be contacted by {business.name} about this request by
          phone, text, or email. We won't share your information or use it
          for anything else.
        </label>
      </div>
      {errors.consent && <FieldError id="consent-error">{errors.consent}</FieldError>}

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-destructive">
          <AlertCircle className="size-4" />
          Something went wrong sending your request — please call us instead.
        </p>
      )}

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Request"}
      </Button>
    </form>
  );
}

function FieldError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} role="alert" className="mt-1.5 text-[13px] text-destructive">
      {children}
    </p>
  );
}
