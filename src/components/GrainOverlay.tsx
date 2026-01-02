"use client";

import { motion } from "framer-motion";

/**
 * LO-FI FILM GRAIN OVERLAY
 * Upgraded with guaranteed visibility and vintage flicker.
 */

export default function GrainOverlay() {
    return (
        <div className="pointer-events-none fixed inset-0 z-[100] h-full w-full select-none overflow-hidden opacity-[0.15]">
            {/* High-visibility SVG Noise Overlay */}
            <svg className="absolute inset-0 h-full w-full opacity-30 mix-blend-overlay">
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.65"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>

            {/* Subtle Screen Flicker Effect */}
            <motion.div
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 0.15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute inset-0 bg-white/5 mix-blend-soft-light pointer-events-none"
            />

            {/* Static Dust Texture */}
            <div
                className="absolute inset-0 opacity-20 mix-blend-multiply"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
                }}
            />
        </div>
    );
}
