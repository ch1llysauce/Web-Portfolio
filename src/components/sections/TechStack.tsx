import React from 'react';

interface TechCategory {
    title: string;
    badges: { name: string; color: string; bg: string }[];
    description: string;
}

export const TechStack: React.FC = () => {
    const stackData: TechCategory[] = [
        {
            title: 'Frontend',
            badges: [
                { name: 'React', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
                { name: 'TS', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
                { name: 'JS', color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20' }
            ],
            description: 'React, TypeScript, Tailwind CSS, HTML, CSS, Next.js',
        },
        {
            title: 'Mobile',
            badges: [
                { name: 'React Native', color: 'text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20' },
                { name: 'Flutter', color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20' }
            ],
            description: 'React Native, Expo, Flutter, Dart',
        },
        {
            title: 'Backend / Database',
            badges: [
                { name: 'node.js', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
                { name: 'Firebase', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' }
            ],
            description: 'Node.js, Express.js, Firebase',
        },
        {
            title: 'Database',
            badges: [
                { name: 'MongoDB', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
                { name: 'MySQL', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' }
            ],
            description: 'MongoDB, MySQL, PostgreSQL',
        },
        {
            title: 'AI / Data',
            badges: [
                { name: 'OpenAI API', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' }
            ],
            description: 'OpenAI API, AI Integrations',
        },
        {
            title: 'Tools',
            badges: [
                { name: 'Git', color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
                { name: 'GitHub', color: 'text-slate-300', bg: 'bg-slate-500/10 border-slate-500/20' },
                { name: 'Postman', color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20' },
                { name: 'Figma', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' }
            ],
            description: 'Git, GitHub, Postman, Figma',
        },
    ];

    return (
        <div id="skills" className="space-y-4 h-full flex flex-col justify-between">
            {/* Section Tag */}
            <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-[#12162a] text-blue-400 border border-[#202747]">
                    3 TECH STACK
                </span>
            </div>

            {/* 2x3 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 flex-grow">
                {stackData.map((item) => (
                    <div
                        key={item.title}
                        className="rounded-2xl bg-[#0c0e1d] border border-[#1b223d] p-4 flex flex-col justify-between transition-all duration-300 hover:border-blue-500/40 hover:bg-[#101326] shadow-md"
                    >
                        <div className="space-y-3">
                            <h3 className="text-xs font-semibold text-slate-300 tracking-wide uppercase font-mono">{item.title}</h3>

                            {/* Tech Badges */}
                            <div className="flex flex-wrap gap-1.5">
                                {item.badges.map((badge) => (
                                    <span
                                        key={badge.name}
                                        className={`px-2 py-1 rounded-md text-[11px] font-mono font-medium border ${badge.bg} ${badge.color}`}
                                    >
                                        {badge.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="text-[11px] text-slate-400 leading-relaxed pt-3 border-t border-[#161c33] mt-3 font-sans">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};