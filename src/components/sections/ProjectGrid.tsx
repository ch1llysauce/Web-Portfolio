import React, { useState } from 'react';
import { projects } from '../../data/projects';
import type { ProjectCategory } from '../../types/projects';
import { ExternalLink, Download } from 'lucide-react';

type FilterTab = 'all' | 'web' | 'mobile' | 'ai' | 'backend' | 'others';

const filterTabs: { label: string; value: FilterTab }[] = [
    { label: 'All', value: 'all' },
    { label: 'Web', value: 'web' },
    { label: 'Mobile', value: 'mobile' },
    { label: 'AI', value: 'ai' },
    { label: 'Backend', value: 'backend' },
    { label: 'Other', value: 'others' },
];

export const ProjectGrid: React.FC = () => {
    const [activeTab, setActiveTab] = useState<FilterTab>('all');

    // Filter projects based on selected filter tab
    const showcaseProjects = projects.filter((project) => {
        if (activeTab === 'all') return true;
        if (activeTab === 'backend') return project.category.includes('fullstack');
        return project.category.includes(activeTab as ProjectCategory);
    });

    return (
        <section id="showcase" className="space-y-6">
            {/* Section Header & Filter Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-[#12162a] text-blue-400 border border-[#202747]">
                        5 PROJECTS SHOWCASE
                    </span>
                </div>

                {/* Filter Pills Bar */}
                <div className="flex flex-wrap items-center gap-1.5 bg-[#0c0e1d] p-1.5 rounded-xl border border-[#1b223d]">
                    {filterTabs.map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveTab(tab.value)}
                            className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all duration-200 ${activeTab === tab.value
                                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20'
                                    : 'text-slate-400 hover:text-white hover:bg-[#151a33]'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Showcase Grid (4 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {showcaseProjects.map((project) => (
                    <div
                        key={project.id}
                        className="group relative flex flex-col justify-between rounded-xl bg-[#0c0e1d] border border-[#1b223d] p-4 transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#101326] shadow-sm hover:shadow-indigo-500/5"
                    >
                        <div className="space-y-3">
                            {/* Icon / Thumbnail Box */}
                            <div className="h-28 w-full rounded-lg bg-[#12162b] border border-[#202747] flex items-center justify-center p-3 overflow-hidden group-hover:border-indigo-500/30 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-mono font-bold text-lg group-hover:scale-110 transition-transform">
                                    &lt;/&gt;
                                </div>
                            </div>

                            {/* Title & Tech */}
                            <div>
                                <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                                    {project.title}
                                </h4>
                                <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                                    {project.tech_stack.join(', ')}
                                </p>
                            </div>
                        </div>

                        {/* Quick links */}
                        <div className="flex items-center gap-2 pt-3 border-t border-[#161c33] mt-3">
                            {project.links.web && (
                                <a
                                    href={project.links.web}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-slate-400 hover:text-indigo-400 transition-colors p-1"
                                    title="Live Demo"
                                >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            )}
                            {project.links.apk && (
                                <a
                                    href={project.links.apk}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-slate-400 hover:text-emerald-400 transition-colors p-1"
                                    title="Download APK"
                                >
                                    <Download className="w-3.5 h-3.5" />
                                </a>
                            )}
                            {project.links.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-slate-400 hover:text-white transition-colors p-1"
                                    title="GitHub"
                                >
                                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};