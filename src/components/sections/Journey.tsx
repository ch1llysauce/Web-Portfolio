import React from 'react';
import { journeyMilestones } from '../../data/journey';
import { Code2, Globe, Cpu, Smartphone, Zap, Sparkles, Layers } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Journey: React.FC = () => {
    const icons = [
        <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
        <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
        <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
        <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
        <Smartphone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
        <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
        <Cpu className="w-4 h-4 text-sky-600 dark:text-sky-400" />
    ];

    return (
        <section id="journey" className="scroll-mt-24 space-y-8">
            {/* Section Tag */}
            <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase">
                    Development Journey
                </span>
            </div>

            {/* Timeline Container */}
            <div className="relative rounded-3xl bg-white/95 dark:bg-[#0c0e1d]/90 border border-black/10 dark:border-white/[0.07] p-6 sm:p-8 shadow-md dark:shadow-2xl shadow-emerald-500/5 backdrop-blur-xl overflow-hidden hover:border-emerald-500/30 dark:hover:border-emerald-500/20 transition-all duration-500">
                {/* Horizontal Line Across (Desktop) - centered behind circle nodes */}
                <div className="absolute top-[48px] sm:top-[56px] left-14 right-14 h-0.5 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 hidden md:block opacity-60 z-0" />

                {/* Vertical Line (Mobile) - centered behind circle nodes */}
                <div className="absolute top-12 bottom-12 left-[48px] w-0.5 bg-gradient-to-b from-blue-600 via-purple-500 to-indigo-600 md:hidden opacity-60 z-0" />

                {/* Timeline Layout */}
                <div className="flex flex-col md:grid md:grid-cols-7 gap-6 md:gap-3 relative z-10">
                    {journeyMilestones.map((item, idx) => (
                        <ScrollReveal key={item.id} className="h-full">
                            <div className="flex flex-row md:flex-col items-center text-left md:text-center gap-4 md:gap-3 group">
                                {/* Solid Opaque Node Icon (blocks the connecting line behind it) */}
                                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#0c0e1d] border-2 border-black/10 dark:border-white/15 group-hover:border-indigo-500 dark:group-hover:border-indigo-400 group-hover:bg-indigo-50 dark:group-hover:bg-[#141933] group-hover:scale-110 flex items-center justify-center shadow-lg transition-all duration-300 shrink-0 relative z-20 cursor-pointer">
                                    {icons[idx % icons.length]}
                                </div>

                                {/* Info Text */}
                                <div className="space-y-1 flex-1">
                                    <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        {item.title}
                                    </h4>
                                    <p className="text-[11px] font-mono font-medium text-indigo-600 dark:text-indigo-400">
                                        {item.subtitle}
                                    </p>
                                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight pt-0.5">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
