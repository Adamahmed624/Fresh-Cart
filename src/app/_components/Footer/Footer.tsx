import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/freshcart-logo.svg";

export default function Footer() {
  return (
    <>
      <div className="bg-green-50 border-y border-green-100">
        <div className="container mx-auto px-4 py-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-green-600"
                >
                  <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
                  <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
                  <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  Free Shipping
                </h4>
                <p className="text-gray-500 text-xs">On orders over 500 EGP</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-green-600"
                >
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  Easy Returns
                </h4>
                <p className="text-gray-500 text-xs">14-day return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-6 h-6 text-green-600"
                  fill="currentColor"
                >
                  <path d="M320 64C324.6 64 329.2 65 333.4 66.9L521.8 146.8C543.8 156.1 560.2 177.8 560.1 204C559.6 303.2 518.8 484.7 346.5 567.2C329.8 575.2 310.4 575.2 293.7 567.2C121.3 484.7 80.6 303.2 80.1 204C80 177.8 96.4 156.1 118.4 146.8L306.7 66.9C310.9 65 315.4 64 320 64zM320 130.8L320 508.9C458 442.1 495.1 294.1 496 205.5L320 130.9L320 130.9z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  Secure Payment
                </h4>
                <p className="text-gray-500 text-xs">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-6 h-6 text-green-600"
                  fill="currentColor"
                >
                  <path d="M320 60C176.38 60 60 176.38 60 320l0 50c0 16.62-13.38 30-30 30s-30-13.38-30-30l0-50C0 143.25 143.25 0 320 0S640 143.25 640 320l0 180.12c0 60.75-49.25 110-110.12 110L392 610c-10.38 17.88-29.75 30-52 30l-40 0c-33.12 0-60-26.88-60-60s26.88-60 60-60l40 0c22.25 0 41.62 12.12 52 30l138 0.12c27.62 0 50-22.38 50-50L580 320c0-143.62-116.38-260-260-260zM180 260l20 0c22.12 0 40 17.88 40 40l0 140c0 22.12-17.88 40-40 40l-20 0c-44.12 0-80-35.88-80-80l0-60c0-44.12 35.88-80 80-80zm280 0c44.12 0 80 35.88 80 80l0 60c0 44.12-35.88 80-80 80l-20 0c-22.12 0-40-17.88-40-40l0-140c0-22.12 17.88-40 40-40l20 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">
                  24/7 Support
                </h4>
                <p className="text-gray-500 text-xs">Contact us anytime</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-6">
                <div className="bg-white rounded-lg px-4 py-2 inline-block">
                  <Image
                    src={Logo}
                    alt="Fresh cart Logo"
                    width={160}
                    height={31}
                  />
                </div>
              </Link>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                FreshCart is your one-stop destination for quality products.
                From fashion to electronics, we bring you the best brands at
                competitive prices with a seamless shopping experience.
              </p>
              <div className="space-y-3 mb-6">
                <a
                  href="tel:+18001234567"
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  +1 (800) 123-4567
                </a>
                <a
                  href="mailto:support@freshcart.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 text-green-500"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                  support@freshcart.com
                </a>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span>123 Commerce Street, New York, NY 10001</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M523.4 215.7C523.7 220.2 523.7 224.8 523.7 229.3C523.7 368 418.1 527.9 225.1 527.9C165.6 527.9 110.4 510.7 64 480.8C72.4 481.8 80.6 482.1 89.3 482.1C138.4 482.1 183.5 465.5 219.6 437.3C173.5 436.3 134.8 406.1 121.5 364.5C128 365.5 134.5 366.1 141.3 366.1C150.7 366.1 160.1 364.8 168.9 362.5C120.8 352.8 84.8 310.5 84.8 259.5L84.8 258.2C98.8 266 115 270.9 132.2 271.5C103.9 252.7 85.4 220.5 85.4 184.1C85.4 164.6 90.6 146.7 99.7 131.1C151.4 194.8 229 236.4 316.1 240.9C314.5 233.1 313.5 225 313.5 216.9C313.5 159.1 360.3 112 418.4 112C448.6 112 475.9 124.7 495.1 145.1C518.8 140.6 541.6 131.8 561.7 119.8C553.9 144.2 537.3 164.6 515.6 177.6C536.7 175.3 557.2 169.5 576 161.4C561.7 182.2 543.8 200.7 523.4 215.7z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Shop</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/products"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/categories"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Categories
                  </Link>
                </li>
                <li>
                  <Link
                    href="/brands"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Brands
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Electronics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Men&apos;s Fashion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Womens&apos;s Fashion
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Account</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/profile"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile/orders"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Order History
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wishlist"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cart"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Shopping Cart
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Create Account
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Returns & Refunds
                  </Link>
                </li>
                <li>
                  <Link
                    href="/track-order"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    href="/signup"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Create Account
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h3 className="font-semibold text-lg mb-5">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cokkies"
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} FreshCart. All rights
                reserved.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3.5"
                  >
                    <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                    <path
                      fillRule="evenodd"
                      d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span>Visa</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3.5"
                  >
                    <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                    <path
                      fillRule="evenodd"
                      d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span>Mastercard</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3.5"
                  >
                    <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                    <path
                      fillRule="evenodd"
                      d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <span>PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
