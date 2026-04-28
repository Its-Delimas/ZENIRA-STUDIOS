"use client"

import { useState } from "react"
import { Plus, Minus, MessageCircle } from "lucide-react"

const faqs = [
  {
    question: "Do I need any tech skills?",
    answer:
      "Not at all. Zenira is a done-for-you service. You tell us about your shop, we handle everything — website, Google listing, social pages, SEO. Zero technical knowledge required on your end.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Most packages are live within 5–10 business days. We'll give you a progress showcase before anything goes live, so you're never in the dark about where things stand.",
  },
  {
    question: "What happens after my site is live?",
    answer:
      "You're online and findable. From there, you can optionally add a monthly maintenance plan — we handle updates, SEO tweaks, and support. Or you take full control yourself. Either way, your shop stays visible.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Yes. You can start with Starter or Basic Shop and upgrade to Growth or Pro as your business grows. We make the transition smooth — no starting from scratch.",
  },
  {
    question: "Is M-Pesa payment supported?",
    answer:
      "M-Pesa integration is included in the Growth and Pro packages. Basic Shop uses WhatsApp ordering or an online order form instead — still seamless for your customers.",
  },
  {
    question: "What does the maintenance plan include?",
    answer:
      "Regular content updates, SEO monitoring and tweaks, security patches, uptime monitoring, and direct support access. It's everything to keep your online presence sharp month after month.",
  },
  {
    question: "Do I pay the full amount upfront?",
    answer:
      "Never. Zenira uses a milestone-based model — 50% when we start and show you progress, 50% only after final delivery and your approval. You only pay in full when you're happy.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="relative bg-gray-50 dark:bg-[#0A0A0A] py-32 overflow-hidden"
    >
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

      {/* Faint red glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(224,0,27,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-xs font-medium text-black/40 dark:text-white/40 tracking-widest uppercase mb-6">
            FAQ
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-black dark:text-white leading-tight">
            Questions{" "}
            <span className="text-[#E0001B]">answered.</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`
                  rounded-2xl border overflow-hidden transition-all duration-300
                  ${isOpen
                    ? "border-[#E0001B]/30 bg-white dark:bg-[#111111] shadow-[0_0_24px_rgba(224,0,27,0.06)]"
                    : "border-black/8 dark:border-white/8 bg-white dark:bg-[#111111] hover:border-black/15 dark:hover:border-white/15"
                  }
                `}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                >
                  <span
                    className={`text-sm sm:text-base font-semibold leading-snug transition-colors duration-200 ${
                      isOpen
                        ? "text-black dark:text-white"
                        : "text-black/70 dark:text-white/70 group-hover:text-black dark:group-hover:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <div
                    className={`
                      flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300
                      ${isOpen
                        ? "bg-[#E0001B] text-white"
                        : "bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40"
                      }
                    `}
                  >
                    {isOpen
                      ? <Minus size={13} strokeWidth={2.5} />
                      : <Plus size={13} strokeWidth={2.5} />
                    }
                  </div>
                </button>

                {/* Answer — animated */}
                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5">
                      {/* Divider */}
                      <div className="w-full h-px bg-black/6 dark:bg-white/6 mb-4" />
                      <p className="text-sm text-black/55 dark:text-white/55 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-black/40 dark:text-white/40">
            Still have questions? We're one message away.
          </p>
          <a
            href={`https://wa.me/254718376981?text=${encodeURIComponent("Hi Zenira, I have a question about your services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-black/10 dark:border-white/10 text-sm font-semibold text-black dark:text-white hover:border-[#E0001B]/40 hover:text-[#E0001B] dark:hover:text-[#E0001B] transition-all duration-200 group"
          >
            <MessageCircle
              size={16}
              className="text-[#006B3F] group-hover:text-[#E0001B] transition-colors duration-200"
            />
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}