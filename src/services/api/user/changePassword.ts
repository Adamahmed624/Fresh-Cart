import { changePasswordValues } from "@/app/profile/settings/changePasswordSchema";
import getTokenData from "@/app/utilis/getTokenData";

export default async function changePassword(newPasswordData: changePasswordValues) {
  const accessToken = await getTokenData();
  if (!accessToken) throw new Error("No access token");

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`,
    {
      method: "PUT",
      body: JSON.stringify(newPasswordData),
      headers: { token: accessToken, "Content-Type": "application/json" },
    }
  );

  const result = await response.json();
  if (!response.ok || result.message !== "success") {
    throw new Error(result.message ?? "Failed to change password");
  }
  return result;
}