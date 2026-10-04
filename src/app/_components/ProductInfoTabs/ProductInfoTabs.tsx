"use client";
import { useState } from "react";
import { SingleProductType } from "../Products/SingleProduct.type";
import { StarHalf, StarOutline, StarSolid } from "../Products/ProductCard";

export default function ProductInfoTabs({ data }: { data: SingleProductType }) {
  const tabs = [
    {
      set: "Product Details",
      name: "Product Details",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4"
        >
          <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
          <path
            fillRule="evenodd"
            d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      set: "Reviews",
      name: `Reviews (${data.ratingsQuantity})`,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      set: "Shipping & Returns",
      name: "Shipping & Returns",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4"
        >
          <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
          <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
          <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
        </svg>
      ),
    },
  ];

  const oneStars = data.reviews.filter((rev) => rev.rating === 1).length;
  const twoStars = data.reviews.filter((rev) => rev.rating === 2).length;
  const threeStars = data.reviews.filter((rev) => rev.rating === 3).length;
  const fourStars = data.reviews.filter((rev) => rev.rating === 4).length;
  const fiveStars = data.reviews.filter((rev) => rev.rating === 5).length;

  const calculateRatingPercentage = () => {
    const fiveStarPercentage = (
      (fiveStars / data.ratingsQuantity) *
      100
    ).toFixed(0);
    const fourStarPercentage = (
      (fourStars / data.ratingsQuantity) *
      100
    ).toFixed(0);
    const threeStarPercentage = (
      (threeStars / data.ratingsQuantity) *
      100
    ).toFixed(0);
    const twoStarPercentage = ((twoStars / data.ratingsQuantity) * 100).toFixed(
      0,
    );
    const oneStarPercentage = ((oneStars / data.ratingsQuantity) * 100).toFixed(
      0,
    );
    return {
      fiveStarPercentage,
      fourStarPercentage,
      threeStarPercentage,
      twoStarPercentage,
      oneStarPercentage,
    };
  };

  const {
    fiveStarPercentage,
    fourStarPercentage,
    oneStarPercentage,
    twoStarPercentage,
    threeStarPercentage,
  } = calculateRatingPercentage();

  const [active, setAvtive] = useState(tabs[0].name);
  return (
    <>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto scrollbar-hide">
                {tabs.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => setAvtive(t.set)}
                    className={`cursor-pointer flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition-all duration-200 ${active === t.set ? "text-green-600 border-b-2 border-green-600 bg-green-50/50" : "text-gray-600 hover:text-green-600 hover:bg-gray-50"}`}
                  >
                    {t.icon}
                    {t.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {active === "Product Details" ? (
                  <>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        About this Product
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Material Polyester Blend Colour Name Multicolour
                        Department Women
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-3">
                          Product Information
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between text-sm">
                            <span className="text-gray-500">Category</span>
                            <span className="text-gray-900 font-medium">
                              {data.category.name}
                            </span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span className="text-gray-500">Subcategory</span>
                            <span className="text-gray-900 font-medium">
                              {data.subcategory[0].name}
                            </span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span className="text-gray-500">Brand</span>
                            <span className="text-gray-900 font-medium">
                              {data.brand.name}
                            </span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span className="text-gray-500">Items Sold</span>
                            <span className="text-gray-900 font-medium">
                              {data.sold}+ sold
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-3">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-center text-sm text-gray-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-4 text-green-600 mr-2 w-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Premium Quality Product
                          </li>
                          <li className="flex items-center text-sm text-gray-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-4 text-green-600 mr-2 w-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            100% Authentic Guarantee
                          </li>
                          <li className="flex items-center text-sm text-gray-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-4 text-green-600 mr-2 w-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Fast & Secure Packaging
                          </li>
                          <li className="flex items-center text-sm text-gray-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-4 text-green-600 mr-2 w-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Quality Tested
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                ) : active === "Reviews" ? (
                  <>
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                      <div className="text-center">
                        <h5 className="text-5xl font-bold text-gray-900 mb-2">
                          {data.ratingsAverage}
                        </h5>
                        <div className="flex text-amber-400 justify-center">
                          {Array.from({ length: 5 }).map((_, i) => {
                            const rating = data.ratingsAverage;

                            if (i + 1 <= Math.floor(rating)) {
                              return <StarSolid key={i} className="w-5 h-5" />;
                            } else if (i < rating && rating % 1 !== 0) {
                              return (
                                <StarHalf
                                  key={i}
                                  className="w-5 h-5 text-yellow-400"
                                />
                              );
                            } else {
                              return (
                                <StarOutline key={i} className="w-5 h-5" />
                              );
                            }
                          })}
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                          Based on {data.ratingsQuantity} reviews
                        </p>
                      </div>
                      <div className="flex-1 w-full">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-8">
                            5 <p>stars</p>
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                              style={{ width: `${fiveStarPercentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500 w-10">
                            {fiveStarPercentage}%
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-8">
                            4 <p>stars</p>
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                              style={{ width: `${fourStarPercentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500 w-10">
                            {fourStarPercentage}%
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-8">
                            3 <p>stars</p>
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                              style={{ width: `${threeStarPercentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500 w-10">
                            {threeStarPercentage}%
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-8">
                            2 <p>stars</p>
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                              style={{ width: `${twoStarPercentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500 w-10">
                            {twoStarPercentage}%
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm text-gray-600 w-8">
                            1 <p>stars</p>
                          </span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full transition-all duration-300"
                              style={{ width: `${oneStarPercentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500 w-10">
                            {oneStarPercentage}%
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-6">
                      <div className="text-center py-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-10 text-gray-300 mb-3 mx-auto"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-gray-500">
                          Customer reviews will be displayed here.
                        </p>
                        <button className="mt-4 text-green-600 hover:text-green-700 font-medium">
                          Write a Review
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-7 text-white mx-auto"
                            >
                              <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                              <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                              <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900">
                            Shipping Information
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-6 text-green-600 mt-0.5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>Free shipping on orders over $50</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-6 text-green-600 mt-0.5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>Standard delivery: 3-5 business days</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-6 text-green-600 mt-0.5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>
                              Express delivery available (1-2 business days)
                            </span>
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-6 text-green-600 mt-0.5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>Track your order in real-time</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-6 h-6"
                            >
                              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                              <path d="M3 3v5h5" />
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900">
                            Returns & Refunds
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-6 text-green-600 mt-0.5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>30-day hassle-free returns</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-6 text-green-600 mt-0.5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>Full refund or exchange available</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-6 text-green-600 mt-0.5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>Free return shipping on defective items</span>
                          </li>
                          <li className="flex items-center gap-2 text-sm text-gray-700">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-6 text-green-600 mt-0.5"
                            >
                              <path
                                fillRule="evenodd"
                                d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>Easy online return process</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-6 flex items-center gap-4">
                      <div className="h-14 w-14 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 640"
                          className="w-7 h-7 text-gray-600"
                          fill="currentColor"
                        >
                          <path d="M320 64C324.6 64 329.2 65 333.4 66.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.7 567.2C121.3 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L306.7 66.9C310.9 65 315.4 64 320 64zM320 130.8L320 508.9C458 442.1 495.1 294.1 496 205.5L320 130.9L320 130.9z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Buyer Protection Guarantee
                        </h4>
                        <p className="text-sm text-gray-600">
                          Get a full refund if your order doesn&apos;t arrive or
                          isn&apos;t as described. We ensure your shopping
                          experience is safe and secure.
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
