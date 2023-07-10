import React from "react";
import SectionTitle from "../Common/SectionTitle";
import { FAQAccordion } from "./FAQAccordion";
import Image from "next/image";
import { Button } from "@/shared/utils/form/Button";
import { MdOutlineEmail } from "react-icons/md";
import { ContactUsBox } from "./ContactUsBox";

type AskQuestionProps = {
  isHasContactBox?:boolean
};

export function AskedQuestions({isHasContactBox = true}: AskQuestionProps) {
  return (
    <section className="py-10 md:py-12 lg:py-20">
      <div className="container flex flex-col items-center ">
        <Image
          src={"/svg/image-faq.svg"}
          alt="image FAQ"
          className="mb-4"
          width={327}
          height={207}
        />

        <div className={`mb-11 text-center lg:mb-16`} data-wow-delay=".1s">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black  sm:text-2xl md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto text-base !leading-relaxed text-accent md:text-xl lg:max-w-[650px]">
            We tried to answer most common questions, if you have any
            additional, please get in touch with our friendly team
          </p>
        </div>
        <FAQAccordion />
        {
          isHasContactBox && (

            <ContactUsBox/>
          )
        }
      </div>
    </section>
  );
}
