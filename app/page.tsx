"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { AnimatedLogo } from "@/components/animated-logo";

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Loading animation
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="text-4xl font-extralight mb-4 animate-pulse tracking-wider font-sans">
            Aethersaga AI
          </div>
          <div
            className="text-sm text-[#b8b8b8] animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            Aethersaga AI Research Group
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('/research-background.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.7)] via-[rgba(10,10,10,0.8)] to-[rgba(10,10,10,0.9)]" />
      </div>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-[10px] border-b border-white/10">
        <nav className="flex items-center justify-between py-5 px-[60px] max-w-[1400px] mx-auto">
          <AnimatedLogo />

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/research"
              className="text-[15px] transition-colors duration-200 text-[#b8b8b8] hover:text-white"
            >
              Research
            </Link>
            <Link
              href="/publications"
              className="text-[15px] transition-colors duration-200 text-[#b8b8b8] hover:text-white"
            >
              Publications
            </Link>
            <Link
              href="/people"
              className="text-[15px] transition-colors duration-200 text-[#b8b8b8] hover:text-white"
            >
              People
            </Link>
            <Link
              href="/dataset"
              className="text-[15px] transition-colors duration-200 text-[#b8b8b8] hover:text-white"
            >
              Datasets
            </Link>
            <Link
              href="/join"
              className="text-[15px] transition-colors duration-200 text-[#b8b8b8] hover:text-white"
            >
              Join
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/join#contact"
              className="flex items-center gap-2 bg-[#0084ff] text-white py-2.5 px-5 rounded-md text-[15px] font-medium hover:bg-[#0066cc] hover:translate-x-0.5 transition-all duration-200"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile: Hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/5 transition"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Panel */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full border-b border-white/10 bg-[rgba(10,10,10,0.95)] backdrop-blur-md transition-all duration-300 ${
            mobileOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="px-6 py-4 space-y-2">
            <Link
              href="/research"
              className="block py-3 text-[16px] text-[#e6e6e6] hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Research
            </Link>
            <Link
              href="/publications"
              className="block py-3 text-[16px] text-[#e6e6e6] hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Publications
            </Link>
            <Link
              href="/people"
              className="block py-3 text-[16px] text-[#e6e6e6] hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              People
            </Link>
            <Link
              href="/dataset"
              className="block py-3 text-[16px] text-[#e6e6e6] hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Datasets
            </Link>
            <Link
              href="/join"
              className="block py-3 text-[16px] text-[#e6e6e6] hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Join
            </Link>

            <div className="h-px bg-white/10 my-2" />

            <Link
              href="/join#contact"
              className="w-full flex items-center justify-center gap-2 bg-[#0084ff] text-white py-3 rounded-md text-[15px] font-medium hover:bg-[#0066cc] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen pt-[120px] pb-20 relative flex items-center justify-center text-center overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#0084ff]/20 rounded-full animate-spin-slow opacity-30" style={{ animationDuration: '20s' }} />
          <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-[#0066cc]/30 rounded-lg rotate-45 animate-pulse opacity-40" />
          <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-[#0084ff]/10 rounded-full animate-bounce opacity-50" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-[#0084ff]/25 rounded-full animate-ping opacity-20" style={{ animationDelay: '2s' }} />

          {/* Advanced particle system */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#0084ff]/60 rounded-full animate-pulse shadow-lg shadow-[#0084ff]/50" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#0066cc]/70 rounded-full animate-pulse shadow-md shadow-[#0066cc]/50" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#0084ff]/80 rounded-full animate-pulse shadow-sm shadow-[#0084ff]/50" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-[#0066cc]/50 rounded-full animate-pulse shadow-xl shadow-[#0066cc]/50" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-[#0084ff]/40 rounded-full animate-bounce shadow-md shadow-[#0084ff]/50" style={{ animationDelay: '1.5s' }} />

          {/* Gradient orbs */}
          <div className="absolute top-1/6 left-1/6 w-64 h-64 bg-gradient-to-r from-[#0084ff]/5 to-transparent rounded-full blur-3xl animate-pulse opacity-60" />
          <div className="absolute bottom-1/6 right-1/6 w-96 h-96 bg-gradient-to-l from-[#0066cc]/3 to-transparent rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '3s' }} />
        </div>

        <div className="content-wrapper max-w-[1000px] mx-auto px-[60px] relative z-[2]">
          {/* Enhanced main title with advanced gradient and animations */}
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="relative">
              {/* Multi-layer gradient text effect */}
              <span className="block text-[140px] font-extralight leading-[0.9] tracking-[-4px] font-serif bg-gradient-to-r from-white via-[#0084ff] via-[#0066cc] to-white bg-clip-text text-transparent animate-gradient-x relative">
                Aethersaga
                {/* Text shadow effect */}
                <span className="absolute inset-0 text-[140px] font-extralight leading-[0.9] tracking-[-4px] font-serif text-[#0084ff]/20 blur-sm animate-pulse">
                  Aethersaga
                </span>
              </span>

              {/* Enhanced animated underline with multiple layers */}
              <div className="relative mt-4">
                <div className="h-1.5 bg-gradient-to-r from-transparent via-[#0084ff] via-[#0066cc] to-transparent rounded-full animate-pulse relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer rounded-full" />
                </div>
                <div className="absolute inset-0 h-1.5 bg-gradient-to-r from-[#0084ff]/30 to-[#0066cc]/30 rounded-full blur-md animate-pulse" />
                <div className="absolute -inset-1 h-3 bg-gradient-to-r from-[#0084ff]/10 to-[#0066cc]/10 rounded-full blur-lg animate-pulse" />
              </div>
            </h1>
          </div>

          {/* Enhanced subtitle with glow effects */}
          <div className="mb-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-[48px] font-light leading-[1.1] tracking-[-1px] font-serif text-[#0084ff] relative">
              AI Research Group
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 text-[48px] font-light leading-[1.1] tracking-[-1px] font-serif text-[#0084ff] blur-sm opacity-60 animate-pulse">
                AI Research Group
              </div>
              <div className="absolute inset-0 text-[48px] font-light leading-[1.1] tracking-[-1px] font-serif text-[#0066cc] blur-md opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
                AI Research Group
              </div>
            </h2>
          </div>

          {/* Enhanced description with better visual hierarchy */}
          <div className="mb-12 animate-fade-in-up relative" style={{ animationDelay: '1s' }}>
            <div className="relative">
              <p className="text-xl leading-relaxed text-[#b8b8b8] font-light max-w-[700px] mx-auto relative z-10">
                <span className="relative z-10">
                  Our vision is to advance the frontier of artificial intelligence by
                  developing systems that not only process information but also
                  <span className="text-white font-medium relative">
                    acquire, reason with, and validate knowledge
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0084ff] to-[#0066cc] rounded-full animate-pulse"></span>
                  </span>.
                </span>
              </p>

              {/* Enhanced background text effect */}
              <div className="absolute inset-0 text-xl leading-relaxed text-[#0084ff]/8 font-light blur-sm transform scale-105 flex items-center justify-center -z-10">
                <span>
                  Our vision is to advance the frontier of artificial intelligence by
                  developing systems that not only process information but also
                  acquire, reason with, and validate knowledge.
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced call-to-action buttons with advanced effects */}
          <div className="flex gap-6 items-center justify-center animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <Link
              href="/research"
              className="group relative flex items-center gap-3 bg-gradient-to-r from-[#0084ff] via-[#0066cc] to-[#0055aa] text-white py-4 px-8 rounded-xl text-lg font-medium hover:scale-105 hover:shadow-2xl hover:shadow-[#0084ff]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0084ff]/20 to-[#0066cc]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              <span className="relative z-10 font-medium">Explore Research</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/5 transition-colors duration-300 animate-ripple" />
            </Link>

            <Link
              href="/publications"
              className="group relative bg-transparent border-2 border-[#0084ff]/60 text-[#0084ff] py-4 px-8 rounded-xl text-lg font-medium hover:bg-[#0084ff]/10 hover:border-[#0084ff] hover:text-white hover:scale-105 hover:shadow-xl hover:shadow-[#0084ff]/20 transition-all duration-500 overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-[#0084ff]/0 group-hover:bg-[#0084ff]/10 transition-colors duration-500 rounded-xl" />

              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[#0084ff]/50 group-hover:shadow-lg group-hover:shadow-[#0084ff]/20 transition-all duration-500" />

              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer rounded-xl" />

              <span className="relative z-10 font-medium">View Publications</span>

              {/* Subtle glow */}
              <div className="absolute inset-0 rounded-xl bg-[#0084ff]/5 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />
            </Link>
          </div>

          {/* Enhanced scroll indicator with better design */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="relative">
              <div className="w-8 h-12 border-2 border-[#0084ff]/40 rounded-full flex justify-center items-start pt-2 hover:border-[#0084ff] transition-colors duration-300">
                <div className="w-1 h-3 bg-[#0084ff] rounded-full animate-pulse"></div>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 w-8 h-12 border-2 border-[#0084ff]/20 rounded-full blur-sm opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10 bg-gradient-to-b from-[rgba(10,10,10,0.3)] to-[rgba(10,10,10,0.6)] border-y border-white/5">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          <div className="flex justify-center gap-20 items-center animate-fade-in-up">
            <div className="group text-center relative">
              {/* Card background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0084ff]/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#0084ff]/30 hover:bg-[rgba(255,255,255,0.05)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#0084ff]/10">
                <div className="text-[72px] font-light leading-none mb-4 bg-gradient-to-r from-white to-[#0084ff] bg-clip-text text-transparent group-hover:from-[#0084ff] group-hover:to-white transition-all duration-500">
                  8+
                </div>
                <div className="text-lg text-[#b8b8b8] font-normal group-hover:text-white transition-colors duration-300">
                  Active Projects
                </div>
                {/* Animated accent */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#0084ff] to-[#0066cc] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            <div className="group text-center relative">
              {/* Card background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc]/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-[rgba(255,255,255,0.02)] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#0066cc]/30 hover:bg-[rgba(255,255,255,0.05)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#0066cc]/10">
                <div className="text-[72px] font-light leading-none mb-4 bg-gradient-to-r from-white to-[#0066cc] bg-clip-text text-transparent group-hover:from-[#0066cc] group-hover:to-white transition-all duration-500">
                  6
                </div>
                <div className="text-lg text-[#b8b8b8] font-normal group-hover:text-white transition-colors duration-300">
                  Team Members
                </div>
                {/* Animated accent */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#0066cc] to-[#0084ff] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          <div className="text-center mb-20">
            <h2 className="text-[52px] font-extralight leading-[1.1] mb-6 tracking-[-1px] font-serif bg-gradient-to-r from-white to-[#0084ff] bg-clip-text text-transparent">
              Featured Publication
            </h2>
            <p className="text-xl text-[#b8b8b8] max-w-3xl mx-auto leading-relaxed">
              Discover our latest breakthrough in machine learning and
              artificial intelligence research.
            </p>
            {/* Decorative line */}
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#0084ff] to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="grid place-items-center">
            <div className="group relative w-full max-w-[700px]">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0084ff]/10 via-[#0066cc]/5 to-[#0084ff]/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative bg-gradient-to-br from-[rgba(255,255,255,0.03)] to-[rgba(255,255,255,0.01)] backdrop-blur-sm border border-white/10 rounded-2xl p-10 hover:border-[#0084ff]/40 hover:bg-[rgba(255,255,255,0.05)] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#0084ff]/10">
                {/* Conference badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0084ff]/20 to-[#0066cc]/20 border border-[#0084ff]/30 rounded-full px-4 py-2 mb-6">
                  <div className="w-2 h-2 bg-[#0084ff] rounded-full animate-pulse"></div>
                  <span className="text-sm text-[#0084ff] font-medium">
                    IEEE CIACON 2025 â€¢ 2025
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-6 leading-relaxed text-white group-hover:text-[#0084ff] transition-colors duration-300">
                  HCAT-Net for Ordinal EEG Emotion Classification
                </h3>

                {/* Description */}
                <p className="text-[#b8b8b8] text-base leading-relaxed mb-8 group-hover:text-white/90 transition-colors duration-300">
                  Our team designed HCAT-Net, a hybrid 1D ResNetâ€“hierarchical
                  Transformer with Rotary Positional Embeddings and
                  cross-attention fusion, achieving <span className="text-[#0084ff] font-semibold">99.8% accuracy</span> and <span className="text-[#0066cc] font-semibold">100%
                  ROC-AUC</span> for ordinal EEG affective state decoding.
                </p>

                {/* Action buttons and stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <Link
                      href="/publications"
                      className="group/btn inline-flex items-center gap-2 text-[#0084ff] text-sm font-medium hover:text-white transition-all duration-300"
                    >
                      <span>Read Paper</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <div className="flex items-center gap-2 text-[#666] text-xs">
                      <div className="w-1.5 h-1.5 bg-[#0084ff]/50 rounded-full"></div>
                      Cited 127 times
                    </div>
                  </div>

                  {/* Citation badge */}
                  <div className="bg-gradient-to-r from-[#0084ff]/10 to-[#0066cc]/10 border border-[#0084ff]/20 rounded-lg px-3 py-1">
                    <span className="text-xs text-[#0084ff] font-medium">127 Citations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/publications"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-transparent to-transparent border-2 border-[#0084ff]/50 text-[#0084ff] py-4 px-8 rounded-xl text-lg font-medium hover:border-[#0084ff] hover:bg-[#0084ff]/10 hover:text-white hover:scale-105 transition-all duration-500"
            >
              <span>View All Publications</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#0084ff]/30 transition-colors duration-500" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-gradient-to-b from-[rgba(10,10,10,0.95)] to-[rgba(10,10,10,0.98)] border-t border-white/10 py-20">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="text-2xl mb-6 font-extralight font-sans tracking-wider bg-gradient-to-r from-white to-[#0084ff] bg-clip-text text-transparent">
                Aethersaga AI
              </div>
              <p className="text-[#b8b8b8] text-base leading-relaxed mb-8">
                Advancing machine learning through rigorous research and open
                collaboration.
              </p>
              {/* Social links placeholder */}
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-lg flex items-center justify-center hover:border-[#0084ff]/50 hover:bg-[#0084ff]/10 transition-all duration-300 cursor-pointer">
                  <span className="text-[#b8b8b8] text-sm">G</span>
                </div>
                <div className="w-10 h-10 bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-lg flex items-center justify-center hover:border-[#0084ff]/50 hover:bg-[#0084ff]/10 transition-all duration-300 cursor-pointer">
                  <span className="text-[#b8b8b8] text-sm">L</span>
                </div>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Explore</h4>
              <div className="space-y-4">
                <Link
                  href="/research"
                  className="block text-[#b8b8b8] hover:text-[#0084ff] transition-colors duration-300 text-base group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">Research</span>
                </Link>
                <Link
                  href="/publications"
                  className="block text-[#b8b8b8] hover:text-[#0084ff] transition-colors duration-300 text-base group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">Publications</span>
                </Link>
                <Link
                  href="/people"
                  className="block text-[#b8b8b8] hover:text-[#0084ff] transition-colors duration-300 text-base group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">People</span>
                </Link>
                <Link
                  href="/dataset"
                  className="block text-[#b8b8b8] hover:text-[#0084ff] transition-colors duration-300 text-base group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">Datasets</span>
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Resources</h4>
              <div className="space-y-4">
                <Link
                  href="/join"
                  className="block text-[#b8b8b8] hover:text-[#0084ff] transition-colors duration-300 text-base group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">Join Us</span>
                </Link>
                <Link
                  href="/join#contact"
                  className="block text-[#b8b8b8] hover:text-[#0084ff] transition-colors duration-300 text-base group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">Contact</span>
                </Link>
                <div className="text-[#b8b8b8] text-base">GitHub</div>
                <div className="text-[#b8b8b8] text-base">arXiv</div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Contact</h4>
              <div className="space-y-4">
                <div className="text-[#b8b8b8] text-base">
                  <div className="font-medium text-white mb-1">Email</div>
                  aethersaga.ai@gmail.com
                </div>
                <div className="text-[#b8b8b8] text-base">
                  <div className="font-medium text-white mb-1">Location</div>
                  DG Block(Newtown), Action Area I,<br />
                  1/2, Newtown, Chakpachuria,<br />
                  West Bengal 700156
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-[#b8b8b8] text-sm">
                Â© 2025 Aethersaga AI Research Group. All rights reserved.
              </div>
              <div className="flex gap-6 text-sm">
                <span className="text-[#b8b8b8] hover:text-white transition-colors cursor-pointer">Privacy</span>
                <span className="text-[#b8b8b8] hover:text-white transition-colors cursor-pointer">Terms</span>
                <span className="text-[#b8b8b8] hover:text-white transition-colors cursor-pointer">Accessibility</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
