import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Vision = ({
  title,
  paragraph,
  img1,
  img2,
  subTitle,
  content,
}: {
  title: string;
  paragraph: string;
  img1: string;
  img2: string;
  subTitle: string;
  content: string;
}): JSX.Element => {
  return (
    <div className="py-16 md:py-20 lg:py-28">
      <div className="container sm:w-full md:w-full lg:w-full">
        <SectionTitle
          title={title}
          paragraph={paragraph}
          center
          className=""
        />
        <div className="flex flex-col items-center justify-between gap-14 md:flex-col xl:flex-row">
          <div className="flex flex-col items-center gap-8 sm:flex-row">
            <Image
              src={img1}
              alt="image vision 1"
              width={280}
              height={243}
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <Image
              src={img2}
              alt="image vision 2"
              width={280}
              height={243}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="flex flex-1 flex-col justify-center gap-2">
            <div className="text-xl font-bold text-black">
              {subTitle}
            </div>
            <div className="text-lg font-medium leading-relaxed text-black">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
