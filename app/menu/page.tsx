import Vision from "@/components/About/Vision";
import { AskedQuestions } from "@/components/AskedQuestions";
import BannerComponent from "@/components/Common/Banner";
import Contact from "@/components/Contact";
import { Products } from "@/components/Products";
import { Banner } from "@/types/banner";
const Blog = () => {
  const bannerProps: Banner = {
    imgBg: "./images/banner/banner_image.svg",
    title: "Our Menu",
    description:
      "Consectetur adipiscing elit elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.​ Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgUrl: "/images/banner/menu_banner.png",
  };
  return (
    <>
      <BannerComponent banner={bannerProps} />
      <Vision
        title="Best BBQs and Steaks"
        paragraph="Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh."
        img1="/images/menu/img_vision_1.png"
        img2="/images/menu/img_vision_2.png"
        subTitle="““Our delicious taste becomes the taste of the world” - BESTPICK F&B a journey to immerse yourself in global culture and flavors"
        content="We are a passionate food company, started in Southeast Asia and aspire to spread every taste in the world. Our vision is to make a global impact, enriching people's lives. To do that, we always try our best to bring a mix of global culture and taste."
      />
      <Products />
      <AskedQuestions isHasContactBox={false} />
      {/* <Contact /> */}
    </>
  );
};

export default Blog;
