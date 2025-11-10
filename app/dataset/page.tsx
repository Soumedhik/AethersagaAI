"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { AnimatedLogo } from "@/components/animated-logo";

export default function DatasetPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const datasets = [
    {
      name: "MedVision-2024",
      category: "Medical Imaging",
      description:
        "Large-scale medical image dataset with 50K+ annotated X-rays, CT scans, and MRI images for diagnostic AI research.",
      size: "2.3 GB",
      downloads: 1247,
      license: "CC BY-NC 4.0",
      year: "2024",
      featured: true,
      formats: ["DICOM", "PNG", "JSON"],
    },
    {
      name: "FedLearn-Benchmark",
      category: "Federated Learning",
      description:
        "Comprehensive benchmark suite for federated learning algorithms with diverse data distributions and privacy constraints.",
      size: "890 MB",
      downloads: 892,
      license: "MIT",
      year: "2024",
      featured: true,
      formats: ["Python", "JSON", "CSV"],
    },
    {
      name: "NeuralArch-Search",
      category: "Neural Architecture",
      description:
        "Dataset of neural architecture performance metrics across multiple tasks and hardware configurations.",
      size: "1.1 GB",
      downloads: 634,
      license: "Apache 2.0",
      year: "2023",
      featured: false,
      formats: ["JSON", "YAML", "Python"],
    },
    {
      name: "AdversarialRobust-Eval",
      category: "Adversarial ML",
      description:
        "Evaluation suite for adversarial robustness with standardized attack methods and defense benchmarks.",
      size: "756 MB",
      downloads: 523,
      license: "BSD-3",
      year: "2023",
      featured: false,
      formats: ["Python", "PyTorch", "TensorFlow"],
    },
    {
      name: "MultiModal-Fusion",
      category: "Multimodal Learning",
      description:
        "Cross-modal dataset combining text, images, and audio for multimodal learning research.",
      size: "4.2 GB",
      downloads: 789,
      license: "CC BY 4.0",
      year: "2024",
      featured: true,
      formats: ["WAV", "JPEG", "TXT", "JSON"],
    },
    {
      name: "ExplainableAI-Metrics",
      category: "Explainable AI",
      description:
        "Comprehensive evaluation metrics and human study data for explainable AI methods.",
      size: "234 MB",
      downloads: 445,
      license: "MIT",
      year: "2023",
      featured: false,
      formats: ["CSV", "JSON", "Python"],
    },
  ];

  const software = [
    {
      name: "AetherML Framework",
      category: "Deep Learning",
      description:
        "Unified framework for efficient neural architecture search and model optimization.",
      version: "v2.1.0",
      downloads: 3421,
      license: "Apache 2.0",
      language: "Python",
      github: "aethermind/aetherml",
    },
    {
      name: "FedPrivacy Toolkit",
      category: "Federated Learning",
      description:
        "Privacy-preserving federated learning toolkit with differential privacy guarantees.",
      version: "v1.3.2",
      downloads: 1876,
      license: "MIT",
      language: "Python",
      github: "aethermind/fedprivacy",
    },
    {
      name: "RobustVision Library",
      category: "Computer Vision",
      description:
        "Computer vision library with built-in adversarial robustness and uncertainty quantification.",
      version: "v0.9.1",
      downloads: 967,
      license: "BSD-3",
      language: "Python",
      github: "aethermind/robustvision",
    },
  ];

  const filteredDatasets = datasets.filter((dataset) => {
    const matchesSearch =
      dataset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dataset.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || dataset.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "All",
    ...Array.from(new Set(datasets.map((d) => d.category))),
  ];

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

      {/* Dataset Content */}
      <main className="pt-[120px] pb-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-light mb-6 tracking-[-1px]">
              Datasets & Software
            </h1>
            <p className="text-xl text-[#b8b8b8] max-w-3xl mx-auto leading-relaxed">
              Open-source datasets and software tools developed by Aethersaga AI to
              advance machine learning research.
            </p>
          </div>

          {/* Coming Soon Message */}
          <div className="text-center py-20">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-light mb-6 tracking-[-1px] text-[#b8b8b8]">
                Coming Soon
              </h2>
              <p className="text-lg text-[#888] leading-relaxed italic">
                There are currently no datasets to be publicly showcased. We are
                working on preparing our research datasets and software tools
                for public release. Please check back soon for updates.
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
