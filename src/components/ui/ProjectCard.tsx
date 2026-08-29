import React from 'react';
import type { Project } from '../../types/projects';
import { Button } from './Button';
import { ExternalLink, Download, Smartphone, Monitor } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { theme } = useTheme();
    const categoryTag = project.tagline || project.category.join(' • ').toUpperCase();
    const isMobile = project.category.includes('mobile');

    // Theme-aware image selection
    const activeImage = theme === 'light'
        ? (project.image_light || project.image || project.image_dark)
        : (project.image_dark || project.image || project.image_light);

    return (
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white/95 dark:bg-[#0c0e1d]/70 border border-black/10 dark:border-white/[0.08] p-3.5 sm:p-5 transition-all duration-300 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 backdrop-blur-xl shadow-lg dark:shadow-xl">
            <div className="space-y-3 sm:space-y-4">
                {/* Category Header Badge */}
                <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                        {categoryTag}
                    </span>
                </div>

                {/* Thumbnail Preview Area — Clickable to open live website */}
                {(() => {
                    const mainLink = project.links.web || project.links.apk || project.links.github;
                    const ContainerTag = mainLink ? 'a' : 'div';
                    const linkProps = mainLink ? { href: mainLink, target: '_blank', rel: 'noreferrer', title: `Open ${project.title}` } : {};

                    return (
                        <ContainerTag
                            {...linkProps}
                            className="block relative h-36 sm:h-44 md:aspect-video w-full overflow-hidden rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/[0.08] flex items-center justify-center cursor-pointer group-hover:border-indigo-500/40 transition-all duration-300"
                        >
                            {activeImage ? (
                                <img
                                    key={activeImage}
                                    src={activeImage}
                                    alt={project.title}
                                    className={`h-full w-full rounded-lg ${project.image_position === 'object-contain' ? 'object-contain' : 'object-cover'} ${project.image_position === 'object-left-top' ? 'object-left-top' : project.image_position || 'object-center'} transition-transform duration-500 group-hover:scale-105`}
                                    onError={(e) => {
                                        (e.target as HTMLElement).style.display = 'none';
                                        const fallback = (e.target as HTMLElement).nextElementSibling;
                                        if (fallback) fallback.classList.remove('hidden');
                                    }}
                                />
                            ) : null}

                            {/* Styled Fallback UI Mockup Preview */}
                            <div className={`${activeImage ? 'hidden' : ''} flex flex-col items-center justify-center text-center p-3 sm:p-4 w-full h-full bg-gradient-to-b from-indigo-950/20 to-black/30 dark:from-indigo-950/40 dark:to-black/60`}>
                                <div className="w-full max-w-[150px] sm:max-w-[180px] h-20 sm:h-24 rounded-lg bg-white dark:bg-[#070913]/90 border border-black/10 dark:border-white/10 p-2 flex flex-col justify-between shadow-inner">
                                    <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-1">
                                        <div className="flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        </div>
                                        {isMobile ? <Smartphone className="w-3 h-3 text-indigo-500 dark:text-indigo-400" /> : <Monitor className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />}
                                    </div>
                                    <div className="space-y-1 my-auto">
                                        <div className="h-1.5 bg-indigo-500/30 rounded w-3/4 mx-auto" />
                                        <div className="h-1.5 bg-slate-500/30 rounded w-1/2 mx-auto" />
                                    </div>
                                    <div className="h-2 bg-indigo-600/30 dark:bg-indigo-600/40 rounded w-full flex items-center justify-center">
                                        <span className="text-[7px] text-indigo-600 dark:text-indigo-300 font-mono font-medium">UI Preview</span>
                                    </div>
                                </div>
                            </div>
                        </ContainerTag>
                    );
                })()}
                
                {/* Info */}
                <div className="space-y-1.5 sm:space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {project.tech_stack.map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[9px] sm:text-[10px] font-mono bg-black/5 dark:bg-white/[0.04] text-slate-600 dark:text-slate-300 border border-black/10 dark:border-white/[0.08] font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-2 pt-3 sm:pt-4 border-t border-black/10 dark:border-white/[0.06] mt-3 sm:mt-4">
                {project.links.web && (
                    <Button variant="outline" size="sm" href={project.links.web} external className="flex-1 text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Live Demo
                    </Button>
                )}
                {project.links.apk && (
                    <Button variant="outline" size="sm" href={project.links.apk} external className="flex-1 text-xs">
                        <Download className="w-3 h-3 mr-1" />
                        APK
                    </Button>
                )}
                {project.links.github && (
                    <Button variant="outline" size="sm" href={project.links.github} external className="flex-1 text-xs">
                        <svg className="w-3 h-3 mr-1 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        GitHub
                    </Button>
                )}
            </div>
        </div>
    );
};
