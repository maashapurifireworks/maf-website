import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="w-full h-[80vh] rounded-xl md:h-[70vh] bg-cover bg-center bg-[url('https://res.cloudinary.com/dyrg5fhp9/image/upload/v1697088087/website/bija8zjhtkqoyndyodtw.jpg')]">
      <div className="w-full h-full rounded-xl flex flex-col justify-center heroGradient-66 md:heroGradient-33 text-white p-5 md:p-24">
        <h1 className="text-4xl md:text-7xl font-bold mt-36 md:mt-24">
          Wholesale Fireworks Seller
        </h1>
        <h3 className="font-normal text-xs mt-3 md:text-2xl">
          Best Quality | Competitive Pricing | Safety First
        </h3>
        <p className="mt-10 max-w-xl text-sm md:text-base">
          At Ma Ashapuri Fatakda (Fireworks), we are your dependable wholesale
          fireworks partner. Committed to quality, safety, and affordability, we
          offer an extensive selection of 300+ fireworks products, catering to
          all your needs. From grand spectacles to intimate gatherings, we have
          the perfect fireworks to make every event unforgettable.
        </p>
        <div className="">
          <Link href="/products">
            <button className="mt-10 border bg-white hover:bg-transparent hover:border hover:text-white text-gray-900 font-semibold py-2 px-4 rounded transition-all duration-150">
              Explore our products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
