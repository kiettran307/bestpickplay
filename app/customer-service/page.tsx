import { AskedQuestions } from "@/components/AskedQuestions";
import BannerComponent from "@/components/Common/Banner";
import CustomerServiceMap from "@/components/CustomerService/CustomerServiceMap";
import { CustomerServiceRequest } from "@/components/CustomerService/CustomerServiceRequest";
import { Banner } from "@/types/banner";
import React from "react";

type Props = {};

export default function CustomerServicePage({}: Props) {
  const bannerProps: Banner = {
    imgBg: "./images/banner/banner_image.svg",
    title: "Customer service",
    description:
      "Số 20, Đường 42, Phường Thảo Điền, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam",
    imgUrl: "/images/banner/banner-service.png",
  };
  return (
    <>
      <BannerComponent banner={bannerProps} />
      <section className="container my-10  rounded-[32px] border border-primary p-8 lg:my-20  lg:p-16 ">
        <div className="lg:w-1/2">
          <h3 className="text-xl font-semibold leading-10 text-black lg:text-[32px]">
            Enter your request and we would love to hear from you
          </h3>
          <p className="text-accent">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            tenetur hic eveniet repellendus nostrum minus id?
          </p>
        </div>
        <div className="flex flex-col items-center justify-between lg:flex-row gap-14 ">
          {/* <div className="w-full lg:w-2/3">
            <CustomerServiceRequest />
          </div> */}
          <div className="w-full lg:flex-1">
            <CustomerServiceMap />
          </div>
        </div>
      </section>
      <AskedQuestions isHasContactBox={false} />
    </>
  );
}
