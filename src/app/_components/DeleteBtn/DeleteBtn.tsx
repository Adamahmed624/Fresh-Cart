"use client";
import DeleteItem from "@/services/api/cartActions/deletetem";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function DeleteBtn({
  prodName,
  productId,
  productType = "cart",
}: {
  prodName: string;
  productId: string;
  productType?: "cart" | "wishlist";
}) {
  const query = useQueryClient();
  const { mutate: deleteOneItem, isPending: oneItemLoading } = useMutation({
    mutationFn: DeleteItem,
    onSuccess: () => {
      toast.success("Product Deleted Successfully");
      query.invalidateQueries({ queryKey: ["getCart"] });
      query.invalidateQueries({ queryKey: ["getWishlist"] });
    },
    onError: () => {
      toast.error("Can't Delete Product now, Try again later");
    },
  });

  const handleDeleteItem = (prodId: string) => {
    Swal.fire({
      title: "Remove Item?",
      text: `Remove ${prodName} from your ${productType}?`,
      iconHtml: `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-10 text-red-500 bg-red-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                      clipRule="evenodd"
                    />
                  </svg>`,
      showCancelButton: true,
      cancelButtonText: "Cancel",
      buttonsStyling: false,
      confirmButtonText: "Remove",
      customClass: {
        icon: "w-16 h-16 border-none! bg-red-100 flex items-center justify-center rounded-full mx-auto my-4 p-0",
        actions: "flex flex-row-reverse gap-4",
        cancelButton:
          "bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all",
        confirmButton:
          "bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteOneItem({ prodId, deleteType: productType });
      }
    });
  };
  return (
    <>
      <button
        onClick={() => handleDeleteItem(productId)}
        disabled={oneItemLoading}
        className="h-10 w-10 rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center disabled:opacity-40 transition-all duration-200"
        title="Remove item"
        aria-label="Remove from cart"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5"
        >
          <path
            fillRule="evenodd"
            d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </>
  );
}
