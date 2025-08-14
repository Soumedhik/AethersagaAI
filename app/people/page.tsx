"use client"

import { useState } from "react"
import { ArrowRight, Menu, X, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"
import { AnimatedLogo } from "@/components/animated-logo"

export default function PeoplePage() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <video className="absolute inset-0 w-full h-full object-cover opacity-20" autoPlay muted loop playsInline>
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
              className="text-[15px] transition-colors duration-200 text-[#b8b8b8] hover:text-white"
            >
              Publications
            </Link>
            <Link href="/people" className="text-[15px] transition-colors duration-200 text-[#0084ff]">
              People
            </Link>
            <Link
              href="/dataset"
              className="text-[15px] transition-colors duration-200 text-[#b8b8b8] hover:text-white"
            >
              Datasets
            </Link>
            <Link href="/join" className="text-[15px] transition-colors duration-200 text-[#b8b8b8] hover:text-white">
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
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* People Content */}
      <main className="pt-[120px] pb-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-light mb-6 tracking-[-1px]">People</h1>
            <p className="text-xl text-[#b8b8b8] max-w-3xl mx-auto leading-relaxed">
              Meet the brilliant minds driving innovation in machine learning research at AetherMind.
            </p>
          </div>

          {/* Faculty */}
          <div className="mb-20">
            <h2 className="text-4xl font-light mb-12 text-center tracking-[-1px]">Faculty</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. Swarup Kumar Ghosh",
                  role: "Principal Investigator",
                  focus: "Deep Learning, Computer Vision",
                  bio: "Leading researcher in neural architecture search and efficient deep learning systems. Published 50+ papers in top-tier venues.",
                  education: "PhD Computer Science, IIT Kharagpur",
                  interests: ["Neural Architecture Search", "Model Compression", "Computer Vision"],
                },
                {
                  name: "Dr. Sayani Mondal",
                  role: "Associate Researcher",
                  focus: "Natural Language Processing, Federated Learning",
                  bio: "Expert in privacy-preserving machine learning and distributed systems. Pioneer in federated learning research.",
                  education: "PhD Computer Science, ISI Kolkata",
                  interests: ["Federated Learning", "Privacy-Preserving ML", "NLP"],
                },
                {
                  name: "Dr. Anirban Mitra",
                  role: "Senior Researcher",
                  focus: "Machine Learning Theory, Medical AI",
                  bio: "Theoretical foundations of machine learning with applications in healthcare. Expert in multimodal learning systems.",
                  education: "PhD Mathematics, University of Cambridge",
                  interests: ["ML Theory", "Medical AI", "Multimodal Learning"],
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-[rgba(255,255,255,0.05)] rounded-lg p-6 hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 group"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-[#0084ff] to-[#0066cc] rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2 group-hover:text-[#0084ff] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#0084ff] text-center mb-2">{member.role}</p>
                  <p className="text-[#888] text-center text-sm mb-4">{member.focus}</p>
                  <p className="text-[#b8b8b8] text-sm leading-relaxed mb-4">{member.bio}</p>
                  <p className="text-[#888] text-xs mb-4">{member.education}</p>
                  <div className="space-y-1 mb-4">
                    {member.interests.map((interest, idx) => (
                      <div key={idx} className="text-xs text-[#888] flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#0084ff] rounded-full"></div>
                        {interest}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center gap-3">
                    <Mail className="w-4 h-4 text-[#b8b8b8] hover:text-[#0084ff] cursor-pointer transition-colors" />
                    <ExternalLink className="w-4 h-4 text-[#b8b8b8] hover:text-[#0084ff] cursor-pointer transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PhD Students */}
          <div className="mb-20">
            <h2 className="text-4xl font-light mb-12 text-center tracking-[-1px]">PhD Students</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "Soumedhik Bharati", focus: "Adversarial Robustness", year: "4th Year" },
                { name: "Sohoomlal Banerjee", focus: "Graph Neural Networks", year: "3rd Year" },
                { name: "Shibam Mandal", focus: "Medical Image Analysis", year: "2nd Year" },
                { name: "Sohan Das", focus: "Explainable AI", year: "1st Year" },
              ].map((student, index) => (
                <div
                  key={index}
                  className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4 hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0084ff]/70 to-[#0066cc]/70 rounded-full mx-auto mb-4 flex items-center justify-center text-lg font-bold">
                    {student.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h4 className="font-semibold mb-1 group-hover:text-[#0084ff] transition-colors">{student.name}</h4>
                  <p className="text-[#888] text-sm mb-1">{student.year}</p>
                  <p className="text-[#b8b8b8] text-xs mb-3">{student.focus}</p>
                  <Mail className="w-4 h-4 text-[#b8b8b8] hover:text-[#0084ff] cursor-pointer transition-colors mx-auto" />
                </div>
              ))}
            </div>
          </div>

          {/* Visiting Researchers */}
          <div className="mb-20">
            <h2 className="text-4xl font-light mb-12 text-center tracking-[-1px]">Visiting Researchers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Dr. Maria Rodriguez",
                  affiliation: "Stanford University",
                  duration: "Fall 2024",
                  focus: "Multimodal Learning",
                },
                {
                  name: "Dr. James Chen",
                  affiliation: "MIT CSAIL",
                  duration: "Spring 2024",
                  focus: "Federated Learning",
                },
              ].map((visitor, index) => (
                <div
                  key={index}
                  className="bg-[rgba(255,255,255,0.05)] rounded-lg p-6 hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0084ff]/50 to-[#0066cc]/50 rounded-full flex items-center justify-center text-lg font-bold">
                      {visitor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 group-hover:text-[#0084ff] transition-colors">
                        {visitor.name}
                      </h4>
                      <p className="text-[#888] text-sm mb-1">{visitor.affiliation}</p>
                      <p className="text-[#b8b8b8] text-xs mb-1">{visitor.duration}</p>
                      <p className="text-[#888] text-xs">{visitor.focus}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alumni */}
          <div>
            <h2 className="text-4xl font-light mb-12 text-center tracking-[-1px]">Alumni</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Dr. Priya Sharma", position: "Research Scientist at Google DeepMind", year: "2023" },
                { name: "Dr. Rahul Gupta", position: "Assistant Professor at IIT Delhi", year: "2022" },
                { name: "Dr. Neha Patel", position: "Principal Scientist at Microsoft Research", year: "2021" },
                { name: "Dr. Amit Kumar", position: "Senior ML Engineer at OpenAI", year: "2020" },
                { name: "Dr. Sneha Jain", position: "Research Director at Meta AI", year: "2019" },
                { name: "Dr. Vikram Singh", position: "Co-founder at AI Startup", year: "2018" },
              ].map((alumni, index) => (
                <div
                  key={index}
                  className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4 hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 group"
                >
                  <h4 className="font-semibold mb-2 group-hover:text-[#0084ff] transition-colors">{alumni.name}</h4>
                  <p className="text-[#b8b8b8] text-sm mb-1">{alumni.position}</p>
                  <p className="text-[#888] text-xs">Graduated {alumni.year}</p>
                </div>
              ))}
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
              <div className="text-xl mb-4 font-extralight">AetherMind</div>
              <p className="text-[#b8b8b8] text-sm leading-relaxed mb-6">
                Advancing machine learning through rigorous research and open collaboration.
              </p>
            </div>

            {/* Explore */}
            <div>
              <h4 className="text-white font-semibold mb-4">Explore</h4>
              <div className="space-y-3">
                <Link href="/research" className="block text-[#b8b8b8] hover:text-white transition-colors text-sm">
                  Research
                </Link>
                <Link href="/publications" className="block text-[#b8b8b8] hover:text-white transition-colors text-sm">
                  Publications
                </Link>
                <Link href="/people" className="block text-[#b8b8b8] hover:text-white transition-colors text-sm">
                  People
                </Link>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <div className="space-y-3">
                <Link href="/dataset" className="block text-[#b8b8b8] hover:text-white transition-colors text-sm">
                  Datasets & Software
                </Link>
                <Link href="/join#contact" className="block text-[#b8b8b8] hover:text-white transition-colors text-sm">
                  Contact
                </Link>
                <Link href="/join" className="block text-[#b8b8b8] hover:text-white transition-colors text-sm">
                  Join Us
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="text-[#b8b8b8] text-sm">aethermind@university.edu</div>
                <div className="text-[#b8b8b8] text-sm">123 Research Ave, Kolkata, IN</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8">
            <p className="text-[#888] text-sm text-center">© 2025 AetherMind Research Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
