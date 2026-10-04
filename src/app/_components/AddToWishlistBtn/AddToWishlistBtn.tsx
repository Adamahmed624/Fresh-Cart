import addToWishlist from "@/services/api/wishlist/addToWishlist";
import getWishlist from "@/services/api/wishlist/getUserWishlist";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

type IconProps = React.SVGProps<SVGSVGElement> & { filled?: boolean };

const HeartOutline = ({ filled, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={1.5}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
);
export default function AddToWishlistBtn({ prodId }: { prodId: string }) {
  const query = useQueryClient();

  const { data: wishlistProd } = useQuery({
    queryFn: getWishlist,
    queryKey: ["getWishlist"],
  });

  const isWishlist =
    wishlistProd?.data.some((item) => item._id === prodId) ?? false;

  console.log(isWishlist);

  const handleAddToWishlist = () => {
    if (isPending) return;

    if (isWishlist) {
      toast.info("Product already added");
      return;
    }

    mutate(prodId);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: addToWishlist,
    onSuccess: () => {
      toast.success("Product added successfully");
      query.invalidateQueries({ queryKey: ["getWishlist"] });
    },
    onError: () => {
      toast.error(`Failed to add to wishlist`);
    },
  });
  return (
    <>
      <button
        title={isWishlist ? "Already in wishlist" : "Add to wishlist"}
        onClick={handleAddToWishlist}
        disabled={isPending}
        className={`bg-white h-8 w-8 rounded-full flex items-center justify-center shadow-sm transition cursor-pointer ${
          isWishlist ? "text-red-500" : "text-gray-600 hover:text-red-500"
        }`}
      >
        <HeartOutline filled={isWishlist} className="w-5 h-5" />
      </button>
    </>
  );
}
