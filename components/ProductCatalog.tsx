import Link from "next/link";
import ProductCard from "./ProductCard";

export default function ProductCatalog() {
  return (
    <div className="mt-24 w-full flex flex-col items-center">
      <h1 className="font-semibold text-3xl md:text-4xl w-fit text-center border-b-4 border-red-600">
        Our Products
      </h1>
      <div
        className="grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            mt-10 gap-5 md:gap-10
      "
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="w-full mt-16 flex">
        <Link
          className="py-3 px-4 mx-auto bg-red-600 text-white shadow-sm border border-red-600 rounded-md hover:text-red-600 font-medium hover:bg-white transition-all duration-200"
          href="/products"
        >
          See more Products
        </Link>
      </div>
    </div>
  );
}
