import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Florian Bourdenet",
    description:
        "hey ! my name is florian, i'm 23 years old, and i'm a french full-stack developer based in nice, france.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
