"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sun, Moon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => setMounted(true), [])

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/90 dark:bg-black/90 border-b border-white/10">
            <div className="flex items-center justify-between px-[5%] h-[68px]">

                {/* Logo */}
                <Link href="/">
                    <Image
                        src={theme === "dark" ? "/zenira-logo-dark.svg" : "/zenira-logo-dark.svg"}
                        alt="Zenira"
                        width={120}
                        height={36}
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#how-it-works" className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                        How it Works
                    </Link>
                    <Link href="#pricing" className="text-sm text-white/70 hover:text-white transition-colors duration-200">
                        Pricing
                    </Link>
                </div>

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-4">

                    {/* Dark/Light Toggle */}
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-md text-white/70 hover:text-white transition-colors duration-200"
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                    )}

                    {/* CTA */}
                    <Link
                        href="#get-started"
                        className="bg-[#E0001B] hover:bg-[#B50016] text-white text-sm font-semibold px-5 py-2.5 rounded-[4px] transition-colors duration-200"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white/70 hover:text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            {menuOpen && (
                <div className="md:hidden bg-black border-t border-white/10 px-[5%] py-6 flex flex-col gap-6">
                    <Link
                        href="#how-it-works"
                        onClick={() => setMenuOpen(false)}
                        className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                        How it Works
                    </Link>
                    <Link
                        href="#pricing"
                        onClick={() => setMenuOpen(false)}
                        className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                        Pricing
                    </Link>
                    <div className="flex items-center gap-4 pt-2 border-t border-white/10">
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                className="p-2 text-white/70 hover:text-white"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                            </button>
                        )}
                        <Link
                            href="#get-started"
                            onClick={() => setMenuOpen(false)}
                            className="bg-[#E0001B] hover:bg-[#B50016] text-white text-sm font-semibold px-5 py-2.5 rounded-[4px] transition-colors duration-200"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}