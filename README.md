# Aethersaga AI Research Website

[![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A modern, responsive research website for Aethersaga AI, showcasing our work in machine learning, artificial intelligence, and related fields.

## About Aethersaga AI

Aethersaga AI is a cutting-edge machine learning research group dedicated to advancing the frontiers of artificial intelligence through rigorous research, innovative methodologies, and open collaboration. Our work spans multiple domains including computer vision, natural language processing, reinforcement learning, and interdisciplinary applications.

## Features

- **Modern Design**: Clean, professional interface with dark theme and smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Research Showcase**: Dedicated pages for publications, datasets, and research projects
- **Team Information**: Profiles of our researchers and collaborators
- **Contact Integration**: Easy ways to get in touch for collaborations and opportunities

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom components
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mandalfy/aethermind-research.git
cd aethermind-research
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Build for Production

```bash
pnpm build
# or
npm run build
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── contact/           # Contact page
│   ├── dataset/           # Datasets page
│   ├── join/              # Join us page
│   ├── people/            # Team page
│   ├── publications/      # Publications page
│   ├── research/          # Research page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── animated-logo.tsx  # Animated logo component
│   ├── flip-words.tsx     # Text animation component
│   └── theme-provider.tsx # Theme provider
├── lib/                   # Utility functions
├── public/                # Static assets
└── styles/                # Additional styles
```

## Contributing

We welcome contributions from the community! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Research Areas

- **Computer Vision**: Advanced image processing, object detection, and visual understanding
- **Natural Language Processing**: Language models, text analysis, and conversational AI
- **Machine Learning**: Deep learning, reinforcement learning, and novel architectures
- **Interdisciplinary Applications**: Healthcare, finance, education, and more

## Publications

Our research has been published in top-tier conferences and journals. Visit our [Publications](https://aethersaga.ai/publications) page for the latest work.

## Datasets & Software

We maintain open-source datasets and software tools to advance the field. Check out our [Datasets](https://aethersaga.ai/dataset) page for available resources.

## Contact

- **Email**: info@aethersaga.ai
- **Research Collaborations**: research@aethersaga.ai
- **Career Opportunities**: careers@aethersaga.ai

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
