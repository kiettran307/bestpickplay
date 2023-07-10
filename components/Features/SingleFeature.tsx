import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="wow fadeInUp max-w-[544px] pl-0 pr-6 py-6 xs:pr-0" data-wow-delay=".15s">
      <div className="mb-4 flex h-[40px] w-[40px] items-center justify-center rounded-md bg-blue">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-black ">{title}</h3>
      <p className="pr-[10px] text-lg font-medium leading-relaxed text-black">
        {paragraph}
      </p>
    </div>
  );
};

export default SingleFeature;
