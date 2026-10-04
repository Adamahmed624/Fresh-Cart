import getAllCategories from "@/services/api/categories/categoriesApi";
import NavbarClient from "./NavbarClient";

export default async function Navbar2() {
  const categories = await getAllCategories();

  return <NavbarClient categories={categories} />;
}