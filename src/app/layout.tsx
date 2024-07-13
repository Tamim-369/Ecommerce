import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppContextProvider } from "@/context";

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
        <AppContextProvider>
          <Navbar />
          {children}
          <Footer />
        </AppContextProvider>
      </body>
    </html>
  );
}
