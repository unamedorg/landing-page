"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { Lock, Zap, Clock, Mic, Activity, Globe, Sparkles, Terminal, Shield, Eye, Trophy } from "lucide-react";

/**
 * FEATURES: SYSTEM MODULES
 * Aesthetic: High-fidelity, technical, 'DevAegis' inspired.
 * Uses monospace typography, terminal-like headers, and strict grid alignment.
 */

export function Features() {
    return (
        <section id="features" className="py-24 md:py-32 px-6 relative z-10 w-full max-w-7xl mx-auto section-optimized motion-gpu">

            {/* Header */}
            <div className="mb-20 flex flex-col items-start md:items-center md:text-center border-b border-white/5 pb-12">
                <h2 className="text-3xl md:text-5xl font-display font-medium text-white max-w-3xl leading-tight mb-6">
                    A suite of privacy-first protocols <br className="hidden md:block" /> designed for <span className="text-neutral-400">human connection.</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-4 auto-rows-[minmax(180px,auto)] md:h-[600px]">

                {/* 01: FLASH DEBATE */}
                <BentoCard colSpan="md:col-span-2 md:row-span-2" className="bg-gradient-to-br from-blue-900/20 to-black border-blue-500/20 group flex flex-col items-center justify-center p-8">
                    <div className="absolute top-6 left-6">
                        <CardHeader icon={Clock} title="Flash Debate" />
                    </div>

                    <div className="flex-1 flex items-center justify-center relative w-full pt-10">
                        <div className="absolute inset-0 flex items-center justify-center opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none">
                            <div className="w-48 h-48 rounded-full border border-dashed border-white/20 animate-[spin_60s_linear_infinite]" />
                            <div className="absolute w-60 h-60 rounded-full border border-white/5" />
                            <div className="absolute w-40 h-40 rounded-full border-t-2 border-[#1e3a8a] animate-spin" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <div className="text-6xl font-mono text-white tracking-tighter">270<span className="text-[#1e3a8a] text-2xl">s</span></div>
                            <span className="text-[10px] font-bold text-[#1e3a8a] uppercase tracking-[0.3em] mt-1">Limit</span>
                        </div>
                    </div>

                    <div className="mt-6 text-center relative z-10 w-full">
                        <h3 className="text-xl font-display text-white mb-3 font-semibold">High-Velocity Discourse</h3>
                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[13px]">
                            <FeatureBullet>Fast point.</FeatureBullet>
                            <FeatureBullet>No circling.</FeatureBullet>
                            <FeatureBullet>Strict cutoff.</FeatureBullet>
                        </div>
                    </div>
                </BentoCard>

                {/* 02: ECHO CONTAINMENT */}
                <BentoCard colSpan="md:col-span-2 md:row-span-1" className="bg-gradient-to-br from-cyan-900/20 to-black border-cyan-500/20">
                    <div className="flex justify-between items-start">
                        <CardHeader icon={Shield} title="Core Safety" />
                        <Lock className="w-4 h-4 text-[#1e3a8a]" />
                    </div>
                    <div className="mt-auto">
                        <p className="text-neutral-400 text-sm mb-4 font-sans leading-relaxed">
                            Debate different vibes without fear. When the timer hits zero, the data evaporates.
                        </p>
                        {/* Scanning Bar */}
                        <div className="relative w-full h-1 bg-neutral-900 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ x: ['-100%', '100%'] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-[#1e3a8a] to-transparent opacity-50"
                            />
                        </div>
                        <div className="flex justify-between mt-2 text-[9px] text-[#1e3a8a]/70 font-bold uppercase tracking-wider">
                            <span>Traceability</span>
                            <span>Null</span>
                        </div>
                    </div>
                </BentoCard>

                {/* 03: AI ARBITER */}
                <BentoCard id="safety" colSpan="md:col-span-2 md:row-span-1" className="bg-gradient-to-br from-violet-900/20 to-black border-violet-500/20">
                    <CardHeader icon={Terminal} title="AI Arbiter" color="text-indigo-400" />
                    <p className="mt-auto text-neutral-400 text-sm font-sans mb-4 leading-relaxed">
                        Real-time bots monitor the channel. Toxicity is flagged. Vibe deviations detected.
                    </p>
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="h-1 flex-1 bg-indigo-500/20 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="h-full bg-indigo-500"
                                />
                            </div>
                        ))}
                    </div>
                </BentoCard>

                {/* 04: KARMA SYSTEM */}
                <BentoCard colSpan="md:col-span-2 md:row-span-1" className="bg-gradient-to-br from-amber-900/20 to-black border-amber-500/20">
                    <div className="flex justify-between items-start">
                        <CardHeader icon={Trophy} title="Karma Score" color="text-amber-400" />
                        <div className="text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-1 rounded border border-amber-400/20">LEVEL 5</div>
                    </div>
                    <div className="mt-auto">
                        <p className="text-neutral-400 text-sm font-sans mb-4 leading-relaxed">
                            Good speakers earn points. Be respectful to raise your Karma.
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="relative h-2 flex-1 bg-neutral-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '75%' }}
                                    transition={{ duration: 1, ease: 'easeOut' }}
                                    className="h-full bg-gradient-to-r from-amber-600 to-amber-400"
                                />
                            </div>
                            <span className="text-xs text-white font-bold tracking-tight">960 PTS</span>
                        </div>
                    </div>
                </BentoCard>

                {/* 05: SAFE CONNECTION */}
                <BentoCard colSpan="md:col-span-2 md:row-span-1" className="bg-gradient-to-br from-rose-900/20 to-black border-rose-500/20">
                    <CardHeader icon={Eye} title="Safe Connection" color="text-rose-400" />
                    <div className="mt-auto">
                        <p className="text-neutral-500 text-sm mb-4 font-sans leading-relaxed">
                            Identity is ONLY revealed if <strong>both</strong> people agree to share.
                        </p>

                        {/* Handshake Visual */}
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/5">
                            <div className="flex flex-col gap-1">
                                <span className="text-[9px] font-medium text-neutral-500 uppercase tracking-widest">YOU</span>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#1e3a8a] shadow-[0_0_8px_rgba(30,58,138,0.5)]" />
                                    <span className="text-xs text-white font-medium">ACCEPTED</span>
                                </div>
                            </div>

                            <div className="h-8 w-[1px] bg-white/10" />

                            <div className="flex flex-col gap-1 items-end">
                                <span className="text-[9px] font-medium text-neutral-500 uppercase tracking-widest">THEM</span>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                                    <span className="text-xs text-neutral-400">WAITING...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </BentoCard>

            </div>
        </section>
    );
}

