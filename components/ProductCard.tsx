import { heroImage } from "@/public/images";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="rounded-sm shadow-md">
      <div className="flex flex-col">
        <Image src={heroImage} alt="Product Image" />
        <div className="p-5">
          <h1 className="font-semibold">Fuljhadi</h1>
          <p>Original Price Rs. 150</p>
          <p>Discounted Price Rs. 100</p>
        </div>
      </div>
    </div>
  );
}
