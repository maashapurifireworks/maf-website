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
    </div>
  );
}
