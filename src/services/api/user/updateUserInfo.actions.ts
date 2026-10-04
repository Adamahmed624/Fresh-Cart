import getTokenData from "@/app/utilis/getTokenData";
import { updateUserInfoValues } from "@/schema/updateUserInfoSchema";

export default async function updateUserInfo(
  newUserInfo: updateUserInfoValues,
) {
  const accessToken = await getTokenData();
  if (!accessToken) throw new Error("No access token");

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/users/updateMe/`,
    {
      method: "PUT",
      body: JSON.stringify(newUserInfo),
      headers: { token: accessToken, "Content-Type": "application/json" },
    },
  );

  const result = await response.json();
  if (!response.ok || result.message !== "success") {
    throw new Error(result.message ?? "Failed to change password");
  }
  return result;
}
