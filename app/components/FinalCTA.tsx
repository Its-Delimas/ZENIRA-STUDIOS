import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function FinalCTA() {
    return (
        <section className="relative bg-white dark:bg-[#0A0A0A] py-32 overflow-hidden">

            {/* Top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />

            <div className="relative z-10 max-w-5xl mx-auto px-6">

                {/* Main card */}
                <div className="relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#111111]">

                    {/* Red radial glow — center */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: "radial-gradient(ellipse at 50% 0%, rgba(224,0,27,0.12) 0%, transparent 65%)",
                        }}
                    />

                    {/* Top accent line — logo slash motif */}
                    <div
                        className="absolute top-0 left-0 right-0 h-[2px]"
                        style={{
                            background: "linear-gradient(to right, transparent, #E0001B 30%, #A30014 60%, transparent)",
                        }}
                    />

                    <div className="relative z-10 flex flex-col items-center text-center px-8 py-20 gap-8">

                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 dark:border-white/10 text-xs font-medium text-black/40 dark:text-white/40 tracking-widest uppercase">
                            Ready to start?
                        </div>

                        {/* Headline */}
                        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white leading-[1.1] max-w-2xl">
                            Your shop deserves{" "}
                            <span className="text-[#E0001B]">to be found.</span>
                        </h2>

                        {/* Subtext */}
                        <p className="text-base text-black/50 dark:text-white/50 max-w-md leading-relaxed">
                            Join shop owners across Kenya who are getting discovered online every day. Your competitor already started — don't let them stay ahead.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link
                                href="#pricing"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#E0001B] hover:bg-[#B50016] transition-colors duration-200"
                            >
                                See Packages
                                <ArrowRight size={15} />
                            </Link>
                            <a
                                href={`https://wa.me/254718376981?text=${encodeURIComponent("Hi Zenira, I'd like to get my shop found online.")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-black dark:text-white border border-black/15 dark:border-white/15 hover:border-black/30 dark:hover:border-white/30 transition-colors duration-200"
                            >
                                <MessageCircle size={15} className="text-[#006B3F]" />
                                Chat on WhatsApp
                            </a>
                        </div>

                        {/* Reassurance line */}
                        <p className="text-xs text-black/35 dark:text-white/35 tracking-wide">
                            No full upfront payment · 50% on start · 50% on delivery · Made in Kenya 🇰🇪
                        </p>
                    </div>
                </div>

                {/* Stats row — below card */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/8 dark:divide-white/8 border border-black/8 dark:border-white/8 rounded-2xl overflow-hidden bg-white dark:bg-[#111111]">
                    {[
                        { value: "5–10 Days", label: "Average time to go live" },
                        { value: "co.ke Domain", label: "Included in every package" },
                        { value: "50% Only", label: "Pay on project start" },
                    ].map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center justify-center gap-1.5 px-8 py-6 text-center"
                        >
                            <span className="font-serif text-xl font-bold text-black dark:text-white">
                                {stat.value}
                            </span>
                            <span className="text-xs text-black/40 dark:text-white/40 uppercase tracking-wider">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}