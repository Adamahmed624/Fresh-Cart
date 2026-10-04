import getTokenData from "@/app/utilis/getTokenData";

export default async function addToWishlist(prodId: string) {
  const accessToken = await getTokenData();
  if (!accessToken) return;

  const res = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: accessToken,
    },
    body: JSON.stringify({ productId: prodId }),
  });

  return res.json();
}
