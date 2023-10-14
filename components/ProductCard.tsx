import Image from "next/image";

interface ProductType {
  id: string;
  name: string;
  price: number;
  disc_price: number;
  photo_url: string;
  created_at: string;
}

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <div className=" rounded-md shadow-md overflow-hidden">
      <div className="flex flex-col">
        <div className="aspect-square overflow-hidden">
          <Image
            src={product.photo_url}
            width="300"
            height="300"
            className="mx-auto"
            alt="Product Image"
          />
        </div>
        <div className="p-5">
          <h1 className="font-semibold">{product.name}</h1>
          <p className="text-sm">
            <span>Original Price Rs.</span>
            <span className="font-medium">{product.price}</span>
          </p>
          <p className="text-sm">
            <span>Discounted Price Rs.</span>
            <span className="font-medium">{product.disc_price}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
