'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if ((previous ?? 0) > latest && latest > 50) {
            setHidden(false);
        } else if ((previous ?? 0) < latest && latest > 50) {
            setHidden(true);
        }
        if (latest < 50) setHidden(false);
    });

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:p-6 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/5"
            >
                <div className="flex items-center gap-2">
                    <img src="/logocolorwhite.png" alt="Logo" className="h-6 md:h-8 w-auto" />
                </div>

                {/* Mobile UI Playground Button & Hamburger */}
                <div className="flex md:hidden items-center gap-3">
                    <a href="/playground" className="flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/50 rounded-full">
                        <span className="text-xs font-bold text-indigo-400">
                            Open UI Playground
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                    </a>

                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="p-2 text-white/80 hover:text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
                    <a href="/" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Type Scale</a>
                    <a href="/playground" className="text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2">
                        UI Playground
                        <span className="px-1.5 py-0.5 rounded text-[10px] uppercase font-bold bg-indigo-500 text-white tracking-wider flex items-center gap-1">
                            New
                        </span>
                    </a>
                </nav>

                <div className="hidden md:block">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium opacity-50 hover:opacity-100 transition-opacity text-white">GitHub</a>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[60] bg-black bg-opacity-95 backdrop-blur-xl md:hidden flex flex-col p-6"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <div className="flex items-center gap-2">
                                <img src="/logocolorwhite.png" alt="Logo" className="h-6 w-auto" />
                            </div>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2 text-white/80 hover:text-white"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6 6 18" /><path d="m6 6 18 18" />
                                </svg>
                            </button>
                        </div>

                        <nav className="flex flex-col gap-6 text-center mt-10">
                            <a href="/" className="text-xl font-medium text-white/80 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                Type Scale
                            </a>
                            {/* Keep UI Playground in menu as well for completeness */}
                            <a href="/playground" className="text-xl font-medium text-indigo-400 hover:text-indigo-300 transition-colors flex items-center justify-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                                Open UI Playground
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xl font-medium text-white/50 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                                GitHub
                            </a>
                        </nav>

                        <div className="mt-auto text-center text-white/20 text-xs">
                            © 2026 Font Scale
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
