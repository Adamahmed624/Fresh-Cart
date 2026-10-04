'use server'
import getTokenData from "@/app/utilis/getTokenData";
import { CartProdData } from "@/types/cartProd.type";
import { toast } from "react-toastify";

export default async function getCart(): Promise<CartProdData> {
  const accessToken = await getTokenData();
  if (!accessToken) {
    toast.error("Can't get your cart products")
    throw new Error("No access token found");
  }
  const data = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    method: "GET",
    headers: {
      token: accessToken,
    },
  });
  const res = await data.json();
  return res;
}
