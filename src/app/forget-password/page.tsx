// export default function forgetPassword() {
//   return (
//     <>
//       <div
//         className="container py-16 mx-auto px-4"
//         id="forgot-password-section"
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
//           <div className="hidden lg:block">
//             <div className="text-center space-y-6">
//               <div className="w-full h-96 bg-linear-to-br from-green-50 via-green-50 to-emerald-50 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
//                 <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-green-100/50" />
//                 <div className="absolute bottom-12 right-10 w-32 h-32 rounded-full bg-green-100/50" />
//                 <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-emerald-100/50" />
//                 <div className="relative flex flex-col items-center gap-6 z-10">
//                   <div className="w-28 h-28 rounded-3xl bg-white shadow-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-300">
//                     <div className="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center">
//                       <svg
//                         className="size-9 text-green-600"
//                         role="img"
//                         viewBox="0 0 384 512"
//                         aria-hidden="true"
//                       >
//                         <path
//                           fill="currentColor"
//                           d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                   <div className="absolute -left-16 top-4 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center -rotate-12">
//                     <svg
//                       className="size-5 text-green-500"
//                       role="img"
//                       viewBox="0 0 512 512"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"
//                       />
//                     </svg>
//                   </div>
//                   <div className="absolute -right-16 top-8 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center rotate-12">
//                     <svg
//                       className="size-5 text-green-500"
//                       role="img"
//                       viewBox="0 0 512 512"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"
//                       />
//                     </svg>
//                   </div>
//                   <div className="flex gap-3">
//                     <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
//                     <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse [animation-delay:150ms]" />
//                     <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse [animation-delay:300ms]" />
//                   </div>
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 <h2 className="text-3xl font-bold text-gray-800">
//                   Reset Your Password
//                 </h2>
//                 <p className="text-lg text-gray-600">
//                   Don&apos;t worry, it happens to the best of us. We&apos;ll help you get
//                   back into your account in no time.
//                 </p>
//                 <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
//                   <div className="flex items-center">
//                     <svg
//                       className="size-5 text-green-600 mr-2"
//                       role="img"
//                       viewBox="0 0 512 512"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"
//                       />
//                     </svg>
//                     Email Verification
//                   </div>
//                   <div className="flex items-center">
//                     <svg
//                       className="size-5 text-green-600 mr-2"
//                       role="img"
//                       viewBox="0 0 512 512"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"
//                       />
//                     </svg>
//                     Secure Reset
//                   </div>
//                   <div className="flex items-center">
//                     <svg
//                       className="size-5 text-green-600 mr-2"
//                       role="img"
//                       viewBox="0 0 384 512"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"
//                       />
//                     </svg>
//                     Encrypted
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full">
//             <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
//               <div className="text-center mb-8">
//                 <div className="flex items-center justify-center mb-4">
//                   <span className="text-3xl font-bold text-green-600">
//                     Fresh<span className="text-gray-800">Cart</span>
//                   </span>
//                 </div>
//                 <h1 className="text-2xl font-bold text-gray-800 mb-2">
//                   Forgot Password?
//                 </h1>
//                 <p className="text-gray-600">
//                   No worries, we&apos;ll send you a reset code
//                 </p>
//               </div>
//               <div className="flex items-center justify-center mb-8">
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-green-600 text-white ring-4 ring-green-100">
//                     <svg
//                       className="size-3.5"
//                       role="img"
//                       viewBox="0 0 512 512"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"
//                       />
//                     </svg>
//                   </div>
//                   <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200" />
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
//                     <svg
//                       className="size-3.5"
//                       role="img"
//                       viewBox="0 0 512 512"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"
//                       />
//                     </svg>
//                   </div>
//                   <div className="w-16 h-0.5 mx-2 transition-all duration-300 bg-gray-200" />
//                 </div>
//                 <div className="flex items-center">
//                   <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 bg-gray-100 text-gray-400">
//                     <svg
//                       className="size-3.5"
//                       role="img"
//                       viewBox="0 0 384 512"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//               <form className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-semibold text-gray-700 mb-2"
//                   >
//                     Email Address
//                   </label>
//                   <div className="relative">
//                     <input
//                       id="email"
//                       className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
//                       placeholder="Enter your email address"
//                       type="email"
//                       name="email"
//                     />
//                     <svg
//                       className="size-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//                       role="img"
//                       viewBox="0 0 512 512"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   Send Reset Code
//                 </button>
//                 <div className="text-center">
//                   <a
//                     className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
//                     href="/login"
//                   >
//                     <svg
//                       className="size-3.5"
//                       role="img"
//                       viewBox="0 0 512 512"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fill="currentColor"
//                         d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
//                       />
//                     </svg>
//                     Back to Sign In
//                   </a>
//                 </div>
//               </form>
//               <div className="text-center mt-8 pt-6 border-t border-gray-100">
//                 <p className="text-gray-600">
//                   Remember your password?{" "}
//                   <a
//                     className="text-green-600 hover:text-green-700 font-semibold transition-colors"
//                     href="/login"
//                   >
//                     Sign In
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

