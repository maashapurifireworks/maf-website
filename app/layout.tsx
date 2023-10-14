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
        src="https://www.googletagmanager.com/gtag/js?id=G-G1JTM2SG74"
      ></Script>
      <Script id="g-analytics">
        {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-G1JTM2SG74');`}
      </Script>
      <Script id="m-clarity">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "j9iji6vwuk");`}
      </Script>
    </html>
  );
}
