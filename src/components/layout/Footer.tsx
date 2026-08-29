import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowUp, Home } from 'lucide-react';

export const Footer: React.FC = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <footer className="border-t border-black/10 dark:border-white/[0.06] bg-slate-50 dark:bg-[#070913] py-5 text-slate-500 text-xs font-mono">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <p>© 2026 Chilly. All rights reserved.</p>

                {isHome ? (
                    <button
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            window.history.replaceState(null, '', '/');
                        }}
                        className="p-2 rounded-xl bg-black/5 dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.08] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-indigo-500/40 transition-all flex items-center justify-center cursor-pointer outline-none focus:outline-none"
                        title="Back to top"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </button>
                ) : (
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/5 dark:bg-white/[0.03] border border-black/10 dark:border-white/[0.08] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-indigo-500/40 transition-all text-xs font-mono outline-none focus:outline-none shadow-sm"
                        title="Return to Home"
                    >
                        <Home className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                        <span>Return to Home</span>
                    </Link>
                )}
            </div>
        </footer>
    );
};
