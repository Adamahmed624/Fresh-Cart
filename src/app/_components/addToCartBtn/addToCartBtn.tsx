"use client";
import addtoCart from "@/services/api/cartActions/cartActions";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type IconProps = React.SVGProps<SVGSVGElement>;

const PlusOutline = (props: IconProps) => (
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
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);

export default function AddToCartBtn({
  BtnType,
  prodId,
}: {
  BtnType: string;
  prodId: string;
}) {
  const query = useQueryClient()

  const handleAddToCart = async () => {
    mutate(prodId);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: addtoCart,
    onSuccess: () => {
      toast.success("Product added successfully");
      query.invalidateQueries({queryKey:['getCart']})
    },
    onError: () => {
      toast.error(`Failed to add to cart`);
    },
  });

  if (BtnType === "card") {
    return (
     <button
  onClick={handleAddToCart}
  disabled={isPending}
  aria-label="Add to cart"
  aria-busy={isPending}
  className="h-10 w-10 cursor-pointer rounded-full flex items-center justify-center transition bg-green-600 text-white hover:bg-green-700 active:scale-95 disabled:cursor-not-allowed disabled:opacity-80"
>
  {isPending ? (
    <span role="status" className="flex items-center justify-center">
      <span
        aria-hidden="true"
        className="block h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white"
      />
      <span className="sr-only">Adding to cart...</span>
    </span>
  ) : (
    <PlusOutline className="w-5 h-5" />
  )}
</button>
    );
  } else {
    return (
      <button
        onClick={handleAddToCart}
        disabled={isPending}
        className={`flex-1 cursor-pointer text-white py-3.5 px-6 ${BtnType === 'wishlist' ? 'h-9' : ''} rounded-xl font-medium hover:bg-green-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/25 bg-green-600`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
        </svg>
        Add to Cart
      </button>
    );
  }
}
