import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Cpu, Terminal } from 'lucide-react';

interface Token {
    text: string;
    className?: string;
}

interface CodeLine {
    lineNum: number;
    tokens: Token[];
}

const codeLines: CodeLine[] = [
    {
        lineNum: 1,
        tokens: [
            { text: 'const ', className: 'text-violet-600 dark:text-violet-400 font-semibold' },
            { text: 'chilly', className: 'text-cyan-600 dark:text-cyan-300 font-semibold' },
            { text: ': ', className: 'text-slate-500 dark:text-slate-400' },
            { text: 'Developer ', className: 'text-amber-600 dark:text-amber-300 font-medium' },
            { text: '= ', className: 'text-slate-500 dark:text-slate-400' },
            { text: '{', className: 'text-amber-600 dark:text-amber-300' }
        ]
    },
    {
        lineNum: 2,
        tokens: [
            { text: '  role', className: 'text-blue-600 dark:text-blue-300' },
            { text: ': ', className: 'text-slate-500 dark:text-slate-400' },
            { text: "'Fullstack Dev'", className: 'text-emerald-600 dark:text-emerald-300' },
            { text: ',', className: 'text-slate-400 dark:text-slate-500' }
        ]
    },
    {
        lineNum: 3,
        tokens: [
            { text: '  focus', className: 'text-blue-600 dark:text-blue-300' },
            { text: ': ', className: 'text-slate-500 dark:text-slate-400' },
            { text: "'AI + Mobile'", className: 'text-emerald-600 dark:text-emerald-300' },
            { text: ',', className: 'text-slate-400 dark:text-slate-500' }
        ]
    },
    {
        lineNum: 4,
        tokens: [
            { text: '  status', className: 'text-blue-600 dark:text-blue-300' },
            { text: ': ', className: 'text-slate-500 dark:text-slate-400' },
            { text: "'Building apps'", className: 'text-emerald-600 dark:text-emerald-300' },
            { text: ',', className: 'text-slate-400 dark:text-slate-500' }
        ]
    },
    {
        lineNum: 5,
        tokens: [
            { text: '  openToWork', className: 'text-blue-600 dark:text-blue-300' },
            { text: ': ', className: 'text-slate-500 dark:text-slate-400' },
            { text: 'true', className: 'text-amber-600 dark:text-amber-300' },
            { text: ',', className: 'text-slate-400 dark:text-slate-500' }
        ]
    },
    {
        lineNum: 6,
        tokens: [
            { text: '}', className: 'text-amber-600 dark:text-amber-300' },
            { text: ';', className: 'text-slate-500 dark:text-slate-400' }
        ]
    }
];

// Calculate total characters
const totalCharacters = codeLines.reduce(
    (sum, line) => sum + line.tokens.reduce((ts, t) => ts + t.text.length, 0),
    0
);

