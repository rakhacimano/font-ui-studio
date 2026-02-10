import React, { useState } from 'react';
import { toast } from "sonner";
import { ScaleStep } from '@/hooks/useTypeScale';
import { Document, Paper, Edit } from 'react-iconly';

interface ExportPanelProps {
    scale: ScaleStep[];
    roundValues: boolean;
    activeTab: string;
}

export default function ExportPanel({ scale, roundValues, activeTab }: ExportPanelProps) {
    const [exportFormat, setExportFormat] = useState<'tailwind' | 'css' | 'json'>('tailwind');

    const getExportCode = () => {
        switch (exportFormat) {
            case 'tailwind':
                return `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontSize: {
${scale.map(s => `        '${s.label}': ['${s.rem.toFixed(3)}rem', { lineHeight: '1.2' }],`).join('\n')}
      }
    }
  }
}`;
            case 'css':
                return `:root {
${scale.map(s => `  --font-size-${s.label}: ${s.rem.toFixed(3)}rem; /* ${s.px.toFixed(roundValues ? 0 : 2)}px */`).join('\n')}
}`;
            case 'json':
                return JSON.stringify(scale.reduce((acc, s) => ({
                    ...acc,
                    [s.label]: {
                        rem: `${s.rem.toFixed(3)}rem`,
                        px: `${s.px.toFixed(roundValues ? 0 : 2)}px`
                    }
                }), {}), null, 2);
            default:
                return '';
        }
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        toast("Copied to clipboard", {
            className: "bg-zinc-900 border border-white/10 text-white shadow-lg",
            duration: 2000,
            description: "Code snippet copied to your clipboard."
        });
    };

    return (
        <div className={`absolute inset-0 p-6 flex flex-col transition-all duration-300 ease-in-out ${activeTab === 'export' ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
                <div className="flex gap-1 bg-black/20 p-1 rounded-lg">
                    <button
                        onClick={() => setExportFormat('tailwind')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-2 ${exportFormat === 'tailwind'
                            ? 'bg-white/10 text-white shadow-sm'
                            : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                            }`}
                    >
                        <Edit set="bold" primaryColor="currentColor" size={14} />
                        Tailwind
                    </button>
                    <button
                        onClick={() => setExportFormat('css')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-2 ${exportFormat === 'css'
                            ? 'bg-white/10 text-white shadow-sm'
                            : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                            }`}
                    >
                        <Paper set="bold" primaryColor="currentColor" size={14} />
                        CSS
                    </button>
                    <button
                        onClick={() => setExportFormat('json')}
                        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-2 ${exportFormat === 'json'
                            ? 'bg-white/10 text-white shadow-sm'
                            : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                            }`}
                    >
                        <Document set="bold" primaryColor="currentColor" size={14} />
                        JSON
                    </button>
                </div>

                <button
                    onClick={() => handleCopy(getExportCode())}
                    className="text-xs bg-white text-black px-3 py-1.5 rounded-md font-medium hover:bg-white/90 transition-colors flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                    Copy
                </button>
            </div>
            <pre className="flex-grow overflow-auto bg-black/30 rounded-lg p-4 font-mono text-xs text-white/80 custom-scrollbar whitespace-pre shadow-inner">
                <code>{getExportCode()}</code>
            </pre>
        </div>
    );
}
