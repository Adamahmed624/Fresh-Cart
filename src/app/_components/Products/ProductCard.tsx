"use client";

import { ProductType } from "./Product.type";
import Image from "next/image";
import Link from "next/link";
import AddToCartBtn from "../addToCartBtn/addToCartBtn";
import AddToWishlistBtn from "../AddToWishlistBtn/AddToWishlistBtn";

type IconProps = React.SVGProps<SVGSVGElement>;

const ArrowPathOutline = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
    />
  </svg>
);

const EyeOutline = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

export const StarOutline = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.98 21.539a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
);

export const StarSolid = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
    />
  </svg>
);

export const StarHalf = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <defs>
      <linearGradient id="halfStarGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="50%" stopColor="currentColor" />
        <stop offset="50%" stopColor="transparent" stopOpacity="0" />
      </linearGradient>
    </defs>

    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
    />

    <path
      fill="url(#halfStarGradient)"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
    />
  </svg>
);



export default function ProductCard({ prod }: { prod: ProductType }) {

  function calculateDiscount(currentPrice: number, price: number) {
    const dis = (((price - currentPrice) / price) * 100).toFixed(0);
    return dis;
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-transform duration-300">
      <div className="relative">
        <Image
          src={prod.imageCover}
          alt={prod.title}
          width={200}
          height={400}
          className="w-full h-60 object-contain bg-white"
        />
        {prod.priceAfterDiscount ? (
          <div className="absolute top-3 left-3">
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              -{calculateDiscount(prod.priceAfterDiscount, prod.price)}%
            </span>
          </div>
        ) : (
          ""
        )}

        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          {/* <button
            title="Add to wishlist"
            className={`bg-white h-8 w-8 cursor-pointer rounded-full flex items-center justify-center shadow-sm transition text-gray-600 hover:text-red-500`}
          >
              <HeartOutline className="w-5 h-5" />
          </button> */}
          <AddToWishlistBtn prodId={prod._id}/>

          <button
            title="Compare"
            className="bg-white h-8 w-8 cursor-pointer rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 shadow-sm"
          >
            <ArrowPathOutline className="w-5 h-5" />
          </button>

          <Link
            href={`/productDetails/${prod._id}`}
            title="Quick view"
            className="bg-white h-8 w-8 cursor-pointer rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 shadow-sm"
          >
            <EyeOutline className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">{prod.category.name}</div>

        <h3 className="font-medium mb-1 cursor-pointer ">
          <Link
            href={`productDetails/${prod._id}`}
            className="line-clamp-2"
            title={prod.title}
          >
            {prod.title}
          </Link>
        </h3>

        <div className="flex items-center mb-2">
          <div className="flex text-amber-400 mr-2">
            {Array.from({ length: 5 }).map((_, i) => {
              const rating = prod.ratingsAverage;

              if (i + 1 <= Math.floor(rating)) {
                return <StarSolid key={i} className="w-3.5 h-3.5" />;
              } else if (i < rating && rating % 1 !== 0) {
                return (
                  <StarHalf key={i} className="w-3.5 h-3.5 text-yellow-400" />
                );
              } else {
                return <StarOutline key={i} className="w-3.5 h-3.5" />;
              }
            })}
          </div>
          <span className="text-xs text-gray-500">
            {prod.ratingsAverage} ({prod.ratingsQuantity})
          </span>
        </div>

        <div className="flex items-center justify-between">
          {prod.priceAfterDiscount ? (
            <div>
              <span className="text-lg font-bold text-green-600">
                {prod.priceAfterDiscount} EGP
              </span>
              <span className="text-sm text-gray-500 line-through ml-2">
                {prod.price} EGP
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold text-gray-800">
              {prod.price} EGP
            </span>
          )}

          <AddToCartBtn BtnType="card" prodId={prod._id}/>
        </div>
      </div>
    </div>
  );
}
