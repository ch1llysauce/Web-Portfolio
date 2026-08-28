import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { TechStack } from '../components/sections/TechStack';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { Journey } from '../components/sections/Journey';
import { Contact } from '../components/sections/Contact';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="space-y-20 pb-16">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section 2 ABOUT ME & Section 3 TECH STACK side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
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