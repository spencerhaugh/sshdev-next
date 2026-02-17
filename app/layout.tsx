import type { Metadata } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavbarComponent from "@/app/components/NavbarComponent/NavbarComponent";
import { links } from "@/app/app.config";

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
        <body>
        <main>
            <NavbarComponent links={links}/>
            {children}
        </main>
        </body>
        </html>
    );
}
