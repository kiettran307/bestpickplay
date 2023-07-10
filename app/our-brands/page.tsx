import { AskedQuestions } from "@/components/AskedQuestions";
import Contact from "@/components/Contact";
import { OurBrandList } from "@/components/OurBrands/OurBrandList";
import { OurBrandsBanner } from "@/components/OurBrands/OurBrandsBanner";
import React from "react";

type Props = {};

export default function OurBrandsPage({}: Props) {
  return (
    <div className="min-h-screen">
      <OurBrandsBanner />
      <OurBrandList />
      <AskedQuestions isHasContactBox={false} />
      {/* <Contact /> */}
    </div>
  );
}
