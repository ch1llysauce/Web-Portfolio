import React from 'react';
import { Rocket, Code } from 'lucide-react';

export const About: React.FC = () => {
    return (
        <div id="about" className="space-y-4 h-full flex flex-col justify-between">
            {/* Section Tag */}
            <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-[#12162a] text-blue-400 border border-[#202747]">
                    2 ABOUT ME
                </span>
            </div>

            <div className="rounded-3xl bg-[#0c0e1d] border border-[#1b223d] p-6 sm:p-7 space-y-6 flex-grow flex flex-col justify-between shadow-xl">
                <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                        {/* Avatar photo */}
                        <div className="relative shrink-0 flex flex-col items-center">
                            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-[#141a33] border-2 border-[#263056] shadow-lg flex items-center justify-center">
                                <img
                                    src="/profile.jpg"
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLElement).style.display = 'none';
                                        const fallback = (e.target as HTMLElement).nextElementSibling;
                                        if (fallback) fallback.classList.remove('hidden');
                                    }}
                                />
                                <div className="hidden flex items-center justify-center text-4xl text-indigo-400">
                                    👨‍💻
                                </div>
                            </div>
                            <div className="mt-3">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    Available for work
                                </span>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="space-y-2.5 text-center sm:text-left flex-1">
                            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">About Me</h2>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                I'm a Computer Science student and proactive software developer who loves building scalable applications and intuitive systems.
                            </p>
                            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                                I enjoy working across the stack—from feature-rich user interfaces to robust backends and intelligent AI integrations.
                            </p>
                            <p className="text-xs sm:text-sm font-medium text-slate-300 italic pt-1">
                                Always learning, always building.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Stat Cards */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#181f38]">
                    <div className="rounded-xl bg-[#12162b] border border-[#202747] p-3 text-center flex flex-col items-center justify-center">
                        <div className="flex items-center gap-1 text-blue-400 font-bold text-sm sm:text-base font-mono">
                            <Rocket className="w-4 h-4 text-purple-400" />
                            <span>10+</span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-mono mt-0.5">Projects Completed</span>
                    </div>
                    <div className="rounded-xl bg-[#12162b] border border-[#202747] p-3 text-center flex flex-col items-center justify-center">
                        <div className="flex items-center gap-1 text-purple-400 font-bold text-sm sm:text-base font-mono">
                            <Code className="w-4 h-4 text-blue-400" />
                            <span>5+</span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-mono mt-0.5">Tech Mastered</span>
                    </div>
                </div>
            </div>
        </div>
    );
};