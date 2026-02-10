'use client';

import React, { useState } from 'react';
import FontSelector from './FontSelector';
import DashboardShell from './DashboardShell';
import ProductCard from './ProductCard';
import DataTable from './DataTable';
import PricingTable from './PricingTable';
import ChatUI from './ChatUI';
import BlogSnippet from './BlogSnippet';
import LoginWidget from './LoginWidget';
import ProfileWidget from './ProfileWidget';
import MusicPlayer from './MusicPlayer';
import PaymentMethod from './PaymentMethod';
import CalendarCard from './CalendarCard';
import StatsCard from './StatsCard';

export default function PlaygroundContainer() {
    const [primaryFont, setPrimaryFont] = useState('Plus Jakarta Sans');
    const [secondaryFont, setSecondaryFont] = useState('Inter');

    return (
        <div className="w-full max-w-[95%] lg:max-w-screen-2xl mx-auto p-4 md:p-6 text-white font-sans relative z-10 flex flex-col gap-10">
            <div className="text-center mb-8">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">UI font playground</h1>
                <p className="text-white/60 text-lg">Test your type choices in real-world interface scenarios.</p>
            </div>

            {/* Toolbar */}
            <div className="sticky top-6 z-40 bg-black/80 backdrop-blur-md rounded-2xl border border-white/10 p-4 shadow-2xl flex flex-col md:flex-row gap-6 items-center justify-between max-w-4xl mx-auto w-full">
                <FontSelector label="Primary Font (UI & Headings)" value={primaryFont} onChange={setPrimaryFont} />
                <FontSelector label="Secondary Font (Body & Accents)" value={secondaryFont} onChange={setSecondaryFont} />
            </div>

            {/* Canvas - Bento V2 Grid (Relaxed 4-Column Layout) */}
            {/* Reduced max-cols to 4 to ensure breathability. Widgets are wider. */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full" style={{ fontFamily: `"${primaryFont}", sans-serif` }}>

                {/* Column 1 - Login & Profile */}
                <div className="flex flex-col gap-6 lg:col-span-1">
                    <div className="h-[460px]">
                        <LoginWidget secondaryFont={`"${secondaryFont}", sans-serif`} />
                    </div>
                    <div className="h-[380px]">
                        <ProfileWidget secondaryFont={`"${secondaryFont}", sans-serif`} />
                    </div>
                </div>

                {/* Column 2 - Media & Data */}
                <div className="flex flex-col gap-6 lg:col-span-1">
                    <div className="h-[320px]">
                        <MusicPlayer secondaryFont={`"${secondaryFont}", sans-serif`} />
                    </div>
                    <div className="h-[420px]">
                        <PaymentMethod secondaryFont={`"${secondaryFont}", sans-serif`} />
                    </div>
                </div>

                {/* Column 3 - Dashboard & Calendar - Spans 2 cols on huge screens if needed, or fits nicely in 1 wide col */}
                <div className="flex flex-col gap-6 lg:col-span-1 xl:col-span-2">
                    <DashboardShell secondaryFont={`"${secondaryFont}", sans-serif`} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="h-full">
                            <StatsCard secondaryFont={`"${secondaryFont}", sans-serif`} />
                        </div>
                        <div className="h-full">
                            <CalendarCard secondaryFont={`"${secondaryFont}", sans-serif`} />
                        </div>
                    </div>
                </div>

                {/* Wrapping Rows / Full Widths - Ensuring nothing gets too squeezed */}

                {/* Chat & Product - Side by Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2 xl:col-span-2">
                    <div className="h-[400px]">
                        <ChatUI secondaryFont={`"${secondaryFont}", sans-serif`} />
                    </div>
                    <ProductCard secondaryFont={`"${secondaryFont}", sans-serif`} />
                </div>

                {/* Blog - Wide */}
                <div className="lg:col-span-1 xl:col-span-2">
                    <BlogSnippet secondaryFont={`"${secondaryFont}", sans-serif`} />
                </div>

                {/* Data Table - Very Wide */}
                <div className="md:col-span-2 lg:col-span-3 xl:col-span-4">
                    <DataTable secondaryFont={`"${secondaryFont}", sans-serif`} />
                </div>

                {/* Pricing - Centered/Wide */}
                <div className="md:col-span-2 lg:col-span-3 xl:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Using a grid here to constrain width if needed, or just let it fill */}
                    <div className="hidden md:block"></div> {/* Spacer for center alignment effect if desired, or remove to fill */}
                    <PricingTable secondaryFont={`"${secondaryFont}", sans-serif`} />
                    <div className="hidden md:block"></div>
                </div>

            </div>
        </div>
    );
}
