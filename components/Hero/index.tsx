import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px]"
      >
        <div className="container max-w-[1216px] w-full px-8">
          <div className="flex flex-wrap">
            <div className="flex flex-col items-center w-full px-33 gap-x-8 lg:flex-row">
              <div
                className="w-full max-w-full wow fadeInUp lg:w-1/2 lg:max-w-1/2"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-5xl border-b-4 w-fit p-b-1.5 border-primary font-bold leading-tight text-primary d sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Best Pick F&B
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-black  sm:text-lg md:text-xl">
                Best Pick F&B is a multinational food and beverage company that was founded in 2000. The company operates in over many countries and is one of the largest food and beverage companies in the world, with a diverse range of products that includes coffee, bottled water, pet food, snacks, and baby food.
                </p>
                <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="px-8 py-5 text-base font-bold text-white duration-300 ease-in-out rounded-2xl bg-primary hover:bg-primary/80"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
              <div className="flex justify-center w-1/2 mt-5 ml-0 wow fadeInUp lg:max-w-2/3 items-between md:mt-5 sm:mt-5 md:w-full sm:w-full xs:w-full lg:mt-0">
                <div className="relative w-[270px] h-[380px] lg:w-[463px] lg:h-[662px] md:w-[463px] md:h-[662px] sm:w-[350px] sm:h-[470px] xs:w-[270px] xs:h-[380px] -ml-10 md:ml-10">
                  <div className="wow fadeInUp absolute top-9 left-10 w-[270px] h-[380px] lg:w-[463px] lg:h-[662px] md:w-[463px] md:h-[662px] sm:w-[350px] sm:h-[470px] xs:w-[270px] xs:h-[380px] border bg-primary-light border-primary-light rounded-2xl"></div>
                  <div className=" wow fadeInUp w-[270px] h-[380px] lg:w-[463px] lg:h-[662px] md:w-[463px] md:h-[662px] sm:w-[350px] sm:h-[470px] xs:w-[270px] xs:h-[380px]"><Image src={"/images/banner/ice-cream.png"} fill alt="img" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
