import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { TechStack } from '../components/sections/TechStack';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { Journey } from '../components/sections/Journey';
import { Contact } from '../components/sections/Contact';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.replaceState(null, '', '/');
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          let yOffset = -90; // Default navbar offset

          if (id === 'journey') {
            const elementHeight = element.offsetHeight;
            const viewportHeight = window.innerHeight;
            yOffset = -Math.max(80, (viewportHeight - elementHeight) / 2);
          }

          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="space-y-6 md:space-y-8 pb-4 md:pb-6">
      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 md:space-y-10">
        {/* Section 2 ABOUT ME & Section 3 TECH STACK side-by-side */}
        <div id="about" className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5 h-full">
            <About />
          </div>
          <div className="lg:col-span-7 h-full">
            <TechStack />
          </div>
        </div>

        <FeaturedProjects />
        <Journey />
        <Contact />
      </div>
    </div>
  );
};