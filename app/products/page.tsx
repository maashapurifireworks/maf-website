// "use client";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import ProductCard from "@/components/ProductCard";
// import { useEffect, useState } from "react";

// interface ProductType {
//   id: string;
//   name: string;
//   price: number;
//   disc_price: number;
//   photo_url: string;
//   created_at: string;
// }

// export default function ProductsPage() {
//   const supabase = createClientComponentClient();
//   const [products, setProducts] = useState<any>(null);
//   const [productOffset, setProductOffset] = useState<number>(30);
//   const [endOfProducts, setEndOfProducts] = useState<boolean>(false);
//   const offsetProductBy = 30;

//   useEffect(() => {
//     const getData = async () => {
//       const { data }: { data: any } = await supabase
//         .from("products")
//         .select()
//         .limit(productOffset);
//       setProducts(data);
//     };

//     getData();
//   }, []);

//   const handleLoadMoreProducts = async () => {
//     let lastOffsetCount = productOffset + offsetProductBy;

//     const { data }: { data: any } = await supabase
//       .from("products")
//       .select()
//       .range(productOffset, lastOffsetCount)
//       .limit(offsetProductBy);

//     if (data.length === 0) {
//       setEndOfProducts(true);
//       return;
//     } else {
//       setProductOffset(lastOffsetCount);
//       setProducts([...products, ...data]);
//     }
//   };

//   return (
//     <main className="w-full md:max-w-[80vw] md:mx-auto p-5 px-3">
//       <div className="mt-10 w-full flex flex-col items-center">
//         <h1 className="font-semibold text-3xl md:text-4xl w-fit text-center border-b-4 border-red-600">
//           Our Products
//         </h1>
//         <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-5 md:gap-10">
//           {products === null ? (
//             <>
//               <ProductCardSkeleton />
//               <ProductCardSkeleton />
//               <ProductCardSkeleton />
//               <ProductCardSkeleton />
//               <ProductCardSkeleton />
//             </>
//           ) : (
//             products?.map((product: ProductType) => (
//               <ProductCard key={product.id} product={product} />
//             ))
//           )}
//         </div>
//         <div className="w-full mt-16 flex">
//           <button
//             disabled={endOfProducts}
//             onClick={handleLoadMoreProducts}
//             className={`py-3 px-4 mx-auto bg-red-600 text-white shadow-sm border border-red-600 rounded-md hover:text-red-600 font-medium hover:bg-white transition-all duration-200 ${
//               endOfProducts
//                 ? "cursor-not-allowed disabled:bg-red-600/40 disabled:border-red-600/40"
//                 : ""
//             }`}
//           >
//             Load More Products
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }

// function ProductCardSkeleton() {
//   return (
//     <div className="animate-pulse rounded-md shadow-md overflow-hidden">
//       <div className="flex flex-col">
//         <div className="aspect-video overflow-hidden">
//           <div className="bg-gray-200 h-60 w-full"></div>
//         </div>
//         <div className="p-5">
//           <div className="bg-gray-200 h-5 w-1/2 mb-3"></div>
//           <div className="bg-gray-200 h-5 w-1/4 mb-3"></div>
//           <div className="bg-gray-200 h-5 w-1/4 mb-3"></div>
//         </div>
//       </div>
//     </div>
//   );
// }
// ===============================================================
// "use client";
// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
// import ProductCard from "@/components/ProductCard";
// import { useEffect, useState } from "react";

// interface ProductType {
//   id: string;
//   name: string;
//   price: number;
//   disc_price: number;
//   photo_url: string;
//   created_at: string;
// }

// export default function ProductsPage() {
//   const supabase = createClientComponentClient();
//   const [products, setProducts] = useState<any>(null);
//   const [productOffset, setProductOffset] = useState<number>(30);
//   const [endOfProducts, setEndOfProducts] = useState<boolean>(false);
//   const offsetProductBy = 30;

//   useEffect(() => {
//     const getData = async () => {
//       const { data }: { data: any } = await supabase
//         .from("new_products_prod")
//         .select()
//         .limit(100);
//       setProducts(data);

//       const { data: extraData }: { data: any } = await supabase
//         .from("extra_data_dup")
//         .select();
//       console.log(extraData);

//       console.log(data);
//     };

//     getData();
//   }, []);

//   const handleLoadMoreProducts = async () => {
//     let lastOffsetCount = productOffset + offsetProductBy;

//     const { data }: { data: any } = await supabase
//       .from("products")
//       .select()
//       .range(productOffset, lastOffsetCount)
//       .limit(offsetProductBy);

//     if (data.length === 0) {
//       setEndOfProducts(true);
//       return;
//     } else {
//       setProductOffset(lastOffsetCount);
//       setProducts([...products, ...data]);
//     }
//   };

