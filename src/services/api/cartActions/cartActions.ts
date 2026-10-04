import getTokenData from "@/app/utilis/getTokenData";
import { toast } from "react-toastify";

export default async function addtoCart(prodId:string) {
  const accessToken = await getTokenData();

  if (!accessToken) {
    toast.error("You have to login first");
    return;
  }

  let res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {
    method: "POST",
    body: JSON.stringify({
      productId: prodId,
    }),
    headers: {
      token: accessToken,
      "Content-Type": "application/json",
    },
  });

  res = await res.json();

  return res
}
