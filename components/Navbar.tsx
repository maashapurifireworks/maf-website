import { NextFont } from "next/dist/compiled/@next/font";
import Link from "next/link";

export default function Navbar({ font }: { font: NextFont }) {
  return (
    <div className="w-full bg-white shadow-md">
      <nav className="navbar flex justify-between p-5 w-full md:w-[80vw] md:mx-auto md:py-7  items-center">
        {/* Logo text and contact button */}
        <div className="">
          <Link href="">
            <h1
              className={`md:text-2xl text-xl font-bold text-red-600 ${font}`}
            >
              Ma Ashapuri Fireworks
            </h1>
            <span className="text-xs md:text-sm font-semibold text-gray-800">
              Wholesale Fireworks Seller in Nadiad
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href="tel:+918780775601"
            className="py-3 px-2 bg-green-500 rounded-md font-semibold text-white"
          >
            Call Now
          </Link>
        </div>
      </nav>
    </div>
  );
}
