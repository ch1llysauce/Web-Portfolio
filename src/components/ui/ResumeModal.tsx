import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Download, ExternalLink, FileText, ZoomIn, ZoomOut, Maximize2, Minimize2 } from 'lucide-react';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
    resumeUrl?: string;
    previewImageUrl?: string;
    fileName?: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
    isOpen,
    onClose,
    resumeUrl = '/ChilldonPaulCarreon-Resume.pdf',
    previewImageUrl = '/resume-preview.png',
    fileName = 'Chilldon_Paul_Carreon_Resume.pdf',
}) => {
    const [fitMode, setFitMode] = useState<'width' | 'page'>('page');
    const [zoom, setZoom] = useState<number>(100);
    const [touchDist, setTouchDist] = useState<number | null>(null);

    // Reset settings when modal opens
    useEffect(() => {
        if (isOpen) {
            setFitMode('page');
            setZoom(100);
        }
    }, [isOpen]);

    // Lock background scroll and handle Escape key press
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    // Handle 2-finger pinch-to-zoom on touch devices (Mobile / Tablet)
    const handleTouchStart = (e: React.TouchEvent) => {
        if (e.touches.length === 2) {
            const dist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            setTouchDist(dist);
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (e.touches.length === 2 && touchDist !== null) {
            if (fitMode === 'page') {
                setFitMode('width');
            }

            const newDist = Math.hypot(
                e.touches[0].clientX - e.touches[1].clientX,
                e.touches[0].clientY - e.touches[1].clientY
            );
            const delta = newDist - touchDist;

            if (Math.abs(delta) > 8) {
                setZoom((prev) => Math.min(160, Math.max(100, prev + (delta > 0 ? 4 : -4))));
                setTouchDist(newDist);
            }
        }
    };

    const handleTouchEnd = () => {
        setTouchDist(null);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[120] flex items-center justify-center p-1 sm:p-5 sm:pb-8">
                    {/* Frosted Glass Backdrop (Website is visible & blurred behind) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="fixed inset-0 bg-black/45 dark:bg-black/55 backdrop-blur-md transition-all cursor-pointer"
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    {/* Animated Modal Dialog Window */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, y: 14 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 10 }}
                        transition={{ type: 'spring', damping: 26, stiffness: 350 }}
                        className="relative z-10 w-full max-w-4xl h-auto max-h-[92dvh] sm:h-[92dvh] sm:max-h-[900px] bg-[#0c0e1d]/95 border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/80 flex flex-col overflow-hidden backdrop-blur-2xl"
                    >
                        {/* Modal Header Toolbar */}
                        <div className="flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3 bg-[#080a16]/90 border-b border-white/10 shrink-0">
                            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
                                <div className="p-1.5 sm:p-2 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 shrink-0">
                                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide truncate" style={{ fontFamily: "'Urbanist', sans-serif" }}>
                                        Chilldon Paul Carreon - Résumé
                                    </h3>
                                    <p className="text-[10px] font-mono text-slate-400 hidden sm:block">
                                        {fitMode === 'page' ? 'Fit Page Mode (No Scroll)' : 'Scroll & Zoom Mode'}
                                    </p>
                                </div>
                            </div>

                            {/* Action Controls */}
                            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                                 {/* Fit Mode Toggle Button */}
                                <button
                                    onClick={() => {
                                        if (fitMode === 'page') {
                                            setFitMode('width');
                                            setZoom(100);
                                        } else {
                                            setFitMode('page');
                                            setZoom(100);
                                        }
                                    }}
                                    className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer border ${
                                        fitMode === 'page'
                                            ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                                            : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                                    }`}
                                    title={fitMode === 'page' ? 'Switch to Scroll & Zoom Mode' : 'Switch to Fit Page Mode (No Scroll)'}
                                >
                                    {fitMode === 'page' ? (
                                        <>
                                            <Maximize2 className="w-3.5 h-3.5" />
                                            <span className="hidden sm:inline">Fit Screen</span>
                                        </>
                                    ) : (
                                        <>
                                            <Minimize2 className="w-3.5 h-3.5" />
                                            <span className="hidden sm:inline">Fit Page</span>
                                        </>
                                    )}
                                </button>

                                {/* Zoom Controls (Desktop / Tablet only) */}
                                {fitMode === 'width' && (
                                    <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-xl p-0.5 text-xs text-slate-300">
                                        <button
                                            onClick={() => setZoom((prev) => Math.max(85, prev - 5))}
                                            className="p-1.5 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                                            title="Zoom Out"
                                            aria-label="Zoom Out"
                                        >
                                            <ZoomOut className="w-3.5 h-3.5" />
                                        </button>
                                        <span className="px-2 font-mono text-[11px] select-none text-slate-400 min-w-[40px] text-center">
                                            {zoom}%
                                        </span>
                                        <button
                                            onClick={() => setZoom((prev) => Math.min(110, prev + 5))}
                                            className="p-1.5 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                                            title="Zoom In"
                                            aria-label="Zoom In"
                                        >
                                            <ZoomIn className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                )}

                                {/* Download Action Button */}
                                <a
                                    href={resumeUrl}
                                    download={fileName}
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 shadow-md shadow-indigo-500/30 active:scale-95 transition-all cursor-pointer"
                                    title="Download PDF File"
                                >
                                    <Download className="w-3.5 h-3.5" />
                                    <span className="hidden xs:inline sm:inline">Download</span>
                                </a>

                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none cursor-pointer"
                                    title="Close (Esc)"
                                    aria-label="Close modal"
                                >
                                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Body: High-Resolution Image Viewer */}
                        <div
                            className={`relative flex-1 w-full h-full bg-[#05060d] overflow-auto p-3 sm:p-6 overscroll-contain ${
                                fitMode === 'page' ? 'flex items-center justify-center' : 'flex items-start justify-center pt-4 sm:pt-6 pb-8'
                            }`}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {fitMode === 'page' ? (
                                /* Fit Page Mode (Whole Document 100% visible, No Scroll) */
                                <div
                                    className="w-full h-full flex items-center justify-center cursor-pointer"
                                    onClick={() => {
                                        setFitMode('width');
                                        setZoom(100);
                                    }}
                                    title="Click to switch to Scroll & Zoom mode"
                                >
                                    <img
                                        src={previewImageUrl}
                                        alt="Chilldon Paul Carreon - Official Résumé Preview"
                                        className="max-w-full max-h-full h-auto w-auto object-contain rounded-lg sm:rounded-xl shadow-2xl shadow-black/90 border border-slate-700/40 select-none bg-white"
                                        loading="eager"
                                    />
                                </div>
                            ) : (
                                /* Scroll & Zoom Mode (Aligned to top so Name is never clipped, 2-finger pinch support) */
                                <div className="transition-all duration-200 ease-out flex justify-center w-full shrink-0">
                                    <div
                                        className="transition-all duration-200 ease-out"
                                        style={{
                                            width: `${(768 * zoom) / 100}px`,
                                            maxWidth: zoom <= 100 ? '100%' : 'none',
                                        }}
                                    >
                                        <img
                                            src={previewImageUrl}
                                            alt="Chilldon Paul Carreon - Official Résumé Preview"
                                            className="w-full h-auto rounded-lg sm:rounded-xl shadow-2xl shadow-black/90 border border-slate-700/40 select-none bg-white touch-pan-x touch-pan-y"
                                            loading="eager"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Bottom Footer Info Bar */}
                        <div className="px-3 sm:px-4 py-2 bg-[#080a16]/90 border-t border-white/10 flex items-center justify-between gap-2 text-xs text-slate-400 shrink-0">
                            <button
                                onClick={() => {
                                    if (fitMode === 'page') {
                                        setFitMode('width');
                                        setZoom(100);
                                    } else {
                                        setFitMode('page');
                                        setZoom(100);
                                    }
                                }}
                                className="text-[11px] sm:text-xs text-indigo-400 hover:text-indigo-300 font-medium underline cursor-pointer truncate"
                            >
                                {fitMode === 'page' ? (
                                    <>
                                        <span className="sm:hidden">Fit Page • Switch Mode</span>
                                        <span className="hidden sm:inline">Mode: Fit Page (No Scroll) • Click for Scroll Mode</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="sm:hidden">Scroll Mode • Switch</span>
                                        <span className="hidden sm:inline">Mode: Scroll & Zoom • Click for Fit Page</span>
                                    </>
                                )}
                            </button>
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-400 hover:text-indigo-300 font-semibold underline flex items-center gap-1 text-[11px] sm:text-xs shrink-0 whitespace-nowrap"
                            >
                                View PDF <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                            </a>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
