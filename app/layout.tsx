import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Yatra_One } from "next/font/google";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const yatra = Yatra_One({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maa Ashapuri Fireworks",
  description: "Wholesale Fireworks seller in Nadiad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar font={yatra} />
        {children}
        <Footer font={yatra} />
      </body>
    </html>
  );
}
