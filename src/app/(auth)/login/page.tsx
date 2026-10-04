"use client";
import Image from "next/image";
import loginImage from "../../../assets/login-image.png";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { LoginFormValues, LoginSchema } from "../../../schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset } = useForm<LoginFormValues>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(LoginSchema),
  });
  const router = useRouter();

  async function submittingForm(data: LoginFormValues) {
    setIsSubmitting(true);
    try {
      const isLogin = await signIn("credentials", { ...data, redirect: false });
      if (!isLogin?.ok) {
        toast.error("Incorrect email or password");
      } else {
        toast.success("Login successful");
        reset();
        router.push("/");
      }
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <>
      <div className="container py-16 mx-auto px-4" id="login-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="hidden lg:block">
            <div className="text-center space-y-6">
              <Image
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                alt="fresh vegetables and fruits shopping cart illustration, modern clean style, green theme"
                src={loginImage}
              />
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">
                  FreshCart - Your One-Stop Shop for Fresh Products
                </h2>
                <p className="text-lg text-gray-600">
                  Join thousands of happy customers who trust FreshCart for
                  their daily grocery needs
                </p>
                <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg
                      data-prefix="fas"
                      data-icon="truck"
                      className="svg-inline--fa fa-truck text-green-600 mr-2 size-4"
                      role="img"
                      viewBox="0 0 576 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                      />
                    </svg>
                    Free Delivery
                  </div>
                  <div className="flex items-center">
                    <svg
                      data-prefix="fas"
                      data-icon="shield-halved"
                      className="svg-inline--fa fa-shield-halved text-green-600 mr-2 size-4"
                      role="img"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"
                      />
                    </svg>
                    Secure Payment
                  </div>
                  <div className="flex items-center">
                    <svg
                      data-prefix="fas"
                      data-icon="clock"
                      className="svg-inline--fa fa-clock text-green-600 mr-2 size-4"
                      role="img"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                      />
                    </svg>
                    24/7 Support
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-green-600">
                    Fresh<span className="text-gray-800">Cart</span>
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Welcome Back!
                </h1>
                <p className="text-gray-600">
                  Sign in to continue your fresh shopping experience
                </p>
              </div>
              <div className="space-y-3 mb-6">
                <button
                  type="button"
                  className=" w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200"
                  aria-label="Sign up with Google"
                >
                  <svg
                    className="size-4 me-2 text-red-600"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M500 261.8C500 403.3 403.1 504 260 504 122.8 504 12 393.2 12 256S122.8 8 260 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9c-88.3-85.2-252.5-21.2-252.5 118.2 0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9l-140.8 0 0-85.3 236.1 0c2.3 12.7 3.9 24.9 3.9 41.4z"
                    />
                  </svg>
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  className=" w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-green-300 hover:bg-green-50 transition-all duration-200"
                  aria-label="Sign up with Facebook"
                >
                  <svg
                    className="size-4 me-2 text-blue-600"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"
                    />
                  </svg>
                  <span>Facebook</span>
                </button>
              </div>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">
                    OR CONTINUE WITH EMAIL
                  </span>
                </div>
              </div>
              <form
                className="space-y-6"
                onSubmit={handleSubmit(submittingForm)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                      placeholder="Enter your email"
                      id="email"
                      type="email"
                      {...register("email")}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Password
                    </label>
                    <Link
                      className="text-sm text-green-600 hover:text-green-700 cursor-pointer font-medium"
                      href="/forget-password"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      className="w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                      placeholder="Enter your password"
                      type="password"
                      {...register("password")}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4  absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <svg
                        data-prefix="fas"
                        data-icon="eye"
                        className="svg-inline--fa fa-eye"
                        role="img"
                        viewBox="0 0 576 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      className="h-4 w-4 text-green-600 accent-green-600 border-2 border-gray-300 rounded focus:ring-green-500"
                      type="checkbox"
                      name="rememberMe"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      Keep me signed in
                    </span>
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Signing in...
                    </span>
                  ) : (
                    "Sign In"
                  )}
                </button>
              </form>
              <div className="text-center mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600">
                  New to FreshCart?
                  <a
                    className="text-green-600 hover:text-green-700 ms-2 font-semibold cursor-pointer"
                    href="/signup"
                  >
                    Create an account
                  </a>
                </p>
              </div>
              <div className="flex items-center justify-center space-x-6 mt-6 text-xs text-gray-500">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  SSL Secured
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 mr-2"
                  >
                    <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                  </svg>
                  50K+ Users
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4 mr-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  4.9 Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
