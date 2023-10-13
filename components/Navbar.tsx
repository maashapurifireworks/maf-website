import { NextFont } from "next/dist/compiled/@next/font";
import Link from "next/link";

export default function Navbar({ font }: { font: NextFont }) {
  return (
    <div className="w-full bg-white shadow-md">
      <nav className="navbar flex justify-between p-5 w-full md:w-[80vw] md:mx-auto items-center">
        {/* Logo text and contact button */}
        <div className="">
          <Link href="/">
            <h1
              className={`md:text-3xl text-xl font-bold flex flex-col md:flex-row md:gap-2 text-red-600 ${font.className}`}
            >
              <span>Ma Ashapuri</span>
              <span>Fireworks</span>
            </h1>
            <p className="hidden md:block text-sm text-gray-800 ">
              Wholesale Fireworks seller in Nadiad
            </p>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center text-gray-800 md:gap-5">
          <Link
            href="tel:+918780775601"
            className="font-semibold md:py-2 md:px-3 md:border-b-4 md:border-red-600 hover:bg-red-600 hover:text-white transition-all duration-150"
          >
            +91 87807-75601
          </Link>
          <Link
            href="tel:+919316436614"
            className="font-semibold md:py-2 md:px-3 md:border-b-4 md:border-red-600 hover:bg-red-600 hover:text-white transition-all duration-150"
          >
            +91 93164-36614
          </Link>
        </div>
      </nav>
    </div>
  );
}
