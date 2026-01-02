"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Scale, FileText, Ban, AlertCircle, LifeBuoy } from "lucide-react";

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[-5%] w-[30vw] h-[30vw] bg-purple-500/5 rounded-full blur-[100px]" />
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
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                            <Scale className="w-8 h-8 text-indigo-400" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight">Terms & Conditions</h1>
                            <p className="text-neutral-500 mt-2 font-mono text-xs uppercase tracking-widest">Last updated: January 2, 2026</p>
                        </div>
                    </div>

                    <div className="prose prose-invert prose-neutral max-w-none space-y-16">
                        <p className="text-xl text-neutral-300 leading-relaxed font-light border-b border-white/5 pb-10">
                            By entering the arena, you agree to these terms of engagement. Connectree is a space for intentional, temporary, and respectful human interaction.
                        </p>

                        <section className="space-y-8">
                            <div className="flex items-center gap-3">
                                <FileText className="w-5 h-5 text-indigo-400" />
                                <h2 className="text-2xl font-display font-medium m-0 uppercase tracking-wider text-white">1. Platform Purpose</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                    <p className="text-indigo-400 font-bold mb-2">01</p>
                                    <p className="text-neutral-300">Anonymous, time-bound 1-to-1 conversations.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                                    <p className="text-indigo-400 font-bold mb-2">02</p>
                                    <p className="text-neutral-300">Multi-user debate rooms on curated topics.</p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-3">
                                <Ban className="w-5 h-5 text-red-500" />
                                <h2 className="text-2xl font-display font-medium m-0 uppercase tracking-wider text-white">2. Rules of Engagement</h2>
                            </div>
                            <p className="text-neutral-400 leading-relaxed">
                                Connectree is a zero-tolerance arena for toxicity. You agree <strong>not</strong> to:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 list-none p-0 text-neutral-400 text-sm">
                                {['Harass or abuse others', 'Share explicit or illegal content', 'Attempt to deanonymize users', 'Record or redistribute chats', 'Game ratings or matchmaking'].map((rule) => (
                                    <li key={rule} className="flex gap-3 items-center">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> {rule}
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 text-indigo-400" />
                                <h2 className="text-2xl font-display font-medium m-0 uppercase tracking-wider text-white">3. Liability & Limits</h2>
                            </div>
                            <p className="text-neutral-400 leading-relaxed">
                                We provide the space, but you provide the soul. We are not responsible for user-generated content or off-platform interactions. Use the platform at your own discretion.
                            </p>
                        </section>

                        <section className="space-y-8">
                            <div className="flex items-center gap-3">
                                <LifeBuoy className="w-5 h-5 text-indigo-400" />
                                <h2 className="text-2xl font-display font-medium m-0 uppercase tracking-wider text-white">4. Termination</h2>
                            </div>
                            <p className="text-neutral-400 italic">
                                We reserve the right to suspend or ban accounts without notice for violations. The integrity of the arena is our priority.
                            </p>
                        </section>
                    </div>

                    <div className="mt-24 py-10 rounded-3xl bg-indigo-500/5 border border-indigo-500/10 text-center">
                        <p className="text-neutral-400 text-sm mb-4">Acceptance of these terms begins upon your first match.</p>
                        <Link href="/" className="text-white hover:text-indigo-400 transition-colors font-bold uppercase tracking-widest text-xs">
                            Return to Arena
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Grain Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] grayscale bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </main>
    );
}
