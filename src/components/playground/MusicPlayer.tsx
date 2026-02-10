import React from 'react';
import { Play, ArrowLeft, ArrowRight, Heart } from 'react-iconly';

export default function MusicPlayer({ secondaryFont }: { secondaryFont: string }) {
    return (
        <div className="relative border border-white/10 rounded-2xl bg-[#0F0F0F] p-6 flex flex-col gap-6 hover:border-white/20 transition-colors h-full group">
            <div className="flex gap-4 items-center">
                <img
                    src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=128&q=80"
                    alt="Album Cover"
                    className="h-16 w-16 rounded-lg object-cover border border-white/10"
                />
                <div>
                    <h3 className="text-base font-bold mb-1"  >Midnight City</h3>
                    <p className="text-white/40 text-xs" style={{ fontFamily: secondaryFont }}  >M83 • Hurry Up, We're Dreaming</p>
                </div>
            </div>

            <div className="space-y-2">
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-white rounded-full relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
                <div className="flex justify-between text-[10px] text-white/40 font-medium font-mono">
                    <span>1:24</span>
                    <span>4:03</span>
                </div>
            </div>

            <div className="flex justify-between items-center mt-auto">
                <button className="text-white/40 hover:text-white transition-colors">
                    <Heart set="light" primaryColor="currentColor" size={20} />
                </button>
                <div className="flex items-center gap-4">
                    <button className="text-white hover:text-white/60 transition-colors">
                        <ArrowLeft set="bold" primaryColor="currentColor" size={24} />
                    </button>
                    <button className="h-10 w-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                        <Play set="bold" primaryColor="currentColor" size={24} />
                    </button>
                    <button className="text-white hover:text-white/60 transition-colors">
                        <ArrowRight set="bold" primaryColor="currentColor" size={24} />
                    </button>
                </div>
                <button className="text-white/40 hover:text-white transition-colors text-xs font-bold border border-white/10 px-2 py-1 rounded">
                    LYRICS
                </button>
            </div>
        </div>
    );
}