/* ---------- API ---------- */
const API = "https://ecommerce.routemisr.com/api/v1/auth";

async function call(path: string, method: string, body: object) {
  const res = await fetch(`${API}/${path}`, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Something went wrong");
  return data;
}

/* ---------- Icons ---------- */
const ICONS = {
  mail: {
    vb: "0 0 512 512",
    d: "M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z",
  },
  key: {
    vb: "0 0 512 512",
    d: "M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z",
  },
  lock: {
    vb: "0 0 384 512",
    d: "M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z",
  },
  shield: {
    vb: "0 0 512 512",
    d: "M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z",
  },
  arrow: {
    vb: "0 0 512 512",
    d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z",
  },
  check: {
    vb: "0 0 448 512",
    d: "M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z",
  },
};

function Icon({
  name,
  className = "size-3.5",
}: {
  name: keyof typeof ICONS;
  className?: string;
}) {
  return (
    <svg
      className={className}
      role="img"
      viewBox={ICONS[name].vb}
      aria-hidden="true"
    >
      <path fill="currentColor" d={ICONS[name].d} />
    </svg>
  );
}

/* ---------- Shared styles ---------- */
const inputClass =
  "w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all";
const btnClass =
  "w-full bg-green-600 text-white py-3 px-4 rounded-xl hover:bg-green-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed";
const labelClass = "block text-sm font-semibold text-gray-700 mb-2";
const errorClass = "text-sm text-red-600 mt-1";

/* ---------- Step 1: email ---------- */
function EmailStep({ onDone }: { onDone: (email: string) => void }) {
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(
      z.object({ email: z.string().email("Invalid email") }),
    ),
  });

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit(async ({ email }) => {
        setServerError("");
        try {
          const emailRes = await call("forgotPasswords", "POST", { email });
          onDone(email);
          toast.success(emailRes.message);
        } catch (e) {
          setServerError(
            e instanceof Error ? e.message : "Something went wrong",
          );
        }
      })}
    >
      {serverError && (
        <p className="text-sm text-red-600 bg-red-50 rounded-lg p-3 text-center">
          {serverError}
        </p>
      )}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address
        </label>
        <div className="relative">
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="Enter your email address"
            className={`${inputClass} pl-12`}
          />
          <Icon
            name="mail"
            className="size-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className={btnClass}>
        {isSubmitting ? "Sending..." : "Send Reset Code"}
      </button>
    </form>
  );
}

function CodeStep({ onDone }: { onDone: () => void }) {
  const [serverError, setServerError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(
      z.object({ resetCode: z.string().length(6, "Code must be 6 digits") }),
    ),
  });

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit(async ({ resetCode }) => {
        setServerError("");
        try {
          await call("verifyResetCode", "POST", { resetCode });
          onDone();
        } catch (e) {
          setServerError(
            e instanceof Error ? e.message : "Something went wrong",
          );
        }
      })}
    >
      {serverError && (
        <p className="text-sm text-red-600 bg-red-50 rounded-lg p-3 text-center">
          {serverError}
        </p>
      )}
      <div>
        <label htmlFor="resetCode" className={labelClass}>
          Verification Code
        </label>
        <input
          id="resetCode"
          inputMode="numeric"
          maxLength={6}
          {...register("resetCode")}
          placeholder="••••••"
          className={`${inputClass} text-center tracking-[0.5em] text-xl`}
        />
        {errors.resetCode && (
          <p className={errorClass}>{errors.resetCode.message}</p>
        )}
      </div>
      <button type="submit" disabled={isSubmitting} className={btnClass}>
        {isSubmitting ? "Verifying..." : "Verify Code"}
      </button>
    </form>
  );
}

