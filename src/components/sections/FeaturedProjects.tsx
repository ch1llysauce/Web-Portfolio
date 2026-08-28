import React from 'react';
import { projects } from '../../data/projects';
import { ProjectCard } from '../ui/ProjectCard';
import { Button } from '../ui/Button';

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
                <Button variant="primary" size="md" href="/projects">
                    VIEW ALL PROJECTS ({projects.length}+) →
                </Button>
            </div>
        </section>
    );
};