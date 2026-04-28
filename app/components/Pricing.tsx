"use client"

import { useState } from "react"
import { Check, MessageCircle } from "lucide-react"

const packages = [
  {
    id: "starter",
    name: "Starter",
    badge: null,
    tagline: "Get Found",
    setupPrice: 8000,
    maintenancePrice: 10000,
    description: "Perfect for shops that need a solid online presence fast.",
    features: [
      "Static business website",
      "Google Business Profile setup",
      "Google Maps listing",
      "Social media pages setup",
      "Basic SEO optimization",
      "co.ke domain included",
    ],
    cta: "Get Started",
    ctaHref: "#",
    highlight: false,
    pro: false,
  },
  {
    id: "basic",
    name: "Basic Shop",
    badge: "Most Popular",
    tagline: "Start Selling",
    setupPrice: 15000,
    maintenancePrice: 18000,
    description: "Everything to get your shop selling online from day one.",
    features: [
      "Everything in Starter",
      "Product display page",
      "Simple order system",
      "WhatsApp or online order form",
      "co.ke domain included",
      "Professional shop branding",
    ],
    cta: "Get Started",
    ctaHref: "#",
    highlight: true,
    pro: false,
  },
  {
    id: "growth",
    name: "Growth",
    badge: null,
    tagline: "Sell Smarter",
    setupPrice: 30000,
    maintenancePrice: 38000,
    description: "Full e-commerce power with payments, inventory, and AI.",
    features: [
      "Everything in Basic Shop",
      "Full e-commerce store",
      "Cart & checkout system",
      "M-Pesa + card payments",
      "Order & inventory dashboard",
      "Customer reviews & ratings",
      "AI chatbot integration",
      "co.ke domain included",
    ],
    cta: "Get Started",
    ctaHref: "#",
    highlight: false,
    pro: false,
  },
  {
    id: "pro",
    name: "Pro",
    badge: null,
    tagline: "Dominate",
    setupPrice: null,
    maintenancePrice: null,
    description: "Custom-built systems for shops ready to scale seriously.",
    features: [
      "Everything in Growth",
      "Custom systems & integrations",
      "Booking & scheduling system",
      "CRM & customer management",
      "Advanced analytics & reporting",
      "Advanced AI chatbot",
      "Dedicated account manager",
      "Priority support",
    ],
    cta: "Get a Quote",
    ctaHref: `https://wa.me/254700000000?text=${encodeURIComponent("Hi Zenira, I'm interested in the Pro package.")}`,
    highlight: false,
    pro: true,
  },
]

function formatKSh(amount: number) {
  return `KSh ${amount.toLocaleString("en-KE")}`
}

