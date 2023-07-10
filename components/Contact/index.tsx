
import Image from "next/image";
import { FormContact } from "./FormContact";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container overflow-hidden rounded-[32px] bg-white border border-primary p-4 md:py-16 lg:p-16"
    >
      <div className="flex flex-col-reverse items-center -mx-4 lg:flex-row">
        <div className="flex flex-col justify-center w-full p-4 lg:w-7/12 xl:w-8/12">
          <div className="mb-4 text-3xl font-bold !leading-tight lg:w-10/12 text-black  sm:text-4xl md:text-4xl">
            Enter your request and we would love to hear from you
          </div>
          <p className="lg:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            tenetur hic eveniet repellendus nostrum minus id obcaecati
            voluptatem soluta corrupti?
          </p>
          <FormContact/>
        </div>

        <div className="">
          <Image
            src={"/images/image-contact.png"}
            alt=""
            width={360}
            height={320}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
