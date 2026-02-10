import React from 'react';
import { ScaleStep } from '@/hooks/useTypeScale';

interface ScaleListProps {
    scale: ScaleStep[];
    activeTab: string;
    steps: number;
    setSteps: React.Dispatch<React.SetStateAction<number>>;
    downSteps: number;
    setDownSteps: React.Dispatch<React.SetStateAction<number>>;
    roundValues: boolean;
}

export default function ScaleList({
    scale,
    activeTab,
    steps,
    setSteps,
    downSteps,
    setDownSteps,
    roundValues
}: ScaleListProps) {
    return (
        <div className={`absolute inset-0 p-6 overflow-hidden flex flex-col transition-all duration-300 ease-in-out ${activeTab === 'typescale' ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>
            <div className="flex-grow overflow-y-auto custom-scrollbar pr-2 -mr-2 space-y-2 h-full">

                {/* Add Larger Controls */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                    <button
                        onClick={() => setSteps(s => s + 1)}
                        className="py-3 border border-dashed border-white/20 rounded-xl text-white/40 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all text-xs uppercase tracking-widest font-mono"
                    >
                        + Add Larger
                    </button>
                    {steps > 0 && (
                        <button
                            onClick={() => setSteps(s => s - 1)}
                            className="py-3 border border-dashed border-red-500/20 rounded-xl text-red-400/60 hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/5 transition-all text-xs uppercase tracking-widest font-mono flex items-center justify-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            Remove Largest
                        </button>
                    )}
                </div>

                <div className="space-y-8 py-4">
                    {scale.slice().reverse().map((step, index) => (
                        <div key={index} className="flex flex-col sm:flex-row items-baseline gap-6 border-b border-white/5 pb-6 last:border-0 last:pb-0">
                            <div className="w-full sm:w-24 flex-shrink-0 sm:text-right flex sm:flex-col gap-4 sm:gap-1 text-white/60">
                                <div className="text-xs font-mono font-medium text-white/80">{step.label}</div>
                                <div className="text-xs font-mono">{step.px.toFixed(roundValues ? 0 : 2)}px</div>
                                <div className="text-[10px] font-mono opacity-50">{step.rem.toFixed(3)}rem</div>
                            </div>
                            <div className="flex-grow min-w-0">
                                <div
                                    style={{ fontSize: `${step.px}px`, lineHeight: 1.1 }}
                                    className="font-medium break-words transition-all duration-300 ease-out origin-left text-white"
                                >
                                    The quick brown fox
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add Smaller Controls */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                    <button
                        onClick={() => setDownSteps(s => s + 1)}
                        className="py-3 border border-dashed border-white/20 rounded-xl text-white/40 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all text-xs uppercase tracking-widest font-mono"
                    >
                        + Add Smaller
                    </button>
                    {downSteps > 0 && (
                        <button
                            onClick={() => setDownSteps(s => s - 1)}
                            className="py-3 border border-dashed border-red-500/20 rounded-xl text-red-400/60 hover:text-red-400 hover:border-red-500/30 hover:bg-red-500/5 transition-all text-xs uppercase tracking-widest font-mono flex items-center justify-center gap-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            Remove Smallest
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
}
