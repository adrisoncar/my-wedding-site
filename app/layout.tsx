// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Monika & Adrison Are Getting Married!",
  description: "Join us for the wedding celebration of Monika & Adrison.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased w-full", // Ensure body takes full width
          fontSans.variable,
          fontSerif.variable
        )}
      >
        {/* Remove any container or max-width class from the direct child */}
        <main className="flex-grow w-full">{children}</main>
        <footer className="text-center py-4 text-sm text-muted-foreground bg-slate-900 w-full">
          Made with love ❤️ for Monika & Adrison
        </footer>
      </body>
    </html>
  );
}

