"use client";

import Image from "next/image";
import reviewAuthor from "../../../assets/review-author.webp";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormValues, RegisterSchema } from "../../../schema/signupSchema";
import { useRouter } from "next/navigation";
import { signupAction } from "./registerActions";
import { toast } from "react-toastify";

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <polygon
        fill="currentColor"
        points="12,2 14.35,8.76 21.51,8.91 15.80,13.24 17.88,20.09 12,16 6.12,20.09 8.20,13.24 2.49,8.91 9.65,8.76"
      />
    </svg>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="1" y="7" width="13" height="8" />
      <polygon points="14,9.5 18,9.5 21,13 21,15 14,15" />
      <circle cx="5.5" cy="17" r="1.8" />
      <circle cx="17.5" cy="17" r="1.8" />
    </svg>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2 L4 5 V11 C4 16 7.5 20 12 22 C16.5 20 20 16 20 11 V5 Z" />
      <path d="M8.5 12.2 L11 14.7 L16 9.2" />
    </svg>
  );
}

function UserPlusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="8" r="3" />
      <path d="M3 21c0-4 3-6 6-6s6 2 6 6" />
      <line x1="18" y1="9" x2="18" y2="15" />
      <line x1="15" y1="12" x2="21" y2="12" />
    </svg>
  );
}

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterFormValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(RegisterSchema),
  });

  const router = useRouter();
  async function submitForm(data: RegisterFormValues) {
    const isValid = await signupAction(data);
    if (!isValid) {
      toast.error("Something went wrong, try again later");
    } else {
      toast.success("Your account has been created successfully")
      console.log(data);
      reset();
      router.push("/login");
    }
  }

  return (
    <>
      <main className="py-10">
        <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-4">
          <div>
            <h1 className="text-4xl font-bold">
              Welcome to <span className="text-green-600">FreshCart</span>
            </h1>
            <p className="text-xl mt-2 mb-4">
              Join thousands of happy customers who enjoy fresh groceries
              delivered right to their doorstep.
            </p>
            <ul className="*:flex *:items-start *:gap-4 space-y-6 my-8">
              <li>
                <div className="icon size-12 text-lg bg-green-200 text-green-600 rounded-full flex justify-center items-center">
                  <StarIcon className="size-5" />
                </div>
                <div className="content">
                  <h2 className="text-lg font-semibold">Premium Quality</h2>
                  <p className="text-gray-600">
                    Premium quality products sourced from trusted suppliers.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon size-12 text-lg bg-green-200 text-green-600 rounded-full flex justify-center items-center">
                  <TruckIcon className="size-5" />
                </div>
                <div className="content">
                  <h2 className="text-lg font-semibold">Fast Delivery</h2>
                  <p className="text-gray-600">
                    Same-day delivery available in most areas
                  </p>
                </div>
              </li>
              <li>
                <div className="icon size-12 text-lg bg-green-200 text-green-600 rounded-full flex justify-center items-center">
                  <ShieldCheckIcon className="size-5" />
                </div>
                <div className="content">
                  <h2 className="text-lg font-semibold">Secure Shopping</h2>
                  <p className="text-gray-600">
                    Your data and payments are completely secure
                  </p>
                </div>
              </li>
            </ul>
            <div className="review bg-white shadow-sm p-4 rounded-md">
              <div className="author flex items-center gap-4 mb-4">
                <Image
                  alt="image"
                  loading="lazy"
                  width={512}
                  height={512}
                  decoding="async"
                  data-nimg={1}
                  className="size-12 rounded-full"
                  src={reviewAuthor}
                  style={{ color: "transparent" }}
                />
                <div>
                  <h3>Sarah Johnson</h3>
                  <div className="rating flex text-yellow-300">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="size-4" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote>
                <p className="italic text-gray-600">
                  FreshCart has transformed my shopping experience. The quality
                  of the products is outstanding, and the delivery is always on
                  time. Highly recommend!
                </p>
              </blockquote>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg px-6 py-10">
            <h2 className="text-center text-3xl font-semibold mb-2">
              Create Your Account
            </h2>
            <p className="text-center">
              Start your fresh journey with us today
            </p>
            <div className="register-options flex gap-2 *:grow my-10">
              <button
                type="button"
                className="rounded-lg px-4 py-2 font-semibold text-gray-900 hover:bg-gray-200 transition duration-200 bg-transparent border border-gray-300 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
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
                className="rounded-lg px-4 py-2 font-semibold text-gray-900 hover:bg-gray-200 transition duration-200 bg-transparent border border-gray-300 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
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
            <div
              className="divider relative w-full h-0.5 bg-gray-300/30 my-4 flex items-center before:content-['or'] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:bg-white before:px-4"
              aria-hidden="true"
            >
              <span className="sr-only">or</span>
            </div>
            <form className="space-y-7" onSubmit={handleSubmit(submitForm)}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name*</label>
                <input
                  id="name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="Ali"
                  type="text"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email*</label>
                <input
                  id="email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="ali@example.com"
                  autoComplete="email"
                  type="email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="password">Password*</label>
                <input
                  id="password"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="create a strong password"
                  autoComplete="new-password"
                  type="password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="rePassword">Confirm Password*</label>
                <input
                  id="rePassword"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="confirm your password"
                  autoComplete="new-password"
                  type="password"
                  {...register("rePassword")}
                />
                {errors.rePassword && (
                  <p className="text-sm text-red-600">
                    {errors.rePassword.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone">Phone Number*</label>
                <input
                  id="phone"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="+1 234 567 8900"
                  autoComplete="tel"
                  type="tel"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <input
                    id="terms"
                    className="size-4 accent-green-600"
                    type="checkbox"
                  />
                  <label htmlFor="terms" className="ms-2">
                    I agree to the{" "}
                    <a className="text-green-600 hover:underline" href="/terms">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <Link
                      className="text-green-600 hover:underline"
                      href="/privacy-policy"
                    >
                      Privacy Policy
                    </Link>{" "}
                    *
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-lg px-4 py-2 font-semibold cursor-pointer flex items-center justify-center gap-2 bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed w-full transition-colors"
              >
                <UserPlusIcon className="size-4" />
                <span>Create My Account</span>
              </button>
            </form>
            <p className="border-t pt-10 border-gray-300/30 my-4 text-center">
              Already have an account?{" "}
              <Link
                className="text-green-600 hover:underline font-medium"
                href="/login"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
