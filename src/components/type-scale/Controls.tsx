import React from 'react';
import { RATIOS } from '@/hooks/useTypeScale';

interface ControlsProps {
    baseSize: number;
    setBaseSize: React.Dispatch<React.SetStateAction<number>>;
    ratio: number;
    setRatio: React.Dispatch<React.SetStateAction<number>>;
    customRatio: string;
    setCustomRatio: React.Dispatch<React.SetStateAction<string>>;
    handleRatioClick: (r: number) => void;
    roundValues: boolean;
    setRoundValues: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Controls({
    baseSize,
    setBaseSize,
    ratio,
    customRatio,
    setCustomRatio,
    handleRatioClick,
    roundValues,
    setRoundValues
}: ControlsProps) {
    return (
        <div className="w-full lg:w-1/3 space-y-8 flex-shrink-0">

            {/* Base Size */}
            <div className="space-y-3">
                <label className="block text-sm font-medium text-white/50 mb-2 uppercase tracking-wider">Base Size (px)</label>
                <div className="flex items-center space-x-2 bg-transparent border-b border-white/20 pb-2 focus-within:border-white transition-colors">
                    <button
                        onClick={() => setBaseSize(prev => Math.max(1, prev - 1))}
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-xl font-light"
                    >
                        -
                    </button>
                    <input
                        type="number"
                        value={baseSize}
                        onChange={(e) => setBaseSize(Number(e.target.value))}
                        className="w-full bg-transparent text-center text-5xl font-bold focus:outline-none transition-all font-sans text-white"
                    />
                    <button
                        onClick={() => setBaseSize(prev => prev + 1)}
                        className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-xl font-light"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Ratios */}
            <div className="space-y-4">
                <label className="block text-sm font-medium text-white/50 uppercase tracking-wider">Scale Ratio</label>
                <div className="grid grid-cols-2 gap-3">
                    {RATIOS.map((r) => (
                        <button
                            key={r.name}
                            onClick={() => handleRatioClick(r.value)}
                            className={`px-4 py-3 text-sm rounded-xl text-left transition-all border ${!customRatio && ratio === r.value
                                ? 'bg-white text-black border-white font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                : 'bg-transparent text-white/60 border-white/10 hover:bg-white/5 hover:text-white hover:border-white/30'
                                }`}
                        >
                            <div className="font-medium truncate">{r.name}</div>
                            <div className="text-xs opacity-60 mt-1">{r.value}</div>
                        </button>
                    ))}
                </div>

                <div className="relative pt-4 border-t border-white/10">
                    <label className="block text-xs font-medium text-white/40 mb-2">Custom Ratio</label>
                    <input
                        type="number"
                        step="0.001"
                        value={customRatio}
                        placeholder="Enter custom ratio..."
                        onChange={(e) => setCustomRatio(e.target.value)}
                        className={`w-full bg-transparent border-b px-2 py-2 text-lg focus:outline-none transition-all font-mono ${customRatio ? 'border-white text-white' : 'border-white/20 text-white/60 focus:border-white/50'
                            }`}
                    />
                </div>
            </div>

            {/* Rounding Toggle */}
            <div className="pt-4 border-t border-white/10">
                <button
                    onClick={() => setRoundValues(!roundValues)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all border group ${roundValues
                        ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                        : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/30'
                        }`}
                >
                    <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors border ${roundValues ? 'bg-black border-black text-white' : 'border-white/30 text-transparent group-hover:border-white/50'
                            }`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={roundValues ? 'opacity-100' : 'opacity-0'}><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span className="font-medium text-sm uppercase tracking-wider">Round Values</span>
                    </div>
                    <span className={`text-xs font-mono uppercase tracking-wider ${roundValues ? 'opacity-100 font-bold' : 'opacity-50'}`}>
                        {roundValues ? 'On' : 'Off'}
                    </span>
                </button>
            </div>
        </div>
    );
}
