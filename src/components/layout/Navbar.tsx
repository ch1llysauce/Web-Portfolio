import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LogoMark } from '../ui/LogoMark';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const location = useLocation();
    const navigate = useNavigate();

    const isHome = location.pathname === '/';
    const isProjectsPage = location.pathname.startsWith('/projects');

    // Lock body scroll when mobile drawer is open to prevent background scrolling
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        } else {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        };
    }, [isOpen]);

    const navLinks = [
        { label: 'Home', href: '#hero', id: 'hero' },
        { label: 'About', href: '#about', id: 'about' },
        { label: 'Projects', href: '#projects', id: 'projects' },
        { label: 'Journey', href: '#journey', id: 'journey' },
        { label: 'Contact', href: '#contact', id: 'contact' },
    ];

    useEffect(() => {
        if (!isHome) return;

        const handleScroll = () => {
            // 1. Bottom of page check (Forces Contact active)
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
                setActiveSection('contact');
                if (window.location.hash !== '#contact') {
                    window.history.replaceState(null, '', '#contact');
                }
                return;
            }

            // 2. Top of page check (Forces Hero active)
            if (window.scrollY < 100) {
                setActiveSection('hero');
                if (window.location.hash) {
                    window.history.replaceState(null, '', window.location.pathname);
                }
                return;
            }

            // 3. Distance-based detection relative to target focus line (160px below navbar)
            const sectionIds = ['hero', 'about', 'projects', 'journey', 'contact'];
            const targetLine = 160;

            let activeId = 'hero';
            let minDistance = Infinity;

            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= targetLine + 200 && rect.bottom >= 100) {
                        const distance = Math.abs(rect.top - targetLine);
                        if (distance < minDistance) {
                            minDistance = distance;
                            activeId = id;
                        }
                    }
                }
            }
            setActiveSection(activeId);

            // Sync URL address bar hash with current active section
            const targetHash = activeId === 'hero' ? '' : `#${activeId}`;
            if (window.location.hash !== targetHash) {
                window.history.replaceState(null, '', targetHash || window.location.pathname);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    const scrollToSection = (id: string) => {
        if (id === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            window.history.replaceState(null, '', '/');
            return;
        }

        const element = document.getElementById(id);
        if (element) {
            let yOffset = -90;
            if (id === 'journey') {
                const elementHeight = element.offsetHeight;
                const viewportHeight = window.innerHeight;
                yOffset = -Math.max(80, (viewportHeight - elementHeight) / 2);
            }
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            window.history.replaceState(null, '', `#${id}`);
        }
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        e.preventDefault();
        (e.currentTarget as HTMLElement).blur();
        setIsOpen(false);
        const id = hash.replace('#', '');

        if (isHome) {
            scrollToSection(id);
        } else {
            // Client-side SPA navigation from /projects back to Home section
            navigate(id === 'hero' ? '/' : `/#${id}`);
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-50 dark:bg-[#070913]/85 backdrop-blur-2xl border-b border-black/10 dark:border-white/[0.06] transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    onClick={(e) => {
                        (e.currentTarget as HTMLElement).blur();
                        if (isHome) {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            window.history.replaceState(null, '', '/');
                        }
                    }}
                    className="flex items-center outline-none focus:outline-none select-none bg-transparent hover:bg-transparent active:bg-transparent focus:bg-transparent ring-0 focus:ring-0 focus-visible:ring-0 [-webkit-tap-highlight-color:transparent]"
                    title="Chilly - Home"
                >
                    <LogoMark />
                </Link>

                {/* Desktop Links with SPA Client-Side Transitions */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = (isHome && activeSection === link.id) || (isProjectsPage && link.id === 'projects');
                        return (
                            <a
                                key={link.label}
                                href={isHome ? link.href : `/${link.href}`}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-300 ease-in-out cursor-pointer outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 focus-visible:ring-0 select-none ${
                                    isActive
                                        ? 'bg-indigo-500/10 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 border-indigo-500/30 shadow-sm shadow-indigo-500/20'
                                        : 'bg-transparent text-slate-500 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                                }`}
                                style={{ fontFamily: "'Inter', sans-serif" }}
                            >
                                {link.label}
                            </a>
                        );
                    })}
                </div>

                {/* Action Button & Theme Toggle */}
                <div className="hidden md:flex items-center gap-2.5">
                    <ThemeToggle />
                    <Button variant="primary" size="sm" href="/resume.pdf" external>
                        View Resume
                    </Button>
                </div>

                {/* Mobile Menu Hamburger Button */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(true)}
                        className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none outline-none"
                        aria-label="Open Menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>

        {/* Mobile Slide-in Drawer & Blurred Backdrop (Rendered outside nav for full viewport height) */}
        <div className={`fixed inset-0 z-[100] md:hidden transition-all duration-300 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}>
            {/* Blurred Backdrop Overlay */}
            <div
                className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm transition-opacity touch-none"
                onClick={() => setIsOpen(false)}
            />

            {/* Slide-out Drawer Panel (Full Screen Height, Solid Opaque) */}
            <div
                className={`fixed top-0 right-0 bottom-0 h-screen w-[280px] sm:w-[320px] bg-slate-50 dark:bg-[#0c0e1d] border-l border-black/10 dark:border-white/10 shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out z-[101] overscroll-contain ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Drawer Header */}
                <div>
                    <div className="flex items-center justify-between pb-6 border-b border-black/10 dark:border-white/5">
                        <div className="flex items-center">
                            <LogoMark />
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors focus:outline-none"
                            aria-label="Close Menu"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-1.5 pt-6">
                        {navLinks.map((link) => {
                            const isActive = (isHome && activeSection === link.id) || (isProjectsPage && link.id === 'projects');
                            return (
                                <a
                                    key={link.label}
                                    href={isHome ? link.href : `/${link.href}`}
                                    onClick={(e) => {
                                        handleNavClick(e, link.href);
                                        setIsOpen(false);
                                    }}
                                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all select-none ${
                                        isActive
                                            ? 'bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 font-bold border border-indigo-500/20 shadow-sm'
                                             : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                                    }`}
                                    style={{ fontFamily: "'Inter', sans-serif" }}
                                >
                                    <span>{link.label}</span>
                                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />}
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Drawer Footer / Resume Button */}
                <div className="pt-6 border-t border-black/10 dark:border-white/5 space-y-4">
                    <Button
                        variant="primary"
                        size="md"
                        href="/resume.pdf"
                        external
                        className="w-full justify-center text-center shadow-md shadow-indigo-500/25 py-2.5"
                    >
                        View Resume
                    </Button>
                    <p className="text-[10px] font-mono text-center text-slate-500">
                        © 2026 Chilly • Portfolio
                    </p>
                </div>
            </div>
        </div>
        </>
    );
};
