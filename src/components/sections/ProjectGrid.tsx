import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import type { ProjectCategory } from '../../types/projects';
import { ExternalLink, Download } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { useTheme } from '../../context/ThemeContext';

type FilterTab = 'all' | 'web' | 'mobile' | 'ai' | 'fullstack';

const filterTabs: { label: string; value: FilterTab }[] = [
    { label: 'All', value: 'all' },
    { label: 'Web', value: 'web' },
    { label: 'Mobile', value: 'mobile' },
    { label: 'AI', value: 'ai' },
    { label: 'Full-Stack', value: 'fullstack' },
];

export const ProjectGrid: React.FC = () => {
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState<FilterTab>('all');

    const showcaseProjects = projects.filter((project) => {
        if (activeTab === 'all') return true;
        return project.category.includes(activeTab as ProjectCategory);
    });

    return (
        <section id="showcase" className="space-y-4">
            {/* Section Header & Filter Tabs with ScrollReveal */}
            <ScrollReveal>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-widest bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 uppercase">
                        Projects Showcase
                    </span>
                </div>

                {/* Filter Pills — Centered on mobile, aligned on desktop */}
                <div className="flex justify-center sm:justify-end w-full sm:w-auto">
                    <div className="inline-flex max-w-full overflow-x-auto items-center gap-1 bg-black/5 dark:bg-white/[0.04] p-1 rounded-2xl border border-black/10 dark:border-white/[0.08] backdrop-blur-xl no-scrollbar">
                        {filterTabs.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveTab(tab.value)}
                                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer outline-none focus:outline-none select-none ${
                                    activeTab === tab.value
                                        ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/25'
                                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                                }`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            </ScrollReveal>

            {/* Showcase Grid with Scroll-Triggered Fade In & Fade Out Transitions */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <AnimatePresence mode="popLayout">
                    {showcaseProjects.map((project) => {
                        const activeImage = theme === 'light'
                            ? (project.image_light || project.image || project.image_dark)
                            : (project.image_dark || project.image || project.image_light);

                        return (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: false, amount: 0.12 }}
                                exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="h-full"
                            >
                                <div className="group relative flex flex-col justify-between rounded-2xl bg-white/95 dark:bg-[#0c0e1d]/70 border border-black/10 dark:border-white/[0.07] p-3.5 transition-all duration-300 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 backdrop-blur-xl h-full shadow-md dark:shadow-xl">
                                    <div className="space-y-2.5">
                                        {/* Thumbnail Preview Area — Clickable to open live project */}
                                        {(() => {
                                            const mainLink = project.links.web || project.links.apk || project.links.github;
                                            const ContainerTag = mainLink ? 'a' : 'div';
                                            const linkProps = mainLink ? { href: mainLink, target: '_blank', rel: 'noreferrer', title: `Open ${project.title}` } : {};

                                            return (
                                                <ContainerTag
                                                    {...linkProps}
                                                    className="block relative aspect-video w-full rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.07] flex items-center justify-center overflow-hidden cursor-pointer group-hover:border-indigo-500/40 transition-colors"
                                                >
                                                    {activeImage ? (
                                                        <img
                                                            key={activeImage}
                                                            src={activeImage}
                                                            alt={project.title}
                                                            className={`w-full h-full rounded-lg ${project.image_position === 'object-contain' ? 'object-contain' : 'object-cover'} ${project.image_position === 'object-left-top' ? 'object-left-top' : project.image_position || 'object-center'} group-hover:scale-105 transition-transform duration-500`}
                                                            onError={(e) => {
                                                                (e.target as HTMLElement).style.display = 'none';
                                                                const fallback = (e.target as HTMLElement).nextElementSibling;
                                                                if (fallback) fallback.classList.remove('hidden');
                                                            }}
                                                        />
                                                    ) : null}
                                                    <div className={`${activeImage ? 'hidden' : 'flex'} w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 items-center justify-center text-indigo-600 dark:text-indigo-400 font-mono font-bold text-sm group-hover:scale-110 transition-transform`}>
                                                        &lt;/&gt;
                                                    </div>
                                                </ContainerTag>
                                            );
                                        })()}

                                    {/* Title & Tech */}
                                    <div>
                                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors line-clamp-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                                            {project.title}
                                        </h4>
                                        <p className="text-[10px] sm:text-[11px] font-mono text-slate-500 mt-0.5 line-clamp-1">
                                            {project.tech_stack.join(', ')}
                                        </p>
                                    </div>
                                </div>

                                {/* Quick links */}
                                <div className="flex items-center gap-2 pt-2.5 border-t border-black/10 dark:border-white/5 mt-2.5">
                                    {project.links.web && (
                                        <a href={project.links.web} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors p-1" title="Live Demo">
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                    {project.links.apk && (
                                        <a href={project.links.apk} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors p-1" title="Download APK">
                                            <Download className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-1" title="GitHub">
                                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};
