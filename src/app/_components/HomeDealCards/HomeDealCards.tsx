"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HomeDealCards() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".from-left",
        { x: -200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".from-left",
            start: "top 95%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".from-right",
        { x: 200, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".from-right",
            start: "top 95%",
            once: true,
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-6 overflow-hidden" ref={container}>
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-700 p-8 text-white from-left">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                  <span>🔥</span>
                  <span>Deal of the Day</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Fresh Organic Fruits
                </h3>
                <p className="text-white/80 mb-4">
                  Get up to 40% off on selected organic fruits
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold">40% OFF</span>
                  <div className="text-sm text-white/70">
                    Use Code :{" "}
                    <span className="font-bold text-white">ORGANIC40</span>
                  </div>
                </div>
                <Link
                  href="/product"
                  className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Shop Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-orange-400 to-rose-500 p-8 text-white from-right">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-sm mb-4">
                  <span>✨</span>
                  <span>New Arrivals</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Exotic Vegetables
                </h3>
                <p className="text-white/80 mb-4">
                  Discover our latest collection of premium vegetables
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold">25% OFF</span>
                  <div className="text-sm text-white/70">
                    Use Code :{" "}
                    <span className="font-bold text-white">FRESH25</span>
                  </div>
                </div>
                <Link
                  href="/product?sort=newest"
                  className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
