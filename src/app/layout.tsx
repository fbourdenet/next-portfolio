import { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google'

import "./globals.css";
import { Providers } from "./providers";

const IBM_PLEX_MONO = IBM_Plex_Mono({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: "Florian Bourdenet",
    description: "hey! my name is florian, i'm 23 years old, and i'm a french full-stack developer based in nice, france.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={IBM_PLEX_MONO.className}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