export default function Pricing() {
  const [withMaintenance, setWithMaintenance] = useState(false)

  return (
    <section
      id="pricing"
      className="relative bg-white dark:bg-[#0A0A0A] py-32 overflow-hidden"
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-xs font-medium text-black/40 dark:text-white/40 tracking-widest uppercase mb-6">
            Pricing
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-black dark:text-white leading-tight mb-4">
            One-time setup.{" "}
            <span className="text-[#E0001B]">Real results.</span>
          </h2>
          <p className="text-black/50 dark:text-white/50 text-base max-w-md mx-auto">
            All prices in KSh. Domain renewal billed annually at KSh 1,500/yr.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span
            className={`text-sm font-medium transition-colors ${!withMaintenance ? "text-black dark:text-white" : "text-black/40 dark:text-white/40"
              }`}
          >
            Setup only
          </span>
          <button
            onClick={() => setWithMaintenance(!withMaintenance)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${withMaintenance ? "bg-[#E0001B]" : "bg-black/20 dark:bg-white/20"
              }`}
            aria-label="Toggle maintenance"
          >
            <div
              className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-300 ${withMaintenance ? "translate-x-7" : "translate-x-1"
                }`}
            />
          </button>
          <span
            className={`text-sm font-medium transition-colors ${withMaintenance ? "text-black dark:text-white" : "text-black/40 dark:text-white/40"
              }`}
          >
            With maintenance
          </span>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {packages.map((pkg) => (
            <PricingCard
              key={pkg.id}
              pkg={pkg}
              withMaintenance={withMaintenance}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-6">
          <div className="flex items-center gap-2 text-sm text-black/40 dark:text-white/40">
            <div className="w-1.5 h-1.5 rounded-full bg-[#006B3F]" />
            50% on project start · 50% on delivery
          </div>
          <div className="hidden sm:block w-px h-4 bg-black/10 dark:bg-white/10" />
          <div className="flex items-center gap-2 text-sm text-black/40 dark:text-white/40">
            <div className="w-1.5 h-1.5 rounded-full bg-[#006B3F]" />
            You approve before final payment
          </div>
          <div className="hidden sm:block w-px h-4 bg-black/10 dark:bg-white/10" />
          <div className="flex items-center gap-2 text-sm text-black/40 dark:text-white/40">
            <div className="w-1.5 h-1.5 rounded-full bg-[#006B3F]" />
            Made in Kenya 🇰🇪
          </div>
        </div>
      </div>
    </section>
  )
}

function PricingCard({
  pkg,
  withMaintenance,
}: {
  pkg: (typeof packages)[0]
  withMaintenance: boolean
}) {
  const price = withMaintenance ? pkg.maintenancePrice : pkg.setupPrice

  return (
    <div
      className={`
        relative flex flex-col rounded-2xl overflow-hidden
        transition-transform duration-300 hover:-translate-y-1
        ${pkg.highlight
          ? "border-2 border-[#E0001B] bg-white dark:bg-[#111111] shadow-[0_0_40px_rgba(224,0,27,0.12)]"
          : pkg.pro
            ? "border border-black/10 dark:border-white/10 bg-[#0A0A0A] dark:bg-[#111111]"
            : "border border-black/10 dark:border-white/10 bg-white dark:bg-[#111111]"
        }
      `}
    >
      {/* Discount banner — Most Popular card only */}
      {pkg.highlight && (
        <div className="bg-[#E0001B] px-4 py-2 flex items-center justify-between">
          <span className="text-white text-xs font-bold tracking-widest uppercase">
            ⭐ Most Popular
          </span>
          <span className="text-white/80 text-[10px] font-medium">
            Best value
          </span>
        </div>
      )}

      {/* Pro dark top bar */}
      {pkg.pro && (
        <div className="bg-gradient-to-r from-[#E0001B] via-[#A30014] to-[#3A0008] px-4 py-2">
          <span className="text-white text-xs font-bold tracking-widest uppercase">
            🏆 Enterprise
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-6 gap-5">

        {/* Tag + name */}
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#E0001B]">
            {pkg.tagline}
          </span>
          <h3 className={`font-serif text-xl font-bold leading-tight ${pkg.pro ? "text-white" : "text-black dark:text-white"}`}>
            {pkg.name}
          </h3>
        </div>

        {/* Price */}
        <div className="flex flex-col gap-0.5">
          {price ? (
            <>
              <div className="flex items-baseline gap-1">
                <span className={`text-3xl font-bold font-serif ${pkg.pro ? "text-white" : "text-black dark:text-white"}`}>
                  {formatKSh(price)}
                </span>
              </div>
              <span className="text-xs text-black/40 dark:text-white/40">
                {withMaintenance ? "setup + maintenance" : "one-time setup"}
              </span>
            </>
          ) : (
            <>
              <span className="text-3xl font-bold font-serif text-white">
                Custom
              </span>
              <span className="text-xs text-white/40">quoted per project</span>
            </>
          )}
        </div>

        {/* Description */}
        <p className={`text-sm leading-relaxed ${pkg.pro ? "text-white/50" : "text-black/50 dark:text-white/50"}`}>
          {pkg.description}
        </p>

        {/* Divider */}
        <div className={`w-full h-px ${pkg.pro ? "bg-white/10" : "bg-black/10 dark:bg-white/10"}`} />

        {/* Features */}
        <ul className="flex flex-col gap-2.5 flex-1">
          {pkg.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <div className="w-4 h-4 rounded-full bg-[#E0001B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={10} className="text-[#E0001B]" strokeWidth={3} />
              </div>
              <span className={`text-sm ${pkg.pro ? "text-white/70" : "text-black/60 dark:text-white/60"}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Milestone note */}
        <div className={`text-[10px] px-3 py-2 rounded-lg flex items-center gap-2 ${pkg.highlight
          ? "bg-[#E0001B]/8 text-[#E0001B]"
          : pkg.pro
            ? "bg-white/5 text-white/40"
            : "bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40"
          }`}>
          <div className="w-1 h-1 rounded-full bg-[#006B3F] flex-shrink-0" />
          50% on start · 50% on delivery
        </div>

        {/* CTA */}
        <a
          href={pkg.ctaHref}
          className={`
            w-full py-3 rounded-xl text-sm font-semibold text-center transition-all duration-200
            ${pkg.highlight
              ? "bg-[#E0001B] hover:bg-[#B50016] text-white"
              : pkg.pro
                ? "bg-white text-black hover:bg-white/90 flex items-center justify-center gap-2"
                : "border border-black/15 dark:border-white/15 text-black dark:text-white hover:border-black/30 dark:hover:border-white/30 hover:bg-black/3 dark:hover:bg-white/3"
            }
          `}
        >
          {pkg.pro && <MessageCircle size={14} />}
          {pkg.cta}
        </a>
      </div>
    </div>
  )
}