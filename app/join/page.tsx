"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Menu,
  X,
  Mail,
  MapPin,
  Users,
  Phone,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { AnimatedLogo } from "@/components/animated-logo";

export default function JoinPage() {

  useEffect(() => {
    // Auto-scroll to contact section if hash is present
    if (window.location.hash === "#contact") {
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

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

      {/* Join Content */}
      <main className="pt-[100px] sm:pt-[120px] pb-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-15 xl:px-16">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-[-1px] font-sans">
              Join Aethersaga AI
            </h1>
            <p className="text-xl text-[#b8b8b8] max-w-3xl mx-auto leading-relaxed">
              Be part of cutting-edge research that shapes the future of
              artificial intelligence and machine learning.
            </p>
          </div>

          {/* Application Process */}
          <div className="mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-12 text-center tracking-[-1px]">
              Application Process
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Submit Application",
                  description:
                    "Send your CV, research statement, and relevant documents to our recruitment team.",
                },
                {
                  step: "2",
                  title: "Initial Review",
                  description:
                    "Our faculty review applications and shortlist candidates based on qualifications and fit.",
                },
                {
                  step: "3",
                  title: "Interview Process",
                  description:
                    "Selected candidates participate in technical interviews and research discussions.",
                },
                {
                  step: "4",
                  title: "Final Decision",
                  description:
                    "Successful candidates receive offers and begin their journey with us.",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#0084ff] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-[#b8b8b8] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-4xl font-light mb-12 text-center tracking-[-1px]">
              Why Join Aethersaga AI?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "World-Class Research",
                  description:
                    "Work alongside leading researchers on cutting-edge projects with global impact.",
                },
                {
                  icon: <Mail className="w-8 h-8" />,
                  title: "Collaborative Environment",
                  description:
                    "Open, supportive culture that encourages innovation and cross-disciplinary collaboration.",
                },
                {
                  icon: <MapPin className="w-8 h-8" />,
                  title: "Growth Opportunities",
                  description:
                    "Professional development, conference attendance, and career advancement support.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-[rgba(255,255,255,0.05)] rounded-lg p-6 text-center hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300"
                >
                  <div className="text-[#0084ff] mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-[#b8b8b8] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact for Applications */}
          <div
            id="contact"
            className="text-center bg-[rgba(255,255,255,0.05)] rounded-lg p-12 mb-20"
          >
            <h2 className="text-3xl font-light mb-6">Ready to Apply?</h2>
            <p className="text-[#b8b8b8] mb-8 max-w-2xl mx-auto">
              Send your application materials to our recruitment team. We review
              applications on a rolling basis and encourage early submission.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="mailto:aethersaga.ai@gmail.com"
                className="flex items-center gap-2 bg-[#0084ff] text-white py-3 px-6 rounded-md font-medium hover:bg-[#0066cc] transition-colors"
              >
                <Mail className="w-4 h-4" />
                aethersaga.ai@gmail.com
              </a>
              <a
                href="/join#contact"
                className="flex items-center gap-2 bg-transparent border border-white/20 text-white py-3 px-6 rounded-md font-medium hover:bg-white/5 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[rgba(10,10,10,0.98)] border-t border-white/10 py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-15 xl:px-16">
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
