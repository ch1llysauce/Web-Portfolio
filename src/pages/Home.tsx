import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { TechStack } from '../components/sections/TechStack';
import { FeaturedProjects } from '../components/sections/FeaturedProjects';
import { ProjectGrid } from '../components/sections/ProjectGrid';
import { Journey } from '../components/sections/Journey';
import { Contact } from '../components/sections/Contact';

export const Home: React.FC = () => {
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
        <ProjectGrid />
        <Journey />
        <Contact />
      </div>
    </div>
  );
};