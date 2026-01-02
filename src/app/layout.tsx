import type { Metadata } from "next";
import { Inter, Space_Mono, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

const spaceMono = Space_Mono({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-space-mono",
    display: "swap",
});



export const viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

const siteUrl = 'https://connectree.space';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Connectree | The Short Debate Chat",
        template: "%s | Connectree"
    },
    description: "An anonymous sanctuary for real conversations. Match with strangers, pick a vibe, and talk for exactly 270 seconds. No noise, just connection.",
    keywords: ["social experiment", "anonymous chat", "debate", "connection", "vibe match", "talk to strangers"],
    authors: [{ name: "Connectree Team", url: siteUrl }],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        title: "Connectree | The Short Debate Chat",
        description: "An anonymous sanctuary for real conversations. Match with strangers, pick a vibe, and talk for exactly 270 seconds.",
        siteName: 'Connectree',
        images: [
            {
                url: '/og-image.png', // Ensure this exists or is handled
                width: 1200,
                height: 630,
                alt: 'Connectree Social Experiment',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Connectree | The Short Debate Chat",
        description: "An anonymous sanctuary for real conversations. Talk for 270 seconds.",
        creator: '@connectree', // Update if real handle exists
        images: ['/og-image.png'],
    },
    alternates: {
        canonical: siteUrl,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Connectree',
        applicationCategory: 'SocialNetworkingApplication',
        operatingSystem: 'Any',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        description: 'An anonymous sanctuary for real conversations. Match with strangers, pick a vibe, and talk for exactly 270 seconds.',
    };

    return (
        <html lang="en">
            <body className={`${inter.variable} ${outfit.variable} ${spaceMono.variable} antialiased bg-void-dark text-star-white font-sans overflow-x-hidden`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {children}
            </body>
        </html>
    );
}
