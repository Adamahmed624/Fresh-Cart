"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/freshcart-logo.svg";
import { Category } from "@/app/_components/Products/Product.type";

interface NavbarBurgerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  categories?: Category[];
}

export default function NavbarBurger({
  isOpen,
  setIsOpen,
  categories = [],
}: NavbarBurgerProps) {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={`fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50">
          <Image className="h-8 w-auto" src={logo} alt="Logo" />
          <button
            onClick={() => setIsOpen(false)}
            className="cursor-pointer w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form className="p-4 border-b border-gray-100">
          <div className="relative">
            <input
              placeholder="Search products..."
              type="text"
              className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 text-sm"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-green-600 text-white flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </form>

        <nav className="p-4">
          <div className="space-y-1">
            <Link
              onClick={() => setIsOpen(false)}
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              href="/products"
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
            >
              Shop
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              href="/categories"
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
            >
              Categories
            </Link>
            {categories.length > 0 && (
              <div className="pl-4 space-y-1 border-l-2 border-gray-100 ml-4">
                {categories.map((cat) => (
                  <Link
                    key={cat._id}
                    onClick={() => setIsOpen(false)}
                    href={`/categories/${cat._id}`}
                    className="block px-4 py-2 rounded-lg text-sm text-gray-500 hover:text-green-600 hover:bg-green-50 transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
            <Link
              onClick={() => setIsOpen(false)}
              href="/brands"
              className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 transition-colors"
            >
              Brands
            </Link>
          </div>
        </nav>

        <div className="mx-4 border-t border-gray-100"></div>

        <div className="p-4 space-y-1">
          <Link
            onClick={() => setIsOpen(false)}
            href="/wishlist"
            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
              <span className="font-medium text-gray-700">Wishlist</span>
            </div>
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/cart"
            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-green-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
              <span className="font-medium text-gray-700">Cart</span>
            </div>
          </Link>
        </div>

        <div className="mx-4 border-t border-gray-100">
          <div className="p-4 space-y-1">
            <Link
              onClick={() => setIsOpen(false)}
              href="/login"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
            >
              Sign In
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              href="/signup"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-green-600 text-green-600 font-semibold hover:bg-green-50 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}