import React from 'react';
import { TickSquare } from 'react-iconly';

export default function PricingTable({ secondaryFont }: { secondaryFont: string }) {
    return (
        <div className="group relative border border-white/10 rounded-2xl bg-[#0F0F0F] overflow-hidden hover:border-white/20 transition-colors h-full">


            <div className="p-6 md:p-6 flex flex-col items-center text-center">
                <div className="uppercase tracking-widest text-xs text-indigo-400 font-bold mb-4">Most Popular</div>
                <h3 className="text-3xl font-bold mb-2"  >Pro Plan</h3>
                <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-bold"  >$29</span>
                    <span className="text-white/40" style={{ fontFamily: secondaryFont }}>/User/Month</span>
                </div>

                <p className="text-white/60 text-sm mb-8 w-full" style={{ fontFamily: secondaryFont }}  >
                    Perfect for growing teams that need more power and flexibility.
                </p>

                <div className="w-full space-y-4 mb-8 text-left">
                    {[
                        "Unlimited Projects",
                        "Advanced Analytics",
                        "24/7 Support",
                        "Custom Domain"
                    ].map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                            <div className="text-green-400">
                                <TickSquare set="bold" primaryColor="currentColor" size={18} />
                            </div>
                            <span style={{ fontFamily: secondaryFont }}  >{feature}</span>
                        </div>
                    ))}
                </div>

                <button className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-colors">
                    Get Started
                </button>
            </div>

            {/* Label */}
            <div className="absolute bottom-6 left-6 text-[10px] text-white/20 uppercase tracking-widest pointer-events-none">
                Pricing Table
            </div>
        </div>
    );
}
