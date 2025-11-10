"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Menu, X, Mail, MapPin, Phone, Clock, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
          <Link href="/" className="text-xl font-bold tracking-wider">
            Aethersaga AI
          </Link>

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
            <Link href="/people" className="text-[15px] transition-colors duration-200 text-[#b8b8b8] hover:text-white">
              People
            </Link>
            <Link href="/contact" className="text-[15px] transition-colors duration-200 text-[#0084ff]">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/join"
              className="flex items-center gap-2 bg-[#0084ff] text-white py-2.5 px-5 rounded-md text-[15px] font-medium hover:bg-[#0066cc] hover:translate-x-0.5 transition-all duration-200"
            >
              Join Us
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

      {/* Contact Content */}
      <main className="pt-[120px] pb-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-light mb-6 tracking-[-1px]">Contact Us</h1>
            <p className="text-xl text-[#b8b8b8] max-w-3xl mx-auto leading-relaxed">
              Get in touch with our research team for collaborations, inquiries, or general information.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-light mb-8 tracking-[-1px]">Get in Touch</h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0084ff]/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#0084ff]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-[#b8b8b8] mb-1">General Inquiries: info@aethersaga.ai</p>
                    <p className="text-[#b8b8b8] mb-1">Research Collaborations: research@aethersaga.ai</p>
                    <p className="text-[#b8b8b8]">Career Opportunities: careers@aethersaga.ai</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0084ff]/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#0084ff]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Address</h3>
                    <p className="text-[#b8b8b8] mb-1">Aethersaga AI Research Group</p>
                    <p className="text-[#b8b8b8] mb-1">Department of Computer Science</p>
                    <p className="text-[#b8b8b8] mb-1">123 Research Avenue</p>
                    <p className="text-[#b8b8b8]">Kolkata, West Bengal 700001, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0084ff]/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#0084ff]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone</h3>
                    <p className="text-[#b8b8b8] mb-1">Office: +91 33 2345 6789</p>
                    <p className="text-[#b8b8b8]">Lab: +91 33 2345 6790</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0084ff]/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#0084ff]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Office Hours</h3>
                    <p className="text-[#b8b8b8] mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-[#b8b8b8] mb-1">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-[#b8b8b8]">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-6">
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/join" className="block text-[#0084ff] hover:text-white transition-colors text-sm">
                    → Career Opportunities
                  </Link>
                  <Link href="/research" className="block text-[#0084ff] hover:text-white transition-colors text-sm">
                    → Research Collaborations
                  </Link>
                  <Link href="/dataset" className="block text-[#0084ff] hover:text-white transition-colors text-sm">
                    → Datasets & Resources
                  </Link>
                  <Link
                    href="/publications"
                    className="block text-[#0084ff] hover:text-white transition-colors text-sm"
                  >
                    → Publications & Papers
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light mb-8 tracking-[-1px]">Send a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-md py-3 px-4 text-white placeholder-[#b8b8b8] focus:outline-none focus:border-[#0084ff] transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-md py-3 px-4 text-white placeholder-[#b8b8b8] focus:outline-none focus:border-[#0084ff] transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-md py-3 px-4 text-white focus:outline-none focus:border-[#0084ff] transition-colors"
                  >
                    <option value="" className="bg-[#0a0a0a]">
                      Select a subject
                    </option>
                    <option value="research" className="bg-[#0a0a0a]">
                      Research Collaboration
                    </option>
                    <option value="career" className="bg-[#0a0a0a]">
                      Career Opportunities
                    </option>
                    <option value="media" className="bg-[#0a0a0a]">
                      Media Inquiry
                    </option>
                    <option value="partnership" className="bg-[#0a0a0a]">
                      Partnership
                    </option>
                    <option value="general" className="bg-[#0a0a0a]">
                      General Inquiry
                    </option>
                    <option value="other" className="bg-[#0a0a0a]">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-md py-3 px-4 text-white placeholder-[#b8b8b8] focus:outline-none focus:border-[#0084ff] transition-colors resize-vertical"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#0084ff] text-white py-3 px-6 rounded-md font-medium hover:bg-[#0066cc] transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>

              <div className="mt-8 p-4 bg-[rgba(255,255,255,0.05)] rounded-lg">
                <p className="text-sm text-[#b8b8b8]">
                  <strong>Response Time:</strong> We typically respond to inquiries within 24-48 hours during business
                  days. For urgent matters, please call our office directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-[rgba(10,10,10,0.98)] border-t border-white/10 py-16">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <div className="text-xl font-bold mb-4">Aethersaga AI</div>
              <p className="text-[#b8b8b8] text-sm leading-relaxed mb-6">
                Advancing machine learning through rigorous research and open collaboration.
              </p>
            </div>
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
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <div className="space-y-3">
                <Link href="/dataset" className="block text-[#b8b8b8] hover:text-white transition-colors text-sm">
                  Datasets & Software
                </Link>
                <Link href="/contact" className="block text-[#b8b8b8] hover:text-white transition-colors text-sm">
                  Contact
                </Link>
                <Link href="/join" className="block text-[#b8b8b8] hover:text-white transition-colors text-sm">
                  Join Us
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="text-[#b8b8b8] text-sm">aethersaga@university.edu</div>
                <div className="text-[#b8b8b8] text-sm">123 Research Ave, Kolkata, IN</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8">
            <p className="text-[#888] text-sm text-center">© 2025 Aethersaga AI Research Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
