"use client";

import { useState } from "react";

interface QuantitySelectorProps {
  maxQuantity: number;
  price: number;
}

export default function QuantitySelector({
  maxQuantity,
  price,
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < maxQuantity) setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const totalPrice = quantity * price;

  return (
    <>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quantity
        </label>
        <div className="flex items-center gap-4">
          <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity <= 1}
              className="px-4 cursor-pointer py-3 text-gray-600 hover:bg-gray-100 hover:text-green-600 transition disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <input
              type="number"
              className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium"
              max={maxQuantity}
              min={1}
              value={quantity}
              onChange={(e)=>{
                let val = e.target.valueAsNumber
                if(!isNaN(val) && val > 1 && val <=maxQuantity){
                  setQuantity(val)
                }
              }}
            />

            <button
              type="button"
              onClick={increment}
              disabled={quantity >= maxQuantity}
              className="px-4 cursor-pointer py-3 text-gray-600 hover:bg-gray-100 hover:text-green-600 transition disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <span className="text-sm text-gray-500">{maxQuantity} available</span>
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Price:</span>
          <span className="text-2xl font-bold text-primary-600">{totalPrice} EGP</span>
        </div>
      </div>
    </>
  );
}
