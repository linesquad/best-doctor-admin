import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("Message Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  // change console logs with toast

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-[1rem] md:gap-[1.5rem] w-full"
    >
      <input
        placeholder="Email address"
        type="email"
        name="user_email"
        className="h-[4.60463rem] rounded-[0.375rem] pl-1"
      />
      <textarea
        rows={6}
        placeholder="Write your message"
        name="message"
        className="rounded-[0.375rem] pl-1 pt-4"
      />
      <input
        type="submit"
        value="Send"
        className="bg-darkBlue text-white text-[1.375rem] font-bold rounded-lg py-4 px-20 lg:py-6 lg:w-[23.65119rem] w-full sm:w-fit self-center"
      />
      {/* make merge and inject here tokos button */}
    </form>
  );
};
