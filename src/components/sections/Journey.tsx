import React from 'react';
import { journeyMilestones } from '../../data/journey';
import { Code2, Globe, Cpu, Smartphone, Zap, Sparkles, Layers } from 'lucide-react';

export const Journey: React.FC = () => {
    // Map step icons
    const icons = [
        <Code2 className="w-4 h-4 text-blue-400" />,
        <Globe className="w-4 h-4 text-cyan-400" />,
        <Zap className="w-4 h-4 text-amber-400" />,
        <Layers className="w-4 h-4 text-emerald-400" />,
        <Smartphone className="w-4 h-4 text-indigo-400" />,
        <Sparkles className="w-4 h-4 text-purple-400" />,
        <Cpu className="w-4 h-4 text-sky-400" />
    ];

    return (
        <section id="journey" className="space-y-8">
            {/* Section Tag */}
            <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-[#12162a] text-blue-400 border border-[#202747]">
                    6 DEVELOPMENT JOURNEY
                </span>
            </div>

            {/* Horizontal Timeline Container */}
            <div className="relative rounded-3xl bg-[#0c0e1d] border border-[#1b223d] p-6 sm:p-8 overflow-x-auto shadow-xl">
                {/* Horizontal Line Across */}
                <div className="absolute top-16 left-12 right-12 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hidden md:block" />

                {/* Timeline Grid */}
                <div className="grid grid-cols-1 md:grid-cols-7 gap-6 min-w-[760px] md:min-w-0 relative z-10">
                    {journeyMilestones.map((item, idx) => (
                        <div key={item.id} className="flex flex-col items-center text-center space-y-3 group">
                            {/* Glowing Node Button */}
                            <div className="w-12 h-12 rounded-full bg-[#12162b] border-2 border-[#222a4d] group-hover:border-indigo-500 group-hover:bg-[#181f3b] group-hover:scale-110 flex items-center justify-center shadow-lg transition-all duration-300 relative z-10 cursor-pointer">
                                {icons[idx % icons.length]}
                            </div>

                            {/* Info */}
                            <div className="space-y-1">
                                <h4 className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors font-mono">
                                    {item.title}
                                </h4>
                                <p className="text-[11px] font-mono font-medium text-indigo-400">
                                    {item.subtitle}
                                </p>
                                <p className="text-[10px] text-slate-400 leading-tight pt-1">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};