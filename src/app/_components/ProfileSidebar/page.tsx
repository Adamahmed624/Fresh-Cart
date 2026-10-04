"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const PinIcon = () => (
  <svg className="size-3.5" role="img" viewBox="0 0 384 512" aria-hidden="true">
    <path
      fill="currentColor"
      d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"
    />
  </svg>
);

const GearIcon = () => (
  <svg className="size-3.5" role="img" viewBox="0 0 512 512" aria-hidden="true">
    <path
      fill="currentColor"
      d="M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"
    />
  </svg>
);

const ChevronIcon = () => (
  <svg className="size-3.5" role="img" viewBox="0 0 320 512" aria-hidden="true">
    <path
      fill="currentColor"
      d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
    />
  </svg>
);

const links = [
  { href: "/profile/addresses", label: "My Addresses", Icon: PinIcon },
  { href: "/profile/settings", label: "Settings", Icon: GearIcon },
];

export default function ProfileSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <nav className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-bold text-gray-900">My Account</h2>
        </div>
        <ul className="p-2">
          {links.map(({ href, label, Icon }) => {
            const isActive =
              pathname === href || pathname.startsWith(href + "/");

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? "bg-green-50 text-green-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                    }`}
                  >
                    <Icon />
                  </div>
                  <span className="font-medium flex-1">{label}</span>
                  <span
                    className={isActive ? "text-green-500" : "text-gray-400"}
                  >
                    <ChevronIcon />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
