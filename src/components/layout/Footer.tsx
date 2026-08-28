import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="border-t border-[#181d33] bg-[#070913] py-6 text-slate-400 text-xs font-mono">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <p>© 2026 Chilly. All rights reserved.</p>

                <a
                    href="#hero"
                    className="p-2 rounded-xl bg-[#12162b] border border-[#202747] text-slate-400 hover:text-white hover:border-indigo-500 transition-all flex items-center justify-center"
                    title="Back to top"
                >
                    <ArrowUp className="w-4 h-4" />
                </a>
            </div>
        </footer>
    );
};