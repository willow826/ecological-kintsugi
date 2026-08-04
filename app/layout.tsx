import type { Metadata } from "next";
import "./globals.css";

const gitHubRepoPath =
  process.env.GITHUB_PAGES === "1" && process.env.GITHUB_PAGES_REPO
    ? `/${process.env.GITHUB_PAGES_REPO}`
    : "";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? gitHubRepoPath;
const asset = (path: string) => `${basePath}${path}`;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ecological Kintsugi",
  description:
    "A temporary repair trace project asking how overlooked urban cracks and marginal ecologies can become visible in everyday movement.",
  icons: {
    icon: asset("/favicon.svg"),
    shortcut: asset("/favicon.svg"),
  },
  openGraph: {
    title: "Ecological Kintsugi",
    description:
      "Temporary repair traces, public noticing, field iterations and a growing archive of marginal urban ecologies.",
    type: "website",
    images: [asset("/archive-final/hero-application.jpg")],
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
