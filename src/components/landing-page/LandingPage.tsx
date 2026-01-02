"use client";

import dynamic from "next/dynamic";
import { Background, GlobalGrain } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

// Dynamic imports for below-the-fold content to improve initial load speed
const ScrollVelocity = dynamic(() => import("./components/ScrollVelocity").then(mod => mod.ScrollVelocity), { ssr: false });
const Features = dynamic(() => import("./components/Features").then(mod => mod.Features), { ssr: false });
const MobilePreview = dynamic(() => import("./components/MobilePreview").then(mod => mod.MobilePreview), { ssr: false });
const FAQ = dynamic(() => import("./components/FAQ").then(mod => mod.FAQ), { ssr: false });
const Footer = dynamic(() => import("./components/Footer").then(mod => mod.Footer), { ssr: false });

export function LandingPage() {
    return (
        <main className="relative min-h-screen w-full bg-black text-white selection:bg-indigo-500/30 overflow-x-hidden">
            <Navbar />
            <Background />

            <div className="relative z-10 flex flex-col motion-gpu">
                <Hero />
                <ScrollVelocity />
                <div className="section-optimized"><Features /></div>
                <div className="section-optimized"><MobilePreview /></div>
                <div className="section-optimized"><FAQ /></div>
                <Footer />
            </div>
            <GlobalGrain />
        </main>
    );
}
