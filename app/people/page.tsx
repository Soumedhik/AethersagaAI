"use client";

import { useState } from "react";
import { ArrowRight, Menu, X, Mail, ExternalLink } from "lucide-react";
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
    name: "Dr. Anirban Mitra",
    role: "Associate Professor of Computer Science & Engineering",
    focus: "Medical Image Vision, Image Processing, Cryptography",
    bio: "Dr. Anirban Mitra is an Associate Professor of Computer Science & Engineering at Sister Nivedita University. He has made significant contributions to medical image processing, particularly in retinal image analysis and glaucoma detection. His research spans geometric algebra, cryptography, and IoT applications. With over 424 citations and an h-index of 11, he is a prominent researcher in his field.",
    education: "Ph.D. in Medical Image Processing | M.Tech in CSE | M.Sc in Computer Science | B.Sc (Hons) in Computer Science",
    interests: [
      "Medical Image Vision",
      "Image Processing",
      "Cryptography",
      "Geometric Algebra",
      "IoT Applications"
    ],
    email: "anirban.m@snuniv.ac.in",
    scholar: "https://scholar.google.com/citations?hl=en&user=Pu_JxT4AAAAJ",
    experience: "Associate Professor at Sister Nivedita University",
    publications: "20+ Research Articles in Reputed Journals, Multiple Patents",
    awards: "Dynamic Educator of the Year 2022, Smart India Hackathon Mentor & Expert",
    photo: "/media/Anirban-Mitra.jpg",
    citations: "424 total citations, h-index: 11, i10-index: 11",
    coauthors: "Sudipta Roy, Somasis Roy",
    notablePublications: [
      {
        title: "Enhancement and Restoration of non-uniform illuminated Fundus Image of Retina obtained through thin layer of Cataract",
        authors: "A Mitra, S Roy, S Roy, SK Setua",
        journal: "Computer Methods and Programs in Biomedicine",
        year: 2018,
        citations: 76
      },
      {
        title: "The region of interest localization for glaucoma analysis from retinal fundus image using deep learning",
        authors: "A Mitra, PS Banerjee, S Roy, S Roy, SK Setua",
        journal: "Computer methods and programs in biomedicine",
        year: 2018,
        citations: 66
      },
      {
        title: "Blood Vessel Segmentation of Retinal Image using Clifford Matched Filter and Clifford Convolution",
        authors: "SKS Somasis Roy, Anirban Mitra, Sudipta Roy",
        journal: "Multimedia tools and Applications",
        year: 2019,
        citations: 44
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

      {/* People Content */}
      <main className="pt-[120px] pb-20 relative z-10">
        <div className="max-w-[1400px] mx-auto px-[60px]">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-light mb-6 tracking-[-1px] font-serif">People</h1>
            <p className="text-xl text-[#b8b8b8] max-w-3xl mx-auto leading-relaxed">
              Meet the brilliant minds driving innovation in machine learning
              research at Aethersaga AI.
            </p>
          </div>

          {/* Members */}
          <div className="mb-20">
            <h2 className="text-4xl font-light mb-12 text-center tracking-[-1px]">
              Members
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="bg-[rgba(255,255,255,0.05)] rounded-lg p-4 hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 text-center group cursor-pointer"
                  onClick={() => {
                    setSelectedPerson(member);
                    setModalOpen(true);
                  }}
                >
                  {member.photo ? (
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 bg-gradient-to-br from-[#0084ff]/70 to-[#0066cc]/70 rounded-full mx-auto mb-4 flex items-center justify-center text-lg font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  )}
                  <h4 className="font-semibold mb-1 group-hover:text-[#0084ff] transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-[#888] text-sm mb-1">
                    {member.role || member.year}
                  </p>
                  <p className="text-[#b8b8b8] text-xs mb-3">{member.focus}</p>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-block mx-auto"
                    >
                      <Mail className="w-4 h-4 text-[#b8b8b8] hover:text-[#0084ff] cursor-pointer transition-colors" />
                    </a>
                  )}
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
