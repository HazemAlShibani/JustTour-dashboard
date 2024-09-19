import type { Metadata } from "next";
import { Inter, Recursive } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import { constructMetadata } from "../lib/utils";

const inter = Recursive({ subsets: ["latin"] });

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Providers>
            {children}
          </Providers>
        </main>
        <Toaster/>
      </body>
    </html>
  );
}
