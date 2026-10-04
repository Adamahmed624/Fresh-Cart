import getAllCategories from "@/services/api/categories/categoriesApi";
import Image from "next/image";
import Link from "next/link";

export default async function Categories() {
  const categories = await getAllCategories();
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8">
            <div className="flex items-center gap-3 my-8">
              <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-800">
                Shop by <span className="text-emerald-600">Category</span>
              </h2>
            </div>
            <Link
              href="/categories"
              className="text-green-600 self-end sm:self-auto hover:text-green-700 font-medium flex items-center cursor-pointer"
            >
              View All Categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 ml-2"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat._id}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition group cursor-pointer"
                href="/categories/#"
              >
                <div className="h-20 w-20 overflow-hidden bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition">
                  <Image
                    src={cat.image}
                    alt="Music"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium">{cat.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
