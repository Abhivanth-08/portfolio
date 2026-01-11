<<<<<<< HEAD
# Personal Portfolio

## Description

A modern, interactive personal portfolio website built with React, TypeScript, and Three.js. Features stunning 3D visualizations, smooth animations, and a responsive design that showcases projects, skills, and professional experience in an engaging way.

## Features

- **3D Interactive Elements**: Powered by Three.js and React Three Fiber
  - Interactive 3D models and animations
  - Smooth camera movements
  - Particle effects and visual enhancements

- **Modern UI/UX**:
  - Built with shadcn/ui component library
  - Smooth animations with Framer Motion
  - Responsive design for all devices
  - Dark/light theme support with next-themes

- **Contact Integration**:
  - EmailJS integration for contact form
  - Direct email functionality
  - Form validation with React Hook Form and Zod

- **Performance Optimized**:
  - Fast loading with Vite
  - Code splitting and lazy loading
  - Optimized 3D rendering
  - Efficient asset management

- **Professional Sections**:
  - Hero section with 3D elements
  - Projects showcase
  - Skills and technologies
  - Work experience timeline
  - Contact form
  - Resume download

## Technologies Used

### Core
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool

### 3D Graphics
- **Three.js** - 3D rendering library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber

### UI/UX
- **shadcn/ui** - High-quality component library
- **Radix UI** - Accessible component primitives
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Forms & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **@emailjs/browser** - Email service integration

### Additional
- **React Router** - Client-side routing
- **TanStack Query** - Data fetching
- **next-themes** - Theme management

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install
```

### Configuration

Create a `.env` file for EmailJS:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development

```bash
# Start development server
npm run dev
```

The portfolio will be available at `http://localhost:5173`

### Build

```bash
# Production build
npm run build

# Development build
npm run build:dev
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── ui/           # shadcn/ui components
│   └── 3d/           # Three.js components
├── pages/            # Page components
├── lib/              # Utility functions
├── assets/           # Images, fonts, etc.
└── App.tsx           # Main application
```

## Features in Detail

### 3D Interactive Hero
- Animated 3D models
- Interactive camera controls
- Particle systems
- Smooth transitions

### Projects Showcase
- Grid/carousel layout
- Project cards with hover effects
- Technology tags
- Live demo and GitHub links
- Detailed project descriptions

### Skills Section
- Technology icons
- Proficiency indicators
- Category organization
- Interactive elements

### Contact Form
- Real-time validation
- EmailJS integration
- Success/error notifications
- Professional email template

### Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop enhancements
- Touch-friendly interactions

## Customization

### Theme Colors
Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {...},
  secondary: {...},
  accent: {...}
}
```

### 3D Models
Add your own 3D models in supported formats (GLB, GLTF) to `public/models/`

### Content
Update personal information in the respective component files

## Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
vercel
```

The project includes `vercel.json` for optimized deployment.

### Other Platforms
```bash
# Build for production
npm run build

# Deploy the 'dist' folder to your hosting service
```

## Performance Optimization

- Lazy loading for 3D components
- Image optimization
- Code splitting
- Asset compression
- Efficient Three.js rendering
- Minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is licensed under the terms specified in the LICENSE file.

## Resume

A PDF version of the resume is included: `ABHIVANTH R.pdf`

## Deployment Configuration

- **nginx.conf**: Nginx server configuration
- **vercel.json**: Vercel deployment settings

## Future Enhancements

- Blog section
- Project filtering
- Testimonials
- More 3D interactions
- Analytics integration
- Multi-language support
=======
Abhivanth's Portfolio
Personal portfolio website showcasing projects, skills, and resume 
>>>>>>> 22b56681c6f5b5985e78413b49781ad69ced4c18
