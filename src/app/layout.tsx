import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ToastContainer, SavingOverlay } from "@/components/Common";

export const metadata: Metadata = {
  title: "Drizzle & Sauce — Founder Dashboard",
  description: "Rubberhose / 1920s cartoon studio aesthetic dashboard for a hot honey startup.",
  icons: { icon: "/drizzke_thumbnail.jpeg", apple: "/drizzke_thumbnail.jpeg" },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Drizzle&Sauce",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0E0C09",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/drizzke_thumbnail.jpeg" />
      </head>
      <body>
        {children}
        <ToastContainer />
        <SavingOverlay />
      </body>
    </html>
  );
}
