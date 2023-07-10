import React from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

type Props = {};
interface UsefulFeatureType {
  id: string | number;
  title: string;
  description: string;
  img: string;
  background: string;
}
const usefulFeatures: UsefulFeatureType[] = [
  {
    id: 1,
    title: "Environment-friendly",
    img: "/svg/sus-dev/icon-dev-1.svg",
    background: "/images/sus-dev/bg-sustainable-3.png",
    description:
      "Completes all the work associated with planning and processing",
  },
  {
    id: 2,
    title: "Enviroznment developer",
    img: "/svg/sus-dev/icon-dev-2.svg",
    background: "/images/sus-dev/bg-sustainable-2.png",
    description:
      "After successful access then book from exclusive deals & pricing",
  },
  {
    id: 3,
    title: "Enviroznment Nutrition ",
    img: "/svg/sus-dev/icon-dev-3.svg",
    background: "/images/sus-dev/bg-sustainable-1.png",
    description:
      "Start and explore a wide range of exciting travel experience.",
  },
];
export function UsefulFeatures({}: Props) {
  return (
    <section className="py-8 bg-white md:py-14 lg:py-20">
      <div className="container">
        <div className={`mb-11 text-center lg:mb-16`} data-wow-delay=".1s">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black  sm:text-2xl md:text-4xl">
            Sustainable development
          </h2>
          <p className="mx-auto text-base !leading-relaxed text-accent md:text-xl lg:max-w-[650px]">
            Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat auctor eu in elit
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {usefulFeatures.map((item, index) => (
            <FeatureItem feature={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ feature }: { feature: UsefulFeatureType }) {
  const backgroundImageStyle = {
    backgroundImage: `url('${feature.background}')`,
  };

  return (
    <div
      className={` rounded-lg  border border-primary bg-white bg-cover bg-center bg-no-repeat px-8 py-6 lg:min-h-[278px] lg:px-10 lg:py-9`}
      style={backgroundImageStyle}
    >
      <Image
        src={feature?.img}
        alt={feature.title}
        width={72}
        height={72}
        className="object-cover mb-4 lg:mb-6"
        
      />
      <div className="mb-4 text-xl font-bold text-black lg:text-2xl xl:text-2xl">
        {feature.title}
      </div>
      <p className="text-lg font-light leading-relaxed text-accent">
        {feature.description}
      </p>
    </div>
  );
}