const BentoCard = memo(function BentoCard({ children, className, colSpan, id }: { children: React.ReactNode, className?: string, colSpan?: string, id?: string }) {
    return (
        <motion.div
            id={id}
            whileHover={{ scale: 0.99, borderColor: "rgba(255,255,255,0.1)" }}
            className={`relative p-6 md:p-8 rounded-3xl border border-white/5 overflow-hidden flex flex-col hover:bg-white/[0.02] transition-colors ${colSpan} ${className}`}
            style={{ transform: 'translateZ(0)' }}
        >
            {/* Corner Bracket (DevAegis style) */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/20 rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/20 rounded-tr-lg" />

            {children}
        </motion.div>
    );
});

function CardHeader({ icon: Icon, title, color = "text-white" }: { icon: any, title: string, color?: string }) {
    return (
        <div className="flex items-center gap-2 mb-4">
            <Icon className={`w-4 h-4 ${color}`} />
            <span className={`text-[12px] font-medium tracking-tight ${color === "text-white" ? "text-neutral-200" : color}`}>
                {title}
            </span>
        </div>
    );
}

function TechBadge({ children }: { children: React.ReactNode }) {
    return (
        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
            {children}
        </span>
    );
}

function FeatureBullet({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-2 text-neutral-400 text-sm font-mono">
            <div className="w-1 h-1 bg-neutral-600 rounded-full" />
            <span>{children}</span>
        </div>
    )
}
