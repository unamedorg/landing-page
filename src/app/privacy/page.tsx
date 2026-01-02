"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, EyeOff, Trash2, Clock } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-indigo-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[30vw] h-[30vw] bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 backdrop-blur-sm bg-black/20">
                <div className="max-w-5xl mx-auto">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest">Back to Home</span>
                    </Link>
                </div>
            </nav>

            <div className="relative z-10 max-w-4xl mx-auto px-6 pt-40 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                            <ShieldCheck className="w-8 h-8 text-indigo-400" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight">Privacy Policy</h1>
                            <p className="text-neutral-500 mt-2 font-mono text-xs uppercase tracking-widest">Last updated: January 2, 2026</p>
                        </div>
                    </div>

                    <div className="prose prose-invert prose-neutral max-w-none space-y-16">
                        <p className="text-xl text-neutral-300 leading-relaxed font-light">
                            We respect your privacy. This platform is designed to create meaningful, short conversations without forcing users to expose personal identity.
                        </p>

                        <section className="space-y-8">
                            <div className="flex items-center gap-3">
                                <Lock className="w-5 h-5 text-indigo-400" />
                                <h2 className="text-2xl font-display font-medium m-0 uppercase tracking-wider text-white">1. Information We Collect</h2>
                            </div>
                            <p className="text-neutral-400">We collect <strong>minimal data</strong>, only what is necessary to operate the platform.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                    <h3 className="text-white font-display text-lg mb-4">Automatically Collected</h3>
                                    <ul className="space-y-3 text-sm text-neutral-400">
                                        <li>• Temporary user identifiers (random or hashed IDs)</li>
                                        <li>• Connection metadata (timestamps, session duration)</li>
                                        <li>• Device and browser type</li>
                                    </ul>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                    <h3 className="text-white font-display text-lg mb-4">Optional Information</h3>
                                    <ul className="space-y-3 text-sm text-neutral-400">
                                        <li>• Interests, college, or location filters</li>
                                        <li>• Ratings and feedback</li>
                                        <li>• Optional identity reveal (mutual consent)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-amber-500/5 border border-amber-500/20 p-6 rounded-2xl flex items-start gap-4">
                                <span className="text-amber-500 text-xl font-bold italic">⚠️</span>
                                <p className="text-amber-200/80 text-sm m-0 leading-relaxed">
                                    We <strong>do not</strong> require real names, photos, or permanent profiles. Your presence is as light as your conversation.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-3">
                                <EyeOff className="w-5 h-5 text-indigo-400" />
                                <h2 className="text-2xl font-display font-medium m-0 uppercase tracking-wider text-white">2. How We Use Data</h2>
                            </div>
                            <div className="space-y-4 text-neutral-400 text-lg leading-relaxed">
                                <p>We use collected data to match users based on vibes, maintain session integrity, and detect platform misuse.</p>
                                <p className="text-white font-medium">We do not sell your data. Never have, never will.</p>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-indigo-400" />
                                <h2 className="text-2xl font-display font-medium m-0 uppercase tracking-wider text-white">3. Conversation Privacy</h2>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                                {[
                                    'P2P chats are time-limited & expire',
                                    'Messages are not permanently stored',
                                    'Expired conversations are deleted',
                                    'Optional reveal is strictly mutual'
                                ].map((item) => (
                                    <li key={item} className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-neutral-300 text-sm">
                                        <span className="text-indigo-500">→</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-3">
                                <Trash2 className="w-5 h-5 text-red-400" />
                                <h2 className="text-2xl font-display font-medium m-0 uppercase tracking-wider text-white">4. Data Retention</h2>
                            </div>
                            <p className="text-neutral-400 leading-relaxed italic border-l-2 border-white/10 pl-6">
                                Session data is purged instantly after expiration. Ratings and feedback are stored anonymously to build the trust network.
                            </p>
                        </section>
                    </div>

                    <div className="mt-24 pt-12 border-t border-white/5 text-center">
                        <p className="text-neutral-500 text-sm mb-8">Have questions about your digital footprint?</p>
                        <a href="mailto:socialfounders777@gmail.com" className="text-white hover:text-indigo-400 transition-colors underline-offset-8 underline">
                            socialfounders777@gmail.com
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Grain Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] grayscale bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </main>
    );
}
