import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppContextProvider } from "@/context";
import { ShopContextProvider } from "@/context/shop";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "HitekBD",
  description: "Get best gadgets at affordable price",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Toaster position="top-right" />
        <ShopContextProvider>
          <AppContextProvider>
            <Navbar />
            {children}
            <Footer />
          </AppContextProvider>
        </ShopContextProvider>
      </body>
    </html>
  );
}
