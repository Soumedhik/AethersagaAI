"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X, Mail, ExternalLink, Linkedin, GraduationCap, Award, BookOpen, Users, Calendar } from "lucide-react";
import Link from "next/link";
import { AnimatedLogo } from "@/components/animated-logo";
import Image from "next/image";

interface Person {
  name: string;
  role?: string;
  focus: string;
  bio?: string;
  education?: string;
  interests?: string[];
  email?: string;
  linkedin?: string;
  scholar?: string;
  experience?: string;
  publications?: string;
  awards?: string;
  photo?: string;
  year?: string;
  citations?: string;
  coauthors?: string;
  notablePublications?: Array<{
    title: string;
    authors: string;
    journal: string;
    year: number;
    citations: number;
  }>;
}

const members: Person[] = [
  {
    name: "Dr. Swarup Kr Ghosh",
    role: "Associate Professor",
    focus: "Machine Learning, Bioinformatics, Soft Computing, Medical Imaging",
    bio: "Dr. Swarup Kr Ghosh is presently working as an Associate Professor of the Department of Computer Science & Engineering, Sister Nivedita University, Kolkata. He has published more than 40 research articles in various reputed journals and holds 4 Indian patents. His research focuses on machine learning applications in medical imaging, bioinformatics, and computational biology.",
    education:
      "Ph.D. in CSE – MAKAUT, WB | M.Tech (IT) – University of Calcutta",
    interests: [
      "Machine Learning",
      "Bioinformatics",
      "Soft Computing",
      "Medical Imaging",
      "Deep Learning",
      "Computer Vision"
    ],
    email: "swarup.kg@snuniv.ac.in",
    linkedin: "https://www.linkedin.com/in/dr-swarup-kr-ghosh-b8782557/",
    scholar: "https://scholar.google.co.in/citations?user=1NU_3oEAAAAJ&hl=en",
    experience: "12 Years Teaching, 13 Years Research",
    publications:
      "20+ Journal Papers, 6 Conference Presentations, 11 Book Chapters, 4 Patents",
    awards: "Published in top-tier journals including IEEE, Elsevier, Springer",
    photo: "/media/swarup-kumar-ghosh.jpg",
    citations: "526 total citations, 514 since 2020, h-index: 14, i10-index: 16",
    coauthors: "Dr. Anupam Ghosh, Smarta Sangui, Dr. Siddhartha Bhattacharyya, Amlan Chakrabarti, Piyush Chandra, Vaclav Snasel, Jan Platoš, Pabitra Mitra, Chandan Chakraborty, Mukta Majumder, Sanjoy Mondal",
    notablePublications: [
      {
        title: "A long short-term memory based deep learning algorithm for seismic response uncertainty quantification",
        authors: "A Kundu, S Ghosh, S Chakraborty",
        journal: "Probabilistic Engineering Mechanics",
        year: 2022,
        citations: 55
      },
      {
        title: "3D MRI Segmentation using U-Net Architecture for the detection of Brain Tumor",
        authors: "S Sangui, T Iqbal, PC Chandra, SK Ghosh, A Ghosh",
        journal: "Procedia Computer Science",
        year: 2023,
        citations: 54
      },
      {
        title: "A novel intuitionistic fuzzy soft set entrenched mammogram segmentation under multigranulation approximation for breast cancer detection in early stages",
        authors: "SK Ghosh, A Mitra, A Ghosh",
        journal: "Expert Systems with Applications",
        year: 2021,
        citations: 34
      },
      {
        title: "ENResNet: A novel residual neural network for chest X-ray enhancement based COVID-19 detection",
        authors: "SK Ghosh, A Ghosh",
        journal: "Biomedical Signal Processing and Control",
        year: 2022,
        citations: 32
      },
      {
        title: "Early fire detection and alert system using modified inception-v3 under deep learning framework",
        authors: "A Biswas, SK Ghosh, A Ghosh",
        journal: "Procedia Computer Science",
        year: 2023,
        citations: 29
      }
    ]
  },
  {
    name: "Dr. Sayani Mondal",
    role: "Assistant Professor",
    focus: "NLP, Human Factors in Software Engineering, Program Comprehension, ML",
    bio: "Dr. Sayani Mondal is an Assistant Professor specializing in Natural Language Processing, Human Factors in Software Engineering, and Program Comprehension. With over 16 citations and a focus on understanding developer behavior and improving software development processes, she contributes significantly to both academic research and practical applications in software engineering and AI.",
    education: "Ph.D. from IIT Kharagpur | M.Tech from IIT Kharagpur | B.Tech in Computer Science & Engineering from WBUT",
    interests: [
      "Natural Language Processing",
      "Human Factors in Software Engineering",
      "Program Comprehension",
      "Machine Learning",
      "Software Development Processes"
    ],
    email: "sayani.m@snuniv.ac.in",
    scholar: "https://scholar.google.com/citations?hl=en&user=OTpaGusAAAAJ",
    experience: "Assistant Professor at Sister Nivedita University",
    publications: "8 Research Publications, Multiple Conference Presentations",
    awards: "Active Contributor to Software Engineering Research Community",
    photo: "/media/sayani-mondal-cse.jpg",
    citations: "16 total citations, 14 since 2020, h-index: 3, i10-index: 0",
    coauthors: "Partha Pratim Das, Tarun Biswas, Nilesh Kumar, Anupam Kumar, Titas Bhattacharjee, Raina Paul, Dr. Swarup Kr Ghosh",
    notablePublications: [
      {
        title: "A survey-based study to understand various aspects of Kanban",
        authors: "A Kumar, N Kumar, S Mondal, T Biswas",
        journal: "Communication and Intelligent Systems: Proceedings of ICCIS 2021",
        year: 2022,
        citations: 5
      },
      {
        title: "Measuring code comprehension effort using code reading pattern",
        authors: "S Mondal, PP Das, T Bhattacharjee Rudra",
        journal: "Sādhanā",
        year: 2022,
        citations: 4
      },
      {
        title: "Effectiveness of test-driven development as an SDLC model: A case study of an elevator controller design",
        authors: "S Mondal, PP Das",
        journal: "Emerging Trends in Computing and Communication: ETCC 2014",
        year: 2014,
        citations: 4
      },
      {
        title: "An IDE-agnostic system to capture reading behaviour of C++ programs using eye-gaze tracker",
        authors: "S Mondal, PP Das",
        journal: "2015 Fifth National Conference on Computer Vision, Pattern Recognition",
        year: 2015,
        citations: 3
      },
      {
        title: "HCAT-Net a Novel Hierarchical Cross-Attention Transformer Network with Enriched Balanced Ordinal Loss for EEG Emotion Classification",
        authors: "S Bharati, S Banerjee, S Mandal, SK Ghosh, S Mondal, A Mitra",
        journal: "2025 International Conference on Computing, Intelligence, and Application",
        year: 2025,
        citations: 0
      }
    ]
  },
  {
    name: "Anirban Mitra",
    role: "Research Associate",
    focus: "Medical Imaging, Deep Learning, Computer Vision",
    bio: "Anirban Mitra is a Research Associate at Aethersaga AI, specializing in medical imaging and deep learning applications. His research focuses on developing advanced algorithms for medical image analysis, particularly in breast cancer detection and brain tumor segmentation.",
    education:
      "M.Tech in Computer Science & Engineering – Sister Nivedita University",
    interests: [
      "Medical Imaging",
      "Deep Learning",
      "Computer Vision",
      "Image Processing",
      "Machine Learning",
      "Healthcare AI"
    ],
    email: "anirban.mitra@aethersaga.ai",
    linkedin: "https://www.linkedin.com/in/anirban-mitra-8b8b8b8b/",
    scholar: "https://scholar.google.co.in/citations?user=example&hl=en",
    experience: "3 Years Research, 2 Years Industry",
    publications: "8 Journal Papers, 12 Conference Presentations",
    awards: "Published in IEEE, Elsevier, Springer journals",
    photo: "/media/anirban-mitra.jpg",
    citations: "424 total citations, 421 since 2020, h-index: 11, i10-index: 11",
    coauthors: "Dr. Swarup Kr Ghosh, Dr. Anupam Ghosh, Smarta Sangui, Dr. Siddhartha Bhattacharyya, Amlan Chakrabarti, Chandan Chakraborty, Mukta Majumder, Sanjoy Mondal, Pabitra Mitra",
    notablePublications: [
      {
        title: "A novel intuitionistic fuzzy soft set entrenched mammogram segmentation under multigranulation approximation for breast cancer detection in early stages",
        authors: "SK Ghosh, A Mitra, A Ghosh",
        journal: "Expert Systems with Applications",
        year: 2021,
        citations: 34
      },
      {
        title: "3D MRI Segmentation using U-Net Architecture for the detection of Brain Tumor",
        authors: "S Sangui, T Iqbal, PC Chandra, SK Ghosh, A Ghosh",
        journal: "Procedia Computer Science",
        year: 2023,
        citations: 54
      },
      {
        title: "ENResNet: A novel residual neural network for chest X-ray enhancement based COVID-19 detection",
        authors: "SK Ghosh, A Ghosh",
        journal: "Biomedical Signal Processing and Control",
        year: 2022,
        citations: 32
      },
      {
        title: "Early fire detection and alert system using modified inception-v3 under deep learning framework",
        authors: "A Biswas, SK Ghosh, A Ghosh",
        journal: "Procedia Computer Science",
        year: 2023,
        citations: 29
      },
      {
        title: "A long short-term memory based deep learning algorithm for seismic response uncertainty quantification",
        authors: "A Kundu, S Ghosh, S Chakraborty",
        journal: "Probabilistic Engineering Mechanics",
        year: 2022,
        citations: 55
      }
    ]
  },
  {
    name: "Soumedhik Bharati",
    focus: "Computer Vision and NLP",
    year: "4th Year",
    bio: "Soumedhik Bharati is a dedicated research student specializing in Computer Vision and Natural Language Processing. With a strong foundation in machine learning algorithms and deep learning architectures, he contributes to cutting-edge research in multimodal AI systems.",
    education: "B.Tech in Computer Science & Engineering",
    interests: [
      "Computer Vision",
      "Natural Language Processing",
      "Deep Learning",
      "Multimodal AI"
    ],
    email: "soumedhikbharati@gmail.com",
    role: "Research Student",
    photo: "/media/soumedhik-bharati.jpeg",
  },
  {
    name: "Sohoomlal Banerjee",
    focus: "Computer Vision and NLP",
    year: "4th Year",
    photo: "/media/sohoomlal-banerjee.jpeg",
    email: "sohoomlal@gmail.com",
    role: "Research Student",
  },
  {
    name: "Shibam Mandal",
    focus: "Computer Vision",
    year: "2nd Year",
    photo: "/media/shibam-mandal.jpeg",
    email: "shibammandalfy@gmail.com",
    role: "Research Student",
  },
  {
    name: "Sohan Das",
    focus: "Computer Vision",
    year: "2nd Year",
    photo: "/media/sohan-das.jpeg",
    email: "sohan4w1@gmail.com",
    role: "Research Student",
  },
];

