import { Feature } from "@/types/feature";
import { FaRegCheckCircle } from 'react-icons/fa';
import { RxMobile } from 'react-icons/rx';
import { LuMailOpen } from 'react-icons/lu';
const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <FaRegCheckCircle className="text-blue-1 w-[24px] h-[24px]"/>
    ),
    title: "Crafted for Startups",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <RxMobile className="w-[24px] h-[24px] text-blue-1"/>
    ),
    title: "High-quality Design",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <LuMailOpen className="text-blue-1 w-[24px] h-[24px]"/>
    ),
    title: "Next.js 13 (Latest)",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
];
export default featuresData;
