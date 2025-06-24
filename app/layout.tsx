import type { Metadata } from "next";
import { Figtree, Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

const figtree = Figtree({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Netzet Frontend task",
  description: "Netzet Frontend task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${figtree.className} ${urbanist.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
