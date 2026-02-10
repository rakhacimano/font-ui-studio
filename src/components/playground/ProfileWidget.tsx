import React from 'react';

export default function ProfileWidget({ secondaryFont }: { secondaryFont: string }) {
    return (
        <div className="relative border border-white/10 rounded-2xl bg-[#0F0F0F] p-6 flex flex-col gap-6 hover:border-white/20 transition-colors h-full">
            <div>
                <h3 className="text-base font-bold mb-1"  >Account</h3>
                <p className="text-white/60 text-sm" style={{ fontFamily: secondaryFont }}  >
                    Make changes to your account here. Click save when you're done.
                </p>
            </div>

            <div className="space-y-4">
                <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white/80">Name</label>
                    <input
                        type="text"
                        defaultValue="shadcn"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30 transition-colors"
                        style={{ fontFamily: secondaryFont }}
                    />
                </div>
                <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white/80">Username</label>
                    <input
                        type="text"
                        defaultValue="@shadcn"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-white/30 transition-colors"
                        style={{ fontFamily: secondaryFont }}
                    />
                </div>
            </div>

            <div className="pt-2 mt-auto">
                <button className="bg-white hover:bg-zinc-200 text-black font-bold rounded-lg px-4 py-2 text-sm transition-colors">
                    Save changes
                </button>
            </div>
        </div>
    );
}
