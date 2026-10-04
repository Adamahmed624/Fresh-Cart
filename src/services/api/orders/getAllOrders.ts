
import getTokenData from "@/app/utilis/getTokenData";
import { OrdersRoot } from "@/types/orders.type";
import { toast } from "react-toastify";

export default async function getOrders(userId: string): Promise<OrdersRoot> {
  const accessToken = await getTokenData();
  if (!accessToken) {
    toast.error("Can't get your Orders");
    throw new Error("No access token found");
  }
  const data = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`,
    {
      method: "GET",
      headers: {
        token: accessToken,
      },
    },
  );
  const res = await data.json();
  return res;
}
