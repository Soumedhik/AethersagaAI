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
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#0084ff]/30 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#0066cc]/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#0084ff]/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-[#0066cc]/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="content-wrapper max-w-[1000px] mx-auto px-[60px] relative z-[2]">
          {/* Enhanced main title with gradient and animations */}
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="relative">
              {/* Gradient text effect */}
              <span className="block text-[140px] font-extralight leading-[0.9] tracking-[-4px] font-serif bg-gradient-to-r from-white via-[#0084ff] to-white bg-clip-text text-transparent animate-gradient-x">
                Aethersaga
              </span>

              {/* Animated underline */}
              <div className="relative mt-2">
                <div className="h-1 bg-gradient-to-r from-transparent via-[#0084ff] to-transparent rounded-full animate-pulse" />
                <div className="absolute inset-0 h-1 bg-gradient-to-r from-[#0084ff]/50 to-[#0066cc]/50 rounded-full blur-sm animate-pulse" />
              </div>
            </h1>
          </div>

          {/* Enhanced subtitle */}
          <div className="mb-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-[48px] font-light leading-[1.1] tracking-[-1px] font-serif text-[#0084ff] relative">
              AI Research Group
              {/* Subtle glow effect */}
              <div className="absolute inset-0 text-[48px] font-light leading-[1.1] tracking-[-1px] font-serif text-[#0084ff] blur-sm opacity-50 animate-pulse">
                AI Research Group
              </div>
            </h2>
          </div>

          {/* Enhanced description with better typography */}
          <div className="mb-12 animate-fade-in-up relative" style={{ animationDelay: '1s' }}>
            <p className="text-xl leading-relaxed text-[#b8b8b8] font-light max-w-[700px] mx-auto relative z-10">
              <span className="relative z-10">
                Our vision is to advance the frontier of artificial intelligence by
                developing systems that not only process information but also
                <span className="text-white font-medium"> acquire, reason with, and validate knowledge</span>.
              </span>
            </p>

            {/* Background text effect */}
            <div className="absolute inset-0 text-xl leading-relaxed text-[#0084ff]/10 font-light blur-sm transform scale-105 flex items-center justify-center">
              <span>
                Our vision is to advance the frontier of artificial intelligence by
                developing systems that not only process information but also
                acquire, reason with, and validate knowledge.
              </span>
            </div>
          </div>

          {/* Enhanced call-to-action buttons */}
          <div className="flex gap-6 items-center justify-center animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <Link
              href="/research"
              className="group relative flex items-center gap-3 bg-gradient-to-r from-[#0084ff] to-[#0066cc] text-white py-4 px-8 rounded-lg text-lg font-medium hover:from-[#0066cc] hover:to-[#0055aa] hover:scale-105 hover:shadow-2xl hover:shadow-[#0084ff]/25 transition-all duration-300 overflow-hidden"
            >
              {/* Button background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <span className="relative z-10">Explore Research</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg border border-white/20 group-hover:border-white/40 transition-colors duration-300" />
            </Link>

            <Link
              href="/publications"
              className="group relative bg-transparent border-2 border-[#0084ff]/50 text-[#0084ff] py-4 px-8 rounded-lg text-lg font-medium hover:bg-[#0084ff]/10 hover:border-[#0084ff] hover:text-white hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-[#0084ff]/0 group-hover:bg-[#0084ff]/10 transition-colors duration-300" />

              <span className="relative z-10">View Publications</span>

              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-[#0084ff]/50 group-hover:shadow-lg group-hover:shadow-[#0084ff]/20 transition-all duration-300" />
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#0084ff]/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#0084ff] rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10 bg-[rgba(10,10,10,0.5)] border-y border-white/10">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          <div className="flex justify-center gap-20 items-center animate-fade-in-up">
            <div className="text-center">
              <div className="text-[64px] font-light leading-none mb-3">8+</div>
              <div className="text-base text-[#b8b8b8] font-normal">
                Active Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-[64px] font-light leading-none mb-3">6</div>
              <div className="text-base text-[#b8b8b8] font-normal">
                Team Members
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-extralight leading-[1.1] mb-6 tracking-[-1px] font-serif">
              Featured Publication
            </h2>
            <p className="text-lg text-[#b8b8b8] max-w-2xl mx-auto">
              Discover our latest breakthrough in machine learning and
              artificial intelligence research.
            </p>
          </div>

          <div className="grid place-items-center">
            <div className="bg-[rgba(255,255,255,0.02)] border border-white/10 rounded-lg p-8 hover:bg-[rgba(255,255,255,0.04)] transition-all duration-300 hover:border-[#0084ff]/30 w-full max-w-[600px]">
              <div className="text-sm text-[#0084ff] font-medium mb-3">
                IEEE CIACON 2025 • 2025
              </div>
              <h3 className="text-xl font-medium mb-4 leading-relaxed">
                HCAT-Net for Ordinal EEG Emotion Classification
              </h3>
              <p className="text-[#b8b8b8] text-sm leading-relaxed mb-6">
                Our team designed HCAT-Net, a hybrid 1D ResNet–hierarchical
                Transformer with Rotary Positional Embeddings and
                cross-attention fusion, achieving 99.8% accuracy and 100%
                ROC-AUC for ordinal EEG affective state decoding.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/publications"
                  className="text-[#0084ff] text-sm font-medium hover:text-white transition-colors"
                >
                  Read Paper →
                </Link>
                <span className="text-[#666] text-xs">Cited 127 times</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 bg-transparent border border-[#0084ff] text-[#0084ff] py-3 px-6 rounded-md text-base font-medium hover:bg-[#0084ff] hover:text-white transition-all duration-200"
            >
              View All Publications
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-[rgba(10,10,10,0.98)] border-t border-white/10 py-16">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="text-xl mb-4 font-extralight font-sans tracking-wider">
                Aethersaga AI
              </div>
              <p className="text-[#b8b8b8] text-sm leading-relaxed mb-6">
                Advancing machine learning through rigorous research and open
                collaboration.
              </p>
            </div>

            {/* Explore */}
            <div>
              <h4 className="text-white font-semibold mb-4">Explore</h4>
              <div className="space-y-3">
                <Link
                  href="/research"
                  className="block text-[#b8b8b8] hover:text-white transition-colors text-sm"
                >
                  Research
                </Link>
                <Link
                  href="/publications"
                  className="block text-[#b8b8b8] hover:text-white transition-colors text-sm"
                >
                  Publications
                </Link>
                <Link
                  href="/people"
                  className="block text-[#b8b8b8] hover:text-white transition-colors text-sm"
                >
                  People
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <div className="space-y-3">
                <Link
                  href="/dataset"
                  className="block text-[#b8b8b8] hover:text-white transition-colors text-sm"
                >
                  Datasets & Software
                </Link>
                <Link
                  href="/join#contact"
                  className="block text-[#b8b8b8] hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
                <Link
                  href="/join"
                  className="block text-[#b8b8b8] hover:text-white transition-colors text-sm"
                >
                  Join Us
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="text-[#b8b8b8] text-sm">
                  aethersaga.ai@gmail.com
                </div>
                <div className="text-[#b8b8b8] text-sm">
                  DG Block(Newtown), Action Area I, 1/2, Newtown, New Town,
                  Chakpachuria, West Bengal 700156
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8">
            <p className="text-[#888] text-sm text-center">
              © 2025 Aethersaga AI Research Group. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
