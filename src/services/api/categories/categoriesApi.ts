import { Category } from "@/app/_components/Products/Product.type"

export default async function getAllCategories() : Promise<Category[]>{
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories")
    const data = await res.json()
    return data.data
}