export const Hero: React.FC = () => {
    const [charCount, setCharCount] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    // Looping typewriter effect
    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        if (!isDeleting && charCount < totalCharacters) {
            timer = setTimeout(() => {
                setCharCount((prev) => prev + 1);
            }, 35);
        } else if (!isDeleting && charCount === totalCharacters) {
            timer = setTimeout(() => {
                setIsDeleting(true);
            }, 3500);
        } else if (isDeleting && charCount > 0) {
            timer = setTimeout(() => {
                setCharCount((prev) => Math.max(0, prev - 2));
            }, 20);
        } else if (isDeleting && charCount === 0) {
            timer = setTimeout(() => {
                setIsDeleting(false);
            }, 600);
        }

        return () => clearTimeout(timer);
    }, [charCount, isDeleting]);

    // Helper to render code tokens up to current charCount
    let remainingChars = charCount;
    let cursorPlaced = false;

    return (
        <section id="hero" className="relative pt-24 pb-4 md:pt-32 md:pb-6">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Tag */}
                <div className="flex items-center gap-2 mb-8">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-widest bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 uppercase">
                        Developer Portfolio
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Text Column */}
                    <div className="lg:col-span-7 space-y-7 lg:pr-4 xl:pr-8">
                        <div className="space-y-3">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]"
                                style={{ fontFamily: "'Urbanist', sans-serif" }}>
                                <span className="text-slate-900 dark:text-white">Hi, I'm{' '}</span>
                                <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 dark:from-cyan-400 dark:via-indigo-400 dark:to-violet-400 bg-clip-text text-transparent">
                                    Chilly. 
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent sm:mt-1 inline-block">
                                    Software
                                </span>{' '}
                                <span className="text-slate-900 dark:text-white">Developer.</span>
                            </h1>

                            <p className="text-xs font-mono font-medium text-slate-500 tracking-widest uppercase">
                                Full-Stack &nbsp;·&nbsp; AI &nbsp;·&nbsp; Mobile
                            </p>
                        </div>

                        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-lg leading-relaxed font-normal">
                            I build software applications, AI-powered systems, and cross-platform
                            experiences that solve real problems and create lasting impact.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <Button variant="primary" size="md" href="#projects">
                                View Projects
                            </Button>
                            <Button
                                variant="outline"
                                size="md"
                                href="https://github.com/ch1llysauce"
                                external
                            >
                                <svg className="w-4 h-4 mr-1.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                                GitHub
                            </Button>
                        </div>
                    </div>

                    {/* Right Column — Looping Animated Code Terminal */}
                    <div className="lg:col-span-5 relative flex justify-center">
                        <div className="relative w-full max-w-md">
                            {/* Decorative glowing backplate */}
                            <div className="absolute inset-0 rounded-3xl -z-10 scale-[1.03]" style={{ background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%)' }} />

                            {/* Terminal Window — Auto-fit height to content */}
                            <div className="rounded-2xl bg-white/95 dark:bg-[#0a0d1f]/95 border border-black/10 dark:border-white/10 shadow-2xl shadow-indigo-500/10 overflow-hidden backdrop-blur-xl">
                                {/* Terminal Title Bar */}
                                <div className="flex items-center justify-between px-4 py-3 border-b border-black/10 dark:border-white/5 bg-white/[0.02]">
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                        </div>
                                        <div className="flex items-center gap-1.5 ml-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                                            <Terminal className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                                            <span>developer.ts</span>
                                        </div>
                                    </div>

                                    {/* Active Status Badge */}
                                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full mr-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                                        <span>active</span>
                                    </div>
                                </div>

                                {/* Code Content with Animated Looping Typewriter */}
                                <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-6 sm:leading-7 select-none">
                                    {codeLines.map((line) => {
                                        return (
                                            <div key={line.lineNum} className="flex items-start gap-4">
                                                <span className="text-slate-600 select-none w-4 text-right">{line.lineNum}</span>
                                                <div className="flex-1 whitespace-pre">
                                                    {line.tokens.map((token, idx) => {
                                                        if (remainingChars <= 0) {
                                                            if (!cursorPlaced) {
                                                                cursorPlaced = true;
                                                                return <span key={idx} className="cursor-blink text-indigo-500 dark:text-indigo-400 font-bold">▋</span>;
                                                            }
                                                            return null;
                                                        }

                                                        if (remainingChars >= token.text.length) {
                                                            remainingChars -= token.text.length;
                                                            return (
                                                                <span key={idx} className={token.className || 'text-slate-500 dark:text-slate-300'}>
                                                                    {token.text}
                                                                </span>
                                                            );
                                                        } else {
                                                            const visiblePart = token.text.slice(0, remainingChars);
                                                            remainingChars = 0;
                                                            cursorPlaced = true;
                                                            return (
                                                                <React.Fragment key={idx}>
                                                                    <span className={token.className || 'text-slate-500 dark:text-slate-300'}>
                                                                        {visiblePart}
                                                                    </span>
                                                                    <span className="cursor-blink text-indigo-500 dark:text-indigo-400 font-bold">▋</span>
                                                                </React.Fragment>
                                                            );
                                                        }
                                                    })}
                                                    {remainingChars === 0 && !cursorPlaced && line.lineNum === codeLines.length && (
                                                        <span className="cursor-blink text-indigo-500 dark:text-indigo-400 font-bold">▋</span>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Floating Badge Pills */}
                            <div className="absolute -top-3.5 -right-3.5 px-3 py-1 rounded-xl bg-white/95 dark:bg-[#0d1020]/95 border border-cyan-500/20 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-[11px] font-mono font-medium backdrop-blur-md shadow-lg shadow-cyan-500/10 flex items-center gap-1.5 z-20">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
                                &lt;React /&gt;
                            </div>

                            <div className="absolute -top-3.5 -left-3.5 px-3 py-1 rounded-xl bg-white/95 dark:bg-[#0d1020]/95 border border-emerald-500/20 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-medium backdrop-blur-md shadow-lg shadow-emerald-500/10 z-20">
                                Node.js
                            </div>

                            <div className="absolute -bottom-3.5 -left-3.5 px-3 py-1 rounded-xl bg-white/95 dark:bg-[#0d1020]/95 border border-blue-500/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-[11px] font-mono font-medium backdrop-blur-md shadow-lg shadow-blue-500/10 flex items-center gap-1.5 z-20">
                                TypeScript
                            </div>

                            <div className="absolute -bottom-3.5 -right-3.5 px-3 py-1 rounded-xl bg-white/95 dark:bg-[#0d1020]/95 border border-purple-500/20 dark:border-purple-500/30 text-purple-600 dark:text-purple-400 text-[11px] font-mono font-medium backdrop-blur-md shadow-lg shadow-purple-500/10 flex items-center gap-1.5 z-20">
                                <Cpu className="w-3.5 h-3.5" />
                                AI
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
