import React from 'react';
import { Lock, Message, User } from 'react-iconly';

export default function LoginWidget({ secondaryFont }: { secondaryFont: string }) {
    return (
        <div className="relative border border-white/10 rounded-2xl bg-[#0F0F0F] p-6 flex flex-col gap-6 hover:border-white/20 transition-colors h-full">
            <div>
                <h3 className="text-2xl font-bold mb-2 tracking-tight"  >Welcome back</h3>
                <p className="text-white/60 text-base" style={{ fontFamily: secondaryFont }}  >
                    Please enter your details to sign in.
                </p>
            </div>

            <div className="space-y-4">
                <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors">
                        <Message set="light" primaryColor="currentColor" size={20} />
                    </div>
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full bg-black border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20"
                        style={{ fontFamily: secondaryFont }}
                    />
                </div>
                <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors">
                        <Lock set="light" primaryColor="currentColor" size={20} />
                    </div>
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full bg-black border border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/20"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="rounded border-white/20 bg-white/5 checked:bg-white transition-colors cursor-pointer w-4 h-4 appearance-none border checked:border-white relative checked:after:content-['✓'] checked:after:absolute checked:after:text-black checked:after:text-[10px] checked:after:left-[2px] checked:after:top-0" />
                    <span className="text-white/60 group-hover:text-white transition-colors">Keep me logged in</span>
                </label>
                <button className="text-white/60 hover:text-white hover:underline transition-colors">
                    Forgot password?
                </button>
            </div>

            <button className="w-full bg-white hover:bg-zinc-200 text-black font-bold rounded-xl py-3.5 text-sm transition-colors mt-auto shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
                Sign in
            </button>

            <p className="text-center text-xs text-white/40">
                Don't have an account? <button className="text-white hover:underline">Sign up</button>
            </p>
        </div>
    );
}
