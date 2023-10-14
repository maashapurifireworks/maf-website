"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";

interface ProductType {
  id: string;
  name: string;
  price: number;
  disc_price: number;
  photo_url: string;
  created_at: string;
}

export default function ProductsPage() {
  const supabase = createClientComponentClient();
  const [products, setProducts] = useState<any>(null);
  const [productOffset, setProductOffset] = useState<number>(30);
  const [endOfProducts, setEndOfProducts] = useState<boolean>(false);
  const offsetProductBy = 30;

  useEffect(() => {
    const getData = async () => {
      const { data }: { data: any } = await supabase
        .from("products")
        .select()
        .limit(productOffset);
      setProducts(data);
    };

    getData();
  }, []);

  const handleLoadMoreProducts = async () => {
    let lastOffsetCount = productOffset + offsetProductBy;

    const { data }: { data: any } = await supabase
      .from("products")
      .select()
      .range(productOffset, lastOffsetCount)
      .limit(offsetProductBy);

    if (data.length === 0) {
      setEndOfProducts(true);
      return;
    } else {
      setProductOffset(lastOffsetCount);
      setProducts([...products, ...data]);
    }
  };

  return (
    <main className="w-full md:max-w-[80vw] md:mx-auto p-5 px-3">
      <div className="mt-10 w-full flex flex-col items-center">
        <h1 className="font-semibold text-3xl md:text-4xl w-fit text-center border-b-4 border-red-600">
          Our Products
        </h1>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-5 md:gap-10">
          {products === null ? (
            <>
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </>
          ) : (
            products?.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
        <div className="w-full mt-16 flex">
          <button
            disabled={endOfProducts}
            onClick={handleLoadMoreProducts}
            className={`py-3 px-4 mx-auto bg-red-600 text-white shadow-sm border border-red-600 rounded-md hover:text-red-600 font-medium hover:bg-white transition-all duration-200 ${
              endOfProducts
                ? "cursor-not-allowed disabled:bg-red-600/40 disabled:border-red-600/40"
                : ""
            }`}
          >
            Load More Products
          </button>
        </div>
      </div>
    </main>
  );
}

function ProductCardSkeleton() {
  return (
    <div className="animate-pulse rounded-md shadow-md overflow-hidden">
      <div className="flex flex-col">
        <div className="aspect-video overflow-hidden">
          <div className="bg-gray-200 h-60 w-full"></div>
        </div>
        <div className="p-5">
          <div className="bg-gray-200 h-5 w-1/2 mb-3"></div>
          <div className="bg-gray-200 h-5 w-1/4 mb-3"></div>
          <div className="bg-gray-200 h-5 w-1/4 mb-3"></div>
        </div>
      </div>
    </div>
  );
}
