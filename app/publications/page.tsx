"use client";

import { useState } from "react";
import { ArrowRight, Menu, X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { AnimatedLogo } from "@/components/animated-logo";

export default function PublicationsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://cdn.discordapp.com/attachments/1222474900313473117/1405564765614374993/Space.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.8)] via-[rgba(10,10,10,0.9)] to-[rgba(10,10,10,0.95)]" />
      </div>

      {/* Header */}
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
              className="text-[15px] transition-colors duration-200 text-[#0084ff]"
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
      </header>

      {/* Publications Content */}
      <main className="pt-[120px] pb-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-light mb-6 tracking-[-1px] font-serif">
              Publications
            </h1>
            <p className="text-xl text-[#b8b8b8] max-w-3xl mx-auto leading-relaxed">
              Our comprehensive research contributions spanning multiple domains
              of machine learning and artificial intelligence.
            </p>
          </div>

          {/* Single Publication */}
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-6 hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs bg-[#0084ff]/20 text-[#0084ff]">
                    Conference
                  </span>
                  <span className="text-[#888] text-sm">2025</span>
                  <span className="text-[#888] text-sm">• 0 citations</span>
                </div>
                <a
                  href="https://ieeexplore.ieee.org/document/11189686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b8b8b8] hover:text-[#0084ff] transition-colors"
                  aria-label="View publication on IEEE Xplore"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <h3 className="text-lg font-semibold group-hover:text-[#0084ff] transition-colors mb-2">
                HCAT-Net for Ordinal EEG Emotion Classification
              </h3>
              <p className="text-[#0084ff] mb-2">S.K. Ghosh, S. Mandal</p>
              <p className="text-[#888] mb-3 text-sm font-medium">
                IEEE CIACON 2025
              </p>
              <p className="text-[#b8b8b8] text-sm leading-relaxed">
                Our team designed HCAT-Net, a hybrid 1D ResNet–hierarchical
                Transformer with Rotary Positional Embeddings and
                cross-attention fusion, achieving 99.8% accuracy and 100%
                ROC-AUC for ordinal EEG affective state decoding.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
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
