"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Shield, Zap, Target, Sparkles, MessageSquare } from "lucide-react";

export default function AboutPage() {
    const sectionVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30 overflow-x-hidden">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-indigo-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[30vw] h-[30vw] bg-purple-500/5 rounded-full blur-[100px]" />
                <div className="absolute top-[40%] left-[20%] w-[20vw] h-[20vw] bg-blue-500/5 rounded-full blur-[80px]" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8">
                <div className="max-w-5xl mx-auto flex items-center">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-bold uppercase tracking-widest">Back to Home</span>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 px-6 z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="inline-block px-3 py-1 mb-8 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400">
                            The Manifesto
                        </span>
                        <h1 className="text-5xl md:text-8xl font-display font-medium tracking-tight leading-[1.1] mb-12">
                            Real conversation. <br />
                            <span className="text-neutral-500 italic font-light">Without the noise.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Content Sections - Storytelling Layout */}
            <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-48 pb-48">

                {/* Intro Story */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-8"
                >
                    <p className="text-2xl md:text-3xl text-neutral-300 font-sans font-light leading-relaxed">
                        We live in a world of infinite feeds and endless chats, yet real conversation feels increasingly rare.
                    </p>
                    <p className="text-xl text-neutral-400 leading-relaxed italic">
                        This platform was built on a simple idea: connection matters more when it has a beginning and an end.
                    </p>
                    <p className="text-lg text-neutral-400 leading-relaxed">
                        We bring people together for short, focused conversations that last just <span className="text-white font-medium">270 seconds</span>. No pressure to perform. No obligation to stay. No requirement to show your face or reveal who you are. Just two humans meeting in a small pocket of time.
                    </p>
                </motion.section>

                {/* Why Time-Limited? */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-12"
                >
                    <div className="md:col-span-4">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                            <Clock className="w-6 h-6 text-indigo-400" />
                        </div>
                        <h2 className="text-2xl font-display font-medium text-white mb-6 uppercase tracking-wider">
                            Why Time-Limited?
                        </h2>
                    </div>
                    <div className="md:col-span-8 space-y-6">
                        <p className="text-xl text-neutral-300 leading-relaxed">
                            When time is limited, attention sharpens. You listen more. You speak honestly. You show up.
                        </p>
                        <p className="text-lg text-neutral-400 leading-relaxed">
                            Instead of infinite scrolling, we offer intentional moments. Instead of profiles, we offer presence. One conversation at a time.
                        </p>
                    </div>
                </motion.section>

                {/* Anonymity */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-12"
                >
                    <div className="md:col-span-4 md:order-last">
                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 md:ml-auto">
                            <Shield className="w-6 h-6 text-purple-400" />
                        </div>
                        <h2 className="text-2xl font-display font-medium text-white mb-6 uppercase tracking-wider md:text-right">
                            Anonymity With Consent
                        </h2>
                    </div>
                    <div className="md:col-span-8 md:text-right space-y-6">
                        <p className="text-xl text-neutral-300 leading-relaxed">
                            Not everyone is comfortable being seen. But everyone deserves to be heard.
                        </p>
                        <p className="text-lg text-neutral-400 leading-relaxed">
                            You start anonymously. Identity is revealed only if both people choose it. Until then, you’re just a voice, a thought, a vibe drifting through the dark.
                        </p>
                    </div>
                </motion.section>

                {/* Vibe-Based Matching */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-12"
                >
                    <div className="text-center space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-6">
                            <Target className="w-6 h-6 text-cyan-400" />
                        </div>
                        <h2 className="text-3xl font-display font-medium text-white uppercase tracking-widest">
                            Vibe-Based Matching
                        </h2>
                        <p className="text-lg text-neutral-400">Connections here aren’t random chaos.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Interests', 'College/Workspace', 'Location', 'Mood & Intent'].map((vibe, i) => (
                            <div key={vibe} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                                <span className="text-sm font-medium text-neutral-300">{vibe}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-lg text-neutral-400 max-w-xl mx-auto">
                        Think of it as tuning an old radio until the static fades and a familiar signal appears.
                    </p>
                </motion.section>

                {/* Debate Rooms */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col md:flex-row gap-12 items-center"
                >
                    <div className="flex-1 space-y-6">
                        <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
                            <MessageSquare className="w-6 h-6 text-red-500" />
                        </div>
                        <h2 className="text-3xl font-display font-medium text-white uppercase tracking-widest">
                            Debate Rooms
                        </h2>
                        <p className="text-lg text-neutral-300 leading-relaxed">
                            Some conversations aren’t quiet. They crackle.
                        </p>
                        <p className="text-neutral-400 leading-relaxed">
                            Our debate rooms bring multiple voices together around a single topic, encouraging respectful disagreement, clarity of thought, and collective intelligence. Speak your mind. Defend your ideas.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 aspect-square rounded-3xl bg-gradient-to-br from-red-500/10 to-transparent border border-white/5 flex items-center justify-center group overflow-hidden relative">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                        <Zap className="w-12 h-12 text-red-500 group-hover:scale-125 transition-transform duration-500" />
                    </div>
                </motion.section>

                {/* The Aesthetic */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center space-y-8"
                >
                    <h2 className="text-4xl font-display font-medium text-white uppercase tracking-tighter">
                        The Aesthetic
                    </h2>
                    <p className="text-xl text-neutral-400 leading-relaxed max-w-2xl mx-auto">
                        Our world is inspired by <span className="text-white italic">retro-futurism, lo-fi dreamscapes, and quiet sci-fi loneliness.</span> Grain. Glow. Darkness. Small figures in vast spaces.
                    </p>
                    <div className="py-20 flex justify-center gap-12">
                        <div className="w-1 h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                        <p className="text-xs font-mono uppercase tracking-[0.5em] text-neutral-600 vertical-text py-4">
                            Noise Falls Away
                        </p>
                        <div className="w-1 h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                    </div>
                </motion.section>

                {/* Our Belief */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="p-12 rounded-[3rem] bg-indigo-500/[0.03] border border-white/5 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8">
                        <Sparkles className="w-6 h-6 text-indigo-400/50" />
                    </div>
                    <h2 className="text-4xl font-display font-bold text-white mb-12 text-center">We Believe</h2>

                    <div className="space-y-8 max-w-lg mx-auto">
                        {[
                            'Conversation is a skill, not a swipe',
                            'Anonymity can be safe when designed with care',
                            'Not everyone wants to be online forever',
                            'Three minutes can be enough to feel less alone'
                        ].map((belief, i) => (
                            <div key={i} className="flex gap-4 items-start group">
                                <span className="text-indigo-500 font-display font-bold text-xl opacity-40 group-hover:opacity-100 transition-opacity">0{i + 1}</span>
                                <p className="text-xl text-neutral-300 font-light">{belief}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Final CTA */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center pt-20"
                >
                    <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-8">
                        This isn’t social media.
                    </h2>
                    <h3 className="text-5xl md:text-8xl font-display font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-16 italic">
                        This is a moment.
                    </h3>
                    <button
                        onClick={() => window.open('https://connectree.space', '_blank')}
                        className="inline-flex px-12 py-5 bg-white text-black rounded-full font-display font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                    >
                        Enter the Arena
                    </button>
                </motion.section>

            </div>

            {/* Grain Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] grayscale bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <style jsx>{`
                .vertical-text {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }
            `}</style>
        </main>
    );
}
