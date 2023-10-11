import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Yatra_One } from "next/font/google";

const inter = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const yatra = Yatra_One({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ma Ashapuri Fireworks",
  description: "Wholesale Fireworks seller in Nadiad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar font={yatra} />
        {children}
      </body>
    </html>
  );
}
