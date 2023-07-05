import React, { useRef } from 'react';
import { IoIosPaperPlane } from 'react-icons/io';
import emailjs from '@emailjs/browser';

const Contactform = () => {
  const form: any = useRef();

  const handleSubmit = (e: any) => {
    form.current.value = '';
    //console.log(form.current.value)
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_z6k38st',
        'template_fww8f71',
        form.current,
        'b3JA5hyW9InYOLvL6'
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="w-full mb-4 md:w-2/6 md:float-left md:px-[15px]">
          <input
            type="text"
            name="user_name"
            className="w-full mb-[30px] transition-all duration-75 px-[26px] py-[11px] border border-bordergray bg-white text-lightgray rounded-[30px] outline-none focus:ring-magenta focus:border-magenta focus:ring-1"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="w-full mb-4 md:w-2/6 md:float-left md:px-[15px]">
          <input
            type="email"
            name="user_email"
            className="w-full md:mb-[30px] transition-all duration-75 px-[26px] py-[11px] border border-bordergray bg-white text-lightgray rounded-[30px] outline-none focus:ring-magenta focus:border-magenta focus:ring-1"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="w-full mb-4 md:w-2/6 md:float-left md:px-[15px]">
          <input
            type="text"
            name="user_subject"
            className="w-full md:mb-[30px] transition-all duration-75 px-[26px] py-[11px] border border-bordergray bg-white text-lightgray rounded-[30px] outline-none focus:ring-magenta focus:border-magenta focus:ring-1"
            placeholder="Your Subject"
            required
          />
        </div>
        <div className="w-full mb-4">
          <textarea
            name="message"
            className="w-[98%] px-[26px] py-[12px] border border-bordergray bg-white text-lightgray md:mb-[20px] overflow-hidden transition-all duration-75 rounded-[30px] outline-none focus:ring-magenta focus:border-magenta focus:ring-1 h-[160px]"
            placeholder="Your Message"
            required
          />
          <button
            className="md:ml-[15px] inline-block leading-[1.4] rounded-[35px] whitespace-nowrap overflow-ellipsis text-center cursor-pointer uppercase no-underline relative z-[1] py-[16px] pr-[70px] pl-[35px] text-[15px] md:font-semibold bg-transparent border-[1px] border-solid border-magenta md:mb-0 ml-[5%] mb-[5%] top-[40px] md:top-0 font-bold w-[70%] md:w-[35%] before:absolute before:right-[5%] before:top-0 before:w-0 before:h-full before:bg-magenta before:rounded-[35px] before:-z-10 before:transition-all before:ease-in-out before:duration-300 hover:before:w-[95%] group"
            onClick={handleSubmit}
            type="submit"
            value="Send"
          >
            <span className="text-lightgray relative z-[2] transition-all ease-out delay-0.3 group-hover:text-white">
              send message
            </span>
            <span className="bg-magenta absolute right-[-1px] top-[-1px] bottom-0 w-[55px] h-[55px] flex justify-center items-center text-[25px] text-white rounded-[50%]">
              <IoIosPaperPlane />
            </span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Contactform;
