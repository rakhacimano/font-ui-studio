'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        // Use optional chain or null check for safety, though previous starts at 0
        if ((previous ?? 0) > latest && latest > 50) {
            setHidden(false); // Scrolling up, show
        } else if ((previous ?? 0) < latest && latest > 50) {
            setHidden(true); // Scrolling down, hide
        }
        // Always show at very top
        if (latest < 50) setHidden(false);
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 p-6 md:p-6 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/5"
        >
            <div className="flex items-center gap-2">
                <img src="/logocolorwhite.png" alt="Logo" className="h-8 w-auto" />
            </div>

            <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
                <a href="/" className="text-sm font-medium text-white/60 hover:text-white transition-colors">Type Scale</a>
                <a href="/playground" className="text-sm font-medium text-white/60 hover:text-white transition-colors flex items-center gap-2">
                    UI Playground
                    <span className="px-1.5 py-0.5 rounded text-[10px] uppercase font-bold bg-indigo-500 text-white tracking-wider flex items-center gap-1">
                        New
                    </span>
                </a>
            </nav>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium opacity-50 hover:opacity-100 transition-opacity text-white">GitHub</a>
        </motion.header>
    );
}
