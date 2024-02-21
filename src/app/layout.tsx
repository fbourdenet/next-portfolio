import { IBM_Plex_Mono } from 'next/font/google'

import "./globals.css";
import { Providers } from "./providers";

const IBM_PLEX_MONO = IBM_Plex_Mono({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
})

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
