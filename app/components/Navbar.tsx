"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        setMounted(true)
        const onScroll = () => setScrolled(window.scrollY > 10)
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const navLinks = [
        { label: "How it Works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
    ]

    return (
        <>
            <nav
                className={`
          fixed top-0 left-0 right-0 z-50 h-[68px]
          transition-all duration-300
          ${scrolled
                        ? "border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-[12px]"
                        : "bg-transparent"
                    }
        `}
            >
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                        {mounted ? (
                            <Image
                                src={theme === "dark" ? "/zenira-logo-dark.svg" : "/zenira-logo-light.svg"}
                                alt="Zenira"
                                width={110}
                                height={32}
                                priority
                            />
                        ) : (
                            // SSR placeholder — prevents layout shift
                            <div className="w-[110px] h-[32px]" />
                        )}
                    </Link>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right side: toggle + CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Dark/light toggle */}
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2 rounded-md text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                        )}

                        {/* CTA */}
                        <Link
                            href="#pricing"
                            className="
                px-5 py-2 rounded-md text-sm font-semibold text-white
                bg-[#E0001B] hover:bg-[#B50016]
                transition-colors duration-200
                tracking-wide
              "
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile: toggle + hamburger */}
                    <div className="flex md:hidden items-center gap-3">
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2 text-black/50 dark:text-white/50"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                        )}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2 text-black/70 dark:text-white/70"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile drawer */}
            {mobileOpen && (
                <div className="fixed inset-0 z-40 md:hidden pt-[68px]">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/30 dark:bg-black/60 backdrop-blur-sm"
                        onClick={() => setMobileOpen(false)}
                    />
                    {/* Drawer */}
                    <div className="relative bg-white dark:bg-[#111111] border-b border-black/10 dark:border-white/10 px-6 py-6 flex flex-col gap-5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-base font-medium text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#pricing"
                            onClick={() => setMobileOpen(false)}
                            className="mt-2 px-5 py-3 rounded-md text-sm font-semibold text-white bg-[#E0001B] hover:bg-[#B50016] transition-colors text-center"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}