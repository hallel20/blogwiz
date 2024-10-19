import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import Navibar from "./Navbar";
import { Theme } from "@radix-ui/themes";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blogwiz Update",
  description: "A Next.JS blog app created by CyberwizDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/assets/icons/logo.png"
          type="image/x-icon"
        />
      </head>
      <body className={inter.className}>
        <Theme>
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  );
}
