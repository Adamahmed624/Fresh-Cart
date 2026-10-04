'use server'
import getTokenData from "@/app/utilis/getTokenData";
import { WishlistRoot } from "@/types/wishlistProd.type";
import { toast } from "react-toastify";

export default async function getWishlist(): Promise<WishlistRoot> {
  const accessToken = await getTokenData();
  if (!accessToken) {
    toast.error("Can't get your wishlist products")
    throw new Error("No access token found");
  }
  const data = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
    method: "GET",
    headers: {
      token: accessToken,
    },
  });
  const res = await data.json();
  return res;
}
