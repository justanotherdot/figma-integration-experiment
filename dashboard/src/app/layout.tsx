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

        <meta property="og:url" content="https://figma-integration-experiment-cjo.vercel.app/video.mp4" />
        <meta property="og:type" content="video/mp4" />
        <meta property="og:video" content="https://figma-integration-experiment-cjo.vercel.app/video.mp4" />
        <meta property="og:video:secure_url" content="https://figma-integration-experiment-cjo.vercel.app/video.mp4" />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="640" />
        <meta property="og:video:height" content="360" />
        <meta property="og:image" content="https://figma-integration-experiment-hcjo.vercel.app/thumbnail.jpg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
