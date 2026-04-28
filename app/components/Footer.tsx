import Link from "next/link"
import { FaXTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa6"
import { Mail, MessageCircle, MapPin } from "lucide-react"

const currentYear = new Date().getFullYear()

const quickLinks = [
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Get Started", href: "#pricing" },
]

const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
]

const socials = [
    { icon: FaXTwitter, href: "#", label: "X / Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaFacebook, href: "#", label: "Facebook" },
]

export default function Footer() {
    return (
        <footer className="relative bg-gray-50 dark:bg-[#0A0A0A] border-t border-black/8 dark:border-white/8">

            {/* Top border accent */}
            <div
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{
                    background: "linear-gradient(to right, transparent, #E0001B 30%, #A30014 60%, transparent)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

                {/* Main grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

                    {/* Col 1 — Brand */}
                    <div className="flex flex-col gap-5 lg:col-span-1">
                        {/* Logo wordmark fallback */}
                        <div className="flex flex-col gap-0.5">
                            <span className="font-serif text-2xl font-bold text-black dark:text-white tracking-tight">
                                ZEN<span className="text-[#E0001B]">I</span>RA
                            </span>
                            <span className="text-[10px] tracking-[0.3em] uppercase text-black/30 dark:text-white/30 font-medium">
                                Est. 2025
                            </span>
                        </div>

                        {/* Tagline */}
                        <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed max-w-[200px]">
                            Your shop, found. We build your online presence so customers find you first.
                        </p>

                        {/* Social icons */}
                        <div className="flex items-center gap-3">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center text-black/40 dark:text-white/40 hover:text-[#E0001B] hover:border-[#E0001B]/30 transition-all duration-200"
                                >
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Col 2 — Services */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-xs font-bold tracking-widest uppercase text-black/30 dark:text-white/30">
                            Services
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {[
                                "Business Website",
                                "Google Business Profile",
                                "Google Maps Listing",
                                "Social Media Setup",
                                "SEO Optimization",
                                "M-Pesa Integration",
                            ].map((item) => (
                                <li key={item}>
                                    <span className="text-sm text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-200 cursor-default">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3 — Quick Links */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-xs font-bold tracking-widest uppercase text-black/30 dark:text-white/30">
                            Quick Links
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4 — Contact */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-xs font-bold tracking-widest uppercase text-black/30 dark:text-white/30">
                            Contact
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <li><a

                                href="mailto:hello@zenira.co.ke"
                                className="flex items-start gap-2.5 text-sm text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-200 group"
                            >
                                <Mail size={14} className="mt-0.5 flex-shrink-0 group-hover:text-[#E0001B] transition-colors" />
                                hello@zenira.co.ke
                            </a>
                            </li>
                            <li><a

                                href={`https://wa.me/254700000000?text=${encodeURIComponent("Hi Zenira, I'd like to learn more.")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-2.5 text-sm text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors duration-200 group"
                            >
                                <MessageCircle size={14} className="mt-0.5 flex-shrink-0 group-hover:text-[#006B3F] transition-colors" />
                                WhatsApp
                            </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-2.5 text-sm text-black/50 dark:text-white/50">
                                    <MapPin size={14} className="mt-0.5 flex-shrink-0 text-[#E0001B]" />
                                    Nairobi, Kenya 🇰🇪
                                </div>
                            </li>
                        </ul>

                        {/* M-Pesa badge */}
                        <div className="inline-flex w-fit items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#006B3F]/20 bg-[#006B3F]/5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#006B3F]" />
                            <span className="text-[10px] font-bold text-[#006B3F] tracking-wider uppercase">
                                M-Pesa Accepted
                            </span>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-black/8 dark:bg-white/8 mb-8" />

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-black/30 dark:text-white/30 text-center sm:text-left">
                        © {currentYear} Zenira. Made with ❤️ in Kenya 🇰🇪
                    </p>

                    <div className="flex items-center gap-5">
                        {legalLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-xs text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60 transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}