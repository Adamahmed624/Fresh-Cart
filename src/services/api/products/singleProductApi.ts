import { SingleProductType } from "@/app/_components/Products/SingleProduct.type";

export default async function getSingleProduct(
  productId: string,
): Promise<SingleProductType> {
  const res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/${productId}`,
  );

  const response = await res.json();

  return response.data;
}
