"use client"

import { ClipboardList, Settings2, Globe, TrendingUp } from "lucide-react"

const steps = [
    {
        number: "01",
        icon: ClipboardList,
        title: "Tell Us About Your Shop",
        description:
            "Fill a quick form or jump on a 10-minute call. Tell us your shop name, what you sell, and how you want customers to reach you. That's it — we handle everything from here.",
        detail: "Quick form · Discovery call · No tech knowledge needed",
    },
    {
        number: "02",
        icon: Settings2,
        title: "We Get to Work",
        description:
            "Your website, Google Business Profile, Maps listing, social pages, and SEO — all built by us. You get progress updates and a showcase before anything goes live.",
        detail: "5–10 day turnaround · Progress showcase included",
    },
    {
        number: "03",
        icon: Globe,
        title: "You Go Live",
        description:
            "We launch your shop online. Your co.ke domain is live, your Google listing is active, and customers can find you instantly. Final payment only happens after you approve.",
        detail: "50% on delivery · co.ke domain included · You approve first",
    },
    {
        number: "04",
        icon: TrendingUp,
        title: "You Stay Found",
        description:
            "Optional monthly maintenance keeps your presence sharp — updates, SEO tweaks, and support. Or take full DIY control. Either way, your shop stays visible.",
        detail: "Optional maintenance · Full control · Ongoing support",
    },
]

export default function HowItWorks() {
    return (
        <section
            id="how-it-works"
            className="relative bg-gray-50 dark:bg-[#0A0A0A] py-32 overflow-hidden"
        >
            {/* Faint background texture */}
            <div
                className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6">

                {/* Section header */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-xs font-medium text-black/40 dark:text-white/40 tracking-widest uppercase mb-6">
                        The Process
                    </div>
                    <h2 className="font-serif text-4xl sm:text-5xl font-bold text-black dark:text-white leading-tight">
                        From invisible to{" "}
                        <span className="text-[#E0001B]">unforgettable.</span>
                    </h2>
                </div>

                {/* Roadmap */}
                <div className="relative">

                    {/* Center vertical line */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block">
                        <div
                            className="w-full h-full"
                            style={{
                                background: "linear-gradient(to bottom, #E0001B, #A30014, #3A0008)",
                            }}
                        />
                    </div>

                    {/* Steps */}
                    <div className="flex flex-col gap-0">
                        {steps.map((step, index) => {
                            const isLeft = index % 2 === 0
                            const Icon = step.icon

                            return (
                                <div
                                    key={step.number}
                                    className="relative grid grid-cols-1 md:grid-cols-2 gap-0 md:min-h-[280px]"
                                >
                                    {/* LEFT CONTENT */}
                                    <div
                                        className={`
                      flex items-center py-12
                      ${isLeft
                                                ? "md:justify-end md:pr-16"
                                                : "md:order-2 md:justify-start md:pl-16"
                                            }
                    `}
                                    >
                                        {isLeft && (
                                            <StepCard step={step} Icon={Icon} align="right" />
                                        )}
                                        {!isLeft && (
                                            <StepCard step={step} Icon={Icon} align="left" />
                                        )}
                                    </div>

                                    {/* CENTER DOT */}
                                    <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex-col items-center justify-center">
                                        {/* Outer glow ring */}
                                        <div
                                            className="absolute w-14 h-14 rounded-full"
                                            style={{
                                                background: "radial-gradient(circle, rgba(224,0,27,0.2) 0%, transparent 70%)",
                                            }}
                                        />
                                        {/* Dot */}
                                        <div className="relative w-10 h-10 rounded-full border-2 border-[#E0001B] bg-gray-50 dark:bg-[#0A0A0A] flex items-center justify-center">
                                            <Icon size={16} className="text-[#E0001B]" />
                                        </div>
                                    </div>

                                    {/* RIGHT SPACER (alternating) */}
                                    <div
                                        className={`hidden md:block ${isLeft ? "md:order-2" : "md:order-1"}`}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Bottom trust line */}
                <div className="mt-20 text-center">
                    <p className="text-sm text-black/40 dark:text-white/40">
                        No full upfront payment · Milestone-based · You approve before you pay the rest
                    </p>
                </div>
            </div>
        </section>
    )
}

function StepCard({
    step,
    Icon,
    align,
}: {
    step: (typeof steps)[0]
    Icon: React.ElementType
    align: "left" | "right"
}) {
    return (
        <div
            className={`
        group max-w-sm w-full flex flex-col gap-4
        ${align === "right" ? "items-start md:items-end text-left md:text-right" : "items-start text-left"}
      `}
        >
            {/* Step number + icon row */}
            <div
                className={`flex items-center gap-3 ${align === "right" ? "flex-row md:flex-row-reverse" : "flex-row"}`}
            >
                {/* Mobile icon dot */}
                <div className="md:hidden w-9 h-9 rounded-full border-2 border-[#E0001B] bg-gray-50 dark:bg-[#0A0A0A] flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-[#E0001B]" />
                </div>
                <span className="text-xs font-mono font-bold text-[#E0001B] tracking-widest">
                    {step.number}
                </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-black dark:text-white leading-snug">
                {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-black/55 dark:text-white/55 leading-relaxed">
                {step.description}
            </p>

            {/* Detail chips */}
            <div
                className={`flex flex-wrap gap-2 ${align === "right" ? "justify-start md:justify-end" : "justify-start"}`}
            >
                {step.detail.split(" · ").map((d) => (
                    <span
                        key={d}
                        className="text-[10px] px-2.5 py-1 rounded-full border border-black/10 dark:border-white/10 text-black/40 dark:text-white/40 tracking-wide uppercase font-medium"
                    >
                        {d}
                    </span>
                ))}
            </div>
        </div>
    )
}