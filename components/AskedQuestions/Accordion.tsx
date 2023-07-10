"use client";
import { useEffect, useRef } from "react";
import { MdExpandCircleDown } from "react-icons/md";
import { IoIosArrowDropupCircle } from "react-icons/io";

export function AccordionItem(props: {
  handleToggle: (id: string) => void;
  active: string | null;
  faq: { header: string; id: string; text: string };
}) {
  const contentEl = useRef<HTMLDivElement>(null);
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;
  useEffect(() => {
    if (active === id && contentEl.current) {
      contentEl.current.style.height = `${contentEl.current.scrollHeight}px`;
      contentEl.current.style.transition = `all 0.5s ease`;
    } else {
      contentEl.current?.style.setProperty("height", "0px");
      contentEl.current.style.transition = `all 1s ease`;
    }
  }, [active, id]);
  return (
    <div
      className={`mb-4 rounded-lg  border ${
        active === id ? "border-primary" : "border-[#CED2DA]"
      } lg:max-w-[800px]`}
    >
      <div
        className={`flex w-full cursor-pointer items-center justify-between p-8 lg:w-[800px]`}
        onClick={() => handleToggle(id)}
      >
        <h5
          className={`text-base font-medium lg:text-lg transition-all delay-75 ${
            active === id ? "text-primary" : "text-black"
          }`}
        >
          {header}
        </h5>
        <span className="text-2xl text-primary">
          {active === id ? <IoIosArrowDropupCircle /> : <MdExpandCircleDown />}
        </span>
      </div>

      <div
        ref={contentEl}
        className={` ${active === id ? "block" : "hidden"} transition-all `}
      >
        <p className="px-8 pb-8 text-accent">{text}</p>
      </div>
    </div>
  );
}
