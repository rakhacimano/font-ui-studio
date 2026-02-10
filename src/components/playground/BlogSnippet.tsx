import React from 'react';
import { Calendar, User } from 'react-iconly';

export default function BlogSnippet({ secondaryFont }: { secondaryFont: string }) {
    return (
        <div className="group relative border border-white/10 rounded-2xl bg-[#0F0F0F] overflow-hidden hover:border-white/20 transition-colors p-6 h-full">


            <div className="w-full">
                <div className="flex items-center gap-4 text-xs text-white/40 mb-4 font-mono">
                    <span className="flex items-center gap-1">
                        <Calendar set="light" primaryColor="currentColor" size={12} />
                        Oct 24, 2025
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="flex items-center gap-1">
                        <User set="light" primaryColor="currentColor" size={12} />
                        Guillem S.
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-indigo-400">Design Systems</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight"  >
                    The Future of Typography in Digital Interfaces
                </h2>

                <div className="space-y-4 text-white/70 leading-relaxed text-lg" style={{ fontFamily: secondaryFont }}>
                    <p  >
                        Typography is more than just choosing a nice font. It's about hierarchy, readability, and creating an emotional connection with the user. In the age of variable fonts and fluid sizing, we have more control than ever before.
                    </p>
                    <p  >
                        As we move towards more immersive interfaces, the role of type becomes even more critical. It guides the eye, establishes rhythm, and creates a sense of order in a chaotic digital world.
                    </p>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5">
                    <button className="text-sm font-bold text-white uppercase tracking-wider hover:text-indigo-400 transition-colors">
                        Read Full Article →
                    </button>
                </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-6 left-6 text-[10px] text-white/20 uppercase tracking-widest pointer-events-none">
                Blog Snippet
            </div>
        </div>
    );
}
