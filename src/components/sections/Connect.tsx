import React from "react";
import Image from "next/image";
import {
  Button,
  FormGroup,
  InputLabel,
  OutlinedInput,
  styled,
} from "@mui/material";
import { useTheme } from "next-themes";
import styles from "@/styles/Home.module.css";
import { toast } from "react-toastify";

function Connect() {
  const { theme } = useTheme();

  async function handleOnSubmit(e: any) {
    e.preventDefault();
    const input = e.currentTarget.elements;
    let email = input.email.value;
    let subject = input.subject.value;
    let message = input.message.value;
    const formData = { email, subject, message };
    // const formData2 = {};
    // Array.from(e.currentTarget.elements).forEach((testing) => {
    //   if (!testing.name) return;
    //   formData2[testing.name] = testing.value;
    // });
    fetch("/api/mail", {
      method: "post",
      body: JSON.stringify(formData),
    });
    toast.success("Email sent, Thank you for the message.");
  }

  const Clear = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    fontWeight: 700,
    color: "var(--neutral-strong)",
    padding: "12px 24px",
    border: "2px solid",
    backdropFilter: "blur(2px)",
    lineHeight: 1.5,
    borderColor: "var(--border-weak)",
    "&:hover": {
      backgroundColor: "var(--neutral-glass-hover)",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "var(--neutral-glass-hover)",
      borderColor: "var(--primary-weak)",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(255, 255, 255, 0.9)",
    },
  });

  return (
    <section
      id="connect"
      className="max-w-screen-xl z-10 pt-[5.5rem] mb-4 mx-8"
    >
      <p className="text-4xl font-bold pb-6">Let&#39;s Connect</p>
      {/* container */}
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-10">
        <div className="w-[20rem] tablet:w-[38.75rem]">
          <p className="pb-6">
            Get in touch with me by submitting the form or using any of the
            links.
          </p>
          <div className="flex items-center gap-6 pb-6">
            <a
              className="flex items-center justify-center rounded-full h-16 w-16 bg-buttonGlass bg-opacity-100 backdrop-blur-sm border-[0.1875rem] border-borderWeak transition ease-in-out duration-300 hover:bg-neutralGlassHover hover:scale-110"
              href="https://github.com/JacupEades"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/Github.svg"
                alt={"Github icon"}
                className={theme === "dark" ? styles.svgsInvert : ""}
                style={{ width: "32px", height: "32px" }}
                height={32}
                width={32}
              />
            </a>
            <a
              href="https://github.com/JacupEades"
              className="w-1/3 tablet:w-0  font-bold transition ease-in-out duration-300 hover:text-primaryStrong hover:underline hover:scale-110"
            >
              https://github.com/JacupEades
            </a>
          </div>
          <div className="flex items-center gap-6 pb-6">
            <a
              className="flex items-center justify-center rounded-full h-16 w-16 bg-buttonGlass bg-opacity-100 backdrop-blur-sm border-[0.1875rem] border-borderWeak transition ease-in-out duration-300 hover:bg-neutralGlassHover hover:scale-110"
              href="https://www.linkedin.com/in/jacob-eades/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/Linkedin.svg"
                alt={"Linkedin icon"}
                className={theme === "dark" ? styles.svgsInvert : ""}
                style={{ width: "32px", height: "32px" }}
                height={32}
                width={32}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jacob-eades/"
              target="_blank"
              rel="noreferrer"
              className="w-1/4 tablet:w-3/4 font-bold transition ease-in-out duration-300 hover:text-primaryStrong hover:underline hover:scale-110"
            >
              https://www.linkedin.com/in/jacob-eades/
            </a>
          </div>
          <div className="flex items-center gap-6 pb-6">
            <a
              className="flex items-center justify-center rounded-full h-16 w-16 bg-buttonGlass bg-opacity-100 backdrop-blur-sm border-[0.1875rem] border-borderWeak transition ease-in-out duration-300 hover:bg-neutralGlassHover hover:scale-110"
              href="mailto:jwae98@gmail.com"
            >
              <Image
                src="/Mail.svg"
                alt={"Github icon"}
                className={theme === "dark" ? styles.svgsInvert : ""}
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
              className="flex items-center justify-center rounded-full h-16 w-16 bg-buttonGlass bg-opacity-100 backdrop-blur-sm border-[0.1875rem] border-borderWeak transition ease-in-out duration-300 hover:bg-neutralGlassHover hover:scale-110"
              href="https://docs.google.com/document/d/105L3vyZ2_CYkzorQU-AMyXvAaYzYKqQ4/edit?usp=sharing&ouid=106033786031580667626&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/Resume.svg"
                alt={"Document icon"}
                className={theme === "dark" ? styles.svgsInvert : ""}
                style={{ width: "32px", height: "32px" }}
                height={32}
                width={32}
              />
            </a>
            <a
              href="https://docs.google.com/document/d/105L3vyZ2_CYkzorQU-AMyXvAaYzYKqQ4/edit?usp=sharing&ouid=106033786031580667626&rtpof=true&sd=true"
              className="font-bold transition ease-in-out duration-300 hover:text-primaryStrong hover:underline hover:scale-110"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>
        </div>
        {/* Form section */}
        <div className="flex flex-col self-center max-w-full">
          <form onSubmit={handleOnSubmit}>
            <FormGroup>
              <InputLabel required>Your Email</InputLabel>
              <OutlinedInput
                required
                id="outlined-basic"
                type="text"
                name="email"
                className="w-full mb-4"
              />
              <InputLabel required>Subject</InputLabel>
              <OutlinedInput
                required
                id="outlined-basic"
                type="text"
                name="subject"
                className="w-full mb-4"
              />
              <InputLabel required>Message</InputLabel>
              <OutlinedInput
                required
                id="outlined-basic"
                name="message"
                className="w-full mb-4"
              />
              <Clear
                type="submit"
                className="bg-opacity-100 gap-2 bg-buttonGlass w-min whitespace-nowrap"
                variant="contained"
                style={
                  theme === "dark" ? { color: "#fff" } : { color: "#614AD3" }
                }
              >
                Submit Message
              </Clear>
            </FormGroup>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Connect;
