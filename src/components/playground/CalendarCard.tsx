import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-iconly';

export default function CalendarCard({ secondaryFont }: { secondaryFont: string }) {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    // Simple mock calendar grid
    const dates = [
        { d: 29, out: true }, { d: 30, out: true }, { d: 1, out: false }, { d: 2, out: false }, { d: 3, out: false }, { d: 4, out: false }, { d: 5, out: false },
        { d: 6, out: false }, { d: 7, out: false }, { d: 8, out: false }, { d: 9, out: false }, { d: 10, out: false }, { d: 11, out: false }, { d: 12, out: false },
        { d: 13, out: false }, { d: 14, out: false }, { d: 15, out: false, today: true }, { d: 16, out: false }, { d: 17, out: false }, { d: 18, out: false }, { d: 19, out: false },
        { d: 20, out: false }, { d: 21, out: false }, { d: 22, out: false }, { d: 23, out: false }, { d: 24, out: false }, { d: 25, out: false }, { d: 26, out: false },
        { d: 27, out: false }, { d: 28, out: false }, { d: 29, out: false }, { d: 30, out: false }, { d: 31, out: false }, { d: 1, out: true }, { d: 2, out: true }
    ];

    return (
        <div className="relative border border-white/10 rounded-2xl bg-[#0F0F0F] p-6 flex flex-col gap-6 hover:border-white/20 transition-colors h-full">
            <div className="flex justify-between items-center">
                <h3 className="text-base font-bold">February 2026</h3>
                <div className="flex gap-1">
                    <button className="p-1 text-white/40 hover:text-white transition-colors border border-white/5 rounded hover:bg-white/5">
                        <ChevronLeft set="light" primaryColor="currentColor" size={16} />
                    </button>
                    <button className="p-1 text-white/40 hover:text-white transition-colors border border-white/5 rounded hover:bg-white/5">
                        <ChevronRight set="light" primaryColor="currentColor" size={16} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-y-4 text-center">
                {days.map(d => (
                    <div key={d} className="text-xs font-medium text-white/40 uppercase tracking-wide">{d}</div>
                ))}

                {dates.map((date, i) => (
                    <div key={i} className={`text-sm flex justify-center`}>
                        <button
                            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all
                                ${date.out ? 'text-white/10' :
                                    date.today ? 'bg-white text-black font-bold hover:bg-white shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-110' :
                                        'text-white/80 hover:bg-white/10'}
                                `}
                            style={{ fontFamily: secondaryFont }}
                        >
                            {date.d}
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-auto border-t border-white/10 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center">
                    <span className="text-lg">🎨</span>
                </div>
                <div>
                    <div className="text-sm font-bold">Design Typescale</div>
                    <div className="text-xs text-white/40" style={{ fontFamily: secondaryFont }}>10:00 AM - 11:30 AM</div>
                </div>
            </div>
        </div>
    );
}
