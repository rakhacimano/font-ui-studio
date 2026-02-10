"use client";

import React, { useState } from 'react';
import { useTypeScale } from '@/hooks/useTypeScale';
import Controls from '@/components/type-scale/Controls';
import ScaleList from '@/components/type-scale/ScaleList';
import VisualPreview from '@/components/type-scale/VisualPreview';
import ExportPanel from '@/components/type-scale/ExportPanel';

export default function TypeScaleGenerator() {
    const {
        baseSize, setBaseSize,
        ratio, setRatio,
        customRatio, setCustomRatio,
        steps, setSteps,
        downSteps, setDownSteps,
        roundValues, setRoundValues,
        scale,
        handleRatioClick,
        currentRatioValue
    } = useTypeScale();

    const [activeTab, setActiveTab] = useState<'typescale' | 'preview' | 'export'>('typescale');

    return (
        <div className="w-full max-w-[95%] lg:max-w-7xl mx-auto p-4 md:p-6 text-white font-sans relative z-10">
            <div className="mb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Type scale generator</h1>
                <p className="text-white/60 text-lg">Visualize and generate harmonic typography scales.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                {/* Controls */}
                <Controls
                    baseSize={baseSize}
                    setBaseSize={setBaseSize}
                    ratio={ratio}
                    setRatio={setRatio}
                    customRatio={customRatio}
                    setCustomRatio={setCustomRatio}
                    handleRatioClick={handleRatioClick}
                    roundValues={roundValues}
                    setRoundValues={setRoundValues}
                />

                {/* Right Panel: Preview / Export */}
                <div className="w-full lg:w-2/3 flex-grow flex flex-col h-full min-h-[600px]">

                    <div className="flex-grow flex flex-col overflow-hidden bg-white/5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-sm transition-all relative">

                        {/* Header Bar */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 border-b border-white/10 bg-white/5">

                            {/* Tabs */}
                            <div className="flex items-center gap-1 bg-black/20 p-1 rounded-lg">
                                <button
                                    onClick={() => setActiveTab('typescale')}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === 'typescale'
                                        ? 'bg-white text-black shadow-sm'
                                        : 'text-white/60 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    Type Scale
                                </button>
                                <button
                                    onClick={() => setActiveTab('preview')}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === 'preview'
                                        ? 'bg-white text-black shadow-sm'
                                        : 'text-white/60 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    Preview
                                </button>
                                <button
                                    onClick={() => setActiveTab('export')}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === 'export'
                                        ? 'bg-white text-black shadow-sm'
                                        : 'text-white/60 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    Export
                                </button>
                            </div>

                            {/* Status / Info */}
                            <div className="text-xs font-mono text-white/40 bg-black/20 px-3 py-1.5 rounded-lg">
                                {roundValues ? 'Rounded' : 'Exact'} • Ratio: {currentRatioValue.toFixed(3)}
                            </div>

                        </div>

                        {/* Content Area */}
                        <div className="flex-grow overflow-hidden flex flex-col p-6 pt-0 relative">

                            <ScaleList
                                scale={scale}
                                activeTab={activeTab}
                                steps={steps}
                                setSteps={setSteps}
                                downSteps={downSteps}
                                setDownSteps={setDownSteps}
                                roundValues={roundValues}
                            />

                            <VisualPreview
                                scale={scale}
                                activeTab={activeTab}
                            />

                            <ExportPanel
                                scale={scale}
                                roundValues={roundValues}
                                activeTab={activeTab}
                            />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
