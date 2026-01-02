import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "void-dark": "#050505",
                "void-blue": "#0a0a1a",
                "star-white": "#fffbf0",
                "neon-orange": "#ff6b35",
                "cyan-glow": "#00f0ff",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                outfit: ["var(--font-outfit)", "sans-serif"],
                serif: ["var(--font-playfair)", "serif"],
                mono: ["var(--font-space-mono)", "monospace"],
                display: ["var(--font-outfit)", "sans-serif"],
                "sci-fi": ['"Michroma"', "sans-serif"],
            },
            backgroundImage: {
                "grain": "url('/noise.svg')", // Placeholder, will rely on GrainOverlay component usually
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
