import { Brand } from "@/types/brand";
import Image from "next/image";

type NewBrand = Brand & {
  width: number;
  height: number;
};

const brandsData: NewBrand[] = [
  {
    id: 1,
    name: "baitong",
    href: "https://www.baitonghotel.asia",
    image: "/images/brands/baitong.png",
    width: 141,
    height: 141,
  },
  {
    id: 2,
    name: "sookdal",
    href: "https://sookdal.com",
    image: "/images/brands/sookdal.png",
    width: 141,
    height: 141,
  },
  {
    id: 3,
    name: "good & food",
    href: "/",
    image: "/images/brands/goodfood.png",
    width: 200,
    height: 100,
  },
  {
    id: 4,
    name: "trip advisor",
    href: "/",
    image: "/images/brands/tripadvisor.png",
    width: 200,
    height: 100,
  },
];

const Brands = () => {
  return (
    <section className="container pt-8 lg:pt-16">
      <div className="flex flex-col items-center justify-center w-full py-10 bg-white">
        <div className="mb-16 text-4xl font-bold text-black">Features On</div>
        <div
          className="grid w-full grid-cols-2 gap-4 wow fadeInUp lg:grid-cols-4 lg:gap-10 "
          data-wow-delay=".1s
              "
        >
          {brandsData.map((brand) => (
            <SingleBrand key={brand.id} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: NewBrand }) => {
  const { href, image, name, width, height } = brand;

  return (
    <div className="mx-3 flex h-[140px] w-full items-center justify-center sm:mx-auto sm:w-fit md:mx-auto md:w-fit lg:mx-5 lg:w-full">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative flex justify-center w-full"
      >
        <Image src={image} alt={name} width={width} height={height} />
      </a>
    </div>
  );
};
