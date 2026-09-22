import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "João Victor · Desenvolvedor Backend",
  description: "Portfólio de João Victor Azevedo de Sena, desenvolvedor backend: APIs em Java, Python e Node.js, DevOps e agentes de IA.",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Fonte pontilhada (dot-matrix) do estilo AI Runtime / MotionSites */}
        <link
          rel="stylesheet"
          href="https://db.onlinewebfonts.com/c/8cb707a9b8a73f8a7403336b861c3074?family=BubbledotICG-FinePos"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
