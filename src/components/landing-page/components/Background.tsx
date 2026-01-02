"use client";



/**
 * GLOBAL BACKGROUND (Restored)
 * Static Cosmic Atmosphere + CSS Stars
 * Used for the entire page behind the scenes.
 */

// Reliable Noise Data URI (to avoid external fetch issues)
const NOISE_URI = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E";

export function Background() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020617]">
            <CosmicAtmosphere />
            <OptimizedStars />
            {/* Grain is now 'fixed' to overlay everything including Hero */}
        </div>
    );
}

export function GlobalGrain() {
    return (
        <div
            className="fixed inset-0 z-[20] pointer-events-none mix-blend-overlay opacity-[0.15]"
            style={{ backgroundImage: `url("${NOISE_URI}")` }}
        />
    );
}

function GrainOverlay() {
    return null; // Deprecated, using GlobalGrain in LandingPage
}

function CosmicAtmosphere() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Top Multi-Chromatic Glows (Cyan/Blue/Violet Theme) - CSS Animated */}
            <div
                className="absolute top-[-20%] left-[-10%] w-[120vw] h-[80vh] blur-[120px] rounded-full opacity-30 animate-blob-slow"
                style={{ background: 'radial-gradient(circle at center, rgba(34, 211, 238, 0.15) 0%, transparent 70%)' }}
            />

            <div
                className="absolute top-[-10%] right-[-10%] w-[100vw] h-[70vh] blur-[120px] rounded-full opacity-30 animate-blob-slower"
                style={{
                    background: 'radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
                    animationDelay: '-5s'
                }}
            />

            {/* Bottom Vibrant Glows (Deep Blue) */}
            <div
                className="absolute bottom-[-30%] left-[-10%] w-[130vw] h-[90vh] blur-[140px] rounded-full opacity-40 animate-blob-medium"
                style={{
                    background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.12) 0%, transparent 60%)',
                    animationDelay: '-10s'
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80" />

            <style jsx>{`
                @keyframes blob-pulse {
                    0%, 100% { transform: scale(1) translate3d(0,0,0); opacity: 0.3; }
                    50% { transform: scale(1.1) translate3d(0,0,0); opacity: 0.5; }
                }
                .animate-blob-slow { 
                    animation: blob-pulse 15s ease-in-out infinite;
                    will-change: transform, opacity;
                }
                .animate-blob-slower { 
                    animation: blob-pulse 20s ease-in-out infinite; 
                    will-change: transform, opacity;
                }
                .animate-blob-medium { 
                    animation: blob-pulse 18s ease-in-out infinite; 
                    will-change: transform, opacity;
                }
            `}</style>
        </div>
    );
}

import { useEffect, useState } from "react";

// ... (previous code)

function OptimizedStars() {
    const [stars, setStars] = useState<any[]>([]);

    useEffect(() => {
        const generatedStars = [...Array(100)].map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: Math.random() < 0.9 ? 1 : 2,
            opacity: 0.2 + Math.random() * 0.4,
            duration: 3 + Math.random() * 4,
            delay: Math.random() * 5
        }));
        setStars(generatedStars);
    }, []);

    return (
        <div className="absolute inset-0 select-none overflow-hidden">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute bg-white rounded-full animate-pulse-slow"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                        animationDelay: `${star.delay}s`,
                        animationDuration: `${star.duration}s`,
                        boxShadow: star.size > 1 ? '0 0 4px rgba(255,255,255,0.4)' : 'none',
                        transform: 'translate3d(0,0,0)',
                        willChange: 'opacity'
                    }}
                />
            ))}
            <style jsx>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.2; transform: translate3d(0,0,0); }
                    50% { opacity: 0.6; transform: translate3d(0,0,0); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow linear infinite;
                }
            `}</style>
        </div>
    );
}
