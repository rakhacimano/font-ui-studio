import React from 'react';
import { ScaleStep } from '@/hooks/useTypeScale';

interface VisualPreviewProps {
    scale: ScaleStep[];
    activeTab: string;
}

export default function VisualPreview({ scale, activeTab }: VisualPreviewProps) {

    // Helper to get raw pixel value for inline styles in Preview
    const getSize = (label: string) => {
        const found = scale.find(s => s.label === label);
        return found ? `${found.px}px` : '16px';
    };

    // Find closest step for specific UI elements if standard labels don't exist
    // Fallback to base if specific step not found
    const getStepSize = (stepIndex: number, isLarge = true) => {
        if (stepIndex === 0) return getSize('base');
        const label = isLarge ? `lg-${stepIndex}` : `sm-${stepIndex}`;
        return getSize(label);
    };

    return (
        <div className={`absolute inset-0 p-6 overflow-y-auto custom-scrollbar flex flex-col transition-all duration-300 ease-in-out ${activeTab === 'preview' ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
            <div className="space-y-12 max-w-2xl mx-auto w-full pt-4">

                {/* Buttons */}
                <div className="space-y-4">
                    <h3 className="text-white/40 uppercase tracking-widest text-xs font-mono mb-6">Components</h3>
                    <div className="flex flex-wrap items-center gap-4">
                        <button className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20" style={{ fontSize: getStepSize(0) }}>
                            Primary Button
                        </button>
                        <button className="px-5 py-2.5 rounded-lg bg-indigo-100 text-indigo-900 font-medium hover:bg-indigo-200 transition-colors" style={{ fontSize: getStepSize(0) }}>
                            Secondary
                        </button>
                        <button className="px-5 py-2.5 rounded-lg border border-indigo-500/30 text-indigo-300 font-medium hover:bg-indigo-500/10 transition-colors" style={{ fontSize: getStepSize(0) }}>
                            Outline
                        </button>
                    </div>
                </div>

                {/* Inputs */}
                <div className="space-y-2">
                    <label className="block text-white/80 font-medium" style={{ fontSize: getStepSize(0) }}>Email address</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/30">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        </div>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full bg-black/20 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder:text-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                            style={{ fontSize: getStepSize(0) }}
                        />
                    </div>
                </div>

                {/* Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-5 hover:bg-white/[0.07] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-1" style={{ fontSize: getStepSize(1) }}>Premium Features</h4>
                        <p className="text-white/60" style={{ fontSize: getStepSize(0) }}>Unlock advanced tools and export options for your design workflow.</p>
                    </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-zinc-800 text-white/80 font-medium" style={{ fontSize: getStepSize(1, false) }}>Design</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-medium" style={{ fontSize: getStepSize(1, false) }}>New</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full border border-white/20 text-white/60 font-medium" style={{ fontSize: getStepSize(1, false) }}>Beta</span>
                </div>

            </div>
        </div>
    );
}
