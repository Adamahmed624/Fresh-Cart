"use client";

import AddressCardSkeleton from "@/app/_components/AddressSkeleton/AddressSkeleton";
import {
  addNewAddressFormValues,
  addNewAddressSchema,
} from "@/schema/addNewAddressSchema";
import addAddress from "@/services/api/address/addNewAddress";
import getAddresses from "@/services/api/address/getUserAddresses";
import DeleteAddress from "@/services/api/address/removeAddress";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function Address() {
  const [isAddressModal, setIsAddressModal] = useState(false);
  const qurey = useQueryClient();

  const { data: allAddersses, isLoading } = useQuery({
    queryKey: ["getAddresses"],
    queryFn: getAddresses,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<addNewAddressFormValues>({
    defaultValues: {
      name: "",
      details: "",
      phone: "",
      city: "",
    },
    resolver: zodResolver(addNewAddressSchema),
  });

  const { mutate: addNewAddress, isPending: addingAddressPending } =
    useMutation({
      mutationFn: (data: addNewAddressFormValues) => addAddress(data),
      onSuccess: () => {
        toast.success("Address added successfully");
        qurey.invalidateQueries({ queryKey: ["getAddresses"] });
      },
      onError: () => {
        toast.error("failed to add address, please try again later");
      },
    });

  const submitForm = (data: addNewAddressFormValues) => {
    addNewAddress(data);
    setIsAddressModal(false);
  };

  const { mutate: removeAddress, isPending: removeAddressPending } =
    useMutation({
      mutationFn: (addressId: string) => DeleteAddress({AddressId: addressId}),
      onSuccess: () => {
        toast.success("Address removed successfully");
        qurey.invalidateQueries({ queryKey: ["getAddresses"] });
      },
      onError: () => {
        toast.error("failed to remove address, please try again later");
      },
    });

  const handleDeleteAddress = (addressId: string) => {
        Swal.fire({
          title: "Remove Item?",
          text: `Are you sure you want to delete this address?`,
          iconHtml: `<svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-10 text-red-500 bg-red-100"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                          clipRule="evenodd"
                        />
                      </svg>`,
          showCancelButton: true,
          cancelButtonText: "Cancel",
          buttonsStyling: false,
          confirmButtonText: "Remove",
          customClass: {
            icon: "w-16 h-16 border-none! bg-red-100 flex items-center justify-center rounded-full mx-auto my-4 p-0",
            actions: "flex flex-row-reverse gap-4",
            cancelButton:
              "bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all",
            confirmButton:
              "bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all",
          },
        }).then((result) => {
          if (result.isConfirmed) {
            removeAddress(addressId);
          }
        });
    
  };
  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">My Addresses</h2>
            <p className="text-gray-500 text-sm mt-1">
              Manage your saved delivery addresses
            </p>
          </div>
          <button
            onClick={() => setIsAddressModal(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25"
          >
            <svg
              className="size-3.5"
              role="img"
              viewBox="0 0 448 512"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-160 0 0-160z"
              />
            </svg>
            Add Address
          </button>
        </div>
        {isLoading ? (
          <AddressCardSkeleton />
        ) : allAddersses?.results === 0 ? (
          <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
              <svg
                className="size-7.5 text-gray-400"
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
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              No Addresses Yet
            </h3>
            <p className="text-gray-500 mb-6 max-w-sm mx-auto">
              Add your first delivery address to make checkout faster and
              easier.
            </p>
            <button
              onClick={() => setIsAddressModal(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/25"
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
              Add Your First Address
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allAddersses?.data.map((a) => (
              <div
                key={a._id}
                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-green-100 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-11 h-11 rounded-xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                      <svg
                        className="size-4.5 text-green-600"
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
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-gray-900 mb-1">{a.name}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {a.details}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <svg
                            className="size-3.5"
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
                        <span className="flex items-center gap-1.5">
                          <svg
                            className="size-3.5"
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
                  <div className="flex items-center gap-2">
                    <button
                      className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600 flex items-center justify-center transition-colors"
                      title="Edit address"
                    >
                      <svg
                        className="size-3.5"
                        role="img"
                        viewBox="0 0 512 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M352.9 21.2L308 66.1 445.9 204 490.8 159.1C504.4 145.6 512 127.2 512 108s-7.6-37.6-21.2-51.1L455.1 21.2C441.6 7.6 423.2 0 404 0s-37.6 7.6-51.1 21.2zM274.1 100L58.9 315.1c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6L412 237.9 274.1 100z"
                        />
                      </svg>
                    </button>
                    <button
                      className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600 flex items-center justify-center transition-colors disabled:opacity-50"
                      disabled={removeAddressPending}
                      onClick={() => handleDeleteAddress(a._id)}
                      title="Delete address"
                    >
                      <svg
                        className="size-3.5"
                        role="img"
                        viewBox="0 0 448 512"
                        aria-hidden="true"
                      >
                        <path
                          fill="currentColor"
                          d="M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {isAddressModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg p-6 sm:p-8 animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Add New Address
                </h2>
                <button
                  onClick={() => setIsAddressModal(false)}
                  className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <svg
                    className="size-5"
                    role="img"
                    viewBox="0 0 384 512"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"
                    />
                  </svg>
                </button>
              </div>
              <form onSubmit={handleSubmit(submitForm)} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address Name
                  </label>
                  <input
                    placeholder="e.g. Home, Office"
                    className={`w-full mb-2 px-4 py-3 rounded-xl border ${errors.name ? "border-red-500 " : "border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"} outline-none transition-all`}
                    type="text"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Address
                  </label>
                  <textarea
                    placeholder="Street, building, apartment..."
                    rows={3}
                    className={`w-full mb-2 px-4 py-3 rounded-xl border ${errors.details ? "border-red-500 " : "border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"} outline-none transition-all`}
                    {...register("details")}
                  />
                  {errors.details && (
                    <p className="text-sm text-red-600">
                      {errors.details.message}
                    </p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      placeholder="01xxxxxxxxx"
                      className={`w-full mb-2 px-4 py-3 rounded-xl border ${errors.phone ? "border-red-500 " : "border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"} outline-none transition-all`}
                      type="tel"
                      {...register("phone")}
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      placeholder="Cairo"
                      className={`w-full mb-2 px-4 py-3 rounded-xl border ${errors.city ? "border-red-500 " : "border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20"} outline-none transition-all`}
                      type="text"
                      {...register("city")}
                    />
                    {errors.city && (
                      <p className="text-sm text-red-600">
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsAddressModal(false)}
                    className="flex-1 py-3 px-6 rounded-xl bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={addingAddressPending}
                    className="flex-1 py-3 px-6 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 shadow-lg shadow-green-600/25"
                  >
                    Add Address
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
