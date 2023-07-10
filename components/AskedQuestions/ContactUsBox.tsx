import { Button } from "@/shared/utils/form/Button";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";

type Props = {};

export function ContactUsBox({}: Props) {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-8 rounded-lg bg-white border border-primary p-8 text-center lg:max-w-[800px]">
      <div className="text-xl font-semibold">Still have a questions?</div>
      <p className="w-2/3 text-base text-accent">
        We're sorry we couldn't provide you with the information you were
        looking for. Please contact us and we'll be happy to help.{" "}
      </p>
      <Button
        text="Contact us"
        className={"rounded-xl bg-primary text-white"}
        icon={<MdOutlineEmail />}
        iconPosition="start"
        iconClassName={"mr-2"}
      />
    </div>
  );
}
