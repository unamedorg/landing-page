"use client";

import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { ComingSoonModal } from "./ComingSoonModal";
import { useState } from "react";

/**
 * FULL SCREEN FOOTER (DevAegis Style)
 * Huge Logic. Clean Columns. Minimalist.
 */

export function Footer() {
    const [isComingSoonOpen, setIsComingSoonOpen] = useState(false);

    const handleComingSoon = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsComingSoonOpen(true);
    };

    return (
        <footer id="footer" className="relative bg-black w-full flex flex-col justify-between pt-96 pb-12 overflow-hidden z-30">

            <ComingSoonModal isOpen={isComingSoonOpen} onClose={() => setIsComingSoonOpen(false)} />

            {/* 1. Main Links Section */}
            <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-8 relative z-50 text-center">

                {/* Column 1 */}
                <div className="flex flex-col gap-6 items-center">
                    <h4 className="font-display font-medium text-white text-lg">Product</h4>
                    <FooterLink href="#" onClick={handleComingSoon}>Download</FooterLink>
                    <FooterLink href="#" onClick={handleComingSoon}>Integrations</FooterLink>
                    <FooterLink href="#" onClick={handleComingSoon}>Docs</FooterLink>
                    <FooterLink href="#" onClick={handleComingSoon}>Changelog</FooterLink>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-6 items-center">
                    <h4 className="font-display font-medium text-white text-lg">Resources</h4>
                    <FooterLink href="#" onClick={handleComingSoon}>Twitter</FooterLink>
                    <FooterLink href="#" onClick={handleComingSoon}>GitHub</FooterLink>
                    <FooterLink href="#" onClick={handleComingSoon}>Discord</FooterLink>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-6 items-center">
                    <h4 className="font-display font-medium text-white text-lg">Company</h4>
                    <FooterLink href="/#faq">FAQs</FooterLink>
                    <FooterLink href="/about">About</FooterLink>
                    <FooterLink href="mailto:socialfounders777@gmail.com">Contact</FooterLink>
                </div>

                {/* Column 4 */}
                <div className="flex flex-col gap-6 items-center">
                    <h4 className="font-display font-medium text-white text-lg">Legal</h4>
                    <FooterLink href="/privacy">Privacy</FooterLink>
                    <FooterLink href="/terms">Terms</FooterLink>
                </div>
            </div>

            {/* 2. MASSIVE CENTERED LOGO */}
            <div className="flex-1 flex items-center justify-center w-full overflow-hidden my-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    <h1 className="text-[12vw] leading-none font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 tracking-tighter select-none">
                        Connectree
                    </h1>
                </motion.div>
            </div>

            {/* 3. Bottom Bar */}
            <div className="w-full max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col items-center justify-center text-xs text-neutral-400 font-mono">
                <p>© 2026 Connectree. All rights reserved.</p>
            </div>

        </footer>
    );
}

function FooterLink({ href, children, onClick }: { href: string, children: React.ReactNode, onClick?: (e: React.MouseEvent) => void }) {
    return (
        <a
            href={href}
            onClick={onClick}
            className="text-neutral-400 hover:text-white transition-colors text-sm font-sans font-medium cursor-pointer"
        >
            {children}
        </a>
    );
}
