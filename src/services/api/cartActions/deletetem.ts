import getTokenData from "@/app/utilis/getTokenData";
import { toast } from "react-toastify";

export default async function DeleteItem({
  prodId,
  deleteType,
}: {
  prodId: string;
  deleteType: string;
}) {
  const accessToken = await getTokenData();

  if (!accessToken) {
    toast.error("You have to login first");
    return;
  }

  let res = await fetch(
    `${deleteType === "wishlist" ? `https://ecommerce.routemisr.com/api/v1/wishlist/${prodId}` : `https://ecommerce.routemisr.com/api/v2/cart/${prodId}`}`,
    {
      method: "DELETE",
      headers: {
        token: accessToken,
        "Content-Type": "application/json",
      },
    },
  );

  res = await res.json();

  return res;
}
