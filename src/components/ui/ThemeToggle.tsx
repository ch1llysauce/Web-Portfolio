import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className={`relative p-2 rounded-xl transition-all duration-200 cursor-pointer outline-none focus:outline-none select-none z-10 ${
                isDark
                    ? 'bg-white/[0.04] border border-black/10 dark:border-white/10 text-amber-400 hover:text-amber-300 hover:bg-white/[0.08] hover:border-amber-400/30'
                    : 'bg-slate-200/80 border border-slate-300 text-indigo-600 hover:text-indigo-700 hover:bg-slate-200 hover:border-indigo-400'
            } ${className}`}
        >
            <div className="relative w-4 h-4 flex items-center justify-center pointer-events-none">
                {isDark ? (
                    <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 scale-100" />
                ) : (
                    <Moon className="w-4 h-4 transition-transform duration-300 rotate-0 scale-100" />
                )}
            </div>
        </button>
    );
};
