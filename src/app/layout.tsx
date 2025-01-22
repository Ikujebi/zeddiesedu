import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from "../app/assets/img/zed_logo-removebg-preview (1).png";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zeddies Educational Technologies",
  description: "Zeddies Educational Technologies official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href={`${logo}`} sizes="any" />
        <link rel="shortcut icon" href={`${logo}`} type="image/x-icon" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
