"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ProductType } from "../Products/Product.type";
import ProductCard from "../Products/ProductCard";

export default function ProductYouMayLike({
  products,
}: {
  products: ProductType[];
}) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
              <h2 className="text-2xl font-bold text-gray-800">
                You Also May <span className="text-emerald-600">Like</span>
              </h2>
            </div>
            <div className="flex space-x-2">
              <button
                ref={prevRef}
                className="cursor-pointer h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-100 hover:text-green-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </button>
              <button
                ref={nextRef}
                className="cursor-pointer h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-100 hover:text-green-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: null,
              nextEl: null,
            }}
            onBeforeInit={(swiper: SwiperType) => {
              if (
                typeof swiper.params.navigation !== "boolean" &&
                swiper.params.navigation
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            spaceBetween={16}
            slidesPerView={5}
          >
            {products.map((p) => (
              <SwiperSlide key={p._id}>
                <ProductCard prod={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
