"use client";

import React, { createContext, useContext, useState, useMemo, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Loader2,
  AlertCircle,
  CheckCircle2,
  Lock,
  ShieldCheck,
  CreditCard,
  User,
  Mail,
  Phone,
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { stripePromise } from "@/lib/stripe-client";
import { STRIPE_PLANS, StripePlanConfig } from "@/lib/stripe-plans";
import { joinPlanOptions, joinSteps } from "@/lib/site";
import { cn } from "@/lib/utils";

type StepIndex = 1 | 2 | 3 | 4;

interface PaymentSession {
  clientSecret: string;
  paymentIntentId: string;
  amountPence: number;
  currency: string;
  plan: {
    id: "holiday" | "family";
    name: string;
    priceFormatted: string;
    periodFormatted: string;
    sub: string;
    description: string;
  };
}

interface MembershipModalContextType {
  isOpen: boolean;
  activePlan: StripePlanConfig;
  openModal: (planId?: "holiday" | "family" | string) => void;
  closeModal: () => void;
}

const MembershipModalContext = createContext<MembershipModalContextType>({
  isOpen: false,
  activePlan: STRIPE_PLANS.family,
  openModal: () => {},
  closeModal: () => {},
});

export const useMembershipModal = () => useContext(MembershipModalContext);

export function MembershipModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<"holiday" | "family">("family");

  const openModal = (planId?: "holiday" | "family" | string) => {
    if (planId === "holiday" || (typeof planId === "string" && planId.toLowerCase().includes("holiday"))) {
      setSelectedPlanId("holiday");
    } else {
      setSelectedPlanId("family");
    }
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const activePlan = STRIPE_PLANS[selectedPlanId] || STRIPE_PLANS.family;

  return (
    <MembershipModalContext.Provider
      value={{
        isOpen,
        activePlan,
        openModal,
        closeModal,
      }}
    >
      {children}
      <MembershipModal />
    </MembershipModalContext.Provider>
  );
}

export function MembershipModal() {
  const { isOpen, activePlan, closeModal } = useMembershipModal();

  const [currentStep, setCurrentStep] = useState<StepIndex>(1);
  const [selectedPlanId, setSelectedPlanId] = useState<"holiday" | "family">("family");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [session, setSession] = useState<PaymentSession | null>(null);
  const [loadingPayment, setLoadingPayment] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState("");

  // When modal opens, pre-select the detected plan and start on Step 1
  useEffect(() => {
    if (isOpen) {
      setSelectedPlanId(activePlan.id);
      setCurrentStep(1);
      setError(null);
      setSession(null);
    }
  }, [isOpen, activePlan]);

  const currentPlan = STRIPE_PLANS[selectedPlanId] || STRIPE_PLANS.family;
  const currentPlanOption = joinPlanOptions.find((p) => p.id === selectedPlanId) || joinPlanOptions[0];

  const handleClose = () => {
    closeModal();
    setTimeout(() => {
      setCurrentStep(1);
      setFormData({ name: "", email: "", phone: "" });
      setSession(null);
      setError(null);
    }, 250);
  };

  // Move from Step 1 (Plan Selection) to Step 2 (Your details)
  const handleProceedToDetails = () => {
    setError(null);
    setCurrentStep(2);
  };

  // Move from Step 2 (Your details) to Step 3 (Payment)
  const handleProceedToPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!formData.phone.trim()) {
      setError("Please enter your telephone number.");
      return;
    }

    try {
      setLoadingPayment(true);
      setError(null);

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          planId: selectedPlanId,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.clientSecret) {
        throw new Error(data.error || "Failed to initialize payment session.");
      }

      setSession(data);
      setCurrentStep(3);
    } catch (err: unknown) {
      console.error("Payment init error:", err);
      setError(err instanceof Error ? err.message : "Unable to start payment. Please try again.");
    } finally {
      setLoadingPayment(false);
    }
  };

  // Payment completed -> Advance to Step 4 (Confirmation)
  const handlePaymentSuccess = () => {
    const ref = `GP-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    setReferenceId(ref);
    setCurrentStep(4);
  };

  // Stripe Elements theme configuration
  const elementsOptions = useMemo(
    () =>
      session
        ? {
            clientSecret: session.clientSecret,
            appearance: {
              theme: "flat" as const,
              variables: {
                colorPrimary: "#0f3f3f",
                colorBackground: "#FFFFFF",
                colorText: "#0f3f3f",
                colorDanger: "#dc2626",
                fontFamily: "inherit",
                borderRadius: "8px",
                spacingUnit: "4px",
              },
              rules: {
                ".Input": {
                  border: "1.5px solid #d4d4d4",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.02)",
                  padding: "10px 12px",
                  backgroundColor: "#FFFFFF",
                  fontSize: "13.5px",
                },
                ".Input:focus": {
                  border: "1.5px solid #0f3f3f",
                  boxShadow: "0 0 0 3px rgba(15, 63, 63, 0.12)",
                },
                ".Label": {
                  fontWeight: "500",
                  color: "#0f3f3f",
                  fontSize: "12px",
                  marginBottom: "4px",
                },
                ".Tab": {
                  border: "1.5px solid #d4d4d4",
                  backgroundColor: "#faf7f2",
                  padding: "8px 12px",
                },
                ".Tab--selected": {
                  border: "1.5px solid #0f3f3f",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 2px 6px rgba(15, 63, 63, 0.08)",
                },
              },
            },
          }
        : null,
    [session]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-hidden">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="relative z-10 w-full max-w-[940px] max-h-[94vh] overflow-y-auto bg-white border border-brand-teal/15 rounded-2xl p-5 sm:p-7 shadow-2xl text-left my-auto"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-1.5 rounded-full text-brand-teal/60 hover:text-brand-teal hover:bg-cream transition-colors cursor-pointer z-20"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header: Four steps, about three minutes */}
            <div className="border-b border-brand-teal/10 pb-5 pr-8">
              <h2 className="title-50 text-2xl sm:text-3xl text-balance text-brand-teal">
                Four steps, about three minutes
              </h2>

              {/* 4 Step Badges */}
              <ol className="mt-3.5 flex flex-wrap gap-2 sm:gap-2.5">
                {joinSteps.map((step, idx) => {
                  const stepNumber = (idx + 1) as StepIndex;
                  const isActive = currentStep === stepNumber;
                  const isPassed = currentStep > stepNumber;

                  return (
                    <li key={step}>
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors",
                          isActive
                            ? "bg-brand-teal text-white shadow-sm"
                            : isPassed
                            ? "border border-brand-teal/20 bg-mint text-brand-teal"
                            : "border border-brand-teal/15 bg-white text-brand-teal/60"
                        )}
                      >
                        {isPassed && <Check className="w-3 h-3 text-brand-teal" strokeWidth={2.5} />}
                        {step}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* STEP 1: CHOOSE YOUR PLAN */}
            {currentStep === 1 && (
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-brand-teal sm:text-base">
                  Choose your plan
                </h3>

                <div className="mt-4 grid grid-cols-1 items-start gap-4 lg:grid-cols-12 lg:gap-6">
                  {/* Radio Plan Options */}
                  <fieldset className="lg:col-span-7 flex flex-col gap-3">
                    <legend className="sr-only">Choose your plan</legend>
                    {joinPlanOptions.map((plan) => {
                      const isSelected = selectedPlanId === plan.id;
                      const priceTag = plan.id === "family" ? "£100 / year" : "£30 one-off";

                      return (
                        <label
                          key={plan.id}
                          className={cn(
                            "flex cursor-pointer items-center justify-between gap-4 rounded-xl border bg-white p-4 transition-all",
                            isSelected
                              ? "border-brand-teal bg-brand-teal/5 ring-2 ring-brand-teal/20"
                              : "border-brand-teal/15 hover:border-brand-teal/30"
                          )}
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="block text-sm font-bold text-brand-teal">{plan.name}</span>
                              <span className="rounded bg-coral/10 px-2 py-0.5 text-[10px] font-semibold text-coral">
                                {priceTag}
                              </span>
                            </div>
                            <span className="mt-1 block text-xs text-pretty text-brand-teal/70 leading-relaxed">
                              {plan.detail}
                            </span>
                          </div>

                          <div className="flex items-center">
                            <input
                              type="radio"
                              name="modal_plan"
                              value={plan.id}
                              checked={isSelected}
                              onChange={() => setSelectedPlanId(plan.id as "holiday" | "family")}
                              className="sr-only"
                            />
                            <span
                              aria-hidden
                              className={cn(
                                "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border",
                                isSelected ? "border-brand-teal" : "border-brand-teal/30"
                              )}
                            >
                              {isSelected && (
                                <span className="h-2 w-2 rounded-full bg-brand-teal" />
                              )}
                            </span>
                          </div>
                        </label>
                      );
                    })}

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={handleProceedToDetails}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-coral px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-coral-dark transition cursor-pointer"
                      >
                        <span>Continue to Your Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </fieldset>

                  {/* Dark Teal Preview Card on the Right */}
                  <div className="lg:col-span-5 rounded-xl bg-brand-teal p-5 text-white">
                    <p className="text-[11px] tracking-widest text-white/55 uppercase font-medium">
                      Your plan
                    </p>
                    <p className="mt-2 text-xl font-semibold sm:text-2xl">{currentPlanOption.name}</p>
                    <p className="mt-1 text-sm text-white/80 font-medium">{currentPlanOption.summary}</p>

                    <ul className="mt-4 space-y-1.5 text-xs text-white/85 border-t border-white/10 pt-3">
                      <li className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-coral shrink-0" strokeWidth={2.5} />
                        <span>Unlimited GP consultations 24/7</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-coral shrink-0" strokeWidth={2.5} />
                        <span>Keep your NHS GP registration</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-coral shrink-0" strokeWidth={2.5} />
                        <span>No medical questionnaire</span>
                      </li>
                    </ul>

                    <p className="mt-4 text-[11px] leading-relaxed text-white/60">
                      This is not an emergency service call 999 or NHS 111 if it&apos;s urgent.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: YOUR DETAILS */}
            {currentStep === 2 && (
              <form onSubmit={handleProceedToPayment} className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <h3 className="text-sm font-semibold text-brand-teal sm:text-base">
                      Enter your details
                    </h3>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-brand-teal mb-1">
                          Full Name <span className="text-coral">*</span>
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-2.5 h-4 w-4 text-brand-teal/40" />
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Sarah Jenkins"
                            className="w-full rounded-lg border border-brand-teal/20 bg-white py-2 pl-9 pr-3 text-xs sm:text-sm text-brand-teal placeholder:text-brand-teal/35 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-brand-teal mb-1">
                            Email Address <span className="text-coral">*</span>
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-brand-teal/40" />
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="sarah@example.com"
                              className="w-full rounded-lg border border-brand-teal/20 bg-white py-2 pl-9 pr-3 text-xs sm:text-sm text-brand-teal placeholder:text-brand-teal/35 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition"
                            />
                          </div>
                          <span className="text-[10px] text-brand-teal/60">Membership pack sent here</span>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-brand-teal mb-1">
                            Telephone / Mobile <span className="text-coral">*</span>
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-2.5 h-4 w-4 text-brand-teal/40" />
                            <input
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="07123 456789"
                              className="w-full rounded-lg border border-brand-teal/20 bg-white py-2 pl-9 pr-3 text-xs sm:text-sm text-brand-teal placeholder:text-brand-teal/35 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20 outline-none transition"
                            />
                          </div>
                          <span className="text-[10px] text-brand-teal/60">For doctor callback</span>
                        </div>
                      </div>
                    </div>

                    {error && (
                      <div className="flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 p-2.5 text-xs text-red-800">
                        <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-red-600" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-brand-teal/20 px-4 py-2.5 text-xs font-medium text-brand-teal hover:bg-cream transition cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        disabled={loadingPayment}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-coral px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-coral-dark transition disabled:opacity-60 cursor-pointer"
                      >
                        {loadingPayment ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Setting up payment...</span>
                          </>
                        ) : (
                          <>
                            <span>Continue to Payment</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Plan Summary Card on the Right */}
                  <div className="lg:col-span-5 rounded-xl bg-cream border border-brand-teal/15 p-4 space-y-3">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brand-teal/60">
                      Order Summary
                    </span>
                    <div>
                      <p className="text-lg font-bold text-brand-teal">{currentPlan.name}</p>
                      <p className="text-xs text-brand-teal/70">{currentPlan.sub}</p>
                    </div>

                    <div className="border-t border-brand-teal/10 pt-2 flex items-baseline justify-between">
                      <span className="text-xs font-semibold text-brand-teal">Amount Due</span>
                      <span className="text-2xl font-extrabold text-coral">{currentPlan.priceFormatted}</span>
                    </div>

                    <p className="text-[11px] text-brand-teal/60 pt-1">
                      No medical questionnaire and no per-call charges. Keep your NHS doctor.
                    </p>
                  </div>
                </div>
              </form>
            )}

            {/* STEP 3: PAYMENT */}
            {currentStep === 3 && session && elementsOptions && (
              <Elements stripe={stripePromise} options={elementsOptions}>
                <StripePaymentStep
                  session={session}
                  currentPlan={currentPlan}
                  formData={formData}
                  onBack={() => setCurrentStep(2)}
                  onSuccess={handlePaymentSuccess}
                />
              </Elements>
            )}

            {/* STEP 4: CONFIRMATION */}
            {currentStep === 4 && (
              <div className="mt-6 text-center space-y-4 py-4 max-w-lg mx-auto">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mint text-brand-teal ring-8 ring-mint/40">
                  <CheckCircle2 className="h-7 w-7 text-brand-teal" />
                </div>

                <div>
                  <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-semibold text-emerald-800">
                    Step 4: Confirmed & Active
                  </span>
                  <h3 className="title-50 mt-2 text-2xl text-brand-teal">
                    Welcome to 247 GP Direct
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-brand-teal/70">
                    Your <strong>{currentPlan.name}</strong> is now active.
                  </p>
                </div>

                <div className="rounded-xl border border-brand-teal/15 bg-cream p-4 text-left space-y-2 text-xs">
                  <div className="flex justify-between border-b border-brand-teal/10 pb-1.5">
                    <span className="text-brand-teal/60">Membership</span>
                    <span className="font-semibold text-brand-teal">{currentPlan.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-teal/10 pb-1.5">
                    <span className="text-brand-teal/60">Lead Member</span>
                    <span className="font-semibold text-brand-teal">{formData.name}</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-teal/10 pb-1.5">
                    <span className="text-brand-teal/60">Confirmation sent to</span>
                    <span className="font-semibold text-brand-teal">{formData.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-brand-teal/10 pb-1.5">
                    <span className="text-brand-teal/60">Amount Paid</span>
                    <span className="font-bold text-coral">{currentPlan.priceFormatted}</span>
                  </div>
                  <div className="flex justify-between pt-0.5">
                    <span className="text-brand-teal/60">Reference ID</span>
                    <span className="font-mono text-xs text-brand-teal font-semibold">{referenceId}</span>
                  </div>
                </div>

                <p className="text-[11px] text-brand-teal/70 leading-relaxed">
                  Your direct 24/7 doctor dial-in telephone number has been sent to your email. Your NHS GP registration remains unchanged.
                </p>

                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full rounded-lg bg-brand-teal py-2.5 px-5 text-sm font-medium text-white hover:bg-brand-teal-dark transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function StripePaymentStep({
  session,
  currentPlan,
  formData,
  onBack,
  onSuccess,
}: {
  session: PaymentSession;
  currentPlan: StripePlanConfig;
  formData: { name: string; email: string; phone: string };
  onBack: () => void;
  onSuccess: () => void;
}) {
  const stripe = useStripe();
  const elements = useElements();

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements || submitting) return;

    setSubmitting(true);
    setError(null);

    const { error: stripeError, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
      confirmParams: {
        receipt_email: formData.email.trim(),
        payment_method_data: {
          billing_details: {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
          },
        },
        return_url: `${window.location.origin}/checkout/success`,
      },
    });

    if (stripeError) {
      setError(stripeError.message || "Payment could not be completed. Please check card details.");
      setSubmitting(false);
      return;
    }

    if (paymentIntent?.status === "succeeded" || paymentIntent?.status === "processing") {
      onSuccess();
      setSubmitting(false);
      return;
    }

    setError("Payment was not completed. Please try again.");
    setSubmitting(false);
  };

  return (
    <form onSubmit={handlePay} className="mt-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Stripe Payment Element */}
        <div className="lg:col-span-7 space-y-3">
          <div className="rounded-xl border border-brand-teal/15 p-4 bg-white shadow-sm space-y-2.5">
            <div className="flex items-center justify-between pb-2 border-b border-brand-teal/10">
              <div className="flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-brand-teal" />
                <span className="text-xs font-semibold text-brand-teal">
                  Card or Digital Wallet
                </span>
              </div>
              <span className="text-[10px] text-brand-teal/60 flex items-center gap-1">
                <Lock className="w-3 h-3 text-emerald-600" /> 256-Bit Encrypted
              </span>
            </div>

            <div className="min-h-[140px]">
              {!ready && (
                <div className="flex flex-col items-center justify-center h-[140px] text-brand-teal/60 gap-1.5">
                  <Loader2 className="w-5 h-5 animate-spin text-brand-teal" />
                  <span className="text-xs">Loading payment fields...</span>
                </div>
              )}
              <PaymentElement
                onReady={() => setReady(true)}
                options={{
                  layout: "tabs",
                  wallets: {
                    link: "never",
                  },
                }}
              />
            </div>
          </div>

          {error && (
            <div className="flex items-start gap-2 rounded-lg bg-red-50 border border-red-200 p-2.5 text-xs text-red-800">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-red-600" />
              <span>{error}</span>
            </div>
          )}

          <div className="flex items-center gap-3 pt-1">
            <button
              type="button"
              onClick={onBack}
              disabled={submitting}
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-brand-teal/20 px-4 py-2.5 text-xs font-medium text-brand-teal hover:bg-cream transition cursor-pointer disabled:opacity-50"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            <button
              type="submit"
              disabled={!stripe || !ready || submitting}
              className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-coral hover:bg-coral-dark py-2.5 px-6 text-sm font-semibold text-white shadow-md transition disabled:opacity-60 cursor-pointer"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing payment...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Pay {currentPlan.priceFormatted}</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-brand-teal/60 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Secured by Stripe · Your card details never touch our servers</span>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="lg:col-span-5 rounded-xl bg-cream border border-brand-teal/15 p-4 space-y-3">
          <span className="text-[10px] uppercase font-bold tracking-wider text-brand-teal/60">
            Order Summary
          </span>

          <div className="bg-white rounded-lg p-3 border border-brand-teal/10 space-y-1 text-xs">
            <p className="font-bold text-brand-teal">{currentPlan.name}</p>
            <p className="text-brand-teal/70 text-[11px]">Member: {formData.name}</p>
            <p className="text-brand-teal/70 text-[11px]">Email: {formData.email}</p>
          </div>

          <div className="space-y-1.5 text-xs border-t border-brand-teal/10 pt-2">
            <div className="flex justify-between text-brand-teal/80">
              <span>Unlimited 24/7 Consultations</span>
              <span className="text-emerald-700 font-medium">Included</span>
            </div>
            <div className="flex justify-between text-brand-teal/80">
              <span>Keep your NHS GP</span>
              <span className="text-emerald-700 font-medium">Included</span>
            </div>
          </div>

          <div className="border-t border-brand-teal/10 pt-2 flex items-baseline justify-between">
            <span className="text-xs font-semibold text-brand-teal">Amount Due</span>
            <span className="text-2xl font-extrabold text-coral">{currentPlan.priceFormatted}</span>
          </div>
        </div>
      </div>
    </form>
  );
}
