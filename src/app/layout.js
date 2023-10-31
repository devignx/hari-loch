import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: `Loch - You can't improve what you don't measure`,
    description: `Institution-grade wallet aggregation for retail investors across leading blockchains.`,
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
