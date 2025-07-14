import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/app_layout";
import Home from "@/page/home/Home";
import AboutUs from "@/page/about-us";
import WhatWeDo from "@/page/what-we-do/WhatWeDo";
import Products from "@/page/products/Products";
import ContactUs from "@/page/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/what-we-do",
        element: <WhatWeDo />,
      },
      {
        path: "/our-products",
        element: <Products />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      }
    ],
  },
]);
