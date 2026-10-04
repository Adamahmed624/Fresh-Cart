import getFeaturedProduct from "@/services/api/products/productApi";
import Link from "next/link";
import ProductCard from "../_components/Products/ProductCard";
import LoadingProducts from "../_components/loding/loading";

export default async function Shop() {
  const allProducts = await getFeaturedProduct();
  return (
    <>
      <div className="min-h-screen bg-gray-50/50">
        <div className="bg-linear-to-br from-green-600 via-green-500 to-green-400 text-white">
          <div className="container mx-auto px-4 py-10 sm:py-14">
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white font-medium">All Products</span>
            </nav>
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-7"
                >
                  <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                  <path
                    fillRule="evenodd"
                    d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  All Products
                </h1>
                <p className="text-white/80 mt-1">
                  Explore our complete product collection
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6 text-sm text-gray-500">
            Showing {allProducts.length}{" "}
            {allProducts.length > 1 ? "products" : "product"}
          </div>
          {allProducts.length == 0 ? (
            <LoadingProducts />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {allProducts.map((prod) => (
                <ProductCard prod={prod} key={prod._id} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
