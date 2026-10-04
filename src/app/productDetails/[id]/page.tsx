import AddToCartBtn from "@/app/_components/addToCartBtn/addToCartBtn";
import ProductGallery from "@/app/_components/ProductGallery/ProductGallery";
import ProductInfoTabs from "@/app/_components/ProductInfoTabs/ProductInfoTabs";
import ProductYouMayLike from "@/app/_components/ProductYouMayLike/ProductYouMayLike";
import QuantitySelector from "@/app/_components/Quantity/Quantity";
import getFeaturedProduct from "@/services/api/products/productApi";
import getSingleProduct from "@/services/api/products/singleProductApi";
import Link from "next/link";

type IconProps = React.SVGProps<SVGSVGElement>;

const StarOutline = (props: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.98 21.539a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    />
  </svg>
);

const StarSolid = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
    />
  </svg>
);

const StarHalf = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <defs>
      <linearGradient id="halfStarGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="50%" stopColor="currentColor" />
        <stop offset="50%" stopColor="transparent" stopOpacity="0" />
      </linearGradient>
    </defs>

    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
    />

    <path
      fill="url(#halfStarGradient)"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
    />
  </svg>
);

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const data = await getSingleProduct(id);
  const allProducts = await getFeaturedProduct()
  const similarProduct = allProducts.filter((p)=> p.category.name === data.category.name && p._id !== data._id)
  

  function calculateDiscount(currentPrice: number, price: number) {
    const dis = (((price - currentPrice) / price) * 100).toFixed(0);
    return dis;
  }



  return (
    <>
      <nav className="py-4">
        <div className="container mx-auto px-4">
          <ol className="flex items-center flex-wrap gap-1 text-sm">
            <li className="flex items-center">
              <Link
                href="/"
                className="text-gray-500 hover:text-green-600 transition flex items-center gap-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
                Home
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 text-gray-400 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
            <li className="flex items-center">
              <Link
                href="#"
                className="text-gray-500 hover:text-green-600 transition flex items-center gap-1.5"
              >
                {data.category.name}
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 text-gray-400 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
            <li className="flex items-center">
              <Link
                href="#"
                className="text-gray-500 hover:text-green-600 transition flex items-center gap-1.5"
              >
                {data.subcategory[0].name}
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 text-gray-400 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
            <li className="text-gray-900 font-medium truncate max-w-xs">
              {data.title}
            </li>
          </ol>
        </div>
      </nav>
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-sm p-4 sticky top-4">
                <ProductGallery images={data.images} title={data.title} />
              </div>
            </div>

            <div className="lg:w-3/4">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Link
                    href="#"
                    className="bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-full hover:bg-green-100 transition"
                  >
                    {data.category.name}
                  </Link>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                    {data.brand.name}
                  </span>
                </div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {data.title}
                </h1>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex text-amber-400 mr-2">
                    {Array.from({ length: 5 }).map((_, i) => {
                      const rating = data.ratingsAverage;

                      if (i + 1 <= Math.floor(rating)) {
                        return <StarSolid key={i} className="w-5 h-5" />;
                      } else if (i < rating && rating % 1 !== 0) {
                        return (
                          <StarHalf
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                          />
                        );
                      } else {
                        return <StarOutline key={i} className="w-5 h-5" />;
                      }
                    })}
                  </div>
                  <span className="text-sm text-gray-600">
                    {data.ratingsAverage} ({data.ratingsQuantity} reviews)
                  </span>
                </div>
                <div className="flex items-center flex-wrap gap-3 mb-6">
                  {data.priceAfterDiscount ? (
                    <>
                      <span className="text-3xl font-bold text-gray-900">
                        {data.priceAfterDiscount} EGP
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        {data.price} EGP
                      </span>
                      <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                        {calculateDiscount(data.price, data.priceAfterDiscount)}
                        %
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-gray-900">
                      {data.price} EGP
                    </span>
                  )}
                </div>
                {data.quantity > 0 ? (
                  <>
                    <div className="flex items-center gap-2 mb-6">
                      <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        In Stock
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2 mb-6">
                      <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-red-50 text-red-700">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        In Stock
                      </span>
                    </div>
                  </>
                )}
                <div className="border-t border-gray-100 pt-5 mb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {data.description}
                  </p>
                </div>
                <QuantitySelector
                  maxQuantity={data.quantity}
                  price={
                    data.priceAfterDiscount
                      ? data.priceAfterDiscount
                      : data.price
                  }
                />
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <AddToCartBtn BtnType="datail" prodId={id}/>
                  <button className="flex-1 cursor-pointer bg-gray-900 text-white py-3.5 px-6 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Buy Now
                  </button>
                </div>
                <div className="flex gap-3 mb-6">
                  <button className="flex-1 cursor-pointer border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:border-green-300 hover:text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                    Add to Wishlist
                  </button>
                  <button className="border-2 cursor-pointer border-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:border-green-300 hover:text-green-600 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="border-t border-gray-100 pt-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                        <svg
                          data-prefix="fas"
                          data-icon="truck-fast"
                          className="size-5"
                          role="img"
                          viewBox="0 0 640 512"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="M64 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L621.3 192c12 12 18.7 28.3 18.7 45.3L640 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-3.3 0c-35.3 0-64-28.7-64-64l0-48-40 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 144c-13.3 0-24-10.7-24-24S10.7 96 24 96l40 0zM576 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM256 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">
                          Free Delivery
                        </h4>
                        <p className="text-xs text-gray-500">Orders over $50</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          className="size-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">
                          30 Days Return
                        </h4>
                        <p className="text-xs text-gray-500">Money back</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                        <svg
                          data-prefix="fas"
                          data-icon="shield-halved"
                          className="size-5"
                          role="img"
                          viewBox="0 0 512 512"
                          aria-hidden="true"
                        >
                          <path
                            fill="currentColor"
                            d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">
                          Secure Payment
                        </h4>
                        <p className="text-xs text-gray-500">100% Protected</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductInfoTabs data={data}/>
      <ProductYouMayLike products={similarProduct}/>
    </>
  );
}
