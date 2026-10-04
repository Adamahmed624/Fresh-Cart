import getTokenData from "@/app/utilis/getTokenData";
import { toast } from "react-toastify";

export default async function ClearCartItem() {
  const accessToken = await getTokenData();

  if (!accessToken) {
    toast.error("You have to login first");
    return;
  }

  let res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`, {
    method: "DELETE",
    headers: {
      token: accessToken,
    },
  });

  res = await res.json();

  return res;
}