import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    external?: boolean;
    download?: string | boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    external = false,
    download,
    className = '',
    ...props
}) => {
    // Base styles
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none select-none cursor-pointer';

    // Variants
    const variants = {
        // Glowing gradient button ("View Projects", "Send Message", "View Resume")
        primary: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 !text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95 active:scale-95',
        // Outline button
        outline: 'bg-black/[0.02] dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-black/10 dark:border-white/[0.1] hover:bg-black/[0.05] dark:hover:bg-white/[0.08] hover:border-indigo-500/40 active:scale-95',
        // Subtle button
        ghost: 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/5',
    };

    // Sizes
    const sizes = {
        sm: 'px-3 py-1.5 text-xs gap-1.5',
        md: 'px-4 py-2 text-sm gap-2',
        lg: 'px-6 py-3 text-base gap-2.5'
    };

    const combinedClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    // Handle link
    if (href) {
        return (
            <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                download={download ? (typeof download === 'string' ? download : true) : undefined}
                className={combinedClass}
            >
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClass} {...props}>
            {children}
        </button>
    );
};

