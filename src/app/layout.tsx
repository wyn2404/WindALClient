import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "WindAnime - World of anime.",
    description: "Website for people like anime.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} scroll-smooth scrollbar-thumb-rose-500`}
            >
                <NavBar />
                <div className="mt-20">{children}</div>
            </body>
        </html>
    );
}
