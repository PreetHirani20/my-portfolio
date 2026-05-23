import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preet Hirani — Full Stack Developer & AI Engineer",
  description:
    "Full Stack Developer with 1+ year of production experience delivering enterprise web applications and AI-powered automation. Finalist at Meta PyTorch OpenEnv Hackathon (52,000+ participants). Angular, .NET, Python, AI/ML specialist.",
  keywords: [
    "Preet Hirani",
    "Full Stack Developer",
    "AI Engineer",
    "Angular",
    ".NET",
    "Python",
    "Machine Learning",
    "Portfolio",
    "Meta Hackathon",
  ],
  authors: [{ name: "Preet Hirani" }],
  openGraph: {
    title: "Preet Hirani — Full Stack Developer & AI Engineer",
    description:
      "Full Stack Developer building enterprise web applications and AI-powered automation. Meta PyTorch OpenEnv Hackathon Finalist.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-primary text-text-primary font-sans grain antialiased">
        {children}
      </body>
    </html>
  );
}
