import { Element } from "react-scroll";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";

function Contact() {
  const [state, handleSubmit] = useForm("mdoqozwj");
  if (state.succeeded) {
    toast.success("Email Sended", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  } 

  return (
    <>
      <Element name="contact">
        <div className=" mb-24 flex items-center w-full max-w-4xl mx-auto">
          <div className="w-full mt-10 p-2  flex items-center flex-col">
            <div className="w-full">
              <h1 className=" text-5xl mb-6 font-bold">Contact Me</h1>
              <form
                onSubmit={handleSubmit}
                id="contact-form"
                className="flex flex-col md:gap-6 gap-4"
                style={{ opacity: 1, transform: "none" }}
              >
                <input
                  id="email"
                  type="email"
                  name="email"
                  required=""
                  placeholder="Your Email"
                  className="border-2 rounded-md text-sm md:text-base bg-transparent md:p-4 p-3 focus:border-orange-600 text-gray-800 border-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed outline-none"
                  defaultValue=""
                  style={{ opacity: 1, transform: "none" }}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="border-2 rounded-md text-sm md:text-base bg-transparent md:p-4 p-3 h-[150px] focus:border-orange-600 text-gray-800 border-gray-400 transition-all outline-none"
                  name="message"
                  style={{ opacity: 1, transform: "none" }}
                  defaultValue={""}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <div className="form-submit">
                  <button
                    disabled={state.submitting}
                    type="submit"
                    className="uppercase text-sm tracking-[2px] px-10 py-4 rounded-full inline-block font-semibold transition-all text-black border-2 border-gray-400 duration-200 hover:bg-orange-600 hover:scale-110  disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Submit Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default Contact;
