// import Image from "next/image";

// interface ProductType {
//   name: string;
//   price: number;
//   disc_price: number;
//   photo_url: string;
// }

// export default function ProductCard({ product }: { product: ProductType }) {
//   return (
//     <div className=" rounded-md shadow-md overflow-hidden">
//       <div className="flex flex-col">
//         <div className="aspect-square overflow-hidden bg-white">
//           <Image
//             src={product.photo_url}
//             width="300"
//             height="300"
//             className="mx-auto bg-white"
//             alt="Product Image"
//           />
//         </div>
//         <div className="p-5">
//           <h1 className="font-semibold">{product.name}</h1>
//           <p className="text-sm">
//             <span>Original Price Rs.</span>
//             <span className="font-medium">{product.price}</span>
//           </p>
//           <p className="text-sm">
//             <span>Discounted Price Rs.</span>
//             <span className="font-medium">{product.disc_price}</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";

interface ProductType {
  name: string;
  price: number;
  disc_price: number;
  photo_url: string;
}

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <div className="rounded-md shadow-md overflow-hidden border border-gray-300">
      <div className="flex flex-col">
        <div className="aspect-square overflow-hidden bg-white">
          <Image
            src={product.photo_url}
            width={300}
            height={300}
            alt="Product Image"
            className="mx-auto bg-white w-full"
          />
        </div>
        <div className="p-4">
          <h1 className="font-semibold text-lg">{product.name}</h1>
          <div className="mt-2">
            <p className="text-sm line-through text-gray-500">
              Rs. {product.price}
            </p>
            <p className="text-xl font-bold text-red-500">
              Rs. {product.disc_price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
