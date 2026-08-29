import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const [statusText, setStatusText] = useState('Initializing environment...');
    const [isComplete, setIsComplete] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                const increment = Math.floor(Math.random() * 12) + 6;
                const next = Math.min(100, prev + increment);

                if (next < 30) {
                    setStatusText('Loading tech stack & modules...');
                } else if (next < 70) {
                    setStatusText('Fetching project archives...');
                } else if (next < 100) {
                    setStatusText('Optimizing interactive UI...');
                } else {
                    setStatusText('System ready.');
                }

                return next;
            });
        }, 60);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            const completeTimer = setTimeout(() => {
                setIsComplete(true);
            }, 300);

            const removeTimer = setTimeout(() => {
                setShouldRender(false);
            }, 1000);

            return () => {
                clearTimeout(completeTimer);
                clearTimeout(removeTimer);
            };
        }
    }, [progress]);

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-50 dark:bg-[#070913] transition-all duration-700 ease-in-out ${
                isComplete ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
            }`}
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-indigo-600/15 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-1/3 left-1/3 w-[300px] h-[250px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

            {/* Central Terminal / Loading Card */}
            <div className="relative z-10 w-full max-w-sm sm:max-w-md px-6 text-center space-y-6">
                {/* Logo & Spinner Icon */}
                <div className="relative inline-flex items-center justify-center">
                    {/* Outer glowing pulsing ring */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 blur-xl opacity-40 animate-pulse" />
                    
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/95 dark:bg-[#0c0e1d] border border-black/10 dark:border-white/10 shadow-2xl flex items-center justify-center backdrop-blur-xl">
                        <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent font-mono font-black text-2xl sm:text-3xl animate-pulse">
                            &lt;/&gt;
                        </span>
                    </div>
                </div>

                {/* Brand Name & Loading Tag */}
                <div className="space-y-1">
                    <h2
                        className="text-xl sm:text-2xl font-black text-white tracking-widest uppercase"
                        style={{ fontFamily: "'Urbanist', sans-serif" }}
                    >
                        Chilly<span className="text-indigo-400">.dev</span>
                    </h2>
                    <p className="text-[11px] font-mono text-slate-500 tracking-wider">
                        SOFTWARE DEVELOPER PORTFOLIO
                    </p>
                </div>

                {/* Thick, Vibrant, Responsive Progress Bar */}
                <div className="space-y-2.5">
                    <div className="w-full h-2.5 sm:h-3 rounded-full bg-[#101429] border border-black/10 dark:border-white/10 p-0.5 overflow-hidden shadow-inner">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-violet-400 shadow-md shadow-cyan-400/50 transition-all duration-100 ease-out"
                            style={{ width: `${Math.max(progress, 2)}%` }}
                        />
                    </div>

                    {/* Progress Info Row */}
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                        <span className="flex items-center gap-1.5 text-slate-400">
                            <span className="text-indigo-400 font-bold">&gt;</span> {statusText}
                        </span>
                        <span className="text-cyan-400 font-bold font-mono text-xs">
                            {progress}%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

