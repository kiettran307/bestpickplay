import React from "react";
import SectionTitle from "../Common/SectionTitle";
import blogData from "../Blog/blogData";
import SingleBlog from "../Blog/SingleBlog";
import { NewItem } from "./NewItem";
import newData from "./newData";
import { Button } from "@/shared/utils/form/Button";

type Props = {};

export function News({}: Props) {
  return (
    <section className="py-10 md:py-12 lg:py-20">
      <div className="container">
        <div className={`mb-11 text-center lg:mb-16`} data-wow-delay=".1s">
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black  sm:text-2xl md:text-4xl">
            Blog or news
          </h2>
          <p className="mx-auto text-base !leading-relaxed text-accent md:text-xl lg:max-w-[650px]">
            Our blog is more than just a collection of articles - it's a hub of
            ideas, inspiration, and thought-provoking discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 ">
          {newData.map((item, index) => (
            <div key={index} className="w-full">
              <NewItem post={item} />
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center mt-10">
          <Button
            text="See more"
            className={
              "rounded-2xl border border-primary text-primary hover:bg-primary hover:text-white hover:shadow-none !px-8 "
            }
          />
        </div>
      </div>
    </section>
  );
}
