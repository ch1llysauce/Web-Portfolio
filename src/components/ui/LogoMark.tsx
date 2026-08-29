import React from 'react';
import { useTheme } from '../../context/ThemeContext';

/**
 * <C/> logo mark — "Chilly" rendered as a self-closing JSX component tag.
 * Brackets use the site's code font (Fira Code), the C uses the display
 * font (Urbanist), and the trailing bar reuses the existing .cursor-blink
 * animation from index.css so it matches the hero's typing cursor.
 */
export const LogoMark: React.FC<{ className?: string; showWordmark?: boolean }> = ({
    className = '',
    showWordmark = true,
}) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const gradientId = isDark ? 'chilly-grad-dark' : 'chilly-grad-light';
    const filterId = isDark ? 'chilly-glow-dark' : 'chilly-shadow-light';

    return (
        <div className={`flex items-center gap-2 select-none pointer-events-none bg-transparent [-webkit-tap-highlight-color:transparent] [-webkit-user-select:none] ${className}`}>
            <svg width="54" height="28" viewBox="0 0 152 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="overflow-visible flex-shrink-0">
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                        {isDark ? (
                            <>
                                <stop offset="0%" stopColor="#22d3ee" />
                                <stop offset="50%" stopColor="#818cf8" />
                                <stop offset="100%" stopColor="#f472b6" />
                            </>
                        ) : (
                            <>
                                <stop offset="0%" stopColor="#0891b2" />
                                <stop offset="50%" stopColor="#6366f1" />
                                <stop offset="100%" stopColor="#db2777" />
                            </>
                        )}
                    </linearGradient>

                    {isDark ? (
                        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="5" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    ) : (
                        <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="1" stdDeviation="0.6" floodColor="#0f172a" floodOpacity="0.18" />
                        </filter>
                    )}
                </defs>

                <g filter={`url(#${filterId})`}>
                    <text x="2" y="58" fontFamily="'Fira Code', monospace" fontWeight="700" fontSize="48" fill={`url(#${gradientId})`}>
                        {'<'}
                    </text>
                    <text x="42" y="62" fontFamily="'Urbanist', sans-serif" fontWeight="900" fontSize="56" fill={`url(#${gradientId})`}>
                        C
                    </text>
                    <text x="100" y="58" fontFamily="'Fira Code', monospace" fontWeight="700" fontSize="48" fill={`url(#${gradientId})`}>
                        {'/>'}
                    </text>
                </g>
            </svg>

            {showWordmark && (
                <span
                    className="font-black text-lg sm:text-xl tracking-wider text-slate-900 dark:text-white uppercase"
                    style={{ fontFamily: "'Urbanist', sans-serif" }}
                >
                    CHILLY
                </span>
            )}
        </div>
    );
};

