import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://doraaiovo.github.io"),
  title: "Dora Ai — making, learning, and probably playing a game",
  description:
    "Dora Ai’s little corner of the internet: AI products, creative experiments, good UI, and a very serious love of video games.",
  openGraph: {
    title: "Hi, I’m Dora.",
    description:
      "AI products, creative experiments, good UI, and a very serious love of video games.",
    url: "https://doraaiovo.github.io",
    siteName: "Dora AI",
    type: "website",
    images: [
      {
        url: "/og-playful.png",
        width: 1734,
        height: 907,
        alt: "Dora — curious by default",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hi, I’m Dora.",
    description:
      "AI products, creative experiments, good UI, and a very serious love of video games.",
    images: ["/og-playful.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#fffaf4",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
