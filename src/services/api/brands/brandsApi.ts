import { BrandsType, Root } from "@/app/_components/BrandsCard/Brands.type";

export default async function getAllBrands(): Promise<BrandsType[]> {
  const res = await fetch('https://ecommerce.routemisr.com/api/v1/brands');
  const data: Root = await res.json();

  return data.data;
}