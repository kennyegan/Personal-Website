# Kenny Egan - Personal Portfolio Website

A personlized and clean personal portfolio website built with **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- **Modern Design**: Futuristic glassmorphism UI with neon blue, cyber purple, and electric green color scheme
- **Responsive**: Fully responsive design optimized for all device sizes
- **Performance**: Fast loading with Next.js 14 App Router and optimized components  
- **Animations**: Smooth transitions and hover effects powered by Framer Motion
- **TypeScript**: Fully typed for better development experience and code quality
- **Dark Theme**: Beautiful dark mode design by default

## Project Structure

```
Personal-Website/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── page.tsx         # Home page
│   │   ├── projects/        # Projects showcase
│   │   ├── research/        # Research publications
│   │   ├── resume/          # Resume page
│   │   ├── contact/         # Contact form
│   │   └── layout.tsx       # Root layout
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx       # Navigation component
│   │   ├── Footer.tsx       # Footer component
│   │   ├── ProjectCard.tsx  # Project display card
│   │   ├── ResearchCard.tsx # Research paper card
│   │   └── ResumeButton.tsx # Resume download button
│   ├── lib/                 # Data and utilities
│   │   ├── projects.ts      # Projects data
│   │   └── research.ts      # Research papers data
│   └── styles/
│       └── globals.css      # Global styles and Tailwind config
├── public/
│   └── images/              # Static images and assets
└── package.json
```

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom futuristic theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Design Features

- **Glassmorphism**: Subtle glass-like cards with backdrop blur
- **Gradient Effects**: Beautiful color gradients and text effects  
- **Hover Animations**: Interactive elements with smooth transitions
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Custom Scrollbar**: Styled scrollbars to match the theme
- **Loading States**: Smooth loading animations and states

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/kenny-portfolio.git
cd kenny-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📖 Sections

### Home
- Hero section with animated profile
- Quick stats and skills overview
- Featured projects and research
- Call-to-action sections

### Projects
- Filterable project showcase
- Search functionality
- Category-based filtering
- Detailed project cards with tech stacks

### Research
- Academic publications
- Filterable by status and research area
- Citation counts and links
- Research collaboration information

### Resume
- Professional experience timeline
- Education background
- Technical skills breakdown
- Awards and recognition
- Downloadable PDF resume

### Contact
- Contact form with validation
- Multiple contact methods
- Collaboration types
- FAQ section

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  'neon-blue': { /* ... */ },
  'cyber-purple': { /* ... */ },
  'electric-green': { /* ... */ }
}
```

### Content
- Update projects in `src/lib/projects.ts`
- Update research papers in `src/lib/research.ts`
- Replace placeholder images in `public/images/`

### Fonts
Change fonts in `src/app/layout.tsx` and `tailwind.config.js`

## Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## Performance Optimizations

- Next.js 14 App Router for optimal performance
- Image optimization with next/image
- Dynamic imports for code splitting
- Framer Motion with reduced motion support
- Optimized fonts and assets

## Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables
`.env` 
```
#when domain is purchased this will be updated
PUBLIC_SITE_URL=https://your-domain.com 
```

## License

This project is open source and available under the [MIT License](LICENSE).


---

