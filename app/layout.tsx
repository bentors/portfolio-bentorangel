import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReset from "../components/ScrollReset";

export const metadata: Metadata = {
  title: "Bento Rangel | Software Engineer & Data",
  description: "Engenheiro de Software focado em arquitetura robusta, back-end escalável e dados. Conheça meus projetos e trajetória.",
  keywords: ["Software Engineer", "Engenheiro de Software", "Java", "Python", "Data Engineering", "FIAP", "Street Stars"],
  authors: [{ name: "Bento Rangel" }],
  openGraph: {
    title: "Bento Rangel | Portfólio Profissional",
    description: "Explorando a intersecção entre código de alta performance e visão de negócio.",
    url: "https://portfolio-bentorangel.vercel.app/", 
    siteName: "Bento Rangel Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bento Rangel Portfolio Preview",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bento Rangel | Software Engineer",
    description: "Arquitetura de soluções e Engenharia de Software.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-zinc-950 text-zinc-300 antialiased selection:bg-purple-500/30 selection:text-purple-200">
        <ScrollReset />
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}