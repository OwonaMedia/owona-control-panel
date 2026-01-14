import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OWONA Control Panel",
  description: "Unified management platform for N8N, Server, and WhatsApp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
