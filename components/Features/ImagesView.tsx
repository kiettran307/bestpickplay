import Image from "next/image";
import { ImageViewType } from '@/types/feature'

const ImagesView = ( {imgViewData}:{imgViewData: ImageViewType[]} ): JSX.Element => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <Image
          src={imgViewData[0].imageUrl}
          alt="png"
          width={imgViewData[0].width}
          height={imgViewData[0].height}
        />
        <Image
          src={imgViewData[1].imageUrl}
          alt="png"
          width={imgViewData[1].width}
          height={imgViewData[1].height}
        />
      </div>
      <div className="flex flex-col gap-8">
        <Image
          src={imgViewData[2].imageUrl}
          alt="png"
          width={imgViewData[2].width}
          height={imgViewData[2].height}
        />
        <Image
          src={imgViewData[3].imageUrl}
          alt="png"
          width={imgViewData[3].width}
          height={imgViewData[3].height}
        />
      </div>
    </>
  );
};


export default ImagesView