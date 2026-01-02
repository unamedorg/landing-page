"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
    {
        question: "Is this app really anonymous?",
        answer: "Yes. No real names or profiles are required. You control what you share."
    },
    {
        question: "Are chats recorded?",
        answer: "No permanent storage. Chats expire automatically after the session ends."
    },
    {
        question: "Can someone see my identity?",
        answer: "Only if both users agree to reveal it. Otherwise, identities stay hidden."
    },
    {
        question: "How long does a conversation last?",
        answer: "Standard P2P chats last 270 seconds (4.5 minutes). Debate rooms vary by format."
    },
    {
        question: "What happens after time runs out?",
        answer: "The room closes automatically. Messages stop. No reopening."
    },
    {
        question: "Can I choose who I talk to?",
        answer: "You can apply vibe filters like interests, college, or workspace, but exact matches aren't guaranteed."
    },
    {
        question: "How are debate rooms moderated?",
        answer: "Through a mix of community rules, automated moderation, and user reports."
    },
    {
        question: "Is this a dating app?",
        answer: "No. This platform is about conversation, not dating."
    },
    {
        question: "Can I get banned?",
        answer: "Yes, if you violate rules or receive repeated negative feedback."
    },
    {
        question: "Why time-limited chats?",
        answer: "Because meaningful conversations don't need infinity. ⏳"
    }
];

export function FAQ() {
    return (
        <section id="faq" className="py-24 md:py-32 px-6 relative z-10 w-full max-w-4xl mx-auto section-optimized motion-gpu">

            {/* Header */}
            <div className="mb-16 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-[10px] font-bold text-neutral-500 tracking-[0.2em] uppercase">
                        Support
                    </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6 tracking-tight">
                    Frequently Asked Questions
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
            </div>

            {/* Grid for FAQs */}
            <div className="grid grid-cols-1 gap-4">
                {FAQS.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>

        </section>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            onClick={() => setIsOpen(!isOpen)}
            className="group border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-white/10"
        >
            <div className="p-6 flex items-center justify-between gap-4">
                <h3 className={`font-sans font-medium text-lg transition-colors ${isOpen ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
                    {question}
                </h3>
                <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-white/10 text-white' : 'bg-transparent text-neutral-500 group-hover:text-white'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 pt-0 text-neutral-400 font-sans leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
