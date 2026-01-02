"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const HeroBackground = dynamic(() => import("./HeroBackground").then(mod => mod.HeroBackground), { ssr: false });
import { Logo } from "./Logo";
import { useEffect, useState } from "react";

/**
 * HIGH-FIDELITY HERO (Antigravity Inspiration)
 * Pure, abstract, and highly polished.
 */

export function Hero() {
    const router = useRouter();
    const { scrollY } = useScroll();

    const yParallax = useTransform(scrollY, [0, 500], [0, 100]);
    const opScroll = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section id="manifesto" className="relative h-screen min-h-[700px] w-full flex flex-col items-center justify-center overflow-hidden px-6 pt-20 motion-gpu">
            <HeroBackground />

            {/* Focal Point Glow */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
            </div>

            <motion.div
                style={{ y: yParallax, opacity: opScroll }}
                className="z-10 relative flex flex-col items-center max-w-5xl mx-auto w-full"
            >
                {/* BIG PROMINENT LOGO */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8 w-full flex justify-center"
                >
                    <Logo size="lg" />
                </motion.div>

                {/* MISSION STATEMENT */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="flex flex-col items-center text-center mb-16 max-w-2xl"
                >
                    <div className="flex flex-col items-center gap-4 min-h-[300px] justify-center">
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.4em] text-neutral-400 mb-2 block min-h-[1.5em]"
                        >
                            A lonely sanctuary in the digital void
                        </motion.span>
                        <div className="min-h-[40px] md:min-h-[60px] flex items-center justify-center">
                            <TypewriterEffect text="THE SHORT DEBATE CHAT" />
                        </div>

                        <div className="min-h-[100px] flex items-center justify-center">
                            <p className="text-lg md:text-2xl text-neutral-300 font-sans leading-relaxed max-w-2xl px-4 drop-shadow-lg text-center">
                                Match with a stranger. Pick a <span className="font-bold italic bg-gradient-to-r from-[#22d3ee] via-[#3b82f6] to-[#a855f7] text-transparent bg-clip-text">vibe</span>. <span className="text-white font-bold">Talk for 270 seconds</span>.
                                <br className="hidden md:block" />
                                Friendly AI moderation. No echo chambers.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* MAIN ACTIONS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto px-6 md:px-0"
                >
                    <button
                        onClick={() => window.open('https://connectree.space', '_blank')}
                        className="group relative w-full md:w-auto px-10 py-4 bg-[#1e3a8a] text-white rounded-full transition-all duration-500 hover:scale-105 hover:bg-[#2563eb] shadow-[0_0_30px_rgba(30,58,138,0.4)] border border-white/10"
                    >
                        <span className="relative z-10 font-display font-bold text-sm tracking-widest uppercase">
                            Find a Match
                        </span>
                    </button>

                    <button
                        onClick={() => router.push('/about')}
                        className="group relative w-full md:w-auto px-10 py-4 bg-transparent text-white rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/5 border border-white/20"
                    >
                        <span className="relative z-10 font-display font-medium text-sm tracking-widest uppercase text-neutral-300 group-hover:text-white transition-colors">
                            Read Manifesto
                        </span>
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}

function TypewriterEffect({ text }: { text: string }) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        setDisplayedText(""); // Reset text when prop changes
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.substring(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 80);
        return () => clearInterval(timer);
    }, [text]);

    return (
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight min-h-[40px] md:min-h-[60px] drop-shadow-2xl">
            {displayedText}
            <span className="inline-block w-[3px] h-[1em] bg-[#1e3a8a] ml-2 animate-pulse align-middle shadow-[0_0_10px_#1e3a8a]" />
        </h2>
    );
}
