'use server'
import getTokenData from "@/app/utilis/getTokenData";
import { AddressesRoot } from "@/types/address.type";
import { toast } from "react-toastify";

export default async function getAddresses(): Promise<AddressesRoot> {
  const accessToken = await getTokenData();
  if (!accessToken) {
    toast.error("Can't get your addresses")
    throw new Error("No access token found");
  }
  const data = await fetch("https://ecommerce.routemisr.com/api/v1/addresses", {
    method: "GET",
    headers: {
      token: accessToken,
    },
  });
  const res = await data.json();
  return res;
}