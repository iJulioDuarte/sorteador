import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sorteador de times",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-20 flex items-center justify-center bg-blue-600 w-full text-4xl font-semibold">
          Sorteador de times
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
