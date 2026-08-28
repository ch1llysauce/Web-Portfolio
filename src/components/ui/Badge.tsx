import React from 'react';

interface BadgeProps {
    children: React.ReactNode
    className?: string
    variant?: 'tech' | 'status' | 'category' | 'counter';
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    className = '',
    variant = 'tech'
}) => {
    const baseStyles = 'inline-flex items-center font-mono font-medium transition-colors';

    const variants = {
        // For the tech stack tags inside the cards
        tech: 'px-2.5 py-0.5 rounded-md text-[11px] bg-[#161c2e] text-slate-300 border border-[#232d4b] hover:border-blue-500/40',
        // For the "Available for work" pill
        status: 'px-3 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
        // For the "AI • FULL-STACK" header in cards
        category: 'px-2.5 py-0.5 rounded text-[10px] tracking-wider uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20',
        // For the "10+ Projects Completed"
        counter: 'px-3 py-1.5 rounded-xl text-xs bg-[#121829] text-slate-200 border border-[#1e263d]',
    };

    return (
        <span className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </span>
    );
}

