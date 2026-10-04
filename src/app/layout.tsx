import type { Metadata } from "next";
import "./globals.css";
import Navbar1 from "./_components/Navbar/Navbar1";
import Navbar2 from "./_components/Navbar/Navbar2";
import Footer from "./_components/Footer/Footer";
import { Exo } from "next/font/google";
import { ToastContainer } from "react-toastify";
import MySessionProvider from "./_components/SessionProvider/MySessionProvider";
import Providers from "./_components/TanstackProvider/TanstackProvider";

export const metadata: Metadata = {
  title: "Fresh Cart",
  description:
    "Shop a wide range of quality products at FreshCart, from fashion and electronics to beauty, home, and more. Enjoy great deals, secure checkout, and fast delivery.",
};
const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`font-medium antialiased ${exo.className}`}>
        <Providers>
          <MySessionProvider>
            <Navbar1 />
            <Navbar2 />
            {children}
            <Footer />
            <ToastContainer position="top-right" autoClose={3000} />
          </MySessionProvider>
        </Providers>
      </body>
    </html>
  );
}
