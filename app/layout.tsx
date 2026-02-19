import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Bento Rangel | Engenheiro de Software",
  description: "Portfólio de Bento Rangel, focado em Engenharia de Software e análise de dados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-zinc-950 text-zinc-300 antialiased selection:bg-purple-500/30 selection:text-purple-200">
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}