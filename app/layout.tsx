import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Yatra_One } from "next/font/google";
import Footer from "@/components/Footer";
import Script from "next/script";
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
  openGraph: {
    type: "website",
    url: "https://maashapurifireworks.com",
    title: "Maa Ashapuri Fatakda (Fireworks)",
    description:
      "50% Off on all Fireworks | Wholesale Fireworks seller in Nadiad | Ma Ashapuri Fatakda (Fireworks)",
    images: [
      {
        url: "https://maashapurifireworks.in/bg-og.jpg",
        width: 1600,
        height: 840,
        alt: "Maa Ashapuri Fatakda (Fireworks)",
      },
    ],
  },
  twitter: {
    site: "@maashapurifireworks",
    title: "Maa Ashapuri Fatakda (Fireworks)",
    description:
      "50% Off on all Fireworks | Wholesale Fireworks seller in Nadiad | Ma Ashapuri Fatakda (Fireworks)",
    images: [
      {
        url: "https://maashapurifireworks.in/bg-og.jpg",
        width: 1600,
        height: 840,
        alt: "Maa Ashapuri Fatakda (Fireworks)",
      },
    ],
  },
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
      <Script
        async
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-G1JTM2SG74"
      ></Script>
      <Script id="g-analytics" strategy="afterInteractive">
        {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-G1JTM2SG74');`}
      </Script>
      <Script id="m-clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "j9iji6vwuk");`}
      </Script>
    </html>
  );
}
