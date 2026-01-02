"use client";

import { useRef, memo } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useVelocity,
    useAnimationFrame,
    useMotionValue
} from "framer-motion";

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface VelocityTextProps {
    children: string[];
    baseVelocity: number;
}

const ParallaxText = memo(function ParallaxText({ children, baseVelocity = 100 }: VelocityTextProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const skewVelocity = useTransform(smoothVelocity, [-1000, 1000], [-10, 10]);
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden tracking-[-2px] m-0 whitespace-nowrap flex flex-nowrap py-1 md:py-4" style={{ willChange: 'transform' }}>
            <motion.div
                className="flex whitespace-nowrap flex-nowrap gap-12 md:gap-24"
                style={{ x, skew: skewVelocity, transform: 'translateZ(0)' }}
            >
                {[1, 2].map((i) => (
                    <div key={i} className="flex gap-12 md:gap-24 items-center">
                        {children.map((vibe) => (
                            <div key={vibe} className="group relative flex flex-col items-center">
                                <span className="text-[10px] md:text-[12px] font-bold text-[#1e3a8a] mb-1 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-[0.3em]">
                                    Vibe
                                </span>
                                <h1 className="font-display font-black text-[40px] md:text-[90px] uppercase transition-all duration-300 text-transparent border-text group-hover:text-white group-hover:scale-105">
                                    {vibe}
                                </h1>
                                <style jsx>{`
                                    .border-text {
                                        -webkit-text-stroke: 1px rgba(255,255,255,0.2);
                                    }
                                    .group:hover .border-text {
                                        -webkit-text-stroke: 1px rgba(255,255,255,1);
                                    }
                                `}</style>
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </div>
    );
});

export function ScrollVelocity() {
    const vibes = ["Romantic", "Funny", "Political", "Tech", "Philosophical"];

    return (
        <section id="vibes" className="relative w-full py-12 md:py-24 overflow-hidden bg-transparent border-y border-[rgba(255,255,255,0.05)]">
            {/* Intro Text */}
            <div className="flex flex-col items-center mb-8 md:mb-16 text-center px-6">
                <h3 className="text-white font-display text-2xl md:text-5xl max-w-4xl leading-[1.1] font-bold tracking-tight">
                    Vibe with people based <br className="hidden md:block" />
                    on who they are and the <span className="italic bg-gradient-to-r from-[#22d3ee] via-[#3b82f6] to-[#a855f7] text-transparent bg-clip-text decoration-2 underline-offset-8">vibes</span> they bring.
                </h3>
            </div>

            <div className="relative flex flex-col gap-0 select-none">
                <ParallaxText baseVelocity={-1}>{vibes}</ParallaxText>
                <ParallaxText baseVelocity={1}>{vibes}</ParallaxText>
            </div>

            {/* Decorative Overlay - Reduced on Mobile */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-64 bg-gradient-to-r from-black via-black/90 to-transparent z-20 pointer-events-none opacity-50 md:opacity-100" />
            <div className="absolute inset-y-0 right-0 w-12 md:w-64 bg-gradient-to-l from-black via-black/90 to-transparent z-20 pointer-events-none opacity-50 md:opacity-100" />
        </section>
    );
}
