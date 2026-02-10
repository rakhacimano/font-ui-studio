import React from 'react';
import { Category, Setting, User, Notification, Search } from 'react-iconly';

export default function DashboardShell({ secondaryFont }: { secondaryFont: string }) {
    return (
        <div className="group relative border border-white/10 rounded-2xl bg-[#0F0F0F] overflow-hidden hover:border-white/20 transition-colors">


            <div className="flex h-full min-h-[16rem]">
                {/* Mini Sidebar */}
                <div className="w-16 md:w-48 bg-black/40 border-r border-white/5 flex flex-col p-4 gap-6">
                    <div className="h-6 w-6 rounded bg-indigo-500/20" />

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-white/80">
                            <Category set="bold" primaryColor="currentColor" size={16} />
                            <span className="hidden md:block text-sm font-medium"  >Dashboard</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/40">
                            <User set="light" primaryColor="currentColor" size={16} />
                            <span className="hidden md:block text-sm" style={{ fontFamily: secondaryFont }}  >Customers</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/40">
                            <Setting set="light" primaryColor="currentColor" size={16} />
                            <span className="hidden md:block text-sm" style={{ fontFamily: secondaryFont }}  >Settings</span>
                        </div>
                    </div>
                </div>

                {/* Main Area */}
                <div className="flex-1 flex flex-col">
                    {/* Mini Navbar */}
                    <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02]">
                        <span className="text-sm font-medium"  >Overview</span>
                        <div className="flex items-center gap-4 text-white/40">
                            <Search set="light" primaryColor="currentColor" size={16} />
                            <Notification set="light" primaryColor="currentColor" size={16} />
                            <div className="h-6 w-6 rounded-full bg-indigo-500" />
                        </div>
                    </div>

                    {/* Dashboard Content Mockup */}
                    <div className="p-6 grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-xl p-4 h-24 border border-white/5">
                            <div className="text-xs text-white/40 mb-1 uppercase tracking-wider" style={{ fontFamily: secondaryFont }}>Total Revenue</div>
                            <div className="text-2xl font-bold"  >$45,231.89</div>
                            <div className="text-xs text-green-400 mt-2">+20.1% vs last month</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-4 h-24 border border-white/5">
                            <div className="text-xs text-white/40 mb-1 uppercase tracking-wider" style={{ fontFamily: secondaryFont }}>Active Users</div>
                            <div className="text-2xl font-bold"  >2,350</div>
                            <div className="text-xs text-white/40 mt-2">Since last hour</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-6 left-6 text-[10px] text-white/20 uppercase tracking-widest pointer-events-none">
                Dashboard Shell
            </div>
        </div>
    );
}
