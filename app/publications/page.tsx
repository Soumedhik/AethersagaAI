"use client"

import { useState } from "react"
import { ArrowRight, Menu, X, ExternalLink, Search } from "lucide-react"
import Link from "next/link"
import { AnimatedLogo } from "@/components/animated-logo"

export default function PublicationsPage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedYear, setSelectedYear] = useState("All")

  const publications = [
    {
      title: "Efficient Neural Architecture Search via Progressive Pruning",
      authors: "S.K. Ghosh, S. Mondal, A. Mitra, S. Bharati",
      venue: "NeurIPS 2024",
      year: "2024",
      type: "Conference",
      citations: 127,
      abstract:
        "We propose a novel approach to neural architecture search that significantly reduces computational overhead through progressive pruning techniques while maintaining state-of-the-art performance.",
    },
    {
      title: "Privacy-Preserving Federated Learning with Differential Privacy",
      authors: "S. Mondal, S.K. Ghosh, S. Banerjee",
      venue: "ICML 2024",
      year: "2024",
      type: "Conference",
      citations: 89,
      abstract:
        "A comprehensive framework for federated learning that maintains strong privacy guarantees while achieving competitive performance across diverse datasets.",
    },
    {
      title: "Multimodal Fusion for Medical Image Analysis",
      authors: "A. Mitra, S. Mandal, S. Das, S.K. Ghosh",
      venue: "MICCAI 2024",
      year: "2024",
      type: "Conference",
      citations: 156,
      abstract:
        "Novel multimodal fusion techniques for improved accuracy in medical image analysis and diagnosis, validated on multiple clinical datasets.",
    },
    {
      title: "Explainable AI for Financial Risk Assessment",
      authors: "S.K. Ghosh, S. Das, A. Mitra",
      venue: "AAAI 2024",
      year: "2024",
      type: "Conference",
      citations: 73,
      abstract:
        "Interpretable machine learning models providing transparent decision-making for financial risk assessment with regulatory compliance.",
    },
    {
      title: "Adversarial Robustness in Deep Learning Systems",
      authors: "S. Bharati, S. Banerjee, S.K. Ghosh",
      venue: "ICLR 2024",
      year: "2024",
      type: "Conference",
      citations: 94,
      abstract:
        "Comprehensive study on improving adversarial robustness in deep neural networks through novel training strategies and defense mechanisms.",
    },
    {
      title: "Federated Learning with Non-IID Data Distribution",
      authors: "S. Mondal, S.K. Ghosh, A. Mitra",
      venue: "IEEE TPAMI",
      year: "2023",
      type: "Journal",
      citations: 203,
      abstract:
        "Addressing the challenges of federated learning in realistic scenarios with non-independent and identically distributed data across clients.",
    },
    {
      title: "Attention Mechanisms in Computer Vision: A Survey",
      authors: "A. Mitra, S.K. Ghosh, S. Das",
      venue: "Computer Vision and Image Understanding",
      year: "2023",
      type: "Journal",
      citations: 312,
      abstract:
        "Comprehensive survey of attention mechanisms in computer vision applications, covering theoretical foundations and practical implementations.",
    },
    {
      title: "Graph Neural Networks for Social Network Analysis",
      authors: "S. Das, S. Banerjee, S.K. Ghosh",
      venue: "KDD 2023",
      year: "2023",
      type: "Conference",
      citations: 145,
      abstract:
        "Novel graph neural network architectures for analyzing complex social network structures and predicting user behavior patterns.",
    },
  ]

  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.venue.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = selectedYear === "All" || pub.year === selectedYear
    return matchesSearch && matchesYear
  })

  const years = [
    "All",
    ...Array.from(new Set(publications.map((p) => p.year)))
      .sort()
      .reverse(),
  ]

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
            <Link href="/publications" className="text-[15px] transition-colors duration-200 text-[#0084ff]">
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

      {/* Publications Content */}
      <main className="pt-[120px] pb-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-light mb-6 tracking-[-1px]">Publications</h1>
            <p className="text-xl text-[#b8b8b8] max-w-3xl mx-auto leading-relaxed">
              Our comprehensive research contributions spanning multiple domains of machine learning and artificial
              intelligence.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#b8b8b8]" />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-md py-3 pl-10 pr-4 text-white placeholder-[#b8b8b8] focus:outline-none focus:border-[#0084ff] transition-colors"
              />
            </div>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-[rgba(255,255,255,0.05)] border border-white/10 rounded-md py-3 px-4 text-white focus:outline-none focus:border-[#0084ff] transition-colors"
            >
              {years.map((year) => (
                <option key={year} value={year} className="bg-[#0a0a0a]">
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Publications List */}
          <div className="space-y-6">
            {filteredPublications.map((paper, index) => (
              <div
                key={index}
                className="bg-[rgba(255,255,255,0.05)] rounded-lg p-6 hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        paper.type === "Conference"
                          ? "bg-[#0084ff]/20 text-[#0084ff]"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {paper.type}
                    </span>
                    <span className="text-[#888] text-sm">{paper.year}</span>
                    <span className="text-[#888] text-sm">• {paper.citations} citations</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#b8b8b8] group-hover:text-[#0084ff] transition-colors cursor-pointer" />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-[#0084ff] transition-colors mb-2">
                  {paper.title}
                </h3>
                <p className="text-[#0084ff] mb-2">{paper.authors}</p>
                <p className="text-[#888] mb-3 text-sm font-medium">{paper.venue}</p>
                <p className="text-[#b8b8b8] text-sm leading-relaxed">{paper.abstract}</p>
              </div>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[#b8b8b8] text-lg">No publications found matching your criteria.</p>
            </div>
          )}

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10">
            <div className="text-center">
              <div className="text-3xl font-light mb-2">{publications.length}</div>
              <div className="text-[#b8b8b8] text-sm">Total Publications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light mb-2">{publications.reduce((sum, p) => sum + p.citations, 0)}</div>
              <div className="text-[#b8b8b8] text-sm">Total Citations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light mb-2">
                {publications.filter((p) => p.type === "Conference").length}
              </div>
              <div className="text-[#b8b8b8] text-sm">Conference Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light mb-2">{publications.filter((p) => p.type === "Journal").length}</div>
              <div className="text-[#b8b8b8] text-sm">Journal Articles</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
