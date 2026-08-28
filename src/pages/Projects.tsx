import React from 'react';
import { ProjectGrid } from '../components/sections/ProjectGrid';

export const Projects: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          All Projects
        </h1>
        <p className="text-sm text-slate-400">
          A complete archive of web platforms, mobile apps, and AI systems I've built.
        </p>
      </div>
      <ProjectGrid />
    </div>
  );
};