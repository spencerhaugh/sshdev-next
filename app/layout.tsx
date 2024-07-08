import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/app/components/NavbarComponent/NavbarComponent";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Spencer Haugh",
    description: "A pretty cool nerd",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA=="
                crossOrigin="anonymous"
            />
        </head>
        <body className={inter.className}>
        <main>
            <NavbarComponent/>
            {children}
        </main>
        </body>
        </html>
    );
}
