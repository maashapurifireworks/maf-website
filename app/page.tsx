// import CategoriesCatalog from "@/components/CategoryCatalog";
import DiwaliWish from "@/components/DiwaliWishSection";
import HeroSection from "@/components/HeroSection";
import ProductCatalog from "@/components/ProductCatalog";

export default function Home() {
  return (
    <main className="w-full md:max-w-[80vw] md:mx-auto p-5 px-3">
      <HeroSection />
      {/* <CategoriesCatalog limit={4} /> */}
      <ProductCatalog />
      <DiwaliWish />
    </main>
  );
}
