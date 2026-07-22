import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ecological Kintsugi",
  description:
    "A temporary repair trace project making overlooked urban cracks and marginal ecologies visible.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Ecological Kintsugi",
    description:
      "Temporary repair traces, public noticing, and a growing archive of marginal urban ecologies.",
    type: "website",
    images: ["/archive-final/hero-application.jpg"],
  },
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
