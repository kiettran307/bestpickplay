"use client";
import { SendEmail } from "@/lib/email";
import useContactForm from "@/shared/hook/useContactForm";
import { Button } from "@/shared/utils/form/Button";

export function FormContact() {
  const { values, handleChange } = useContactForm();
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (values.email && values.message) {
      try {
        const data = {
          email: values.email,
          message: values.message,
        };
        const req = await SendEmail(data);
        console.log(req);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <form className="mt-10" onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        id="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Enter your email or number phone..."
        className="mb-4 w-full rounded-md border border-body-color border-opacity-10 px-3 py-2.5 text-base font-medium text-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none"
      />

      <input
        type="type"
        name="message"
        id="message"
        value={values.message}
        onChange={handleChange}
        placeholder="Enter your question..."
        className="mb-4 w-full rounded-md border border-body-color border-opacity-10 px-3 py-2.5 text-base font-medium text-body-color outline-none focus:border-primary focus:border-opacity-100 focus-visible:shadow-none "
      />
      <Button
        disabled={!values.email || !values.message}
        text="Submit now"
        className={"rounded-2xl !px-8 !py-3 " + `${values.email && values.message ? 'bg-primary text-white' : 'bg-[#EAE9E9] text-[#969695] hover:shadow-none'}`}
      />
    </form>
  );
}
