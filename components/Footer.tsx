import { NextFont } from "next/dist/compiled/@next/font";
import Link from "next/link";

export default function Footer({ font }: { font: NextFont }) {
  return (
    <div className="w-full  bg-gray-900 mt-24">
      <footer className="w-full md:max-w-[80vw] mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-16">
          <div className="">
            <Link href="/">
              <h1 className={`text-2xl font-bold text-white ${font.className}`}>
                Ma Ashapuri Fatakda (Fireworks)
              </h1>
              <p className="text-sm text-gray-100 ">
                Wholesale Fireworks seller in Nadiad
              </p>
            </Link>
            <p className="text-gray-300/60 mt-5 text-sm">
              At Ma Ashapuri Fatakda (Fireworks), your satisfaction is our
              priority. We take pride in serving you with the best fireworks in
              the Nadiad. We&apos;re dedicated to making your celebrations
              memorable. Join us in creating unforgettable moments!
            </p>
          </div>
          <div className="">
            {/* footer links */}
            <h1 className="text-white font-semibold text-xl">Quick Links</h1>
            <div className="flex flex-col gap-1 underline text-white mt-5">
              <Link href="/">Home</Link>
              <Link href="/products">Product Catalog</Link>
              <Link href="/terms_and_conditions">T & C</Link>
            </div>
          </div>
          <div className="">
            {/* contact number and address */}
            <h1 className="text-white font-semibold text-xl">Contact Us</h1>
            <p className="text-gray-300 mt-5 text-sm">
              Primary Mobile No:{" "}
              <Link
                href="tel:+918780775601"
                className="text-white font-medium underline"
              >
                +91 87807-75601
              </Link>
            </p>
            <p className="text-gray-300 mt-5 text-sm">
              Secondary Mobile No:{" "}
              <Link
                href="tel:+919316436614"
                className="text-white font-medium underline"
              >
                +91 93164-36614
              </Link>
            </p>
            <p className="text-gray-300 mt-5 text-sm">
              Maa Ashapuri Fatakda, <br />
              Near Santram Furniture, Piplag - Petlad Road <br />
              Nadiad, Gujarat - 387001
            </p>
          </div>
        </div>
        <div className="mt-24 text-white text-xs w-full flex flex-col items-center">
          <p>
            Developed by{" "}
            <Link
              className="font-medium underline text-white"
              target="_blank"
              href="https://sohel.tech?ref='mashapurifireworks.in'"
            >
              Sohel Shekh
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
