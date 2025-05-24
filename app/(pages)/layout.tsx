
import "./globals.css";

import { Red_Hat_Display } from 'next/font/google'

const redHatDisplay = Red_Hat_Display({
    subsets: ["latin"],
    weight: ["400", "500", "700"]
})

console.log("🔥 Firebase private key:", process.env.FIREBASE_PRIVATE_KEY);
console.log("🔥 Firebase project id:", process.env.FIREBASE_PROJECT_ID);
console.log("🔥 Firebase key base 64:", process.env.FIREBASE_PRIVATE_KEYBASE64); // apenas para teste

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        <body
            className={`${redHatDisplay.className} bg-background-primary text-content-body antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
