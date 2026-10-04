import getAllCategories from "@/services/api/categories/categoriesApi";
import Link from "next/link";
import LoadingProducts from "../_components/loding/loading";
import Image from "next/image";

export default async function Categories() {
  const categories = await getAllCategories();
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
              <span className="text-white font-medium">Categories</span>
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
                  All Categories
                </h1>
                <p className="text-white/80 mt-1">
                  Browse our wide range of product categories
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          {categories.length == 0 ? (
            <LoadingProducts />
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {categories.map((cat) => (
                <Link
                  key={cat._id}
                  className="group bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 shadow-sm hover:shadow-xl hover:border-violet-200 transition-all duration-300 hover:-translate-y-1"
                  href={`/categories/${cat._id}`}
                >
                  <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 mb-3 p-4 flex items-center justify-center">
                    <Image
                      alt={cat.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 "
                      src={cat.image}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-center group-hover:text-green-600 transition-colors">
                    {cat.name}
                  </h3>
                  <div className="flex justify-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-green-600 flex items-center gap-1">
                      View Subcategories
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-3.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
