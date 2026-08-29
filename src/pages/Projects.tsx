import React, { useEffect } from 'react';
import { ProjectGrid } from '../components/sections/ProjectGrid';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export const Projects: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 space-y-6">
      <ScrollReveal>
        <div className="space-y-1.5 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight" style={{ fontFamily: "'Urbanist', sans-serif" }}>
            All Projects
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            A complete archive of web platforms, mobile apps, and AI systems I've built.
          </p>
        </div>
      </ScrollReveal>
      <ProjectGrid />
    </div>
  );
};