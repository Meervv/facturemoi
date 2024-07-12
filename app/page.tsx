"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode, ComponentType } from "react";
import React from "react";
import AvantageAtout from "../components/home/AvantageAtout";
import ImageHead from "../components/home/ImageHead";

import Testimonials from "../components/home/Reviews";
import Price from "../components/home/price";
import Stats from "@/components/home/stats";

interface AppProps {
  Component: ComponentType<any>;
  pageProps: {
    session: any;
    pageProps: any;
  };
}

export default function App() {
  return (
    <div>
      <ImageHead />
      <div className="m-20">
        <AvantageAtout />
        <Price />
        <Stats />
        <Testimonials />
      </div>
    </div>
  );
}
