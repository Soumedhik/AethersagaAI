"use client";

import { useState } from "react";
import { ArrowRight, Menu, X, ExternalLink } from "lucide-react";
import Link from "next/link";
import { AnimatedLogo } from "@/components/animated-logo";

export default function PublicationsPage() {

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

      {/* Publications Content */}
      <main className="pt-[100px] sm:pt-[120px] pb-20 relative z-10">
        {/* Enhanced Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center text-center overflow-hidden relative mb-20">
          {/* Enhanced animated background elements */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Floating geometric shapes */}
            <div className="absolute top-1/4 left-1/4 w-24 h-24 border border-[#0084ff]/20 rounded-full animate-spin-slow opacity-30" style={{ animationDuration: '25s' }} />
            <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-[#0066cc]/30 rounded-lg rotate-45 animate-pulse opacity-40" />
            <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-[#0084ff]/10 rounded-full animate-bounce opacity-50" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 right-1/3 w-14 h-14 border border-[#0084ff]/25 rounded-full animate-ping opacity-20" style={{ animationDelay: '2s' }} />

            {/* Advanced particle system */}
            <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-[#0084ff]/60 rounded-full animate-pulse shadow-lg shadow-[#0084ff]/50" style={{ animationDelay: '0s' }} />
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-[#0066cc]/70 rounded-full animate-pulse shadow-md shadow-[#0066cc]/50" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-[#0084ff]/80 rounded-full animate-pulse shadow-sm shadow-[#0084ff]/50" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#0066cc]/50 rounded-full animate-pulse shadow-xl shadow-[#0066cc]/50" style={{ animationDelay: '0.5s' }} />

            {/* Gradient orbs */}
            <div className="absolute top-1/6 left-1/6 w-48 h-48 bg-gradient-to-r from-[#0084ff]/5 to-transparent rounded-full blur-3xl animate-pulse opacity-60" />
            <div className="absolute bottom-1/6 right-1/6 w-64 h-64 bg-gradient-to-l from-[#0066cc]/3 to-transparent rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '3s' }} />
          </div>

          <div className="content-wrapper max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-15 xl:px-16 relative z-[2]">
            {/* Enhanced main title with advanced gradient and animations */}
            <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="relative">
                <span className="block text-[clamp(4rem,10vw,7rem)] font-semibold leading-[1.1] tracking-tight">
                  <span className="bg-gradient-to-r from-white via-[#e6e6e6] to-[#b8b8b8] bg-clip-text text-transparent animate-gradient-x">
                    Publications
                  </span>
                </span>
                <span className="block text-[clamp(1.5rem,4vw,2.5rem)] font-light leading-[1.2] mt-4">
                  <span className="bg-gradient-to-r from-[#0084ff] via-[#0066cc] to-[#004d99] bg-clip-text text-transparent animate-shimmer">
                    Research Excellence
                  </span>
                </span>
              </h1>
            </div>

            {/* Enhanced subtitle with better typography */}
            <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] leading-relaxed text-[#b8b8b8] max-w-[800px] mx-auto font-light">
                Our comprehensive research contributions spanning multiple domains
                of machine learning and artificial intelligence. Discover our latest
                breakthroughs and academic achievements.
              </p>
            </div>

            {/* Enhanced CTA buttons with modern design */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Link
                href="/research"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0084ff] to-[#0066cc] text-white font-semibold py-4 px-8 rounded-xl text-[17px] transition-all duration-300 hover:shadow-2xl hover:shadow-[#0084ff]/25 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Explore Research</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0066cc] to-[#004d99] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href="/join"
                className="group relative inline-flex items-center justify-center gap-3 border-2 border-white/20 text-white font-medium py-4 px-8 rounded-xl text-[17px] backdrop-blur-sm bg-white/5 transition-all duration-300 hover:bg-white/10 hover:border-white/40 hover:shadow-lg hover:shadow-white/10"
              >
                <span className="relative z-10">Join Our Team</span>
                <ExternalLink className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-15 xl:px-16">

          {/* Publications Grid */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-semibold text-white mb-6">
                Featured <span className="bg-gradient-to-r from-[#0084ff] to-[#0066cc] bg-clip-text text-transparent">Publications</span>
              </h2>
              <p className="text-xl text-[#b8b8b8] max-w-3xl mx-auto">
                Discover our latest research contributions and academic achievements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "HCAT-Net for Ordinal EEG Emotion Classification",
                  authors: "S.K. Ghosh, S. Mandal",
                  venue: "IEEE CIACON 2025",
                  year: "2025",
                  type: "Conference",
                  citations: "0",
                  description: "Our team designed HCAT-Net, a hybrid 1D ResNet–hierarchical Transformer with Rotary Positional Embeddings and cross-attention fusion, achieving 99.8% accuracy and 100% ROC-AUC for ordinal EEG affective state decoding.",
                  link: "https://ieeexplore.ieee.org/document/11189686",
                  metrics: ["99.8% Accuracy", "100% ROC-AUC", "Ordinal Classification"],
                  gradient: "from-[#0084ff] to-[#0066cc]",
                },
                {
                  title: "DNA Encoding & CNN–BiLSTM for Genomic Classification",
                  authors: "Research Team",
                  venue: "Nature Machine Intelligence",
                  year: "2024",
                  type: "Journal",
                  citations: "45",
                  description: "Memory-efficient DNA encoding scheme integrated into a CNN–BiLSTM hybrid, attaining 97.2% multiclass accuracy while cutting parameter count and memory use by 35% compared to one-hot baselines.",
                  link: "#",
                  metrics: ["97.2% Accuracy", "35% Memory Reduction", "Genomic Analysis"],
                  gradient: "from-[#0066cc] to-[#004d99]",
                },
                {
                  title: "CADET: Attention-Enhanced Essay Scoring Architecture",
                  authors: "AI Research Group",
                  venue: "ACL 2024",
                  year: "2024",
                  type: "Conference",
                  citations: "23",
                  description: "BiLSTM with multi-head attention that delivers state-of-the-art automated essay scoring with QWK 0.98, MSE 2.88, and R² 0.96 on the ASAP benchmark.",
                  link: "#",
                  metrics: ["QWK 0.98", "MSE 2.88", "Essay Scoring"],
                  gradient: "from-[#0084ff] to-[#00aaff]",
                },
                {
                  title: "Multi-Scale UNet with Mamba SSMs for Dehazing",
                  authors: "Computer Vision Team",
                  venue: "CVPR 2024",
                  year: "2024",
                  type: "Conference",
                  citations: "67",
                  description: "UNet variant integrating Mamba state-space layers and Ghost Convolutions, reducing trainable parameters by 55% and reaching SOTA dehazing performance on RESIDE-6K.",
                  link: "#",
                  metrics: ["55% Parameter Reduction", "SOTA Performance", "Image Dehazing"],
                  gradient: "from-[#0066cc] to-[#0084ff]",
                },
                {
                  title: "Parkinson's Gait Analysis for Levodopa Level Prediction",
                  authors: "Medical AI Group",
                  venue: "Nature Medicine",
                  year: "2024",
                  type: "Journal",
                  citations: "89",
                  description: "Deep time-series framework using spatiotemporal gait dynamics to infer dopaminergic response levels in Parkinson's patients, enabling precision levodopa titration.",
                  link: "#",
                  metrics: ["Time-series Framework", "Precision Medicine", "Gait Analysis"],
                  gradient: "from-[#0084ff] to-[#0066cc]",
                },
                {
                  title: "Neural Architecture Search for Efficient Deep Learning",
                  authors: "Deep Learning Team",
                  venue: "ICML 2024",
                  year: "2024",
                  type: "Conference",
                  citations: "156",
                  description: "Comprehensive study on automated neural architecture search techniques that optimize model performance while maintaining computational efficiency.",
                  link: "#",
                  metrics: ["NAS Optimization", "Model Efficiency", "AutoML"],
                  gradient: "from-[#0066cc] to-[#004d99]",
                },
              ].map((pub, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/15 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#0084ff]/10 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0084ff]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className={`px-4 py-2 bg-gradient-to-r ${pub.gradient} rounded-full text-sm font-semibold text-white shadow-lg`}>
                          {pub.type}
                        </div>
                        <div className="flex items-center gap-3 text-[#b8b8b8] text-sm">
                          <span>{pub.year}</span>
                          <span>•</span>
                          <span>{pub.citations} citations</span>
                        </div>
                      </div>
                      {pub.link !== "#" && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#b8b8b8] hover:text-[#0084ff] transition-colors duration-300"
                          aria-label="View publication"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-tight group-hover:text-[#0084ff] transition-colors duration-300">
                      {pub.title}
                    </h3>

                    <div className="mb-4">
                      <p className="text-[#0084ff] font-medium mb-1">{pub.authors}</p>
                      <p className="text-[#b8b8b8] text-sm">{pub.venue}</p>
                    </div>

                    <p className="text-[#b8b8b8] text-base leading-relaxed mb-6">
                      {pub.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {pub.metrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-[#b8b8b8] group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 py-16 px-4 sm:px-6 md:px-8 lg:px-15 xl:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <AnimatedLogo />
                <span className="text-2xl font-bold text-white">Aethersaga Research</span>
              </div>
              <p className="text-[#b8b8b8] text-base leading-relaxed mb-6 max-w-md">
                Pioneering the future of AI through groundbreaking research and innovation.
                Join us in shaping tomorrow's technology landscape.
              </p>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[#0084ff] rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 text-[#b8b8b8] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[#0084ff] rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-[#b8b8b8] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[#0084ff] rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5 text-[#b8b8b8] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[#0084ff] rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 text-[#b8b8b8] group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
              <div className="space-y-3">
                <Link href="/research" className="block text-[#b8b8b8] hover:text-white transition-colors duration-200">Research</Link>
                <Link href="/publications" className="block text-[#b8b8b8] hover:text-white transition-colors duration-200">Publications</Link>
                <Link href="/people" className="block text-[#b8b8b8] hover:text-white transition-colors duration-200">Team</Link>
                <Link href="/dataset" className="block text-[#b8b8b8] hover:text-white transition-colors duration-200">Datasets</Link>
                <Link href="/join" className="block text-[#b8b8b8] hover:text-white transition-colors duration-200">Join Us</Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-[#b8b8b8]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">contact@aethersaga.ai</span>
                </div>
                <div className="flex items-center gap-3 text-[#b8b8b8]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">San Francisco, CA</span>
                </div>
                <Link
                  href="/join#contact"
                  className="inline-flex items-center gap-2 bg-[#0084ff] text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-[#0066cc] transition-colors duration-200 mt-4"
                >
                  Get In Touch
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#b8b8b8] text-sm">
                © 2024 Aethersaga Research. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <Link href="#" className="text-[#b8b8b8] hover:text-white transition-colors duration-200">Privacy Policy</Link>
                <Link href="#" className="text-[#b8b8b8] hover:text-white transition-colors duration-200">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
