import BrandDescription from "@/components/About/BrandDescription";
import CareerComponent from "@/components/About/Career";
import Vision from "@/components/About/Vision";
import BannerComponent from "@/components/Common/Banner";
import { Banner } from "@/types/banner";

const AboutPage = () => {
  const bannerProps: Banner = {
    imgBg: "./images/banner/banner_image.svg",
    title: "ABOUT US",
    description:
      "Our brands: Best pick, Roji Monster Ice-cream, Baitong Hotel and Resort",
    imgUrl: "/images/banner/image_cover.png",
  };
  return (
    <>
      <BannerComponent banner={bannerProps} />
      <Vision
        title="Our vision"
        paragraph="Currently our company is expanding into the Vietnamese market and is in the process of completing legal procedures"
        img1="/images/banner/vision_1.png"
        img2="/images/banner/vision_2.png"
        subTitle="“Our delicious taste becomes the taste of the world” - BESTPICK
              F&B a journey to immerse yourself in global culture and flavors"
        content="We are a passionate food company, started in Southeast Asia and
        aspire to spread every taste in the world. Our vision is to make a
        global impact, enriching people's lives. To do that, we always try
        our best to bring a mix of global culture and taste."
      />
      <BrandDescription />
      {/* <CareerComponent /> */}
    </>
  );
};

export default AboutPage;
