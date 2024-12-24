import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactUs = () => {
  const [errorEmail, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const email = formData.get("user_email");
    const message = formData.get("message");

    if (!email || !/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email)) {
      setEmailError(true);
      toast.error("Please enter a valid email address.");
    } else {
      setEmailError(false);
    }

    if (!message || message.trim().length < 10) {
      setMessageError(true)
      toast.error("Message must be at least 10 characters long.");
      return;
    } else{
      setMessageError(false)
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset(); 
        },
        (error) => {
          toast.error(`Failed to send message: ${error.text}`);
        }
      );
  };

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
        className={`h-[4.60463rem] rounded-[0.375rem] pl-1 border ${errorEmail && "border-red-500 border-[2px]"}`}
      />
      <textarea
        rows={6}
        placeholder="Write your message"
        name="message"
        className={`rounded-[0.375rem] pl-1 pt-4 border ${messageError && "border-red-500 border-[2px]"}`}
      />
      <input
        type="submit"
        value="Send"
        className="bg-darkBlue text-white text-[1.375rem] font-bold rounded-lg py-4 px-20 lg:py-6 lg:w-[23.65119rem] w-full sm:w-fit self-center"
      />
      <ToastContainer position="top-right" autoClose={3000} />
      {/* make merge and inject here tokos button */}
    </form>
  );
};
