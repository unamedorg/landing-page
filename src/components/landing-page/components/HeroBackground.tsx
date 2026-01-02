"use client";

import { useEffect, useRef } from "react";

/**
 * HERO BACKGROUND: INTERACTIVE CONSTELLATION
 * Only for the Intro Section.
 */

interface Star {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
}

export function HeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Parent element dimensions (Hero Section)
        const updateDimensions = () => {
            if (canvas.parentElement) {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = canvas.parentElement.clientHeight;
            }
        };
        updateDimensions();

        // Config
        const CONNECTION_DIST = 120;
        const MOUSE_DIST = 150;
        const BASE_SPEED = 0.15;

        // Star Count based on width (Optimized)
        const isMobile = window.innerWidth < 768;
        const starCount = isMobile ? 15 : 50;

        const stars: Star[] = [];
        let mouseX = -500;
        let mouseY = -500;

        // Initialize
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * BASE_SPEED,
                vy: (Math.random() - 0.5) * BASE_SPEED,
                size: Math.random() * 2 + 0.5
            });
        }

        let frameId: number;
        let lastFrameTime = 0;
        const fpsInterval = isMobile ? 1000 / 30 : 1000 / 60; // 30 FPS on mobile

        const draw = (currentTime: number) => {
            frameId = requestAnimationFrame(draw);

            const elapsed = currentTime - lastFrameTime;
            if (elapsed < fpsInterval) return;

            lastFrameTime = currentTime - (elapsed % fpsInterval);

            const width = canvas.width;
            const height = canvas.height;

            ctx.clearRect(0, 0, width, height);

            // 1. Update Positions
            stars.forEach(star => {
                star.x += star.vx;
                star.y += star.vy;

                // Bounce off edges
                if (star.x < 0 || star.x > width) star.vx *= -1;
                if (star.y < 0 || star.y > height) star.vy *= -1;

                // Mouse Repulsion/Attraction
                const dx = mouseX - star.x;
                const dy = mouseY - star.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < MOUSE_DIST) {
                    const force = (MOUSE_DIST - dist) / MOUSE_DIST;
                    star.vx -= (dx / dist) * force * 0.05;
                    star.vy -= (dy / dist) * force * 0.05;
                }
            });

            // 2. Draw Connections
            ctx.lineWidth = 1; // Thicker lines for better visibility (was 0.5)
            for (let i = 0; i < stars.length; i++) {
                const s1 = stars[i];

                // Connect to Mouse (relative to canvas)
                const dxm = mouseX - s1.x;
                const dym = mouseY - s1.y;
                const distm = Math.sqrt(dxm * dxm + dym * dym);
                if (distm < MOUSE_DIST) {
                    ctx.beginPath();
                    // Super Bright Mouse Interaction
                    ctx.strokeStyle = `rgba(255, 255, 255, ${0.9 * (1 - distm / MOUSE_DIST)})`;
                    ctx.moveTo(s1.x, s1.y);
                    ctx.lineTo(mouseX, mouseY);
                    ctx.stroke();
                }

                for (let j = i + 1; j < stars.length; j++) {
                    const s2 = stars[j];
                    const dx = s1.x - s2.x;
                    const dy = s1.y - s2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < CONNECTION_DIST) {
                        ctx.beginPath();
                        const opacity = 1 - (dist / CONNECTION_DIST);
                        // Much Brighter Static Connections (0.2 -> 0.7 factor)
                        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.7})`;
                        ctx.moveTo(s1.x, s1.y);
                        ctx.lineTo(s2.x, s2.y);
                        ctx.stroke();
                    }
                }
            }

            // 3. Draw Stars
            ctx.fillStyle = "#fff";
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Loop is handled at the top
        };

        const handleResize = () => {
            updateDimensions();
        };

        let lastMove = 0;
        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now();
            if (now - lastMove < 30) return; // 30ms throttle (~33fps matching)
            lastMove = now;

            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        window.addEventListener("resize", handleResize);
        // Attach mouse move to window or canvas? 
        // Window is better for smooth tracking entering/leaving
        if (!isMobile) {
            window.addEventListener("mousemove", handleMouseMove);
        }

        frameId = requestAnimationFrame(draw);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (!isMobile) {
                window.removeEventListener("mousemove", handleMouseMove);
            }
            cancelAnimationFrame(frameId);
        };
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ contain: 'paint layout' }}>
            <canvas ref={canvasRef} className="block will-change-transform" style={{ imageRendering: 'auto' }} />

            {/* Gradient Fade at bottom to blend into next section */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>
    );
}
