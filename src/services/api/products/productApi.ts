import { ProductType } from "@/app/_components/Products/Product.type";

type GetFeaturedProductParams = {
  category?: string;
  brand?: string;
};

export default async function getFeaturedProduct(
  params?: GetFeaturedProductParams,
): Promise<ProductType[]> {
  const query = new URLSearchParams();

  if (params?.brand) {
    query.append("brand", params.brand);
  }
  if (params?.category) {
    query.append("category", params.category);
  }

  const queryString = query.toString();
  const url = `https://ecommerce.routemisr.com/api/v1/products${
    queryString ? `?${queryString}` : ""
  }`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  const data = await res.json();
  return data.data;
}