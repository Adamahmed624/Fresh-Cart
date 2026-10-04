import getAllBrands from "@/services/api/brands/brandsApi";
import Link from "next/link";
import BrandsCard from "../_components/BrandsCard/BrandsCard";

export default async function Brands() {
  const allBrands = await getAllBrands();
  return (
    <>
      <div className="min-h-screen bg-gray-50/50">
        <div className="bg-linear-to-br from-violet-600 via-violet-500 to-purple-400 text-white">
          <div className="container mx-auto px-4 py-10 sm:py-14">
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/40">/</span>
              <span className="text-white font-medium">Brands</span>
            </nav>
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                  className="size-10"
                >
                  <path d="M433.2 103.1L581.4 253.4C609.1 281.5 609.1 326.5 581.4 354.6L425 512.9C415.7 522.3 400.5 522.4 391.1 513.1C381.7 503.8 381.6 488.6 390.9 479.2L547.3 320.8C556.5 311.5 556.5 296.4 547.3 287.1L399 136.9C389.7 127.5 389.8 112.3 399.2 103C408.6 93.7 423.8 93.8 433.1 103.2zM64.1 293.5L64.1 160C64.1 124.7 92.8 96 128.1 96L261.6 96C278.6 96 294.9 102.7 306.9 114.7L450.9 258.7C475.9 283.7 475.9 324.2 450.9 349.2L317.4 482.7C292.4 507.7 251.9 507.7 226.9 482.7L82.9 338.7C70.9 326.7 64.2 310.4 64.2 293.4zM208.1 208C208.1 190.3 193.8 176 176.1 176C158.4 176 144.1 190.3 144.1 208C144.1 225.7 158.4 240 176.1 240C193.8 240 208.1 225.7 208.1 208z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Top Brands
                </h1>
                <p className="text-white/80 mt-1">
                  Shop from your favorite brands
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {allBrands.map((b) => (
              <BrandsCard key={b._id} brand={b} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
