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
                  name: "Dr. Swarup Kr Ghosh",
                  role: "Assistant Professor",
                  focus: "AI & ML, Computational Biology, Medical Imaging",
                  bio: "Dr. Swarup Kr Ghosh is presently working as an Associate Professor of the Department of Computer Science & Engineering, Sister Nivedita University, Kolkata. He has published more than 40 research articles in various reputed journals and holds 4 Indian patents.",
                  education: "Ph.D. in CSE – MAKAUT, WB | M.Tech (IT) – University of Calcutta",
                  interests: ["Artificial Intelligence", "Machine Learning", "Medical Imaging", "Data Science"],
                  email: "swarup.kg@snuniv.ac.in",
                  linkedin: "https://www.linkedin.com/in/dr-swarup-kr-ghosh-b8782557/",
                  scholar: "https://scholar.google.co.in/citations?user=1NU_3oEAAAAJ&hl=en",
                  experience: "12 Years Teaching, 13 Years Research",
                  publications: "24 Journal Papers, 6 Conference Presentations, 11 Book Chapters, 4 Patents",
                },
                {
                  name: "Dr. Sayani Mondal",
                  role: "Assistant Professor",
                  focus: "Software Engineering, AI, ML, NLP, VR/AR",
                  bio: "Dr. Sayani Mondal holds a Ph.D. from IIT Kharagpur (2022). With approximately nine years of teaching experience, she explores Software Engineering, AI, ML, NLP, and emerging technologies like VR and AR to enhance user experiences.",
                  education: "Ph.D. from IIT Kharagpur | M.Tech from IIT Kharagpur | B.Tech in CS from WBUT",
                  interests: [
                    "Software Engineering",
                    "Machine Learning",
                    "Natural Language Processing",
                    "Virtual Reality",
                  ],
                  email: "sayani.m@snuniv.ac.in",
                  scholar: "https://scholar.google.com/citations?hl=en&user=OTpaGusAAAAJ",
                  experience: "9 Years Teaching Experience",
                },
                {
                  name: "Dr. Anirban Mitra",
                  role: "Assistant Professor",
                  focus: "Medical Image Processing, Geometric Algebra, Cryptography, IoT",
                  bio: "Dr. Anirban Mitra serves as Professor and Head of the Department of Computer Science, Sister Nivedita University. His Ph.D. research focused on 'Glaucoma Analysis & Detection from Retinal Images.' He has published numerous papers and holds multiple patents.",
                  education:
                    "Ph.D. in Medical Image Processing | M.Tech in CSE (2009) | M.Sc in CS (2007) | B.Sc (Hons) in CS (2005)",
                  interests: ["Medical Image Processing", "Geometric Algebra", "Cryptography", "IoT"],
                  email: "anirban.m@snuniv.ac.in",
                  experience: "15+ Years in Academia",
                  awards: "Dynamic Educator of the Year 2022, Smart India Hackathon Mentor & Expert",
                  photo:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6XpsKIaP4EHeSliLLscApEzLyMuft8.png",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-[rgba(255,255,255,0.05)] rounded-lg p-6 hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 group"
                >
                  {member.photo ? (
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                      <img
                        src={member.photo || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-32 bg-gradient-to-br from-[#0084ff] to-[#0066cc] rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-center mb-2 group-hover:text-[#0084ff] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-[#0084ff] text-center mb-2">{member.role}</p>
                  <p className="text-[#888] text-center text-sm mb-4">{member.focus}</p>
                  <p className="text-[#b8b8b8] text-sm leading-relaxed mb-4">{member.bio}</p>
                  <p className="text-[#888] text-xs mb-4">{member.education}</p>
                  {member.experience && <p className="text-[#888] text-xs mb-4">{member.experience}</p>}
                  {member.publications && <p className="text-[#888] text-xs mb-4">{member.publications}</p>}
                  {member.awards && <p className="text-[#888] text-xs mb-4">{member.awards}</p>}
                  <div className="space-y-1 mb-4">
                    {member.interests.map((interest, idx) => (
                      <div key={idx} className="text-xs text-[#888] flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#0084ff] rounded-full"></div>
                        {interest}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center gap-3">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-[#b8b8b8] hover:text-[#0084ff] transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                    {member.scholar && (
                      <a
                        href={member.scholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#b8b8b8] hover:text-[#0084ff] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#b8b8b8] hover:text-[#0084ff] transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
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
                { name: "Soumedhik Bharati", focus: "Computer Vision and NLP", year: "4th Year" },
                { name: "Sohoomlal Banerjee", focus: "Computer Vision and NLP", year: "4th Year" },
                { name: "Shibam Mandal", focus: "Computer Vision", year: "2nd Year" },
                { name: "Sohan Das", focus: "Computer Vision", year: "2nd Year" },
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
            <div className="text-center">
              <p className="text-[#b8b8b8] italic text-lg">
                There are currently no visiting professors associated with us.
              </p>
            </div>
          </div>

          {/* Alumni */}
          <div>
            <h2 className="text-4xl font-light mb-12 text-center tracking-[-1px]">Alumni</h2>
            <div className="text-center">
              <p className="text-[#b8b8b8] italic text-lg">There are currently no alumni associated with us.</p>
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
