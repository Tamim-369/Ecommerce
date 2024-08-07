"use client";

import ProductInterface from "@/types/productTypes";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({});

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const allProducts: any = [
    {
      _id: "1",
      thumbnail: "/product1.jpg",
      images: [
        "/product1.jpg",
        "/product2.jpg",
        "/product3.jpg",
        "/product4.jpg",
      ],
      name: "Product number 1",
      descripton:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",
      price: 100,
      specification: "",
      about: `[🚀Features🔥]:
Best Music Sync System.
✅ 16 Million Colour Installed.
✅ Mobile App Control IOS/Android .
✅ 143 Lighting Mode.
✅ 18 Music sync lighting mode.
✅ Customization facility.
✅ Remote Control.
✅Led Quantity-18leds/m
✅Waterproof 💦 
✅Premium Quality 
`,
      category: "category",
      discount: 10,
      brand: "brandz",
      type: "Exclusive",
      sells: 2,
    },
    {
      _id: "2",

      thumbnail: "/product2.jpg",
      images: [
        "/product1.jpg",
        "/product2.jpg",
        "/product3.jpg",
        "/product4.jpg",
      ],
      name: "Product number 2",
      descripton:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",
      price: 100,
      specification: "",
      about: `System: Intel Core i7-13700F 2.1GHz 8+8 Cores | Intel B760 Chipset | 16GB DDR5 | 1TB PCIe Gen4 NVMe SSD | Genuine Windows 11 Home 64-bit
Graphics: NVIDIA GeForce RTX 4060 Ti 16GB Video Card | 1x HDMI | 2x DisplayPort
Connectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel |  Keyboard and mouse Special feature: Tempered glass side case panel | Custom RGB case lighting | 7 colors gaming mouse`,
      category: "category",
      discount: 0,
      brand: "brandz",
      type: "Best Selling",
      sells: 12,
    },
    {
      _id: "3",

      thumbnail: "/product5.jpg",
      images: [
        "/product1.jpg",
        "/product2.jpg",
        "/product3.jpg",
        "/product4.jpg",
      ],
      name: "Product number 2",
      descripton:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",
      price: 100,
      specification: "",
      about: `System: Intel Core i7-13700F 2.1GHz 8+8 Cores | Intel B760 Chipset | 16GB DDR5 | 1TB PCIe Gen4 NVMe SSD | Genuine Windows 11 Home 64-bit
Graphics: NVIDIA GeForce RTX 4060 Ti 16GB Video Card | 1x HDMI | 2x DisplayPort
Connectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel |  Keyboard and mouse
  Special feature: Tempered glass side case panel | Custom RGB case lighting | 7 colors gaming mouse`,
      category: "category",
      discount: 0,
      brand: "brandz",
      type: "Best Selling",
      sells: 22,
    },
    {
      _id: "4",

      thumbnail: "/product7.jpg",
      images: [
        "/product1.jpg",
        "/product2.jpg",
        "/product3.jpg",
        "/product4.jpg",
      ],
      name: "Product number 2",
      descripton:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",
      price: 100,
      specification: "",
      about: `System: Intel Core i7-13700F 2.1GHz 8+8 Cores | Intel B760 Chipset | 16GB DDR5 | 1TB PCIe Gen4 NVMe SSD | Genuine Windows 11 Home 64-bit
Graphics: NVIDIA GeForce RTX 4060 Ti 16GB Video Card | 1x HDMI | 2x DisplayPort
Connectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel |  Keyboard and mouse
  Special feature: Tempered glass side case panel | Custom RGB case lighting | 7 colors gaming mouse`,
      category: "category",
      discount: 30,
      brand: "brandz",
      type: "Best Selling",
      sells: 0,
    },
    {
      _id: "5",

      thumbnail: "/product7.jpg",
      images: [
        "/product1.jpg",
        "/product2.jpg",
        "/product3.jpg",
        "/product4.jpg",
      ],
      name: "Product number 2",
      descripton:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",
      price: 100,
      specification: "",
      about: `System: Intel Core i7-13700F 2.1GHz 8+8 Cores | Intel B760 Chipset | 16GB DDR5 | 1TB PCIe Gen4 NVMe SSD | Genuine Windows 11 Home 64-bit
Graphics: NVIDIA GeForce RTX 4060 Ti 16GB Video Card | 1x HDMI | 2x DisplayPort
Connectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel |  Keyboard and mouse
  Special feature: Tempered glass side case panel | Custom RGB case lighting | 7 colors gaming mouse`,
      category: "category",
      discount: 0,
      brand: "brandz",
      type: "Best Selling",
      sells: 1,
    },
    {
      _id: "6",

      thumbnail: "/product1.jpg",
      images: [
        "/product1.jpg",
        "/product2.jpg",
        "/product3.jpg",
        "/product4.jpg",
      ],
      name: "Product number 3",
      descripton:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",
      price: 100,
      specification: "",
      about: `System: Intel Core i7-13700F 2.1GHz 8+8 Cores | Intel B760 Chipset | 16GB DDR5 | 1TB PCIe Gen4 NVMe SSD | Genuine Windows 11 Home 64-bit
Graphics: NVIDIA GeForce RTX 4060 Ti 16GB Video Card | 1x HDMI | 2x DisplayPort
Connectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel |  Keyboard and mouse
  Special feature: Tempered glass side case panel | Custom RGB case lighting | 7 colors gaming mouse`,
      category: "category",
      discount: 12,
      brand: "brandz",
      type: "Exclusive",
      sells: 4,
    },
    {
      _id: "7",

      thumbnail: "/product3.jpg",
      images: [
        "/product1.jpg",
        "/product2.jpg",
        "/product3.jpg",
        "/product4.jpg",
      ],
      name: "Product number 4",
      descripton:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",
      price: 100,
      specification: "",
      about: `System: Intel Core i7-13700F 2.1GHz 8+8 Cores | Intel B760 Chipset | 16GB DDR5 | 1TB PCIe Gen4 NVMe SSD | Genuine Windows 11 Home 64-bit
Graphics: NVIDIA GeForce RTX 4060 Ti 16GB Video Card | 1x HDMI | 2x DisplayPort
Connectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel |  Keyboard and mouse
  Special feature: Tempered glass side case panel | Custom RGB case lighting | 7 colors gaming mouse`,
      category: "category",
      discount: 10,
      brand: "brandz",
      type: "Exclusive",
      sells: 8,
    },
    {
      _id: "8",

      thumbnail: "/product4.jpg",
      images: [
        "/product1.jpg",
        "/product2.jpg",
        "/product3.jpg",
        "/product4.jpg",
      ],
      name: "Product number 5",
      descripton:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",

      specification: "",
      about: `System: Intel Core i7-13700F 2.1GHz 8+8 Cores | Intel B760 Chipset | 16GB DDR5 | 1TB PCIe Gen4 NVMe SSD | Genuine Windows 11 Home 64-bit
Graphics: NVIDIA GeForce RTX 4060 Ti 16GB Video Card | 1x HDMI | 2x DisplayPort
Connectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel |  Keyboard and mouse
  Special feature: Tempered glass side case panel | Custom RGB case lighting | 7 colors gaming mouse`,
      price: 100,
      category: "category",
      discount: 10,
      brand: "brandz",
      type: "Best Deals",
      sells: 6,
    },
    {
      _id: "9",

      thumbnail: "/product6.jpg",
      images: [
        "/product1.jpg",
        "/product2.jpg",
        "/product3.jpg",
        "/product4.jpg",
      ],
      name: "Product number 6",
      descripton:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",

      specification: "",
      about: `System: Intel Core i7-13700F 2.1GHz 8+8 Cores | Intel B760 Chipset | 16GB DDR5 | 1TB PCIe Gen4 NVMe SSD | Genuine Windows 11 Home 64-bit
Graphics: NVIDIA GeForce RTX 4060 Ti 16GB Video Card | 1x HDMI | 2x DisplayPort
Connectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel |  Keyboard and mouse
  Special feature: Tempered glass side case panel | Custom RGB case lighting | 7 colors gaming mouse`,
      price: 100,
      category: "category",
      discount: 0,
      brand: "brandz",
      type: "Best Deals",
      sells: 9,
    },
    {
      _id: "10",

      thumbnail: "/product1.jpg",
      images: [
        "/product1.jpg",
        "/product2.jpg",
        "/product3.jpg",
        "/product4.jpg",
      ],
      name: "Product number 7",
      descripton:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",

      specification: "",
      about: `System: Intel Core i7-13700F 2.1GHz 8+8 Cores | Intel B760 Chipset | 16GB DDR5 | 1TB PCIe Gen4 NVMe SSD | Genuine Windows 11 Home 64-bit
Graphics: NVIDIA GeForce RTX 4060 Ti 16GB Video Card | 1x HDMI | 2x DisplayPort
Connectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel |  Keyboard and mouse
  Special feature: Tempered glass side case panel | Custom RGB case lighting | 7 colors gaming mouse`,
      price: 100,
      category: "category",
      discount: 0,
      brand: "brandz",
      type: "Exclusive",
      sells: 0,
    },
    {
      _id: "11",

      thumbnail: "/product2.jpg",
      images: [
        "/product1.jpg",
        "/product2.jpg",
        "/product3.jpg",
        "/product4.jpg",
      ],
      name: "Product number 8",
      descripton:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",

      specification: "",
      about: `System: Intel Core i7-13700F 2.1GHz 8+8 Cores | Intel B760 Chipset | 16GB DDR5 | 1TB PCIe Gen4 NVMe SSD | Genuine Windows 11 Home 64-bit
    Graphics: NVIDIA GeForce RTX 4060 Ti 16GB Video Card | 1x HDMI | 2x DisplayPort
    Connectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel |  Keyboard and mouse
      Special feature: Tempered glass side case panel | Custom RGB case lighting | 7 colors gaming mouse`,
      price: 100,
      category: "category",
      discount: 0,
      brand: "brandz",
      type: "Exclusive",
      sells: 2,
    },

    {
      _id: "12",

      thumbnail: "/product4.jpg",
      images: [
        "/product1.jpg",
        "/product2.jpg",
        "/product3.jpg",
        "/product4.jpg",
      ],
      name: "Product number 8",
      descripton:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",

      specification: "",
      about: `System: Intel Core i7-13700F 2.1GHz 8+8 Cores | Intel B760 Chipset | 16GB DDR5 | 1TB PCIe Gen4 NVMe SSD | Genuine Windows 11 Home 64-bit
    Graphics: NVIDIA GeForce RTX 4060 Ti 16GB Video Card | 1x HDMI | 2x DisplayPort
    Connectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel |  Keyboard and mouse
      Special feature: Tempered glass side case panel | Custom RGB case lighting | 7 colors gaming mouse`,
      price: 100,
      category: "category",
      discount: 0,
      brand: "brandz",
      type: "Best Deals",
      sells: 2,
    },
    {
      _id: "13",

      thumbnail: "/product3.jpg",
      images: [
        "/product1.jpg",
        "/product2.jpg",
        "/product3.jpg",
        "/product4.jpg",
      ],
      name: "Product number 8",
      descripton:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",

      specification: "",
      about: `System: Intel Core i7-13700F 2.1GHz 8+8 Cores | Intel B760 Chipset | 16GB DDR5 | 1TB PCIe Gen4 NVMe SSD | Genuine Windows 11 Home 64-bit
    Graphics: NVIDIA GeForce RTX 4060 Ti 16GB Video Card | 1x HDMI | 2x DisplayPort
    Connectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel |  Keyboard and mouse
      Special feature: Tempered glass side case panel | Custom RGB case lighting | 7 colors gaming mouse`,
      price: 100,
      category: "category",
      discount: 0,
      brand: "brandz",
      type: "Best Deals",
      sells: 0,
    },
    {
      _id: "14",

      thumbnail: "/product2.jpg",
      images: [
        "/product1.jpg",
        "/product2.jpg",
        "/product3.jpg",
        "/product4.jpg",
      ],
      name: "Product number 8",
      descripton:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",

      specification: "",
      about: `System: Intel Core i7-13700F 2.1GHz 8+8 Cores | Intel B760 Chipset | 16GB DDR5 | 1TB PCIe Gen4 NVMe SSD | Genuine Windows 11 Home 64-bit
    Graphics: NVIDIA GeForce RTX 4060 Ti 16GB Video Card | 1x HDMI | 2x DisplayPort
    Connectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel |  Keyboard and mouse
      Special feature: Tempered glass side case panel | Custom RGB case lighting | 7 colors gaming mouse`,
      price: 100,
      category: "category",
      discount: 0,
      brand: "brandz",
      type: "Best Deals",
      sells: 4,
    },
    {
      _id: "15",

      thumbnail: "/product5.jpg",
      images: [
        "/product1.jpg",
        "/product2.jpg",
        "/product3.jpg",
        "/product4.jpg",
      ],
      name: "Product number 8",
      descripton:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden",

      specification: "",
      about: `System: Intel Core i7-13700F 2.1GHz 8+8 Cores | Intel B760 Chipset | 16GB DDR5 | 1TB PCIe Gen4 NVMe SSD | Genuine Windows 11 Home 64-bit
    Graphics: NVIDIA GeForce RTX 4060 Ti 16GB Video Card | 1x HDMI | 2x DisplayPort
    Connectivity: 6 x USB 3.1 | 2 x USB 2.0 | 1x RJ-45 Network Ethernet 10/100/1000 | 802.11AC Wi-Fi | Audio: 7.1 Channel |  Keyboard and mouse
      Special feature: Tempered glass side case panel | Custom RGB case lighting | 7 colors gaming mouse`,
      price: 100,
      category: "category",
      discount: 0,
      brand: "brandz",
      type: "Best Deals",
      sells: 2,
    },
  ];
  // // useEffect(() => {
  // if (allProducts) {
  //   setProducts(allProducts);
  // }
  // // }, [allProducts]);
  const [products, setProducts] = useState(allProducts);
  const value = { products, setProducts };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
}
