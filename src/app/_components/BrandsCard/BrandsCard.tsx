import Image from "next/image";
import { BrandsType } from "./Brands.type";
import Link from "next/link";

export default function BrandsCard({ brand }: { brand: BrandsType }) {
  return (
    <>
      <Link
        className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 hover:-translate-y-1"
        href={`/products/${brand._id}`}
      >
        <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3 p-4 flex items-center justify-center">
          <Image
            alt={brand.name}
            width={200}
            height={200}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            src={brand.image}
          />
        </div>
        <h3 className="font-semibold text-gray-900 text-center text-sm group-hover:text-violet-600 transition-colors truncate">
          {brand.name}
        </h3>
        <div className="flex justify-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-xs text-violet-600 flex items-center gap-1">
            View Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </div>
      </Link>
    </>
  );
}
