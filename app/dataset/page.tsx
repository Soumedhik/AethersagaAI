"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X, Code, Database } from "lucide-react";
import Link from "next/link";
import { AnimatedLogo } from "@/components/animated-logo";

export default function DatasetPage() {
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
              className="text-[15px] transition-colors duration-200 text-[#0084ff]"
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
              className="block py-3 text-[16px] text-[#0084ff] transition-colors"
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
              <span className="block text-[110px] font-extralight leading-[0.9] tracking-[-4px] font-serif bg-gradient-to-r from-white via-[#0084ff] via-[#0066cc] to-white bg-clip-text text-transparent animate-gradient-x relative">
                Datasets
                {/* Text shadow effect */}
                <span className="absolute inset-0 text-[110px] font-extralight leading-[0.9] tracking-[-4px] font-serif text-[#0084ff]/20 blur-sm animate-pulse">
                  Datasets
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
            <h2 className="text-[32px] font-light leading-[1.1] tracking-[-1px] font-serif text-[#0084ff] relative">
              & Software Tools
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 text-[32px] font-light leading-[1.1] tracking-[-1px] font-serif text-[#0084ff] blur-sm opacity-60 animate-pulse">
                & Software Tools
              </div>
              <div className="absolute inset-0 text-[32px] font-light leading-[1.1] tracking-[-1px] font-serif text-[#0066cc] blur-md opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
                & Software Tools
              </div>
            </h2>
          </div>

          {/* Enhanced description with better visual hierarchy */}
          <div className="mb-12 animate-fade-in-up relative" style={{ animationDelay: '1s' }}>
            <div className="relative">
              <p className="text-xl leading-relaxed text-[#b8b8b8] font-light max-w-[700px] mx-auto relative z-10">
                <span className="relative z-10">
                  Open-source datasets and software tools developed by Aethersaga AI to
                  <span className="text-white font-medium relative">
                    advance machine learning research
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0084ff] to-[#0066cc] rounded-full animate-pulse"></span>
                  </span>.
                </span>
              </p>

              {/* Enhanced background text effect */}
              <div className="absolute inset-0 text-xl leading-relaxed text-[#0084ff]/8 font-light blur-sm transform scale-105 flex items-center justify-center -z-10">
                <span>
                  Open-source datasets and software tools developed by Aethersaga AI to
                  advance machine learning research.
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced call-to-action buttons with advanced effects */}
          <div className="flex gap-6 items-center justify-center animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <Link
              href="#datasets"
              className="group relative flex items-center gap-3 bg-gradient-to-r from-[#0084ff] via-[#0066cc] to-[#0055aa] text-white py-4 px-8 rounded-xl text-lg font-medium hover:scale-105 hover:shadow-2xl hover:shadow-[#0084ff]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0084ff]/20 to-[#0066cc]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              <Database className="w-5 h-5 relative z-10" />
              <span className="relative z-10 font-medium">Explore Datasets</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/5 transition-colors duration-300 animate-ripple" />
            </Link>

            <Link
              href="#software"
              className="group relative bg-transparent border-2 border-[#0084ff]/60 text-[#0084ff] py-4 px-8 rounded-xl text-lg font-medium hover:bg-[#0084ff]/10 hover:border-[#0084ff] hover:text-white hover:scale-105 hover:shadow-xl hover:shadow-[#0084ff]/20 transition-all duration-500 overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-[#0084ff]/0 group-hover:bg-[#0084ff]/10 transition-colors duration-500 rounded-xl" />

              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-xl border border-[#0084ff]/0 group-hover:border-[#0084ff]/40 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-xl bg-[#0084ff]/0 group-hover:bg-[#0084ff]/5 blur-xl transition-colors duration-500" />

              <Code className="w-5 h-5" />
              <span className="relative z-10">View Software</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Datasets & Software Section */}
      <section id="datasets" className="pt-20 pb-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          {/* Upcoming Message */}
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              {/* Icon */}
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-[#0084ff]/20 to-[#0066cc]/20 rounded-full mx-auto flex items-center justify-center">
                  <Database className="w-12 h-12 text-[#0084ff]" />
                </div>
              </div>

              {/* Main Title */}
              <h2 className="text-5xl font-light mb-6 tracking-[-1px] font-serif text-white">
                Datasets & Software
              </h2>

              {/* Subtitle */}
              <h3 className="text-2xl font-light mb-8 text-[#0084ff]">
                Coming Soon
              </h3>

              {/* Description */}
              <div className="max-w-2xl mx-auto mb-12">
                <p className="text-xl leading-relaxed text-[#b8b8b8] font-light mb-6">
                  We're currently preparing our research datasets and software tools for public release.
                  Our collection will include curated datasets from cutting-edge AI research and open-source
                  frameworks developed by our team.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0084ff]/20 to-[#0066cc]/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <Database className="w-6 h-6 text-[#0084ff]" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-white">Research Datasets</h4>
                    <p className="text-[#b8b8b8] text-sm leading-relaxed">
                      Curated datasets from our medical imaging, federated learning, and multimodal research projects.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] backdrop-blur-sm rounded-2xl p-6 border border-white/5">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066cc]/20 to-[#0084ff]/20 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <Code className="w-6 h-6 text-[#0066cc]" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-white">Software Tools</h4>
                    <p className="text-[#b8b8b8] text-sm leading-relaxed">
                      Open-source frameworks and libraries for neural architecture search, federated learning, and computer vision.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#0084ff]/10 to-[#0066cc]/10 rounded-2xl p-6 border border-[#0084ff]/20">
                  <p className="text-[#b8b8b8] text-sm">
                    <strong className="text-white">Stay Updated:</strong> Follow our research progress and be the first to know when we release our datasets and software tools.
                    Check back soon for updates!
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex gap-6 items-center justify-center">
                <Link
                  href="/research"
                  className="group relative flex items-center gap-3 bg-gradient-to-r from-[#0084ff] via-[#0066cc] to-[#0055aa] text-white py-4 px-8 rounded-xl text-lg font-medium hover:scale-105 hover:shadow-2xl hover:shadow-[#0084ff]/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0084ff]/20 to-[#0066cc]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                  <span className="relative z-10 font-medium">Explore Our Research</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/5 transition-colors duration-300 animate-ripple" />
                </Link>

                <Link
                  href="/contact"
                  className="group relative bg-transparent border-2 border-[#0084ff]/60 text-[#0084ff] py-4 px-8 rounded-xl text-lg font-medium hover:bg-[#0084ff]/10 hover:border-[#0084ff] hover:text-white hover:scale-105 hover:shadow-xl hover:shadow-[#0084ff]/20 transition-all duration-500 overflow-hidden"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-[#0084ff]/0 group-hover:bg-[#0084ff]/10 transition-colors duration-500 rounded-xl" />

                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-xl border border-[#0084ff]/0 group-hover:border-[#0084ff]/40 transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-xl bg-[#0084ff]/0 group-hover:bg-[#0084ff]/5 blur-xl transition-colors duration-500" />

                  <span className="relative z-10">Get Notified</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-[rgba(10,10,10,0.98)] backdrop-blur-sm border-t border-white/10 py-16">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <div className="text-2xl mb-4 font-extralight font-sans tracking-wider bg-gradient-to-r from-white to-[#0084ff] bg-clip-text text-transparent">
                Aethersaga AI
              </div>
              <p className="text-[#b8b8b8] text-sm leading-relaxed mb-6">
                Advancing machine learning through rigorous research and open collaboration.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#0084ff]/10 rounded-full flex items-center justify-center hover:bg-[#0084ff]/20 transition-colors cursor-pointer">
                  <Database className="w-4 h-4 text-[#0084ff]" />
                </div>
                <div className="w-8 h-8 bg-[#0066cc]/10 rounded-full flex items-center justify-center hover:bg-[#0066cc]/20 transition-colors cursor-pointer">
                  <Code className="w-4 h-4 text-[#0066cc]" />
                </div>
              </div>
            </div>

            {/* Explore */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Explore</h4>
              <div className="space-y-4">
                <Link
                  href="/research"
                  className="block text-[#b8b8b8] hover:text-[#0084ff] transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  Research
                </Link>
                <Link
                  href="/publications"
                  className="block text-[#b8b8b8] hover:text-[#0084ff] transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  Publications
                </Link>
                <Link
                  href="/people"
                  className="block text-[#b8b8b8] hover:text-[#0084ff] transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  People
                </Link>
                <Link
                  href="/dataset"
                  className="block text-[#0084ff] transition-colors text-sm font-medium"
                >
                  Datasets
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Resources</h4>
              <div className="space-y-4">
                <Link
                  href="/join#contact"
                  className="block text-[#b8b8b8] hover:text-[#0084ff] transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  Contact
                </Link>
                <Link
                  href="/join"
                  className="block text-[#b8b8b8] hover:text-[#0084ff] transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  Join Us
                </Link>
                <div className="text-[#b8b8b8] text-sm pt-2 border-t border-white/10">
                  <div className="font-medium mb-1">GitHub</div>
                  <div>github.com/aethermind</div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">Location</h4>
              <div className="text-[#b8b8b8] text-sm leading-relaxed">
                <div className="font-medium mb-2">Sister Nivedita University</div>
                <div className="mb-1">DG Block(Newtown)</div>
                <div className="mb-1">Action Area I, 1/2</div>
                <div className="mb-1">Newtown, New Town</div>
                <div className="mb-1">Chakpachuria, West Bengal</div>
                <div>700156, India</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#888] text-sm">
                © 2025 Aethersaga AI Research Group. All rights reserved.
              </p>
              <div className="flex gap-6 text-xs text-[#666]">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Accessibility</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
