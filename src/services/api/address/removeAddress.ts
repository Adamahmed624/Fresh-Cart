import getTokenData from "@/app/utilis/getTokenData";
import { toast } from "react-toastify";

export default async function DeleteAddress({
  AddressId,
}: {
  AddressId: string;
}) {
  const accessToken = await getTokenData();

  if (!accessToken) {
    toast.error("You have to login first");
    return;
  }

  let res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/addresses/${AddressId}`,
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
