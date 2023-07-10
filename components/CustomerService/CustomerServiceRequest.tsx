import { Button } from "@/shared/utils/form/Button";
import React from "react";

type Props = {};

export  function CustomerServiceRequest({}: Props) {
  return (
    <form className="mt-10">
      <input
        type="text"
        name="name"
        placeholder="Your name..."
        className="mb-4 w-full rounded-md border border-body-color border-opacity-10 px-3 py-2.5 text-base font-medium text-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none"
      />
      <input
        type="email"
        name="email"
        placeholder="Email..."
        className="mb-4 w-full rounded-md border border-body-color border-opacity-10 px-3 py-2.5 text-base font-medium text-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none"
      />
      <input
        type="text"
        name="phone"
        placeholder="Number phone..."
        className="mb-4 w-full rounded-md border border-body-color border-opacity-10 px-3 py-2.5 text-base font-medium text-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject..."
        className="mb-4 w-full rounded-md border border-body-color border-opacity-10 px-3 py-2.5 text-base font-medium text-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none "
      />
      <textarea
        rows={3}
        name="message"
        placeholder="Message"
        className="mb-4 w-full rounded-md border border-body-color border-opacity-10 px-3 py-2.5 text-base font-medium text-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none "
      />
      <Button
        text="Submit now"
        className={"rounded-2xl bg-primary text-white !px-8 !py-3"}
      />
    </form>
  );
}
