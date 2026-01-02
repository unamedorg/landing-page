"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export function Navbar() {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const rect = el.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            window.scrollTo({
                top: rect.top + scrollTop - 100,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-4 md:top-6 left-0 right-0 z-[100] px-4 md:px-6 flex justify-center pointer-events-none"
            >
                <div className={`
                    flex items-center justify-between md:justify-start gap-4 md:gap-10 px-4 md:px-6 py-2 rounded-full pointer-events-auto
                    transition-all duration-500 border w-full max-w-[95vw] md:w-auto
                    ${isScrolled
                        ? "bg-[rgba(0,0,0,0.6)] backdrop-blur-xl border-[rgba(255,255,255,0.1)] shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                        : "bg-[rgba(0,0,0,0.2)] backdrop-blur-md border-[rgba(255,255,255,0.05)]"
                    }
                `}>
                    {/* LEFT: Logo */}
                    <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <Logo size="sm" className="!scale-75 md:!scale-90 origin-left" />
                        <span className="hidden sm:block px-2 py-0.5 rounded bg-[#1e3a8a]/10 border border-[#1e3a8a]/20 text-[8px] font-bold text-[#1e3a8a] uppercase tracking-widest leading-none">
                            V1.0 Beta
                        </span>
                    </div>

                    {/* CENTER: Mobile Hamburger (Absolute) */}
                    <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-white/80 hover:text-white transition-colors"
                            aria-label="Toggle menu"
                        >
                            <div className="flex flex-col gap-1.5 w-5">
                                <span className={`block w-full h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                                <span className={`block w-full h-0.5 bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                                <span className={`block w-full h-0.5 bg-current transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                            </div>
                        </button>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        <button onClick={() => scrollTo('features')} className="text-[12px] font-medium text-neutral-400 hover:text-white transition-colors">Features</button>
                        <button onClick={() => scrollTo('vibes')} className="text-[12px] font-medium text-neutral-400 hover:text-white transition-colors">Vibes</button>
                        <button onClick={() => scrollTo('preview')} className="text-[12px] font-medium text-neutral-400 hover:text-white transition-colors">Experience</button>
                        <button onClick={() => scrollTo('faq')} className="text-[12px] font-medium text-neutral-400 hover:text-white transition-colors">FAQ</button>
                    </div>

                    {/* RIGHT: Actions */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => window.open('https://arena.connectree.space', '_blank')}
                            className="hidden md:block text-[12px] font-medium text-neutral-400 hover:text-white transition-colors"
                        >
                            Log In
                        </button>
                        <button
                            onClick={() => window.open('https://arena.connectree.space', '_blank')}
                            className="relative px-4 py-2 md:px-5 md:py-2 bg-[#1e3a8a] text-white rounded-full font-bold text-[10px] md:text-[11px] transition-all hover:scale-105 hover:bg-[#2563eb] shadow-[0_0_20px_rgba(30,58,138,0.3)] uppercase tracking-wider block"
                        >
                            Join Arena
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-xl pt-32 px-6 flex flex-col items-center gap-8 md:hidden"
                >
                    <button onClick={() => scrollTo('features')} className="text-xl font-display font-medium text-white/80 hover:text-white">Features</button>
                    <button onClick={() => scrollTo('vibes')} className="text-xl font-display font-medium text-white/80 hover:text-white">Vibes</button>
                    <button onClick={() => scrollTo('preview')} className="text-xl font-display font-medium text-white/80 hover:text-white">Experience</button>
                    <button onClick={() => scrollTo('faq')} className="text-xl font-display font-medium text-white/80 hover:text-white">FAQ</button>

                    <div className="w-full h-[1px] bg-white/10 my-4" />

                    <button onClick={() => window.open('https://arena.connectree.space', '_blank')} className="text-lg font-medium text-indigo-400">Log In</button>
                    <button
                        onClick={() => window.open('https://arena.connectree.space', '_blank')}
                        className="w-full py-4 bg-[#1e3a8a] text-white rounded-full font-bold text-sm uppercase tracking-wider"
                    >
                        Join Arena
                    </button>
                </motion.div>
            )}
        </>
    );
}