/* ---------- Step 3: new password ---------- */
function PasswordStep({ email }: { email: string }) {
  const router = useRouter();
  const [serverError, setServerError] = useState("");
  const [show, setShow] = useState(false);

  const schema = z
    .object({
      newPassword: z.string().min(6, "At least 6 characters"),
      confirmPassword: z.string(),
    })
    .refine((d) => d.newPassword === d.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit(async ({ newPassword }) => {
        setServerError("");
        try {
          await call("resetPassword", "PUT", { email, newPassword });
          toast.success("Password changed successfully");
          router.push("/login");
        } catch (e) {
          setServerError(
            e instanceof Error ? e.message : "Something went wrong",
          );
        }
      })}
    >
      {serverError && (
        <p className="text-sm text-red-600 bg-red-50 rounded-lg p-3 text-center">
          {serverError}
        </p>
      )}

      <div>
        <label htmlFor="newPassword" className={labelClass}>
          New Password
        </label>
        <input
          id="newPassword"
          type={show ? "text" : "password"}
          {...register("newPassword")}
          placeholder="Enter new password"
          className={inputClass}
        />
        {errors.newPassword && (
          <p className={errorClass}>{errors.newPassword.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="confirmPassword" className={labelClass}>
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type={show ? "text" : "password"}
          {...register("confirmPassword")}
          placeholder="Confirm new password"
          className={inputClass}
        />
        {errors.confirmPassword && (
          <p className={errorClass}>{errors.confirmPassword.message}</p>
        )}
      </div>

      <label className="flex items-center gap-2 text-sm text-gray-600">
        <input
          type="checkbox"
          checked={show}
          onChange={(e) => setShow(e.target.checked)}
        />
        Show passwords
      </label>

      <button type="submit" disabled={isSubmitting} className={btnClass}>
        {isSubmitting ? "Resetting..." : "Reset Password"}
      </button>
    </form>
  );
}

/* ---------- Page ---------- */
export default function ForgetPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  const titles = [
    { h: "Forgot Password?", p: "No worries, we'll send you a reset code" },
    { h: "Check Your Email", p: "Enter the 6-digit code sent to" },
    {
      h: "Create New Password",
      p: "Your new password must be different from previous passwords",
    },
  ];

  return (
    <div className="container py-16 mx-auto px-4" id="forgot-password-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="hidden lg:block">
          <div className="text-center space-y-6">
            <div className="w-full h-96 bg-linear-to-br from-green-50 via-green-50 to-emerald-50 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-8 left-8 w-24 h-24 rounded-full bg-green-100/50" />
              <div className="absolute bottom-12 right-10 w-32 h-32 rounded-full bg-green-100/50" />
              <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-emerald-100/50" />
              <div className="relative flex flex-col items-center gap-6 z-10">
                <div className="w-28 h-28 rounded-3xl bg-white shadow-xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-20 h-20 rounded-2xl bg-green-100 flex items-center justify-center">
                    <Icon name="lock" className="size-9 text-green-600" />
                  </div>
                </div>
                <div className="absolute -left-16 top-4 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center -rotate-12">
                  <Icon name="mail" className="size-5 text-green-500" />
                </div>
                <div className="absolute -right-16 top-8 w-14 h-14 rounded-xl bg-white shadow-lg flex items-center justify-center rotate-12">
                  <Icon name="shield" className="size-5 text-green-500" />
                </div>
                <div className="flex gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse [animation-delay:150ms]" />
                  <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse [animation-delay:300ms]" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                Reset Your Password
              </h2>
              <p className="text-lg text-gray-600">
                Don&apos;t worry, it happens to the best of us. We&apos;ll help
                you get back into your account in no time.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <Icon name="mail" className="size-5 text-green-600 mr-2" />
                  Email Verification
                </div>
                <div className="flex items-center">
                  <Icon name="shield" className="size-5 text-green-600 mr-2" />
                  Secure Reset
                </div>
                <div className="flex items-center">
                  <Icon name="lock" className="size-5 text-green-600 mr-2" />
                  Encrypted
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
                {titles[step - 1].h}
              </h1>
              <p className="text-gray-600">
                {titles[step - 1].p}
                {step === 2 && (
                  <span className="font-semibold text-gray-800"> {email}</span>
                )}
              </p>
            </div>

            <div className="flex items-center justify-center mb-8">
              {(["mail", "key", "lock"] as const).map((icon, i) => {
                const n = i + 1;
                const active = step === n;
                const done = step > n;
                return (
                  <div key={icon} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        active
                          ? "bg-green-600 text-white ring-4 ring-green-100"
                          : done
                            ? "bg-green-600 text-white"
                            : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <Icon name={done ? "check" : icon} />
                    </div>
                    {n < 3 && (
                      <div
                        className={`w-16 h-0.5 mx-2 transition-all duration-300 ${
                          done ? "bg-green-600" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {step === 1 && (
              <EmailStep
                onDone={(e) => {
                  setEmail(e);
                  setStep(2);
                }}
              />
            )}
            {step === 2 && <CodeStep onDone={() => setStep(3)} />}
            {step === 3 && <PasswordStep email={email} />}

            <div className="text-center mt-6">
              <a
                className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
                href="/login"
              >
                <Icon name="arrow" />
                Back to Sign In
              </a>
            </div>

            <div className="text-center mt-8 pt-6 border-t border-gray-100">
              <p className="text-gray-600">
                Remember your password?{" "}
                <a
                  className="text-green-600 hover:text-green-700 font-semibold transition-colors"
                  href="/login"
                >
                  Sign In
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
