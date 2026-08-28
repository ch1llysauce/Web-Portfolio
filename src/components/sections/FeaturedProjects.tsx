import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';

export const FeaturedProjects: React.FC = () => {
    const featured = projects.filter((p) => p.featured);

    return (
        <section id="projects" className="space-y-6">
            {/* Section Tag */}
            <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-[#12162a] text-blue-400 border border-[#202747]">
                    4 FEATURED PROJECTS
                </span>
            </div>

            {/* 3-Column Uniform Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured.map((project) => (
                    <ProjectCard key={project.id || project.slug} project={project} />
                ))}
            </div>

            {/* Footer CTA */}
            <div className="flex justify-center pt-4">
                <Link
                    to="/projects"
                    className="inline-flex items-center justify-center font-medium rounded-xl px-5 py-2.5 text-sm gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95 active:scale-95 transition-all font-mono font-semibold"
                >
                    VIEW ALL PROJECTS ({projects.length}+) →
                </Link>
            </div>
        </section>
    );
};