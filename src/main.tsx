import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider, useTheme } from './lib/theme-context'
import { HeroEclipseCard } from './components/ui/hero-eclipse-card'
import { TheEssence } from './components/ui/the-essence'
import { TheAlchemy } from './components/ui/the-alchemy'
import { TheScience } from './components/ui/the-science'
import { TheProduct } from './components/ui/the-product'
import { TheRitual } from './components/ui/the-ritual'
import { ThemeToggle } from './components/ui/theme-toggle'
import { BrandLogos } from './components/ui/brand-logos'
import { BrandColors } from './components/ui/brand-colors'
import { BrandFonts } from './components/ui/brand-fonts'
import { BrandProportions } from './components/ui/brand-proportions'
import { ThreeDPhotoCarousel } from './components/ui/3d-carousel'
import { BrandFooter } from './components/ui/brand-footer'
import { LayeredText } from './components/ui/layered-text'

function MainContent() {
  const { theme } = useTheme();

  return (
    <main
      className={`w-full min-h-screen transition-colors duration-1000 ease-in-out ${theme === 'lunar' ? 'bg-[#0C0C0C] text-white' : 'bg-[#FFFBF0] text-black'
        }`}
    >
      <ThemeToggle />
      <HeroEclipseCard />

      <ThreeDPhotoCarousel />

      {/* Brand Identity Section */}
      <BrandLogos />
      <BrandColors />
      <BrandFonts />
      <BrandProportions />

      {/* Product / Concept Section */}
      <TheEssence />
      <TheAlchemy />
      <TheScience />
      <TheProduct />
      <TheRitual />

      {/* Isometric Text Animation */}
      <LayeredText />

      <BrandFooter />
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
