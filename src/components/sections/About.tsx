import React from 'react';
import { Code2, GraduationCap, MapPin, Briefcase, Sparkles } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const About: React.FC = () => {
    return (
        <ScrollReveal className="h-full">
            <div id="about" className="scroll-mt-24 space-y-4 h-full flex flex-col justify-between">
                {/* Section Tag */}
                <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-widest bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 uppercase">
                        About Me
                    </span>
                </div>

                <div className="rounded-3xl bg-white/95 dark:bg-[#0c0e1d]/70 border border-black/10 dark:border-white/[0.07] p-4 sm:p-6 space-y-4 sm:space-y-5 flex-grow flex flex-col justify-between shadow-md dark:shadow-2xl shadow-indigo-500/5 backdrop-blur-xl hover:border-indigo-500 dark:hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 sm:gap-5">
                        {/* Avatar photo */}
                        <div className="relative shrink-0 flex flex-col items-center">
                            <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#a9a9ac] dark:border-[#292929] shadow-lg flex items-center justify-center">
                                <img
                                    src="/public/2x2.png"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLElement).style.display = 'none';
                                        const fallback = (e.target as HTMLElement).nextElementSibling;
                                        if (fallback) fallback.classList.remove('hidden');
                                    }}
                                />
                                <div className="hidden flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                                    <Code2 className="w-8 h-8 sm:w-10 sm:h-10" />
                                </div>
                            </div>
                            <div className="mt-2">
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                                    Available for work
                                </span>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-1.5 sm:space-y-2 text-center sm:text-left flex-1">
                            <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight" style={{ fontFamily: "'Urbanist', sans-serif" }}>
                                About Me
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                I'm <span className="font-bold text-slate-900 dark:text-white">Chilldon Paul Carreon</span>, a 4th-year Computer Science student and proactive software developer who loves building modern web applications, mobile platforms, and AI-powered systems.
                            </p>
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                I enjoy working across the full stack, from intuitive user interfaces to robust backends and practical AI integrations.
                            </p>
                            <p className="text-[11px] sm:text-xs font-semibold text-indigo-600 dark:text-indigo-300 italic pt-0.5">
                                Always learning, always building.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Bento Highlights (2x2 Grid on ALL screens) */}
                    <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-3 border-t border-black/10 dark:border-white/5">
                        {/* 1. Education */}
                        <div className="rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.06] p-2.5 flex items-start gap-2.5 hover:border-indigo-500/30 transition-colors">
                            <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                                <GraduationCap className="w-3.5 h-3.5" />
                            </div>
                            <div className="space-y-0.5 min-w-0">
                                <div className="text-[9px] font-mono uppercase tracking-wider text-slate-500">Education</div>
                                <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight truncate">BS Computer Science</div>
                                <div className="text-[10px] text-slate-500 dark:text-slate-400">Senior Undergrad</div>
                            </div>
                        </div>

                        {/* 2. Location */}
                        <div className="rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.06] p-2.5 flex items-start gap-2.5 hover:border-cyan-500/30 transition-colors">
                            <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5">
                                <MapPin className="w-3.5 h-3.5" />
                            </div>
                            <div className="space-y-0.5 min-w-0">
                                <div className="text-[9px] font-mono uppercase tracking-wider text-slate-500">Location</div>
                                <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight truncate">Quezon City, Philippines</div>
                                <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Remote • Hybrid • On-site</div>
                            </div>
                        </div>

                        {/* 3. Target Role */}
                        <div className="rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.06] p-2.5 flex items-start gap-2.5 hover:border-violet-500/30 transition-colors">
                            <div className="p-1.5 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5">
                                <Briefcase className="w-3.5 h-3.5" />
                            </div>
                            <div className="space-y-0.5 min-w-0">
                                <div className="text-[9px] font-mono uppercase tracking-wider text-slate-500">Target Role</div>
                                <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight truncate">Software Engineer</div>
                                <div className="text-[10px] text-slate-500 dark:text-slate-400">Full-Stack & Mobile</div>
                            </div>
                        </div>

                        {/* 4. Core Practice */}
                        <div className="rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.06] p-2.5 flex items-start gap-2.5 hover:border-emerald-500/30 transition-colors">
                            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                                <Sparkles className="w-3.5 h-3.5" />
                            </div>
                            <div className="space-y-0.5 min-w-0">
                                <div className="text-[9px] font-mono uppercase tracking-wider text-slate-500">Core Practice</div>
                                <div className="text-xs font-bold text-slate-900 dark:text-white leading-tight truncate">Modern Architecture</div>
                                <div className="text-[10px] text-slate-500 dark:text-slate-400">Clean, Scalable, Tested</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollReveal>
    );
};


