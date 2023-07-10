import { Banner } from "@/types/banner";
import Image from "next/image";

const BannerComponent = ({ banner }: { banner: Banner }) => {
  return (
    <div className=" bg-white pb-8 lg:pb-16 pt-[100px]">
      <div className="container w-full px-8 bg-white lg:flex-row md:flex-col sm:flex-col">
        <div className="flex flex-wrap -mx-4">
          <div className="flex flex-col items-center w-full px-33 gap-x-8 lg:flex-row">
            <div
              className="wow fadeInUp flex lg:h-[385px] lg:max-w-[728px] flex-col justify-center sm:w-full md:w-full"
              data-wow-delay=".2s"
              style={{
                backgroundImage: `url(${banner.imgBg})`,
                backgroundSize: "cover",
              }}
            >
              <h1 className="p-b-1.5 d mb-5 w-fit text-5xl font-bold leading-tight text-primary sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                {banner.title}
              </h1>
              <p className="mb-12 text-base font-medium !leading-relaxed text-black  sm:text-lg md:text-xl">
                {banner.description}
              </p>
            </div>
            <Image
                src={banner?.imgUrl}
                className='rounded-lg'
                alt='banner our brand'
                width={488}
                height={318}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
