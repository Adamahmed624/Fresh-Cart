"use client";

import {
  updateUserInfoSchema,
  updateUserInfoValues,
} from "@/schema/updateUserInfoSchema";
import updateUserInfo from "@/services/api/user/updateUserInfo.actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signOut, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function UpdateUserInfoForm() {
  const session = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<updateUserInfoValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    resolver: zodResolver(updateUserInfoSchema),
  });
  const { mutate: updateUserInfofunc, isPending: updateUserInfoLoading } =
    useMutation({
      mutationFn: (data: updateUserInfoValues) => updateUserInfo(data),
      onSuccess: () => {
        toast.success("Your Information Changed successfully");
        signOut({redirect: true, callbackUrl:'/login'})
      },
      onError: () => {
        toast.error("Something went wrong try again later");
      },
    });
  const submitForm = (data: updateUserInfoValues) => {
    updateUserInfofunc(data);
  };
  return (
    <>
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-gray-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
              <svg
                className="size-6 text-green-600"
                role="img"
                viewBox="0 0 448 512"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Profile Information</h3>
              <p className="text-sm text-gray-500">
                Update your personal details
              </p>
            </div>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit(submitForm)}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                placeholder="Enter your name"
                className={`w-full px-4 py-3 rounded-xl border ${errors.name ? "border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"} outline-none transition-all`}
                type="text"
                defaultValue={session.data?.user.name}
                {...register("name")}
              />
            </div>
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                placeholder="Enter your email"
                className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"} outline-none transition-all`}
                type="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                placeholder="01xxxxxxxxx"
                className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? "border-red-500 focus:ring-2 focus:ring-red-500/20" : "border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"} outline-none transition-all`}
                type="tel"
                {...register("phone")}
              />
            </div>
            {errors.phone && (
              <p className="text-sm text-red-600">{errors.phone.message}</p>
            )}
            <div className="pt-4">
              <button
                type="submit"
                disabled={updateUserInfoLoading}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 shadow-lg shadow-green-600/25"
              >
                {updateUserInfoLoading ? (
                  "Loading..."
                ) : (
                  <>
                    <svg
                      className="size-5"
                      role="img"
                      viewBox="0 0 448 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-242.7c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32L64 32zm32 96c0-17.7 14.3-32 32-32l160 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-64zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                      />
                    </svg>
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
        <div className="p-6 sm:p-8 bg-gray-50">
          <h3 className="font-bold text-gray-900 mb-4">Account Information</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">User ID</span>
              <span className="font-mono text-gray-700">
                {session.data?.user.id}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Role</span>
              <span className="px-3 py-1 rounded-lg bg-green-100 text-green-700 font-medium capitalize">
                user
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
