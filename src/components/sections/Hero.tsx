import React from 'react';
import { Button } from '../ui/Button';
import { ChevronDown, Code2, Terminal, Cpu } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none -z-10" />
            <div className="absolute top-1/3 right-10 w-[350px] h-[300px] bg-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Tag */}
                <div className="flex items-center gap-2 mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-[#12162a] text-blue-400 border border-[#202747] shadow-sm">
                        1 HERO / LANDING
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Text Column */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="space-y-3">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                                Hi, I'm <span className="text-white">Chilly.</span>
                                <br />
                                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Software Developer
                                </span>
                            </h1>
                            <p className="text-sm sm:text-base font-mono font-semibold text-slate-400 tracking-wider">
                                Full-Stack • AI • Mobile
                            </p>
                        </div>

                        <p className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed">
                            I build software applications, AI powered systems, and cross-platform
                            experiences that solve real problems and create impact.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-3 pt-3">
                            <Button variant="primary" size="md" href="#projects">
                                View Projects →
                            </Button>
                            <Button
                                variant="outline"
                                size="md"
                                href="https://github.com/ch1llysauce"
                                external
                            >
                                <svg className="w-4 h-4 mr-1.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                                GitHub ↗
                            </Button>
                        </div>
                    </div>

                    {/* Right Column Visual / Character Graphic */}
                    <div className="lg:col-span-5 relative flex justify-center">
                        <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-[#12152a] via-[#0d1020] to-[#080914] border border-[#1e2545] p-6 flex flex-col items-center justify-center overflow-hidden shadow-2xl shadow-indigo-500/10 group">
                            {/* Graphic SVG Illustration fallback when PNG isn't present */}
                            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                                <img
                                    src="/hero-dev-illustration.png"
                                    alt="Developer Illustration"
                                    className="w-full h-full object-contain relative z-10"
                                    onError={(e) => {
                                        (e.target as HTMLElement).style.display = 'none';
                                        const fallback = (e.target as HTMLElement).nextElementSibling;
                                        if (fallback) fallback.classList.remove('hidden');
                                    }}
                                />
                                
                                {/* Fallback developer graphic */}
                                <div className="hidden flex flex-col items-center justify-center text-center space-y-4 p-6">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 p-1 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                                        <div className="w-full h-full rounded-full bg-[#0d1020] flex items-center justify-center text-indigo-400">
                                            <Code2 className="w-12 h-12" />
                                        </div>
                                    </div>
                                    <div className="bg-[#151933] border border-[#232a4e] rounded-xl p-3 text-left w-full font-code text-xs space-y-1.5 text-slate-300">
                                        <div className="flex items-center gap-1.5 text-slate-500 pb-1 border-b border-[#202748]">
                                            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                                            <span>developer.ts</span>
                                        </div>
                                        <div><span className="text-purple-400">const</span> <span className="text-blue-400">chilly</span> = <span className="text-amber-300">&#123;</span></div>
                                        <div className="pl-4"><span className="text-slate-400">role:</span> <span className="text-emerald-300">'Fullstack & AI Dev'</span>,</div>
                                        <div className="pl-4"><span className="text-slate-400">status:</span> <span className="text-emerald-300">'Building awesome apps'</span></div>
                                        <div><span className="text-amber-300">&#125;</span>;</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Tech Badges */}
                            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl bg-[#171c35]/95 border border-[#273059] text-blue-400 text-xs font-mono font-medium backdrop-blur-md shadow-lg flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                                &lt;React /&gt;
                            </div>
                            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-[#171c35]/95 border border-[#273059] text-emerald-400 text-xs font-mono font-medium backdrop-blur-md shadow-lg flex items-center gap-1">
                                node
                            </div>
                            <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-xl bg-[#171c35]/95 border border-[#273059] text-cyan-400 text-xs font-mono font-medium backdrop-blur-md shadow-lg flex items-center gap-1">
                                TS
                            </div>
                            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-[#171c35]/95 border border-[#273059] text-purple-400 text-xs font-mono font-medium backdrop-blur-md shadow-lg flex items-center gap-1">
                                <Cpu className="w-3.5 h-3.5" /> AI
                            </div>
                        </div>
                    </div>
                </div>

                {/* Down Arrow Indicator */}
                <div className="flex justify-center pt-12 md:pt-16">
                    <a href="#about" className="p-2 rounded-full text-blue-400 hover:text-white bg-[#101428] border border-[#1e2646] transition-all hover:scale-110">
                        <ChevronDown className="w-5 h-5 animate-bounce" />
                    </a>
                </div>
            </div>
        </section>
    );
};