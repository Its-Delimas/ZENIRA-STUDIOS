"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gray-50 dark:bg-[#0A0A0A] overflow-hidden flex items-center">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(#915F5F 1px, transparent 1px), linear-gradient(90deg, #915F5F 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red radial glow — bottom right behind mockup */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(224,0,27,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT — Text */}
        <div className="flex flex-col gap-6">
          {/* Eyebrow */}
          <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border border-[#E0001B]/40 bg-[#E0001B]/5 text-xs font-medium text-[#E0001B] tracking-widest uppercase">
            Made in Kenya 🇰🇪
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] text-black dark:text-white">
            Customers are searching for you.{" "}
            <span className="text-[#E0001B]">Can they find you?</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-black/60 dark:text-white/60 leading-relaxed max-w-md">
            We build your online presence so customers find you first, not your
            competitor.
          </p>

          {/* Trust line */}
          <p className="text-sm text-black/40 dark:text-white/40">
            No tech skills needed. No hidden fees. Just your shop, getting
            found.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-2">
            <Link
              href="#pricing"
              className="px-6 py-3 rounded-md text-sm font-semibold text-white bg-[#E0001B] hover:bg-[#B50016] transition-colors duration-200"
            >
              Get Found Online
            </Link>
            <Link
              href="#how-it-works"
              className="px-6 py-3 rounded-md text-sm font-semibold text-black dark:text-white border border-black/20 dark:border-white/20 hover:border-black/40 dark:hover:border-white/40 transition-colors duration-200"
            >
              See How It Works
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 mt-4 pt-6 border-t border-black/10 dark:border-white/10">
            {[
              { value: "5–10", label: "Days to go live" },
              { value: "co.ke", label: "Domain included" },
              { value: "50%", label: "Pay only on start" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-lg font-bold font-serif text-black dark:text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-black/40 dark:text-white/40 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Browser Mockup */}
        <div className="relative flex items-center justify-center">
          {/* Glow behind mockup */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(224,0,27,0.15) 0%, transparent 65%)",
            }}
          />

          {/* Browser window */}
          <div className="relative w-full max-w-[500px] rounded-xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-white dark:bg-[#111111]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-black/10 dark:border-white/10 bg-gray-100 dark:bg-[#1A1A1A]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#E0001B]/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
                <div className="w-3 h-3 rounded-full bg-[#006B3F]/70" />
              </div>
              {/* URL bar */}
              <div className="flex-1 mx-3 px-3 py-1 rounded bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 text-xs text-black/40 dark:text-white/40 font-mono">
                yourshop.co.ke
              </div>
            </div>

            {/* Mockup content */}
            <div className="p-5 flex flex-col gap-4">
              {/* Shop header */}
              <div className="flex items-center justify-between pb-3 border-b border-black/10 dark:border-white/10">
                <div className="flex flex-col gap-0.5">
                  <div className="text-sm font-bold text-black dark:text-white">
                    Mama Njeri's Boutique
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#006B3F]" />
                    <span className="text-xs text-[#006B3F] font-medium">
                      Live
                    </span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded bg-[#E0001B] text-white text-xs font-semibold">
                  Shop Now
                </div>
              </div>

              {/* Product grid */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { name: "Leso Set", price: "KSh 2,400" },
                  { name: "Kikoy Wrap", price: "KSh 1,800" },
                  { name: "Batik Top", price: "KSh 3,200" },
                ].map((item) => (
                  <div key={item.name} className="flex flex-col gap-1.5">
                    <div className="aspect-square rounded-md bg-gray-100 dark:bg-[#1A1A1A] border border-black/5 dark:border-white/5" />
                    <div className="text-[10px] font-medium text-black dark:text-white leading-tight">
                      {item.name}
                    </div>
                    <div className="text-[10px] text-[#E0001B] font-semibold">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>

              {/* M-Pesa badge */}
              <div className="flex items-center justify-between pt-2 border-t border-black/10 dark:border-white/10">
                <span className="text-[10px] text-black/40 dark:text-white/40">
                  Accepts payments via
                </span>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#006B3F]/10 border border-[#006B3F]/20">
                  <div className="w-2 h-2 rounded-full bg-[#006B3F]" />
                  <span className="text-[10px] font-bold text-[#006B3F]">
                    M-PESA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Google card */}
          <div className="absolute -bottom-4 -left-4 lg:-left-8 w-52 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-[#111111] shadow-xl p-3 flex flex-col gap-2">
            <div className="text-[9px] text-black/40 dark:text-white/40 uppercase tracking-widest font-medium">
              Google Search
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs font-semibold text-[#1a73e8] leading-tight">
                Mama Njeri's Boutique — Nairobi
              </div>
              <div className="text-[10px] text-[#006B3F]">yourshop.co.ke</div>
              <div className="text-[9px] text-black/50 dark:text-white/40 leading-relaxed">
                Authentic African fashion. Fast delivery across Kenya. Order via
                M-Pesa.
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-2.5 h-2.5 fill-yellow-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="text-[9px] text-black/40 dark:text-white/40 ml-0.5">
                4.9 (128)
              </span>
            </div>
          </div>

          {/* Floating "Top Result" badge */}
          <div className="absolute -top-3 -right-3 lg:-right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E0001B] shadow-lg">
            <svg className="w-3 h-3 fill-white" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <span className="text-[10px] font-bold text-white tracking-wide">
              #1 Result
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
