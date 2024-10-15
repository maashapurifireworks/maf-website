import { diwaliWishImage } from "@/public/images";
import Image from "next/image";

export default function DiwaliWish() {
  return (
    <div className="rounded-xl overflow-hidden w-full my-8 shadow-md">
      <Image
        src={diwaliWishImage}
        alt="We wish you and your family a Happy Diwali"
      />
    </div>
  );
}