export default function PeoplePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setModalOpen(false);
        setMobileOpen(false);
      }
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
    if (mobileOpen || modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen, modalOpen]);

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
              className="text-[15px] transition-colors duration-200 text-[#0084ff]"
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
              className="block py-3 text-[16px] text-[#0084ff] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              People
            </Link>
            <Link
              href="/dataset"
              className="block py-3 text-[16px] text-[#e6e6e6] hover:text-white transition-colors"
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
              <span className="block text-[120px] font-extralight leading-[0.9] tracking-[-4px] font-serif bg-gradient-to-r from-white via-[#0084ff] via-[#0066cc] to-white bg-clip-text text-transparent animate-gradient-x relative">
                Our Team
                {/* Text shadow effect */}
                <span className="absolute inset-0 text-[120px] font-extralight leading-[0.9] tracking-[-4px] font-serif text-[#0084ff]/20 blur-sm animate-pulse">
                  Our Team
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
            <h2 className="text-[36px] font-light leading-[1.1] tracking-[-1px] font-serif text-[#0084ff] relative">
              Brilliant Minds Driving Innovation
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 text-[36px] font-light leading-[1.1] tracking-[-1px] font-serif text-[#0084ff] blur-sm opacity-60 animate-pulse">
                Brilliant Minds Driving Innovation
              </div>
              <div className="absolute inset-0 text-[36px] font-light leading-[1.1] tracking-[-1px] font-serif text-[#0066cc] blur-md opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
                Brilliant Minds Driving Innovation
              </div>
            </h2>
          </div>

          {/* Enhanced description with better visual hierarchy */}
          <div className="mb-12 animate-fade-in-up relative" style={{ animationDelay: '1s' }}>
            <div className="relative">
              <p className="text-xl leading-relaxed text-[#b8b8b8] font-light max-w-[700px] mx-auto relative z-10">
                <span className="relative z-10">
                  Meet our interdisciplinary team of researchers, engineers, and visionaries
                  pushing the boundaries of
                  <span className="text-white font-medium relative">
                    artificial intelligence and machine learning
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0084ff] to-[#0066cc] rounded-full animate-pulse"></span>
                  </span>.
                </span>
              </p>

              {/* Enhanced background text effect */}
              <div className="absolute inset-0 text-xl leading-relaxed text-[#0084ff]/8 font-light blur-sm transform scale-105 flex items-center justify-center -z-10">
                <span>
                  Meet our interdisciplinary team of researchers, engineers, and visionaries
                  pushing the boundaries of artificial intelligence and machine learning.
                </span>
              </div>
            </div>
          </div>

          {/* Enhanced call-to-action buttons with advanced effects */}
          <div className="flex gap-6 items-center justify-center animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <Link
              href="#team"
              className="group relative flex items-center gap-3 bg-gradient-to-r from-[#0084ff] via-[#0066cc] to-[#0055aa] text-white py-4 px-8 rounded-xl text-lg font-medium hover:scale-105 hover:shadow-2xl hover:shadow-[#0084ff]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0084ff]/20 to-[#0066cc]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

              <span className="relative z-10 font-medium">Meet the Team</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/5 transition-colors duration-300 animate-ripple" />
            </Link>

            <Link
              href="/join"
              className="group relative bg-transparent border-2 border-[#0084ff]/60 text-[#0084ff] py-4 px-8 rounded-xl text-lg font-medium hover:bg-[#0084ff]/10 hover:border-[#0084ff] hover:text-white hover:scale-105 hover:shadow-xl hover:shadow-[#0084ff]/20 transition-all duration-500 overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-[#0084ff]/0 group-hover:bg-[#0084ff]/10 transition-colors duration-500 rounded-xl" />

              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-xl border border-[#0084ff]/0 group-hover:border-[#0084ff]/40 transition-colors duration-300" />
              <div className="absolute inset-0 rounded-xl bg-[#0084ff]/0 group-hover:bg-[#0084ff]/5 blur-xl transition-colors duration-500" />

              <span className="relative z-10">Join Our Team</span>
            </Link>
          </div>
        </div>
      </section>

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
              className="text-[15px] transition-colors duration-200 text-[#0084ff]"
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

      {/* Team Section */}
      <section id="team" className="pt-20 pb-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          {/* Members */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light mb-6 tracking-[-1px] font-serif text-white">Our Team</h2>
              <p className="text-xl text-[#b8b8b8] max-w-3xl mx-auto leading-relaxed">
                Meet the brilliant minds driving innovation in machine learning research at Aethersaga AI.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] backdrop-blur-sm rounded-2xl p-8 hover:bg-gradient-to-br hover:from-[rgba(255,255,255,0.08)] hover:to-[rgba(255,255,255,0.04)] transition-all duration-500 text-center cursor-pointer border border-white/5 hover:border-[#0084ff]/30 hover:shadow-2xl hover:shadow-[#0084ff]/10 transform hover:-translate-y-2"
                  onClick={() => {
                    setSelectedPerson(member);
                    setModalOpen(true);
                  }}
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0084ff]/5 via-transparent to-[#0066cc]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  {/* Profile Image */}
                  <div className="relative mb-6">
                    {member.photo ? (
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-2 ring-[#0084ff]/20 group-hover:ring-[#0084ff]/50 transition-all duration-300">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          width={96}
                          height={96}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="w-24 h-24 bg-gradient-to-br from-[#0084ff]/70 to-[#0066cc]/70 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold ring-2 ring-[#0084ff]/20 group-hover:ring-[#0084ff]/50 transition-all duration-300">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}

                    {/* Floating icons */}
                    <div className="absolute -top-2 -right-2 flex gap-1">
                      {member.scholar && (
                        <div className="w-6 h-6 bg-[#0084ff]/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <BookOpen className="w-3 h-3 text-[#0084ff]" />
                        </div>
                      )}
                      {member.linkedin && (
                        <div className="w-6 h-6 bg-[#0066cc]/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Linkedin className="w-3 h-3 text-[#0066cc]" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Name and Role */}
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-[#0084ff] transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-[#0084ff] font-medium text-sm mb-3">
                    {member.role || member.year}
                  </p>
                  <p className="text-[#b8b8b8] text-sm leading-relaxed mb-4 line-clamp-2">
                    {member.focus}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-center gap-4 mb-4 text-xs text-[#888]">
                    {member.citations && (
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3" />
                        <span>{member.citations.split(',')[2]?.split(':')[1] || 'N/A'} h-index</span>
                      </div>
                    )}
                    {member.publications && (
                      <div className="flex items-center gap-1">
                        <Award className="w-3 h-3" />
                        <span>{member.publications.split(',')[0]?.split('+')[0] || 'N/A'}+ pubs</span>
                      </div>
                    )}
                  </div>

                  {/* Contact */}
                  {member.email && (
                    <div className="flex justify-center">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center justify-center w-8 h-8 bg-[#0084ff]/10 hover:bg-[#0084ff]/20 rounded-full transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail className="w-4 h-4 text-[#0084ff]" />
                      </a>
                    </div>
                  )}

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0084ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>

          {/* Visiting Researchers */}
          <div className="mb-20">
            <h2 className="text-4xl font-light mb-12 text-center tracking-[-1px]">
              Visiting Researchers
            </h2>
            <div className="text-center">
              <p className="text-[#b8b8b8] italic text-lg">
                There are currently no visiting professors associated with us.
              </p>
            </div>
          </div>

          {/* Alumni */}
          <div>
            <h2 className="text-4xl font-light mb-12 text-center tracking-[-1px]">
              Alumni
            </h2>
            <div className="text-center">
              <p className="text-[#b8b8b8] italic text-lg">
                There are currently no alumni associated with us.
              </p>
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
                  <Mail className="w-4 h-4 text-[#0084ff]" />
                </div>
                <div className="w-8 h-8 bg-[#0066cc]/10 rounded-full flex items-center justify-center hover:bg-[#0066cc]/20 transition-colors cursor-pointer">
                  <Linkedin className="w-4 h-4 text-[#0066cc]" />
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
                  className="block text-[#0084ff] transition-colors text-sm font-medium"
                >
                  People
                </Link>
                <Link
                  href="/dataset"
                  className="block text-[#b8b8b8] hover:text-[#0084ff] transition-colors text-sm hover:translate-x-1 transform duration-200"
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
                  <div className="font-medium mb-1">Email</div>
                  <div>aethersaga.ai@gmail.com</div>
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

      {/* Person Modal */}
      {modalOpen && selectedPerson && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0a0a0a] border border-white/20 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  {selectedPerson.photo ? (
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={selectedPerson.photo}
                        alt={selectedPerson.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0084ff]/70 to-[#0066cc]/70 rounded-full flex items-center justify-center text-lg font-bold">
                      {selectedPerson.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedPerson.name}</h2>
                    <p className="text-[#0084ff]">{selectedPerson.role || selectedPerson.year}</p>
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="text-[#b8b8b8] hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                {/* Bio */}
                {selectedPerson.bio && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">About</h3>
                    <p className="text-[#b8b8b8] leading-relaxed">{selectedPerson.bio}</p>
                  </div>
                )}

                {/* Research Focus */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Research Focus</h3>
                  <p className="text-[#b8b8b8]">{selectedPerson.focus}</p>
                </div>

                {/* Education */}
                {selectedPerson.education && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Education</h3>
                    <p className="text-[#b8b8b8]">{selectedPerson.education}</p>
                  </div>
                )}

                {/* Research Interests */}
                {selectedPerson.interests && selectedPerson.interests.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Research Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPerson.interests.map((interest, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#0084ff]/20 text-[#0084ff] rounded-full text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Citations & Metrics */}
                {selectedPerson.citations && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Academic Metrics</h3>
                    <p className="text-[#b8b8b8]">{selectedPerson.citations}</p>
                  </div>
                )}

                {/* Notable Publications */}
                {selectedPerson.notablePublications && selectedPerson.notablePublications.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Notable Publications</h3>
                    <div className="space-y-4">
                      {selectedPerson.notablePublications.map((pub, idx) => (
                        <div key={idx} className="border-l-2 border-[#0084ff]/50 pl-4">
                          <h4 className="font-medium text-white mb-1">{pub.title}</h4>
                          <p className="text-[#b8b8b8] text-sm mb-1">{pub.authors}</p>
                          <p className="text-[#888] text-sm">
                            {pub.journal} ({pub.year}) • {pub.citations} citations
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Experience */}
                {selectedPerson.experience && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Experience</h3>
                    <p className="text-[#b8b8b8]">{selectedPerson.experience}</p>
                  </div>
                )}

                {/* Publications */}
                {selectedPerson.publications && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Publications</h3>
                    <p className="text-[#b8b8b8]">{selectedPerson.publications}</p>
                  </div>
                )}

                {/* Awards */}
                {selectedPerson.awards && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Awards & Recognition</h3>
                    <p className="text-[#b8b8b8]">{selectedPerson.awards}</p>
                  </div>
                )}

                {/* Co-authors */}
                {selectedPerson.coauthors && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Key Collaborators</h3>
                    <p className="text-[#b8b8b8]">{selectedPerson.coauthors}</p>
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-white/10">
                  {selectedPerson.email && (
                    <a
                      href={`mailto:${selectedPerson.email}`}
                      className="flex items-center gap-2 text-[#0084ff] hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                  )}
                  {selectedPerson.scholar && (
                    <a
                      href={selectedPerson.scholar}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#0084ff] hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Google Scholar
                    </a>
                  )}
                  {selectedPerson.linkedin && (
                    <a
                      href={selectedPerson.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#0084ff] hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
