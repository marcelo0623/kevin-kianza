import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kevin Kianza | Site Officiel",
  description: "Bienvenue sur le site officiel de Kevin Kianza. Louange, adoration et partages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-stone-50 text-stone-900 antialiased flex flex-col min-h-screen`}>
        
        {/* NAVBAR MODULARISÉE */}
        <Navbar />

        {/* CONTENU DE LA PAGE */}
        <main className="flex-grow">{children}</main>

        {/* FOOTER */}
        <footer className="bg-stone-900 text-stone-400 py-8 border-t border-stone-800">
          <div className="max-w-6xl mx-auto px-4 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Kevin Kianza. Tous droits réservés.</p>
            <p className="mt-2 text-xs text-stone-500">Powered by Marcelo Dimi © 2026
</p>
          </div>
        </footer>

      </body>
    </html>
  );
}