//   return (
//     <main className="w-full md:max-w-[80vw] md:mx-auto p-5 px-3">
//       <div className="mt-10 w-full flex flex-col items-center">
//         <h1 className="font-semibold text-3xl md:text-4xl w-fit text-center border-b-4 border-red-600">
//           Our Products
//         </h1>
//         <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-5 md:gap-10">
//           {products === null ? (
//             <>
//               <ProductCardSkeleton />
//               <ProductCardSkeleton />
//               <ProductCardSkeleton />
//               <ProductCardSkeleton />
//               <ProductCardSkeleton />
//             </>
//           ) : (
//             products?.map((product: ProductType) => (
//               <ProductCard key={product.id} product={product} />
//             ))
//           )}
//         </div>
//         <div className="w-full mt-16 flex">
//           <button
//             disabled={endOfProducts}
//             onClick={handleLoadMoreProducts}
//             className={`py-3 px-4 mx-auto bg-red-600 text-white shadow-sm border border-red-600 rounded-md hover:text-red-600 font-medium hover:bg-white transition-all duration-200 ${
//               endOfProducts
//                 ? "cursor-not-allowed disabled:bg-red-600/40 disabled:border-red-600/40"
//                 : ""
//             }`}
//           >
//             Load More Products
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }

// function ProductCardSkeleton() {
//   return (
//     <div className="animate-pulse rounded-md shadow-md overflow-hidden">
//       <div className="flex flex-col">
//         <div className="aspect-video overflow-hidden">
//           <div className="bg-gray-200 h-60 w-full"></div>
//         </div>
//         <div className="p-5">
//           <div className="bg-gray-200 h-5 w-1/2 mb-3"></div>
//           <div className="bg-gray-200 h-5 w-1/4 mb-3"></div>
//           <div className="bg-gray-200 h-5 w-1/4 mb-3"></div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import ProductCard from "@/components/ProductCard";
import { useEffect, useState } from "react";

interface ProductType {
  id: number;
  name: string;
  price: number;
  category: string;
  disc_price: number;
  photo_url: string;
}

export default function ProductsPage() {
  const supabase = createClientComponentClient();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<any>([]); // Categories from the database

  useEffect(() => {
    const getData = async () => {
      const { data }: { data: any } = await supabase
        .from("new_products_prod")
        .select();
      // .limit(100);
      setProducts(data);
    };

    getData();

    // Fetch categories from Supabase
    const fetchCategories = async () => {
      const { data: categoriesData } = await supabase
        .from("extra_data_dup")
        .select();

      setCategories(categoriesData);
    };

    fetchCategories();
  }, []);

  // Group products by category
  const groupedProducts: { [key: string]: ProductType[] } = {};

  products.forEach((product) => {
    const category = product.category;
    if (category in groupedProducts) {
      groupedProducts[category].push(product);
    } else {
      groupedProducts[category] = [product];
    }
  });

  if (categories.length === 0) {
    // Render a loading state with skeletons while categories data is loading
    return (
      <div className="w-full md:max-w-[80vw] md:mx-auto p-5 px-3">
        <div className="mt-10 w-full flex flex-col items-center">
          <h1 className="font-semibold text-3xl md:text-4xl w-fit text-center border-b-4 border-red-600">
            Loading Categories...
          </h1>
          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 gap-5 md:gap-10">
            <CategorySkeleton />
            <CategorySkeleton />
            <CategorySkeleton />
            <CategorySkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="w-full md:max-w-[80vw] md:mx-auto p-5 px-3">
      <div className="mt-10 w-full flex flex-col items-center">
        {categories.map((categoryData: any) => {
          const category = categoryData.category;
          const categoryProducts = products.filter(
            (product) => product.category === category
          );
          if (categoryProducts.length === 0) {
            return null; // Don't render the category section if it has no products
          }
          return (
            <div key={category}>
              <h1 className="font-semibold text-2xl md:text-4xl mt-10 w-fit text-start border-b-2 border-red-600">
                {categoryData.name} ({categoryData.prcount})
              </h1>
              <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 gap-5 md:gap-10">
                {groupedProducts[category]?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

function CategorySkeleton() {
  return (
    <div className="animate-pulse rounded-md shadow-md overflow-hidden">
      <div className="flex flex-col">
        <div className="bg-gray-200 h-[20rem] w-full"></div>
        {/* <div className="aspect-video overflow-hidden"> */}
        {/* </div> */}
        <div className="p-5">
          <div className="bg-gray-200 h-5 w-1/2 mb-3"></div>
          <div className="bg-gray-200 h-5 w-1/4 mb-3"></div>
          <div className="bg-gray-200 h-5 w-1/4 mb-3"></div>
        </div>
      </div>
    </div>
  );
}
