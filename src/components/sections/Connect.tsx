import React from "react";
import Image from "next/image";
import { Box, Input, InputLabel, OutlinedInput } from "@mui/material";
import ButtonClear from "../buttons/ButtonClear";

function Connect() {
  async function handleOnSubmit(e: any) {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });
    console.log(formData);
  }

  return (
    <section
      id="connect"
      className="max-w-screen-xl z-10 pt-[5.5rem] mb-4 mx-8"
    >
      <h1 className="text-4xl font-bold pb-6">Let&#39;s Connect</h1>
      {/* container */}
      <div className="grid grid-cols-2 gap-10">
        <div className="w-[38.75rem]">
          <h2 className="pb-6">
            Get in touch with me by submitting the form or using any of the
            links.
          </h2>
          <div className="flex items-center gap-6 pb-6">
            <a
              className="flex items-center justify-center rounded-full h-16 w-16  bg-buttonGlass bg-opacity-100 border-[0.1875rem] border-borderWeak transition ease-in-out duration-300 hover:bg-neutralGlassHover hover:scale-110"
              href="https://github.com/JacupEades"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/Github.svg"
                alt={"Github icon"}
                style={{ width: "32px", height: "32px" }}
                height={32}
                width={32}
              />
            </a>
            <a
              href="https://github.com/JacupEades"
              className="font-bold transition ease-in-out duration-300 hover:text-primaryStrong hover:underline hover:scale-110"
            >
              https://github.com/JacupEades
            </a>
          </div>
          <div className="flex items-center gap-6 pb-6">
            <a
              className="flex items-center justify-center rounded-full h-16 w-16  bg-buttonGlass bg-opacity-100 border-[0.1875rem] border-borderWeak transition ease-in-out duration-300 hover:bg-neutralGlassHover hover:scale-110"
              href="https://www.linkedin.com/in/jacob-eades/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/Linkedin.svg"
                alt={"Linkedin icon"}
                style={{ width: "32px", height: "32px" }}
                height={32}
                width={32}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jacob-eades/"
              target="_blank"
              rel="noreferrer"
              className="font-bold transition ease-in-out duration-300 hover:text-primaryStrong hover:underline hover:scale-110"
            >
              https://www.linkedin.com/in/jacob-eades/
            </a>
          </div>
          <div className="flex items-center gap-6 pb-6">
            <a
              className="flex items-center justify-center rounded-full h-16 w-16  bg-buttonGlass bg-opacity-100 border-[0.1875rem] border-borderWeak transition ease-in-out duration-300 hover:bg-neutralGlassHover hover:scale-110"
              href="mailto:jwae98@gmail.com"
            >
              <Image
                src="/Mail.svg"
                alt={"Github icon"}
                style={{ width: "32px", height: "32px" }}
                height={32}
                width={32}
              />
            </a>
            <a
              href="mailto:jwae98@gmail.com"
              className="font-bold transition ease-in-out duration-300 hover:text-primaryStrong hover:underline hover:scale-110"
            >
              jwae98@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-6 pb-6">
            <a
              className="flex items-center justify-center rounded-full h-16 w-16  bg-buttonGlass bg-opacity-100 border-[0.1875rem] border-borderWeak transition ease-in-out duration-300 hover:bg-neutralGlassHover hover:scale-110"
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/Resume.svg"
                alt={"Document icon"}
                style={{ width: "32px", height: "32px" }}
                height={32}
                width={32}
              />
            </a>
            <a
              href="/Resume.pdf"
              className="font-bold transition ease-in-out duration-300 hover:text-primaryStrong hover:underline hover:scale-110"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>
        {/* Form section */}
        <Box
          component="form"
          method="post"
          onSubmit={handleOnSubmit}
          className="flex flex-col self-center max-w-full gap-6"
        >
          <div>
            <InputLabel required>Your Email</InputLabel>
            <OutlinedInput
              required
              id="outlined-basic"
              type="text"
              name="email"
              className="w-full"
            />
          </div>
          <div>
            <InputLabel required>Subject</InputLabel>
            <OutlinedInput
              required
              id="outlined-basic"
              type="text"
              name="subject"
              className="w-full"
            />
          </div>
          <div>
            <InputLabel required>Message</InputLabel>
            <OutlinedInput
              required
              id="outlined-basic"
              name="message"
              className="w-full rounded-lg"
            />
          </div>
          <div className="max-w-max">
            <ButtonClear
              buttonType={"submit"}
              text={"Send Message"}
              link={""}
            />
          </div>
        </Box>
      </div>
    </section>
  );
}

export default Connect;
