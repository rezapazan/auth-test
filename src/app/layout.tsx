import clsx from "clsx";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.scss";
import styles from "./main.module.scss";

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
    <html lang="en" className={clsx(styles["layout"], GeistSans.className)}>
      <body>{children}</body>
    </html>
  );
}
