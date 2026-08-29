import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

interface TechItem {
    name: string;
    iconUrl: string;
    color: string;
    bg: string;
    invert?: boolean;
}

interface TechCategory {
    title: string;
    badges: TechItem[];
    description: string;
}

export const TechStack: React.FC = () => {
    const stackData: TechCategory[] = [
        {
            title: 'Languages',
            badges: [
                { name: 'Python', color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'Java', color: 'text-red-600 dark:text-red-400', bg: 'bg-red-500/10 border-red-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                { name: 'C++', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
                { name: 'TypeScript', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
                { name: 'JavaScript', color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'Dart', color: 'text-sky-600 dark:text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
            ],
            description: 'Python, Java, C++, TypeScript, JavaScript, Dart',
        },
        {
            title: 'Frontend',
            badges: [
                { name: 'HTML5', color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                { name: 'CSS3', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                { name: 'React', color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Tailwind', color: 'text-sky-600 dark:text-sky-400', bg: 'bg-cyan-500/10 border-cyan-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
               { name: 'Bootstrap', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
            ],
            description: 'HTML5, CSS3, React, Tailwind CSS, Bootstrap',
        },
        {
            title: 'Mobile',
            badges: [
                { name: 'React Native', color: 'text-cyan-600 dark:text-cyan-400', bg: 'bg-cyan-500/10 border-cyan-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Flutter', color: 'text-sky-600 dark:text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
                { name: 'Expo', color: 'text-slate-700 dark:text-gray-400', bg: 'bg-blue-500/10 border-blue-300/20', iconUrl: 'https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg' },
            ],
            description: 'React Native, Expo, Flutter',
        },
        {
            title: 'Backend',
            badges: [
                { name: 'Node.js', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'Express', color: 'text-slate-700 dark:text-slate-300', bg: 'bg-slate-200 dark:bg-slate-700/30 border-slate-300 dark:border-slate-600/50', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
                { name: 'Firebase', color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
            ],
            description: 'Node.js, Express.js, Firebase',
        },
        {
            title: 'Database',
            badges: [
                { name: 'MongoDB', color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                { name: 'MySQL', color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                { name: 'SQLite', color: 'text-sky-600 dark:text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
            ],
            description: 'MongoDB, MySQL, SQLite',
        },
        {
            title: 'AI / Data',
            badges: [
                {
                    name: 'Groq AI API',
                    color: 'text-orange-600 dark:text-orange-400',
                    bg: 'bg-orange-500/10 border-orange-500/20',
                    iconUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23f97316"><path d="M13 2L3 14h7v8l10-12h-7l3-8z"/></svg>',
                },
            ],
            description: 'Groq AI API, LLM Integrations',
        },
        {
            title: 'Dev Tools',
            badges: [
                { name: 'Git', color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'GitHub', color: 'text-slate-700 dark:text-white', bg: 'bg-slate-200 dark:bg-slate-700/30 border-slate-300 dark:border-slate-600/50', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
                { name: 'Postman', color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20', iconUrl: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
            ],
            description: 'Git, GitHub, Postman',
        },
        {
            title: 'Design & Hosting',
            badges: [
                { name: 'Figma', color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
                { name: 'Vercel', color: 'text-slate-700 dark:text-white', bg: 'bg-slate-200 dark:bg-slate-700/30 border-slate-300 dark:border-slate-600/50', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', invert: true },
                {
                    name: 'Render',
                    color: 'text-teal-600 dark:text-teal-300',
                    bg: 'bg-teal-500/10 border-teal-500/20',
                    iconUrl: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2346E3B7"><path d="M18.263.007c-3.121-.147-5.744 2.109-6.192 5.082-.018.138-.045.272-.067.405-.696 3.703-3.936 6.507-7.827 6.507-1.388 0-2.691-.356-3.825-.979a.2024.2024 0 0 0-.302.178V24H12v-8.999c0-1.656 1.338-3 2.987-3h2.988c3.382 0 6.103-2.817 5.97-6.244-.12-3.084-2.61-5.603-5.682-5.75"/></svg>',
                },
            ],
            description: 'Figma, Vercel, Render Deployment',
        },
    ];

    return (
        <div id="skills" className="scroll-mt-24 space-y-4 h-full flex flex-col justify-between">
            {/* Section Tag */}
            <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-widest bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 uppercase">
                    Tech Stack
                </span>
            </div>

            {/* Responsive Grid: 2-column on mobile, 3-column on large desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 flex-grow">
                {stackData.map((item) => (
                    <ScrollReveal key={item.title} className="h-full">
                        <div className="rounded-2xl bg-white/95 dark:bg-[#0c0e1d]/70 border border-black/10 dark:border-white/[0.07] p-2.5 sm:p-3.5 flex flex-col justify-between shadow-md dark:shadow-xl backdrop-blur-xl hover:border-indigo-500 dark:hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/15 dark:hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 h-full">
                            <div className="space-y-2">
                                <h3 className="text-[10px] sm:text-[11px] font-bold text-slate-700 dark:text-slate-300 tracking-wider uppercase" style={{ fontFamily: "'Fira Code', monospace" }}>
                                    {item.title}
                                </h3>

                                {/* Tech Badges */}
                                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                                    {item.badges.map((badge) => (
                                        <span
                                            key={badge.name}
                                            className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg text-[10px] sm:text-[11px] font-mono font-semibold border transition-transform hover:scale-105 whitespace-nowrap ${badge.bg} ${badge.color}`}
                                        >
                                            <img
                                                src={badge.iconUrl}
                                                alt={badge.name}
                                                className={`w-3 h-3 sm:w-3.5 sm:h-3.5 object-contain shrink-0 ${badge.invert ? 'dark:invert' : ''}`}
                                                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                                            />
                                            <span>{badge.name}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="hidden sm:block text-[10px] text-slate-500 leading-tight pt-2 border-t border-black/10 dark:border-white/5 mt-2 font-mono tracking-wide">
                                {item.description}
                            </p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </div>
    );
};




