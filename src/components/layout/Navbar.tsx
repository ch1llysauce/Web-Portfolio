import React, { useState } from 'react';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Skills', href: '#skills' },
        { label: 'Journey', href: '#journey' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#070913]/80 backdrop-blur-xl border-b border-[#181d33]/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-1 text-white font-mono font-bold text-lg tracking-wide hover:opacity-90 transition-opacity">
                    <span className="text-blue-400 font-extrabold">&lt;/&gt;</span> CHILLY
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Action Button */}
                <div className="hidden md:flex items-center gap-3">
                    <Button variant="primary" size="sm" href="/resume.pdf" external>
                        View Resume
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-[#0e1322] border-b border-[#1e263d] px-4 pt-2 pb-6 space-y-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-sm font-medium text-slate-300 hover:text-white py-1"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="pt-2">
                        <Button variant="primary" size="sm" href="/resume.pdf" external className="w-full">
                            View Resume
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};