import type { Metadata } from "next";
import { JetBrains_Mono, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "AstraForge | Sandboxed Execution Engine for AI Agents",
  description: "Secure, isolated execution environments for AI agents. Run real code safely with Docker, Kubernetes, gVisor, and Kata/Firecracker isolation.",
  keywords: ["AI agents", "sandboxing", "secure execution", "DevOps", "Kubernetes", "Docker"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${ibmPlexMono.variable} font-body antialiased bg-astra-black text-astra-text`}
      >
        {children}
      </body>
    </html>
  );
}
