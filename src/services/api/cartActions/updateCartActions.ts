import getTokenData from "@/app/utilis/getTokenData";
import { toast } from "react-toastify";

export default async function UpdateCart(prodId:string, count: number) {
  const accessToken = await getTokenData();

  if (!accessToken) {
    toast.error("Something went wrong");
    return;
  }

  let res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${prodId}`, {
    method: "PUT",
    body: JSON.stringify({
      count: count
    }),
    headers: {
      token: accessToken,
      "Content-Type": "application/json",
    },
  });

  res = await res.json();

  return res
}
