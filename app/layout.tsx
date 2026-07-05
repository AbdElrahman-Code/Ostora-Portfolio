import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdelrahman-yousry.dev"),
  title: "Abdelrahman Yousry Abdelaziz — Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, WordPress and AI-powered products. Building fast, reliable, production-grade web applications.",
  keywords: [
    "Abdelrahman Yousry",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "AI Engineer",
    "WordPress Developer",
  ],
  authors: [{ name: "Abdelrahman Yousry Abdelaziz" }],
  openGraph: {
    title: "Abdelrahman Yousry Abdelaziz — Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, WordPress and AI-powered products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme', t==='light'?'light':'dark');}catch(e){}`,
          }}
        />
      </head>
      <body className="selection:bg-signal-indigo/40 relative">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-10 bg-grid bg-grid bg-radial-fade"
          style={{
            backgroundImage: `linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
