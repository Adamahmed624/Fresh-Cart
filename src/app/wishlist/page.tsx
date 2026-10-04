'use client'
import getWishlist from "@/services/api/wishlist/getUserWishlist";
import Image from "next/image";
import Link from "next/link";
import AddToCartBtn from "../_components/addToCartBtn/addToCartBtn";
import DeleteBtn from "../_components/DeleteBtn/DeleteBtn";
import { useQuery } from "@tanstack/react-query";

export default function Wishlist() {
  const { data: wishlist } = useQuery({
    queryFn: getWishlist,
    queryKey: ["getWishlist"],
  });

  return (
    <>
      {wishlist?.data.length !== 0 ? (
        <div className="bg-gray-50 min-h-screen py-8">
          <div className="container mx-auto px-4">
            <div className="mb-8 border-b border-b-gray-200 pb-8">
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Link className="hover:text-green-600 transition" href="/">
                  Home
                </Link>
                <span>/</span>
                <span className="text-gray-900 font-medium">Wishlist</span>
              </nav>

              <div className="flex items-center gap-4">
                <span className="bg-[#FEF2F2] text-red-500 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                  </svg>
                </span>

                <div>
                  <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                    My Wishlist
                  </h1>
                  <p className="text-sm text-gray-500">
                    {wishlist?.count} items saved
                  </p>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <div className="min-w-200">
                  {/* Head */}
                  <div className="grid grid-cols-[1fr_180px_180px_240px] items-center bg-gray-50/70 border-b border-gray-100 px-5 py-4 text-sm text-gray-500">
                    <span>Product</span>
                    <span className="text-center">Price</span>
                    <span className="text-center">Status</span>
                    <span className="text-center">Actions</span>
                  </div>

                  {/* Rows */}
                  {wishlist?.data.map((p) => (
                    <div
                      key={p._id}
                      className="grid grid-cols-[1fr_180px_180px_240px] items-center px-5 py-4 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex items-center gap-4 pr-6">
                        <div className="w-16 h-16 shrink-0 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center p-1.5">
                          <Image
                            src={p.imageCover}
                            alt={p.title}
                            height={40}
                            width={40}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-sm text-gray-900 font-medium">
                            {p.title}
                          </h3>
                          <p className="text-xs text-gray-400 mt-1">
                            {p.category.name}
                          </p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-center">
                        <p className="text-sm font-bold text-gray-900">
                          {p.price} EGP
                        </p>
                      </div>

                      <div className="flex justify-center">
                        {p.quantity !== 0 ? (
                          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-600 text-xs font-medium px-2.5 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            In Stock
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 text-xs font-medium px-2.5 py-1 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                            In Stock
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-center gap-2">
                        <AddToCartBtn BtnType="wishlist" prodId={p._id} />

                        <DeleteBtn prodName={p.title} productId={p._id} productType="wishlist" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/shop"
              className="inline-block mt-6 text-sm text-gray-500 hover:text-green-600 transition"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-gray-50/50">
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-sm mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="size-7.5 text-gray-400"
                  role="img"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 50 91.4 94 125.9 120.3 3.2 2.4 7.9 4.2 14 4.2s10.8-1.8 14-4.2c34.5-26.3 84.8-70.4 125.9-120.3 36.2-43.9 68.1-92.4 68.1-142.3 0-47-38.1-85.1-85.1-85.1zM271 87.1c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 68.6-42.9 128.9-79.1 172.8-44.1 53.6-97.3 100.1-133.8 127.9-12.3 9.4-27.5 14.1-43.1 14.1s-30.8-4.7-43.1-14.1C176.4 438 123.2 391.5 79.1 338 42.9 294.1 0 233.7 0 165.1 0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1l15 20.7 15-20.7z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Your wishlist is empty
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Browse products and save your favorites here.
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
                  href="/products"
                >
                  Browse Products
                  <svg
                    className="size-3.5"
                    role="img"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
