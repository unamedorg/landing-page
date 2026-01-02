"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, memo } from "react";
import { X, Heart, Cpu, Brain, Wifi, Battery, Signal } from "lucide-react";

/**
 * TRI-FOLD MOBILE PREVIEW (PRO)
 * High-Fidelity UI replication with smooth parallax.
 */

export function MobilePreview() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "center center"] // Earlier start for smoother ease-in
    });

    // SHARED ANIMATION (The "Stand Up" - Smoothed)
    const commonRotateX = useTransform(scrollYProgress, [0, 1], [45, 0]);
    const commonOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

    // CENTER PHONE (The "Pop")
    const centerScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
    const centerY = useTransform(scrollYProgress, [0, 1], [100, 0]);

    // SIDE PHONES (The "Turn In")
    const leftRotateY = useTransform(scrollYProgress, [0, 1], [65, 0]);
    const leftX = useTransform(scrollYProgress, [0, 1], [-80, -20]);

    const rightRotateY = useTransform(scrollYProgress, [0, 1], [-65, 0]);
    const rightX = useTransform(scrollYProgress, [0, 1], [80, 20]);

    return (
        <section id="preview" ref={containerRef} className="relative py-32 md:py-48 min-h-[100vh] overflow-hidden px-4 section-optimized motion-reduce:transform-none perspective-[2500px]" style={{ willChange: 'transform' }}>

            {/* Background Ambience */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">

                {/* Header Text (Unified Style) */}
                <div className="text-center mb-24 max-w-5xl px-4">
                    <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight leading-[1.1]">
                        <span className="text-white block md:inline">Every Vibe, Captured. </span>
                        <span className="text-neutral-500 block md:inline">From deep talk to tech talk. Experience fluid conversations.</span>
                    </h2>
                </div>

                {/* Phones Grid */}
                <div className="relative w-full h-[600px] md:h-[650px] flex items-center justify-center perspective-[2500px]">

                    {/* LEFT PHONE: TECH (Stays Left) */}
                    <div className="absolute left-0 md:left-[5%] top-10 md:top-20 z-0 hidden md:block">
                        <PhoneCard
                            vibe="Tech Logic"
                            accent="cyan"
                            icon={Cpu}
                            x={leftX}
                            rotateY={leftRotateY}
                            rotateX={commonRotateX}
                            opacity={commonOpacity}
                            mission="Topic: AI vs Junior Devs"
                            messages={[
                                { self: false, text: "AI is replacing junior devs by 2026.", time: "09:41 AM" },
                                { self: true, text: "Nah, it replaces coders. Engineers build systems.", time: "09:42 AM" },
                                { self: false, text: "But Copilot wrote 80% of my last PR...", time: "09:42 AM" },
                                { self: true, text: "And you spent 90% of your time debugging it? 😉", time: "09:43 AM" }
                            ]}
                        />
                    </div>

                    {/* RIGHT PHONE: ROMANTIC (Moved to Right) */}
                    <div className="absolute right-0 md:right-[5%] top-10 md:top-20 z-0 hidden md:block">
                        <PhoneCard
                            vibe="Romantic"
                            accent="rose"
                            icon={Heart}
                            x={rightX}
                            rotateY={rightRotateY}
                            rotateX={commonRotateX}
                            opacity={commonOpacity}
                            mission="Vibe Check: 3AM Thoughts"
                            messages={[
                                { self: false, text: "What's a conspiracy theory you ACTUALLY believe?", time: "23:12 PM" },
                                { self: true, text: "That clouds are just the universe buffering.", time: "23:13 PM" },
                                { self: false, text: "Hah! Okay, I like that energy.", time: "23:13 PM" },
                                { self: true, text: "Your turn. Aliens? 👽", time: "23:14 PM" }
                            ]}
                        />
                    </div>

                    {/* CENTER PHONE: PHILOSOPHICAL (Moved to Center) */}
                    <div className="relative z-20 top-0">
                        <PhoneCard
                            vibe="Philosophical"
                            accent="purple"
                            icon={Brain}
                            scale={centerScale}
                            rotateX={commonRotateX}
                            y={centerY}
                            opacity={commonOpacity}
                            isMain
                            mission="The Simulation Hypothesis"
                            messages={[
                                { self: false, text: "If this is a simulation, who's the player?", time: "14:23 PM" },
                                { self: true, text: "We aren't the player. We're the NPCs.", time: "14:24 PM" },
                                { self: false, text: "That's bleak. I prefer 'procedurally generated protagonist'.", time: "14:24 PM" },
                                { self: true, text: "Fair enough. Main character energy only.", time: "14:25 PM" }
                            ]}
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}

interface PhoneProps {
    vibe: string;
    accent: "purple" | "rose" | "cyan";
    icon: any;
    x?: MotionValue<number>;
    y?: MotionValue<number>;
    scale?: MotionValue<number>;
    rotateX?: MotionValue<number>;
    rotateY?: MotionValue<number>;
    opacity?: MotionValue<number>;
    isMain?: boolean;
    mission: string;
    messages: { self: boolean, text: string, time: string }[];
}

const PhoneCard = memo(function PhoneCard({ vibe, accent, icon: Icon, x, y, scale, rotateX, rotateY, opacity, isMain, mission, messages }: PhoneProps) {

    // Dynamic Styles
    const colors = {
        purple: "from-purple-500 to-indigo-600",
        rose: "from-rose-500 to-pink-600",
        cyan: "from-cyan-500 to-blue-600"
    };

    return (
        <motion.div
            style={{
                x: x || 0,
                y: y || 0,
                scale: scale || 1,
                rotateX: rotateX || 0,
                rotateY: rotateY || 0,
                opacity: opacity || 1,
                transform: 'translateZ(0)'
            }}
            className={`
                relative w-[260px] ${isMain ? 'md:w-[320px] h-[580px] md:h-[660px]' : 'md:w-[280px] h-[500px] md:h-[580px]'}
                bg-black rounded-[2.5rem] border border-neutral-800 p-2 
                will-change-transform origin-bottom
                ${isMain ? 'shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] z-20' : 'shadow-2xl z-10'}
            `}
        >
            {/* Screen Container */}
            <div className="w-full h-full bg-[#050505] rounded-[2rem] overflow-hidden relative flex flex-col">

                {/* Status Bar */}
                <div className="px-5 py-2 flex justify-between items-center text-[10px] font-medium text-white/80 absolute top-0 left-0 right-0 z-20">
                    <span>9:41</span>
                    <div className="flex items-center gap-1.5">
                        <Signal className="w-3 h-3" />
                        <Wifi className="w-3 h-3" />
                        <Battery className="w-4 h-4" />
                    </div>
                </div>

                {/* 1. Header (UI from Image) - Pushed down for Status Bar */}
                <div className="px-4 py-3 pt-8 flex items-center justify-between bg-black/50 backdrop-blur-md z-10 border-b border-[rgba(255,255,255,0.05)]">
                    {/* User Avatar with status */}
                    <div className="relative">
                        <div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 overflow-hidden flex items-center justify-center">
                            <span className="text-xs font-bold text-white/40">?</span>
                        </div>
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-black rounded-full" />
                    </div>

                    {/* Timer (Center) */}
                    <div className="font-display font-bold text-xl text-white tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        02:23
                    </div>

                    {/* Close Action */}
                    <X className="w-5 h-5 text-neutral-500" />
                </div>

                {/* 2. Mission Card (UI from Image) */}
                <div className="px-3 pt-3">
                    <div className="bg-[#121214] rounded-xl p-3 border border-[rgba(255,255,255,0.05)] shadow-inner flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colors[accent]} flex items-center justify-center shadow-lg shrink-0`}>
                            <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className={`text-[9px] font-bold uppercase tracking-widest ${accent === 'rose' ? 'text-rose-400' : accent === 'purple' ? 'text-purple-400' : 'text-cyan-400'}`}>
                                Mission
                            </span>
                            <span className="text-xs text-neutral-200 font-medium leading-tight truncate">
                                {mission}
                            </span>
                        </div>
                    </div>
                </div>

                {/* 3. Chat Messages (Slower & Sleeker) */}
                <div className="flex-1 p-5 flex flex-col space-y-5 overflow-hidden">
                    {messages.map((msg, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: isMain ? 1.5 + (i * 3.5) : 1.0 + (i * 2.0), // Much slower reading time
                            }}
                            className={`flex flex-col ${msg.self ? 'items-end' : 'items-start'} max-w-full`}
                        >
                            <div className={`
                                px-4 py-2.5 text-[13px] font-medium leading-[1.6] shadow-sm relative tracking-wide
                                ${msg.self
                                    ? 'bg-white text-black rounded-[20px] rounded-tr-md'
                                    : 'bg-[#1a1a1a] text-neutral-200 rounded-[20px] rounded-tl-md border border-[rgba(255,255,255,0.05)]'}
                            `}>
                                {msg.text}
                            </div>
                            {/* Timestamp (Hidden initially, maybe subtle fade in?) */}
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.4 }}
                                transition={{ delay: (isMain ? 1.5 + (i * 3.5) : 1.0 + (i * 2.0)) + 0.5 }}
                                className="text-[9px] text-neutral-500 mt-1.5 px-1 font-medium"
                            >
                                {msg.time}
                            </motion.span>
                        </motion.div>
                    ))}

                    {/* Animated Typing Indicator */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: isMain ? 1.5 + (messages.length * 3.5) : 1.0 + (messages.length * 2.0)
                        }}
                        className="bg-[#1a1a1a] px-3 py-2.5 rounded-full border border-[rgba(255,255,255,0.05)] w-14 flex items-center justify-center gap-1 self-start ml-1"
                    >
                        <div className="w-1 h-1 bg-neutral-500 rounded-full animate-[bounce_1.4s_infinite]" />
                        <div className="w-1 h-1 bg-neutral-500 rounded-full animate-[bounce_1.4s_infinite_0.2s]" />
                        <div className="w-1 h-1 bg-neutral-500 rounded-full animate-[bounce_1.4s_infinite_0.4s]" />
                    </motion.div>
                </div>

                {/* 4. Input Area (Pill style - Clean) */}
                <div className="p-4 pt-0 mb-5 relative z-20 bg-gradient-to-t from-black via-black to-transparent">
                    <div className="w-full h-11 bg-[#121212] backdrop-blur-md rounded-full border border-[rgba(255,255,255,0.1)] px-5 flex items-center shadow-lg transition-colors hover:border-white/20">
                        <span className="text-[13px] text-neutral-600 font-medium">Type a message...</span>
                    </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[30%] h-1 bg-neutral-700/50 rounded-full" />

            </div>
        </motion.div>
    );
});
