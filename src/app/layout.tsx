import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auth Test App",
  description: "Created by Reza Pazan",
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
