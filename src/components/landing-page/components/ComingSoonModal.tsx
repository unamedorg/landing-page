"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ComingSoonModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-[#121212] border border-white/10 p-8 rounded-3xl max-w-sm w-full shadow-2xl pointer-events-auto relative overflow-hidden group">
                            {/* Decorative Glow */}
                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-500/20 rounded-full blur-[50px] group-hover:bg-indigo-500/30 transition-colors duration-500" />
                            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-[50px] group-hover:bg-purple-500/30 transition-colors duration-500" />

                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-inner">
                                    <Sparkles className="w-8 h-8 text-indigo-400 animate-pulse" />
                                </div>

                                <h3 className="text-2xl font-display font-bold text-white mb-3">Coming Soon</h3>
                                <p className="text-neutral-400 font-sans text-sm leading-relaxed mb-8">
                                    We're crafting something special here. This feature is currently in the lab 🧪.
                                    <br />Stay tuned for updates!
                                </p>

                                <button
                                    onClick={onClose}
                                    className="px-8 py-3 bg-white text-black text-sm font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                >
                                    Okay, I'll Wait
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
