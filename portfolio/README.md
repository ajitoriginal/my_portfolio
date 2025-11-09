# Ajit Singh - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features a professional design with smooth animations, dark mode support, and optimized performance.

## Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Responsive Design**: Fully responsive across all devices
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Fast Performance**: Static site generation for lightning-fast loading
- **GitHub Pages Ready**: Configured for easy deployment to GitHub Pages

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ajitoriginal/MyPortfolio.git
cd MyPortfolio/portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   ├── providers.tsx       # Theme context provider
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar with theme toggle
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills showcase
│   ├── Projects.tsx       # Projects portfolio
│   ├── Contact.tsx        # Contact information
│   └── Footer.tsx         # Footer component
├── public/                # Static assets
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions deployment
```

## Customization

### Update Personal Information

Edit the following components to personalize your portfolio:

1. **Hero Section** ([components/Hero.tsx](components/Hero.tsx)):
   - Name and title
   - Social media links

2. **About Section** ([components/About.tsx](components/About.tsx)):
   - Professional bio
   - Statistics

3. **Skills Section** ([components/Skills.tsx](components/Skills.tsx)):
   - Add/remove technologies
   - Update skill categories

4. **Projects Section** ([components/Projects.tsx](components/Projects.tsx)):
   - Add your real projects
   - Update descriptions and links

5. **Contact Section** ([components/Contact.tsx](components/Contact.tsx)):
   - Update contact information
   - Change email address

### Theme Customization

Modify colors in [app/globals.css](app/globals.css) and Tailwind configuration.

## Deployment to GitHub Pages

### Setup

1. Create a new repository on GitHub named `MyPortfolio`

2. Initialize git in the project (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

3. Add remote and push:
```bash
git remote add origin https://github.com/ajitoriginal/MyPortfolio.git
git branch -M main
git push -u origin main
```

### Enable GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Pages** section
3. Under **Build and deployment**:
   - Source: Select "GitHub Actions"
4. The site will automatically deploy when you push to main branch

### Access Your Site

Your portfolio will be available at:
```
https://ajitoriginal.github.io/MyPortfolio/
```

### Update Base Path (if needed)

If you use a different repository name, update the `basePath` in [next.config.ts](next.config.ts):

```typescript
basePath: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME' : '',
```

## Local Build

To test the production build locally:

```bash
npm run build
npx serve@latest out
```

## Performance

- **Lighthouse Score**: 90+ across all metrics
- **Static Site Generation**: Pre-rendered pages for optimal performance
- **Optimized Images**: Next.js Image optimization
- **Code Splitting**: Automatic code splitting by Next.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

- **GitHub**: [@ajitoriginal](https://github.com/ajitoriginal)
- **LinkedIn**: [Ajit Singh](https://www.linkedin.com/in/ajit-original/)

## Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment tools
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
