import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { ScrollReveal } from '../ui/ScrollReveal';

export const FeaturedProjects: React.FC = () => {
    const featured = projects.filter((p) => p.featured);

    return (
        <section id="projects" className="scroll-mt-24 space-y-6">
            {/* Section Tag */}
            <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-widest bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 uppercase">
                    Featured Projects
                </span>
            </div>

            {/* 3-Column Uniform Grid with Individual Card Scroll Reveals */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured.map((project) => (
                    <ScrollReveal key={project.id || project.slug} className="h-full">
                        <ProjectCard project={project} />
                    </ScrollReveal>
                ))}
            </div>

            {/* Footer CTA */}
            <div className="flex justify-center pt-4">
                <Link
                    to="/projects"
                    className="inline-flex items-center justify-center font-semibold rounded-xl px-5 py-2.5 text-sm gap-2 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95 active:scale-95 transition-all"
                    style={{ fontFamily: "'Onest', sans-serif" }}
                >
                    VIEW ALL PROJECTS
                </Link>
            </div>
        </section>
    );
};