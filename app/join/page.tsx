"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Menu, X, Mail, MapPin, Clock, Users, Phone, Globe } from "lucide-react"
import Link from "next/link"
import { AnimatedLogo } from "@/components/animated-logo"

export default function JoinPage() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    // Auto-scroll to contact section if hash is present
    if (window.location.hash === "#contact") {
      setTimeout(() => {
        const contactSection = document.getElementById("contact")
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [])

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
            <Link href="/people" className="text-[15px] transition-colors duration-200 text-[#b8b8b8] hover:text-white">
              People
            </Link>
            <Link
              href="/dataset"
              className="text-[15px] transition-colors duration-200 text-[#b8b8b8] hover:text-white"
            >
              Datasets
            </Link>
            <Link href="/join" className="text-[15px] transition-colors duration-200 text-[#0084ff]">
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

      {/* Join Content */}
      <main className="pt-[120px] pb-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-light mb-6 tracking-[-1px]">Join AetherMind</h1>
            <p className="text-xl text-[#b8b8b8] max-w-3xl mx-auto leading-relaxed">
              Be part of cutting-edge research that shapes the future of artificial intelligence and machine learning.
            </p>
          </div>

          {/* Open Positions */}
          <div className="mb-20">
            <h2 className="text-4xl font-light mb-12 text-center tracking-[-1px]">Open Positions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "PhD Student - Deep Learning",
                  type: "Full-time",
                  location: "Kolkata, India",
                  deadline: "March 15, 2025",
                  description:
                    "Research focus on neural architecture search and efficient deep learning systems. Strong background in mathematics and programming required.",
                  requirements: [
                    "Master's in CS/EE/Math",
                    "Strong Python/PyTorch skills",
                    "Research experience preferred",
                  ],
                },
                {
                  title: "Postdoctoral Researcher - Federated Learning",
                  type: "2-year position",
                  location: "Kolkata, India",
                  deadline: "February 28, 2025",
                  description:
                    "Lead research on privacy-preserving machine learning and distributed systems. Opportunity to mentor PhD students.",
                  requirements: ["PhD in CS/ML", "Publications in top venues", "Experience with distributed systems"],
                },
                {
                  title: "Research Scientist - Computer Vision",
                  type: "Full-time",
                  location: "Kolkata, India",
                  deadline: "April 1, 2025",
                  description:
                    "Develop novel computer vision algorithms for medical imaging applications. Collaborate with clinical partners.",
                  requirements: ["PhD in CS/CV", "Medical imaging experience", "Strong publication record"],
                },
                {
                  title: "Visiting Researcher",
                  type: "6-12 months",
                  location: "Kolkata, India",
                  deadline: "Rolling basis",
                  description:
                    "Short-term research collaboration opportunities for established researchers. Flexible duration and research focus.",
                  requirements: ["PhD + research experience", "Active research program", "Collaborative mindset"],
                },
              ].map((position, index) => (
                <div
                  key={index}
                  className="bg-[rgba(255,255,255,0.05)] rounded-lg p-6 hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-[#0084ff] transition-colors mb-2">
                        {position.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-[#888] mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-[#0084ff]/20 text-[#0084ff] rounded-full text-xs">
                      Deadline: {position.deadline}
                    </span>
                  </div>
                  <p className="text-[#b8b8b8] text-sm leading-relaxed mb-4">{position.description}</p>
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2 text-sm">Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="text-xs text-[#888] flex items-center gap-2">
                          <div className="w-1 h-1 bg-[#0084ff] rounded-full"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-[#0084ff] text-white py-2 rounded-md text-sm font-medium hover:bg-[#0066cc] transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Application Process */}
          <div className="mb-20">
            <h2 className="text-4xl font-light mb-12 text-center tracking-[-1px]">Application Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Submit Application",
                  description: "Send your CV, research statement, and relevant documents to our recruitment team.",
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
                  description: "Selected candidates participate in technical interviews and research discussions.",
                },
                {
                  step: "4",
                  title: "Final Decision",
                  description: "Successful candidates receive offers and begin their journey with AetherMind.",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#0084ff] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-[#b8b8b8] text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-4xl font-light mb-12 text-center tracking-[-1px]">Why Join AetherMind?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "World-Class Research",
                  description: "Work alongside leading researchers on cutting-edge projects with global impact.",
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
                  description: "Professional development, conference attendance, and career advancement support.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-[rgba(255,255,255,0.05)] rounded-lg p-6 text-center hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300"
                >
                  <div className="text-[#0084ff] mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-[#b8b8b8] text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact for Applications */}
          <div className="text-center bg-[rgba(255,255,255,0.05)] rounded-lg p-12 mb-20">
            <h2 className="text-3xl font-light mb-6">Ready to Apply?</h2>
            <p className="text-[#b8b8b8] mb-8 max-w-2xl mx-auto">
              Send your application materials to our recruitment team. We review applications on a rolling basis and
              encourage early submission.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@aethermind.edu"
                className="flex items-center gap-2 bg-[#0084ff] text-white py-3 px-6 rounded-md font-medium hover:bg-[#0066cc] transition-colors"
              >
                <Mail className="w-4 h-4" />
                careers@aethermind.edu
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 bg-transparent border border-white/20 text-white py-3 px-6 rounded-md font-medium hover:bg-white/5 transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div id="contact" className="mb-20">
            <h2 className="text-4xl font-light mb-12 text-center tracking-[-1px]">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-light mb-6">Get in Touch</h3>
                  <p className="text-[#b8b8b8] leading-relaxed mb-8">
                    Have questions about our research, collaboration opportunities, or application process? We'd love to
                    hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0084ff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#0084ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-[#b8b8b8] text-sm">General: info@aethermind.edu</p>
                      <p className="text-[#b8b8b8] text-sm">Careers: careers@aethermind.edu</p>
                      <p className="text-[#b8b8b8] text-sm">Research: research@aethermind.edu</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0084ff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#0084ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-[#b8b8b8] text-sm">AetherMind Research Group</p>
                      <p className="text-[#b8b8b8] text-sm">123 Research Avenue</p>
                      <p className="text-[#b8b8b8] text-sm">Kolkata, West Bengal 700001</p>
                      <p className="text-[#b8b8b8] text-sm">India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0084ff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#0084ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-[#b8b8b8] text-sm">+91 33 1234 5678</p>
                      <p className="text-[#b8b8b8] text-sm">Office Hours: 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0084ff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 text-[#0084ff]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Social Media</h4>
                      <div className="space-y-1">
                        <a href="#" className="text-[#b8b8b8] text-sm hover:text-[#0084ff] transition-colors block">
                          Twitter: @AetherMindAI
                        </a>
                        <a href="#" className="text-[#b8b8b8] text-sm hover:text-[#0084ff] transition-colors block">
                          LinkedIn: AetherMind Research
                        </a>
                        <a href="#" className="text-[#b8b8b8] text-sm hover:text-[#0084ff] transition-colors block">
                          GitHub: @aethermind
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-[rgba(255,255,255,0.05)] rounded-lg p-8">
                <h3 className="text-2xl font-light mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full bg-[rgba(255,255,255,0.1)] border border-white/20 rounded-md px-4 py-3 text-white placeholder-[#888] focus:outline-none focus:border-[#0084ff] transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full bg-[rgba(255,255,255,0.1)] border border-white/20 rounded-md px-4 py-3 text-white placeholder-[#888] focus:outline-none focus:border-[#0084ff] transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-[rgba(255,255,255,0.1)] border border-white/20 rounded-md px-4 py-3 text-white placeholder-[#888] focus:outline-none focus:border-[#0084ff] transition-colors"
                      placeholder="john.doe@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <select className="w-full bg-[rgba(255,255,255,0.1)] border border-white/20 rounded-md px-4 py-3 text-white focus:outline-none focus:border-[#0084ff] transition-colors">
                      <option value="">Select a topic</option>
                      <option value="research">Research Collaboration</option>
                      <option value="careers">Career Opportunities</option>
                      <option value="general">General Inquiry</option>
                      <option value="media">Media & Press</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full bg-[rgba(255,255,255,0.1)] border border-white/20 rounded-md px-4 py-3 text-white placeholder-[#888] focus:outline-none focus:border-[#0084ff] transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0084ff] text-white py-3 rounded-md font-medium hover:bg-[#0066cc] transition-colors"
                  >
                    Send Message
                  </button>
                </form>
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
              <div className="text-xl mb-4 font-extralight font-sans">AetherMind</div>
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
                <a
                  href="#contact"
                  className="block text-[#b8b8b8] hover:text-white transition-colors text-sm"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Contact
                </a>
                <Link href="/join" className="block text-[#b8b8b8] hover:text-white transition-colors text-sm">
                  Join Us
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="text-[#b8b8b8] text-sm">info@aethermind.edu</div>
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
