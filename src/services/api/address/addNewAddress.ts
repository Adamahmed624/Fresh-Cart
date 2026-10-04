import getTokenData from "@/app/utilis/getTokenData";
import { addNewAddressFormValues } from "@/schema/addNewAddressSchema";
import { toast } from "react-toastify";

export default async function addAddress(addressForm: addNewAddressFormValues) {
  const accessToken = await getTokenData();

  if (!accessToken) {
    toast.error("You have to login first");
    return;
  }

  let res = await fetch("https://ecommerce.routemisr.com/api/v1/addresses", {
    method: "POST",
    body: JSON.stringify(addressForm),
    headers: {
      token: accessToken,
      "Content-Type": "application/json",
    },
  });

  res = await res.json();

  return res;
}
