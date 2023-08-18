import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

type Props = {};

export default function Skills({}: Props) {
  const [skillImg, setSkillImg] = useState("Skills");
  const theme = useTheme();

  useEffect(() => {
    switch (theme.palette.mode) {
      case "light":
        setSkillImg("Skills");
        break;
      case "dark":
        setSkillImg("Skills_Dark");
        break;
      default:
        setSkillImg("Skills");
    }
  }, [theme]);

  const SkillBubble = () => {
    const imageSource = `/${skillImg}.svg`;
    return (
      <div className="m-auto h-96 w-96">
        <Image
          src={imageSource}
          alt="Skill icons grouped"
          priority
          width={432}
          height={432}
        />
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="bg-[url('/BG_Slant.png')] max-w-7xl z-10 mb-4 mx-8  pt-[5.5rem] pointer-events-none"
    >
      <div className="flex flex-col-reverse laptop:grid laptop:grid-cols-2">
        <div className="hidden tablet:flex laptop:w-[90%] desktop:w-full  justify-center m-0">
          <div className="rounded-full bg-opacity-100 bg-primaryWeak">
            <SkillBubble />
          </div>
        </div>
        <div className="grid content-center ">
          <p className="text-4xl font-bold pb-4">Skills</p>
          <div className="pb-4">
            Here are a few technologies I have experience with: <br />
            <ul className="list-disc ml-8">
              <li>
                Front-end:{" "}
                <span className="font-bold">
                  HTML, CSS, JavaScript, React, React Redux, Tailwind CSS,
                  TypeScript, React Native, Material UI, AntDesign, Bootstrap,
                  Figma
                </span>{" "}
                (inspect).
              </li>
              <li>
                Back-end:{" "}
                <span className="font-bold">
                  Express.js, Node.js, MongoDB, Firebase, Axios, Mongoose,
                  DigitalOcean, Studio 3T, POSTMAN, Cloudinary, Superbase,
                  IndexedDB, Vercel, Stripe, RESTful APIs.
                </span>{" "}
              </li>
              <li>
                Other: <span className="font-bold">Next.js, Java, Python.</span>
              </li>
            </ul>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
