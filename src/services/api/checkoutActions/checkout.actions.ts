"use server";
import getTokenData from "@/app/utilis/getTokenData";

export async function createCashOrder(cartId: string, shippingAddress: object) {
  const accessToken = await getTokenData();
  if (!accessToken) throw new Error("Unauthorized");
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v2/orders/${cartId}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", token: accessToken },
      body: JSON.stringify({ shippingAddress }),
    },
  );
  if (!res.ok) throw new Error("Failed to create order");
  return res.json();
}

export async function createOnlineOrder(
  cartId: string,
  shippingAddress: object,
) {
  const accessToken = await getTokenData();
  if (!accessToken) throw new Error("Unauthorized");
  console.log("site url:", process.env.NEXTAUTH_URL);
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXTAUTH_URL}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", token: accessToken },
      body: JSON.stringify({ shippingAddress }),
    },
  );
  if (!res.ok) {
  console.error("checkout-session failed:", res.status, await res.text());
  throw new Error(`Checkout failed: ${res.status}`);
}
  const json = await res.json();
  return json.session.url;
}
