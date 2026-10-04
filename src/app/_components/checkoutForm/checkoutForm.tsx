"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  checkoutFormValues,
  checkoutSchema,
} from "../../../schema/checkoutSchema";
import Image from "next/image";
import visa from "@/assets/visa.png";
import mastercard from "@/assets/mastercard.png";
import amex from "@/assets/amex.png";
import { CartProdData } from "@/types/cartProd.type";
import { useState } from "react";
import {
  createCashOrder,
  createOnlineOrder,
} from "@/services/api/checkoutActions/checkout.actions";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import getAddresses from "@/services/api/address/getUserAddresses";
import CheckoutSkeleton from "../checkoutSkeleton/checkoutSkeleton";
import { AddressesData } from "@/types/address.type";
export default function CheckoutForm({ cart }: { cart: CartProdData }) {
  type PaymentMethod = "cash" | "online";

  const { data: allAddresses, isLoading: addressesLoading } = useQuery({
    queryKey: ["getAddresses"],
    queryFn: getAddresses,
  });

  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
    null,
  );
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("cash");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<checkoutFormValues>({
    defaultValues: {
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
        postalCode: "",
      },
    },
    resolver: zodResolver(checkoutSchema),
    mode: "onBlur",
  });
  type OrderVars = {
    paymentMethod: PaymentMethod;
    shippingAddress: checkoutFormValues["shippingAddress"];
  };

  const emptyAddress = { details: "", phone: "", city: "", postalCode: "" };

  function handleSelectSaved(a: AddressesData) {
    setSelectedAddressId(a._id);
    reset({
      shippingAddress: {
        details: a.details,
        phone: a.phone,
        city: a.city,
        postalCode: "",
      },
    });
  }

  function handleUseNew() {
    setSelectedAddressId(null);
    reset({ shippingAddress: emptyAddress });
  }

  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async ({ paymentMethod, shippingAddress }: OrderVars) => {
      if (paymentMethod === "cash") {
        await createCashOrder(cart?.cartId, shippingAddress);
        return { method: "cash" as const };
      }
      const url = await createOnlineOrder(cart?.cartId, shippingAddress);
      return { method: "online" as const, url };
    },
    onSuccess: (result) => {
      if (result.method === "online") {
        window.location.assign(result.url);
        return;
      }
      queryClient.invalidateQueries({ queryKey: ["getCart"] });
      router.push("/allorders");
      router.refresh();
      toast.success("Order placed successfully");
    },
    onError: (e: Error) => {
      console.error(e);
      toast.error("Something went wrong, try again later");
    },
  });

  function submitForm(data: checkoutFormValues) {
    mutate({ paymentMethod, shippingAddress: data.shippingAddress });
  }
  const freeShippingThreshold = 500;
  const ShippingFee = 50;

  const subtotal = cart?.data?.totalCartPrice ?? 0;
  const shipping = subtotal >= freeShippingThreshold ? 0 : ShippingFee;
  const total = subtotal + shipping;
  if (addressesLoading) {
    return <CheckoutSkeleton />;
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <svg
                    className="size-4.5"
                    role="img"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"
                    />
                  </svg>
                  Shipping Address
                </h2>
                <p className="text-green-100 text-sm mt-1">
                  Where should we deliver your order?
                </p>
              </div>
              <div className="p-6 space-y-5">
                {allAddresses?.data.length === 0 ? (
                  ""
                ) : (
                  <div className="pb-5 border-b border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                      <svg
                        className="size-3.5 text-green-500"
                        role="img"
                        viewBox="0 0 384 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M64 0C28.7 0 0 28.7 0 64L0 480c0 11.5 6.2 22.2 16.2 27.8s22.3 5.5 32.2-.4L192 421.3 335.5 507.4c9.9 5.9 22.2 6.1 32.2 .4S384 491.5 384 480l0-416c0-35.3-28.7-64-64-64L64 0z"
                        />
                      </svg>
                      <span className="font-semibold text-gray-800">
                        Saved Addresses
                      </span>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-gray-600">
                        Select a saved address or enter a new one below
                      </p>
                      {allAddresses?.data.map((a) => (
                        <button
                          key={a._id}
                          type="button"
                          onClick={() => handleSelectSaved(a)}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${selectedAddressId === a._id ? "border-green-500 bg-green-50 ring-2 ring-green-500/20 " : " border-gray-200 hover:border-green-200 hover:bg-gray-50"}`}
                        >
                          <div className="flex items-start gap-3">
                            <div>
                              {selectedAddressId === a._id ? (
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors bg-green-500 text-white">
                                  <svg
                                    className="size-5"
                                    role="img"
                                    viewBox="0 0 448 512"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                                    />
                                  </svg>
                                </div>
                              ) : (
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors bg-gray-100 text-gray-500">
                                  <svg
                                    className="size-5"
                                    role="img"
                                    viewBox="0 0 384 512"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"
                                    />
                                  </svg>
                                </div>
                              )}
                            </div>

                            <div className="flex-1 min-w-0">
                              <p
                                className={`font-semibold ${selectedAddressId === a._id ? "text-green-700" : "text-gray-900"}`}
                              >
                                {a.name}
                              </p>
                              <p className="text-sm text-gray-600 mt-0.5 line-clamp-1">
                                {a.details}
                              </p>
                              <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                                <span className="flex items-center gap-1">
                                  <svg
                                    className="size-2.5"
                                    role="img"
                                    viewBox="0 0 512 512"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"
                                    />
                                  </svg>
                                  {a.phone}
                                </span>
                                <span className="flex items-center gap-1">
                                  <svg
                                    className="size-2.5"
                                    role="img"
                                    viewBox="0 0 576 512"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M320 0c-35.3 0-64 28.7-64 64l0 32-48 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-64 0 0-72C96 10.7 85.3 0 72 0S48 10.7 48 24l0 74c-27.6 7.1-48 32.2-48 62L0 448c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-64 0 0-128c0-35.3-28.7-64-64-64L320 0zm64 112l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zm-16 80c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zm16 112l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zm112-16c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 304l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM240 192c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM128 304l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM112 192c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0z"
                                    />
                                  </svg>
                                  {a.city}
                                </span>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={handleUseNew}
                        className={`w-full p-4 rounded-xl border-2 border-dashed text-left transition-all duration-200 ${
                          selectedAddressId === null
                            ? "border-green-500 bg-green-50"
                            : "border-gray-300 hover:border-green-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${selectedAddressId === null ? "bg-green-500 text-white" : "bg-gray-100 text-gray-500"}`}
                          >
                            <svg
                              className="size-5"
                              role="img"
                              viewBox="0 0 448 512"
                              aria-hidden="true"
                            >
                              <path
                                fill="currentColor"
                                d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"
                              />
                            </svg>
                          </div>
                          <div>
                            <p className={`font-semibold ${selectedAddressId === null ?'text-green-700' : 'text-gray-900'} `}>
                              Use a different address
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5">
                              Enter a new shipping address manually
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <svg
                      className="size-3.5 text-blue-600"
                      role="img"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-blue-800 font-medium">
                      Delivery Information
                    </p>
                    <p className="text-xs text-blue-600 mt-0.5">
                      Please ensure your address is accurate for smooth delivery
                    </p>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    City <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg
                        className="size-3.5 text-gray-500"
                        role="img"
                        viewBox="0 0 576 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M320 0c-35.3 0-64 28.7-64 64l0 32-48 0 0-72c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 72-64 0 0-72C96 10.7 85.3 0 72 0S48 10.7 48 24l0 74c-27.6 7.1-48 32.2-48 62L0 448c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-64 0 0-128c0-35.3-28.7-64-64-64L320 0zm64 112l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zm-16 80c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zm16 112l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zm112-16c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM256 304l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM240 192c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0zM128 304l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16zM112 192c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16l32 0z"
                        />
                      </svg>
                    </div>
                    <input
                      id="city"
                      className={`w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all ${
                        errors.shippingAddress?.city
                          ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                          : "border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      }`}
                      placeholder="e.g. Cairo, Alexandria, Giza"
                      type="text"
                      {...register("shippingAddress.city")}
                    />
                  </div>
                  {errors.shippingAddress?.city && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.shippingAddress?.city.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-4 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg
                        className="size-3.5 text-gray-500"
                        role="img"
                        viewBox="0 0 384 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"
                        />
                      </svg>
                    </div>
                    <textarea
                      id="details"
                      rows={3}
                      className={`w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all ${
                        errors.shippingAddress?.details
                          ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                          : "border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      }`}
                      placeholder="Street name, building number, floor, apartment..."
                      {...register("shippingAddress.details")}
                    />
                  </div>
                  {errors.shippingAddress?.details && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.shippingAddress?.details.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg
                        className="size-3.5 text-gray-500"
                        role="img"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"
                        />
                      </svg>
                    </div>
                    <input
                      id="phone"
                      className={`w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all ${
                        errors.shippingAddress?.phone
                          ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                          : "border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      }`}
                      placeholder="01xxxxxxxxx"
                      type="tel"
                      {...register("shippingAddress.phone")}
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                      Egyptian numbers only
                    </span>
                  </div>
                  {errors.shippingAddress?.phone && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.shippingAddress?.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="postalCode"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    postalCode <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-gray-500 size-3.5"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 22.5s-8-6.6-8-12.6a8 8 0 0 1 16 0c0 6-8 12.6-8 12.6z
 M10.1 6.4a.75.75 0 0 1 1.5.1l-.25 2.2h1.6l.25-2.2a.75.75 0 1 1 1.5.2l-.25 2h1.15a.75.75 0 0 1 0 1.5h-1.3l-.25 2h1.05a.75.75 0 0 1 0 1.5h-1.2l-.2 1.7a.75.75 0 0 1-1.5-.2l.2-1.5h-1.6l-.2 1.7a.75.75 0 0 1-1.5-.2l.2-1.5H8.3a.75.75 0 0 1 0-1.5h1.05l.25-2H8.4a.75.75 0 0 1 0-1.5h1.35l.35-2.2zm1.9 3.9-.25 2h1.6l.25-2h-1.6z"
                        />
                      </svg>
                    </div>
                    <input
                      id="postalCode"
                      className={`w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all ${
                        errors.shippingAddress?.postalCode
                          ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                          : "border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-100"
                      }`}
                      placeholder="e.g. Cairo, Alexandria, Giza"
                      type="text"
                      {...register("shippingAddress.postalCode")}
                    />
                  </div>
                  {errors.shippingAddress?.postalCode && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors.shippingAddress?.postalCode.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <svg
                    className="size-5"
                    role="img"
                    viewBox="0 0 512 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L72 128c-13.3 0-24-10.7-24-24S58.7 80 72 80l384 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L64 32zM416 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                    />
                  </svg>
                  Payment Method
                </h2>
                <p className="text-green-100 text-sm mt-1">
                  Choose how you&apos;d like to pay
                </p>
              </div>
              <div className="p-6 space-y-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("cash")}
                  className={`w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group  ${paymentMethod === "cash" ? " border-green-500 bg-linear-to-r from-green-50 to-emerald-50 shadow-sm " : "hover:border-green-200 hover:bg-gray-50"}`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${paymentMethod === "cash" ? "w-14 h-14 rounded-xl flex items-center justify-center transition-all bg-linear-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30 " : " w-14 h-14 rounded-xl flex items-center justify-center transition-all bg-gray-100 text-gray-400 group-hover:bg-gray-200"}`}
                  >
                    <svg
                      className="size-5"
                      role="img"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm192 96a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm192 24c0 4.4-3.6 8.1-8 7.5-29-3.6-51.9-26.6-55.5-55.5-.5-4.4 3.1-8 7.5-8l48 0c4.4 0 8 3.6 8 8l0 48zM64 328c0-4.4 3.6-8.1 8-7.5 29 3.6 51.9 26.6 55.5 55.5 .5 4.4-3.1 8-7.5 8l-48 0c-4.4 0-8-3.6-8-8l0-48zm8-136.5c-4.4 .5-8-3.1-8-7.5l0-48c0-4.4 3.6-8 8-8l48 0c4.4 0 8.1 3.6 7.5 8-3.6 29-26.6 51.9-55.5 55.5zm368 129c4.4-.5 8 3.1 8 7.5l0 48c0 4.4-3.6 8-8 8l-48 0c-4.4 0-8.1-3.6-7.5-8 3.6-29 26.6-51.9 55.5-55.5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <h3
                      className={`font-bold ${paymentMethod === "cash" ? "text-green-700" : "text-gray-900"}`}
                    >
                      Cash on Delivery
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Pay when your order arrives at your doorstep
                    </p>
                  </div>
                  {paymentMethod === "cash" ? (
                    <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all bg-green-600 text-white">
                      <svg
                        className="size-3.5"
                        role="img"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all border-2 border-gray-200" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod("online")}
                  className={`w-full p-5 rounded-xl border-2 transition-all flex items-center gap-4 group ${paymentMethod === "online" ? " border-green-500 bg-linear-to-r from-green-50 to-emerald-50 shadow-sm " : "hover:border-green-200 hover:bg-gray-50"}`}
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${paymentMethod === "online" ? "bg-linear-to-br from-green-500 to-blue-600 text-white shadow-lg shadow-green-500/30" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"}`}
                  >
                    <svg
                      className="size-6"
                      role="img"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M0 128l0 32 512 0 0-32c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm0 80L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-176-512 0zM64 360c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zm144 0c0-13.3 10.7-24 24-24l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0c-13.3 0-24-10.7-24-24z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <h3
                      className={`font-bold ${paymentMethod === "online" ? "text-green-700" : "text-gray-900"}`}
                    >
                      Pay Online
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Secure payment with Credit/Debit Card via Stripe
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Image
                        alt="Visa"
                        className="h-5"
                        src={visa}
                        width={20}
                        height={20}
                      />
                      <Image
                        alt="Mastercard"
                        className="h-5"
                        src={mastercard}
                        width={20}
                        height={20}
                      />
                      <Image
                        alt="Amex"
                        className="h-5"
                        src={amex}
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  {paymentMethod === "online" ? (
                    <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all bg-green-600 text-white">
                      <svg
                        className="size-3.5"
                        role="img"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"
                        />
                      </svg>
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all border-2 border-gray-200" />
                  )}
                </button>
                <div className="flex items-center gap-3 p-4 bg-linear-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 mt-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <svg
                      className="size-4 text-green-600"
                      role="img"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-800">
                      Secure &amp; Encrypted
                    </p>
                    <p className="text-xs text-green-600 mt-0.5">
                      Your payment info is protected with 256-bit SSL encryption
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-4">
              <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <svg
                    className="size-5"
                    role="img"
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 384c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48c0-61.9-50.1-112-112-112S112 18.1 112 80l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                    />
                  </svg>
                  Order Summary
                </h2>
                <p className="text-green-100 text-sm mt-1">
                  {(cart?.data.products?.length ?? 0) > 1
                    ? `${cart?.data.products?.length} items`
                    : `${cart?.data.products?.length} item`}
                </p>
              </div>
              <div className="p-5">
                <div className="space-y-3 max-h-56 overflow-y-auto mb-5 pr-1">
                  {cart?.data.products.map((p) => (
                    <div
                      key={p._id}
                      className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-14 h-14 rounded-lg bg-white p-1 border border-gray-100 shrink-0">
                        <Image
                          alt={p.product.title}
                          className="w-full h-full object-contain"
                          src={p.product.imageCover}
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {p.product.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {p.count} × {p.price} EGP
                        </p>
                      </div>
                      <p className="text-sm font-bold text-gray-900 shrink-0">
                        {p.price}
                      </p>
                    </div>
                  ))}
                </div>
                <hr className="border-gray-100 my-4" />
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium">
                      {cart?.data.totalCartPrice} EGP
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span className="flex items-center gap-2">
                      <svg
                        className="size-4 text-gray-400"
                        role="img"
                        viewBox="0 0 576 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                        />
                      </svg>
                      Shipping
                    </span>
                    <span className="font-medium">
                      {shipping === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `${shipping} EGP`
                      )}
                    </span>
                  </div>
                  <hr className="border-gray-100" />
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">
                      Total
                    </span>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-green-600">
                        {total}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">EGP</span>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full mt-6 bg-linear-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 active:scale-[0.98]"
                  disabled={isPending || isSuccess}
                >
                  <svg
                    className="size-4"
                    role="img"
                    viewBox="0 0 448 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M369.4 128l-34.3-48-222.1 0-34.3 48 290.7 0zM0 148.5c0-13.3 4.2-26.3 11.9-37.2L60.9 42.8C72.9 26 92.3 16 112.9 16l222.1 0c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 148.5z"
                    />
                  </svg>
                  Place Order
                </button>
                <div className="flex items-center justify-center gap-4 mt-4 py-3 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <svg
                      className="size-3 text-green-500"
                      role="img"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"
                      />
                    </svg>
                    <span>Secure</span>
                  </div>
                  <div className="w-px h-4 bg-gray-200" />
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <svg
                      className="size-3 text-blue-500"
                      role="img"
                      viewBox="0 0 576 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                      />
                    </svg>
                    <span>Fast Delivery</span>
                  </div>
                  <div className="w-px h-4 bg-gray-200" />
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <svg
                      className="size-3 text-orange-500"
                      role="img"
                      viewBox="0 0 448 512"
                      aria-hidden="true"
                    >
                      <path
                        fill="currentColor"
                        d="M369.4 128l-34.3-48-222.1 0-34.3 48 290.7 0zM0 148.5c0-13.3 4.2-26.3 11.9-37.2L60.9 42.8C72.9 26 92.3 16 112.9 16l222.1 0c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2L448 416c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 148.5z"
                      />
                    </svg>
                    <span>Easy Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
