import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/CustomCursor";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollReset from "../components/ScrollReset";
import ThemeControls from "../components/ThemeControls";

// Alternativa livre (OFL) à PP Neue Montreal Mono do p5aholic
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-site" });

export const metadata: Metadata = {
  metadataBase: new URL("https://bentorangel.vercel.app"),
  title: "Bento Rangel | Software Engineer",
  description: "Dev backend e full stack em cybersecurity na Neotel. Python/Django, Java/Spring, React/TypeScript. Engenharia de Software na FIAP (2027) e cofundador da Street Stars.",
  keywords: ["Software Engineer", "Engenheiro de Software", "Backend", "Full Stack", "Cybersecurity", "Java", "Spring Boot", "Python", "Django", "TypeScript", "FIAP", "Street Stars"],
  authors: [{ name: "Bento Rangel" }],
  openGraph: {
    title: "Bento Rangel | Software Engineer",
    description: "Dev backend e full stack em cybersecurity. Python/Django, Java/Spring, React/TypeScript.",
    url: "https://bentorangel.vercel.app/", 
    siteName: "Bento Rangel",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfólio de Bento Rangel",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bento Rangel | Software Engineer",
    description: "Dev backend e full stack em cybersecurity. Python/Django, Java/Spring, React/TypeScript.",
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
    <html lang="pt-BR" className={`scroll-smooth ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Tema salvo ou, sem escolha, o do sistema; aplicado antes da pintura (sem flash) */}
        <script dangerouslySetInnerHTML={{ __html: `try{document.documentElement.dataset.theme=localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")}catch(e){}` }} />
      </head>
      <body className="bg-page text-zinc-300 antialiased selection:bg-purple-500/30 selection:text-purple-200">
        <ScrollReset />
        <CustomCursor />
        <Header />
        {children}
        <Footer />
        <ThemeControls />
      </body>
    </html>
  );
}