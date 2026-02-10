import React from 'react';

export default function PaymentMethod({ secondaryFont }: { secondaryFont: string }) {
    return (
        <div className="relative border border-white/10 rounded-2xl bg-[#0F0F0F] p-6 flex flex-col gap-6 hover:border-white/20 transition-colors h-full">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-1">Total Balance</h3>
                    <div className="text-3xl font-bold tracking-tight"  >$12,450.00</div>
                </div>
                <div className="bg-white/5 p-2 rounded-lg text-white/40">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                </div>
            </div>

            {/* Card Visual */}
            <div className="relative h-40 w-full rounded-xl bg-gradient-to-bl from-zinc-800 to-black border border-white/10 p-5 flex flex-col justify-between overflow-hidden shadow-2xl group">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/5 blur-2xl group-hover:bg-white/10 transition-colors" />

                <div className="flex justify-between items-start z-10">
                    <div className="w-8 h-5 rounded overflow-hidden flex gap-0.5">
                        <div className="w-4 h-full bg-white/80" />
                        <div className="w-4 h-full bg-white/40" />
                    </div>
                    <span className="text-xs font-mono text-white/40">DEBIT</span>
                </div>

                <div className="space-y-4 z-10">
                    <div className="font-mono text-lg tracking-widest text-white/80 select-all">
                        •••• •••• •••• 4289
                    </div>
                    <div className="flex justify-between items-end">
                        <div className="space-y-0.5">
                            <span className="text-[9px] text-white/40 uppercase tracking-wider block">Card Holder</span>
                            <span className="text-xs font-medium tracking-wide block"  >JAMES DOE</span>
                        </div>
                        <div className="space-y-0.5 text-right">
                            <span className="text-[9px] text-white/40 uppercase tracking-wider block">Expires</span>
                            <span className="text-xs font-medium tracking-wide block">12/25</span>
                        </div>
                    </div>
                </div>
            </div>

            <button className="w-full bg-zinc-100 hover:bg-white text-black font-bold rounded-lg py-3 text-sm transition-colors mt-auto">
                Add New Card
            </button>
        </div>
    );
}
