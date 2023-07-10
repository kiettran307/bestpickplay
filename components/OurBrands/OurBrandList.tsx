import { Button } from "@/shared/utils/form/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export function OurBrandList({}: Props) {
  return (
    <section className="container flex flex-col items-center my-20">
      <div className="grid w-full grid-cols-1 gap-16 lg:w-[940px] lg:grid-cols-2 lg:gap-32">
        {BRAND_LIST_DATA.map((item, index) => (
          <OurBrandItem key={index} brand={item} />
        ))}
      </div>
    </section>
  );
}

function OurBrandItem({ brand }: { brand: BrandType }) {
  return (
    <div className="flex flex-col gap-3">
      <Image
        src={brand?.image}
        alt={brand.title}
        className="rounded-md "
        width={384}
        height={384}
      />
      <div className="text-2xl font-semibold">{brand.title}</div>

      <Button
        text={brand?.active ? "Explore more" : "Coming soon"}
        href={brand?.path}
        
        className={`rounded-xl ${
          brand?.active ? "bg-primary text-white" : "bg-[#EAE9E9] text-[#969695]"
        } `}
      />
    </div>
  );
}
export type BrandType = {
  id: string | number;
  title: string;
  image: string;
  active: boolean;
  path?:string;
};
export const BRAND_LIST_DATA: BrandType[] = [
  {
    id: 1,
    image: "/images/our-brands/img-brand-1.png",
    title: "BaiTong Hotel & Resort",
    active: true,
    path:"https://www.baitonghotel.asia/",
  },
  {
    id: 2,
    image: "/images/our-brands/img-brand-2.png",
    title: "SOOKDAL Korean Restaurant",
    active: true,
    path:"https://sookdal.com/",
  },
  {
    id: 3,
    image: "/images/our-brands/img-brand-3.png",
    title: "Melo Restaurant",
    active: false,
    path:"#",
  },
  {
    id: 4,
    image: "/images/our-brands/img-brand-4.png",
    title: "RoJi Monster Ice Cream",
    active: false,
    path:"#",
  },
];
