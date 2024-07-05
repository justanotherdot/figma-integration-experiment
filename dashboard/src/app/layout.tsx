import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Example Video Title" />
        <meta property="og:description" content="Description of the example video" />
        <meta property="og:type" content="video.other" />
        <meta property="og:video:url" content="https://figma-integration-experiment-hcjo.vercel.app/video.mp4" />
        <meta property="og:video:secure_url" content="https://figma-integration-experiment-hcjo.vercel.app/video.mp4" />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="640" />
        <meta property="og:video:height" content="360" />
        <meta property="og:image" content="https://figma-integration-experiment-hcjo.vercel.app/thumbnail.jpg" />
        <meta property="og:video:embed" content="https://figma-integration-experiment-hcjo.vercel.app/embed/video.mp4" />
        <meta property="twitter:card" content="player" />
        <meta property="twitter:site" content="@_justanotherdot" />
        <meta property="twitter:title" content="Example Video Title" />
        <meta property="twitter:description" content="Description of the example video" />
        <meta property="twitter:image" content="https://figma-integration-experiment-hcjo.vercel.app/thumbnail.jpg" />
        <meta property="twitter:player" content="https://figma-integration-experiment-hcjo.vercel.app/embed/video.mp4" />
        <meta property="twitter:player:width" content="640" />
        <meta property="twitter:player:height" content="360" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
