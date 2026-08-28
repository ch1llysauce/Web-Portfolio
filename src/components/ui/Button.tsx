import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    external = false,
    className = '',
    ...props
}) => {
    // Base styles
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none';

    // Variants
    const variants = {
        // Glowing gradient button ("View Projects", "Send Message")
        primary: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:opacity-95 active:scale-95',
        // Dark outline button ("GitHub", card action buttons)
        secondary: 'bg-[#121629] text-slate-200 border border-[#222846] hover:bg-[#1a203a] hover:border-slate-500 active:scale-95',
        outline: 'bg-[#121629] text-slate-200 border border-[#222846] hover:bg-[#1a203a] hover:border-slate-500 active:scale-95',
        // Subtle button
        ghost: 'text-slate-300 hover:text-white hover:bg-slate-800/40',
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
}
