import React from 'react';
import { Send, ArrowLeft } from 'react-iconly';

export default function ChatUI({ secondaryFont }: { secondaryFont: string }) {
    return (
        <div className="group relative border border-white/10 rounded-2xl bg-[#0F0F0F] overflow-hidden hover:border-white/20 transition-colors h-full flex flex-col">


            {/* Header */}
            <div className="h-16 border-b border-white/5 flex items-center px-4 gap-3 bg-white/[0.02]">
                <div className="text-white/60">
                    <ArrowLeft set="light" primaryColor="currentColor" size={24} />
                </div>
                <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
                    alt="Sarah Connor"
                    className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                    <div className="font-bold text-sm"  >Sarah Connor</div>
                    <div className="text-xs text-green-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        Online
                    </div>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-dots">
                {/* Received */}
                <div className="flex gap-3 max-w-[85%]">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
                        alt="Sarah Connor"
                        className="h-8 w-8 rounded-full object-cover"
                    />
                    <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none border border-white/5">
                        <p className="text-sm leading-relaxed" style={{ fontFamily: secondaryFont }}  >
                            Hey! Just checking in on the project status. Did you get a chance to look at the new designs?
                        </p>
                        <span className="text-[10px] text-white/40 mt-1 block">10:23 AM</span>
                    </div>
                </div>

                {/* Sent */}
                <div className="flex gap-3 max-w-[85%] ml-auto flex-row-reverse">
                    <img
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop"
                        alt="Me"
                        className="h-8 w-8 rounded-full object-cover"
                    />
                    <div className="bg-indigo-600/20 p-3 rounded-2xl rounded-tr-none border border-indigo-500/20 text-indigo-100">
                        <p className="text-sm leading-relaxed" style={{ fontFamily: secondaryFont }}  >
                            Yes! They look amazing. I particularly love the typography choices.
                        </p>
                        <span className="text-[10px] text-white/40 mt-1 block text-right">10:25 AM</span>
                    </div>
                </div>

                {/* Received */}
                <div className="flex gap-3 max-w-[85%]">
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
                        alt="Sarah Connor"
                        className="h-8 w-8 rounded-full object-cover"
                    />
                    <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none border border-white/5">
                        <p className="text-sm leading-relaxed" style={{ fontFamily: secondaryFont }}  >
                            Glad you liked them! Let's sync up later today to finalize?
                        </p>
                        <span className="text-[10px] text-white/40 mt-1 block">10:26 AM</span>
                    </div>
                </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5 bg-white/[0.02]">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="w-full bg-black/20 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:border-white/30 transition-colors"
                        style={{ fontFamily: secondaryFont }}
                    />
                    <button className="absolute right-1 top-1 p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-500 transition-colors">
                        <Send set="bold" primaryColor="currentColor" size={16} />
                    </button>
                </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-[10px] text-white/10 uppercase tracking-widest pointer-events-none">
                Messaging UI
            </div>
        </div>
    );
}
