"use client";
import Link from "next/link";
import CheckoutForm from "../_components/checkoutForm/checkoutForm";
import getCart from "@/services/api/cartActions/getCart";
import { useQuery } from "@tanstack/react-query";
import CheckoutSkeleton from "../_components/checkoutSkeleton/checkoutSkeleton";

export default function Checkout() {
  const { data: cart , isLoading: cartLoading } = useQuery({
    queryKey: ["getCart"],
    queryFn: getCart,
  });



  if(cartLoading || !cart ) {
    return <CheckoutSkeleton />;
  }

  return (
    <>
      {cart?.data.products.length === 0 ? (
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <div className="relative mb-8">
              <div className="w-24 h-24 rounded-full bg-linear-to-br from-amber-50 to-orange-50 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="size-10 text-amber-500"
                  role="img"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Looks like you haven&apos;t added anything to your cart yet.
              <br />
              Start exploring our products!
            </p>
            <Link
              className="inline-flex items-center gap-2 bg-green-600 text-white py-3.5 px-8 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg active:scale-[0.98]"
              href="/"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-linear-to-b from-gray-50 to-white min-h-screen py-8">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Link className="hover:text-green-600 transition" href="/">
                  Home
                </Link>
                <span className="text-gray-300">/</span>
                <a className="hover:text-green-600 transition" href="/cart">
                  Cart
                </a>
                <span className="text-gray-300">/</span>
                <span className="text-gray-900 font-medium">Checkout</span>
              </nav>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <span className="bg-linear-to-br from-green-600 to-green-700 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-green-600/20">
                      <svg
                        className="size-7"
                        role="img"
                        viewBox="0 0 384 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.2-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6S384 14.6 384 24l0 464c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6l-40.4-34.6-40.4 34.6c-9 7.7-22.2 7.7-31.2 0l-40.4-34.6-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488L0 24C0 14.6 5.5 6.1 14 2.2zM104 136c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0zM80 352c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24zm24-120c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z"
                        />
                      </svg>
                    </span>
                    Complete Your Order
                  </h1>
                  <p className="text-gray-500 mt-2">
                    Review your items and complete your purchase
                  </p>
                </div>
                <a
                  className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-green-50 transition-all"
                  href="/cart"
                >
                  <svg
                    className="size-4"
                    role="img"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                    />
                  </svg>
                  Back to Cart
                </a>
              </div>
            </div>

            <CheckoutForm cart={cart} />
          </div>
        </div>
      )}
    </>
  );
}
