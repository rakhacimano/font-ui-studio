'use client';

import React, { useState, useEffect } from 'react';
import { Search } from 'react-iconly';

interface FontSelectorProps {
    label: string;
    value: string;
    onChange: (font: string) => void;
}

// Common Google Fonts for quick selection/fallback
const COMMON_FONTS = [
    "Plus Jakarta Sans", "Inter", "Roboto", "Open Sans", "Lato", "Montserrat", "Poppins",
    "Sora", "Outfit", "Playfair Display", "Merriweather", "Nunito", "Raleway", "Google Sans",
    "Manrope", "DM Sans", "Work Sans", "Space Grotesk", "Archivo", "Libre Baskerville",
    "Source Sans Pro", "Mulish", "PT Serif", "Lora", "Rubik", "Mukta", "Kanit"
];

export default function FontSelector({ label, value, onChange }: FontSelectorProps) {
    const [query, setQuery] = useState(value);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setQuery(value);
    }, [value]);

    // Load font from Google Fonts when value changes (High quality for selection)
    useEffect(() => {
        if (!value) return;
        const link = document.createElement('link');
        link.href = `https://fonts.googleapis.com/css2?family=${value.replace(/\s+/g, '+')}:wght@300;400;500;600;700;800&display=swap`;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        return () => {
            document.head.removeChild(link);
        }
    }, [value]);

    // Load ALL common fonts for the dropdown preview (Performance optimized: only weight 400)
    useEffect(() => {
        const fontsToLoad = COMMON_FONTS.filter(f => f !== 'Google Sans'); // Google Sans is not on public API
        const link = document.createElement('link');
        // Batch load all fonts in one request
        const families = fontsToLoad.map(font => `family=${font.replace(/\s+/g, '+')}:wght@400`).join('&');
        link.href = `https://fonts.googleapis.com/css2?${families}&display=swap`;
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        // No cleanup needed really, we want these to stay for the session
    }, []);

    const handleSelect = (font: string) => {
        onChange(font);
        setQuery(font);
        setIsOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSelect(query);
            e.currentTarget.blur();
        }
    };

    return (
        <div className="relative w-full">
            <label className="block text-xs font-medium text-white/40 mb-1.5 uppercase tracking-wider">{label}</label>
            <div className="relative">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    onBlur={() => setTimeout(() => setIsOpen(false), 200)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search Google Fonts..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg py-2.5 pl-9 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all font-sans text-sm"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
                    <Search set="light" primaryColor="currentColor" size={16} />
                </div>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#1A1A1A] border border-white/10 rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto custom-scrollbar">
                    {COMMON_FONTS.filter(f => f.toLowerCase().includes(query.toLowerCase())).map(font => (
                        <button
                            key={font}
                            onClick={() => handleSelect(font)}
                            className="w-full text-left px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors flex justify-between items-center"
                            style={{ fontFamily: `"${font}", sans-serif` }}
                        >
                            <span>{font}</span>
                            {value === font && <span className="text-xs bg-white/10 px-1.5 py-0.5 rounded text-white/50 font-sans">Active</span>}
                        </button>
                    ))}
                    {query && !COMMON_FONTS.some(f => f.toLowerCase() === query.toLowerCase()) && (
                        <button
                            onClick={() => handleSelect(query)} // Allow selecting custom input for "try your luck" with Google API
                            className="w-full text-left px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors italic border-t border-white/5"
                        >
                            Try loading "{query}"... (Press Enter)
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
