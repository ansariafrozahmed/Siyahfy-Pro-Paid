import BlogSection from "@/components/BlogComp/BlogSection";
import BrandsGrid from "@/components/Brands/BrandsGrid";
import AllCategories from "@/components/Categories/AllCategories";
import DynamicLayoutMain from "@/components/DynamicLayout/DynamicLayoutMain";
import Faqs from "@/components/FAQ/Faqs";
import SEOcontentforHomepage from "@/components/Footer/SEOcontentforHomepage";
import ProductGrid from "@/components/GridLayout/ProductGrid";
import BannerWrapper from "@/components/HomeHeroBanner/BannerWrapper";
import ClientShowcase from "@/components/OtherSections/ClientShowcase";
import IconWithText from "@/components/OtherSections/IconWithText";
import ShortVideos from "@/components/ShortVideos/ShortVideos";
import Notificationbar from "@/components/ui/Notificationbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const revalidate = 60;

const Home = () => {
  return (
    <>
      <h1 className="hidden">Hutz Diecast | Original Diecast Collector Toys</h1>
      <div className="bg-templateBackground">
        <div className="-mt-[110px] overflow-x-hidden">
          <BannerWrapper />
        </div>
        <AllCategories />
        <ProductGrid text="Our Best Selling" limit={15} />
        <BrandsGrid />
        <DynamicLayoutMain />
        <ShortVideos />
        <BlogSection />
      </div>
    </>
  );
};

export default Home;
