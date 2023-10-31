"use client";
import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface Category {
  id: number;
  name: string;
  prcount: number;
}

export default function CategoriesCatalog({ limit }: { limit: number }) {
  const supabase = createClientComponentClient();

  const [categories, setCategories] = useState<any>(null);

  useEffect(() => {
    // Fetch categories from Supabase
    const fetchCategories = async () => {
      const { data: categoriesData } = await supabase
        .from("extra_data_dup")
        .select();

      setCategories(categoriesData);
    };

    fetchCategories();
  }, []);

  if (categories === null) {
    // Categories data is still loading
    return (
      <div className="w-full md:max-w-[80vw] md:mx-auto p-5 px-3">
        <div className="mt-10 w-full flex flex-col items-center">
          <h1 className="font-semibold text-3xl md:text-4xl w-fit text-center border-b-4 border-red-600">
            Loading Categories...
          </h1>
        </div>
      </div>
    );
  }

  // Filter out categories with no products
  const nonEmptyCategories = categories.filter(
    (category: any) => category.prcount > 0
  );

  return (
    <div className="w-full md:max-w-[80vw] md:mx-auto p-5 px-3">
      <div className="mt-10 w-full flex flex-col items-center">
        <h1 className="font-semibold text-3xl md:text-4xl w-fit text-center border-b-4 border-red-600">
          Categories Catalog
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-10 gap-5 md:gap-10">
          {nonEmptyCategories.slice(0, limit).map((category: any) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="rounded-md shadow-md overflow-hidden border border-gray-300">
      <div className="p-4">
        <h1 className="font-semibold text-lg">{category.name}</h1>
        <p className="text-sm font-semibold text-gray-500">
          {category.prcount} Products
        </p>
        <button className="bg-blue-500 text-white rounded-full px-3 py-1 mt-4">
          Explore
        </button>
      </div>
    </div>
  );
}
