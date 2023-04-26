import React from "react";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

type Props = {};

export default function Skills({}: Props) {
  const theme = useTheme();

  return (
    <section
      id="skills"
      className="max-w-7xl z-10 mb-4 mx-8 mt-10 laptop:mt-10 desktop:mt-36"
    >
      <div className="flex flex-col-reverse laptop:grid laptop:grid-cols-2">
        <div className="hidden tablet:flex laptop:w-[90%] desktop:w-full  justify-center m-0">
          <div className="rounded-full bg-opacity-100 bg-primaryWeak">
            <Image
              className="m-auto h-96 w-96"
              src={
                theme.palette.mode === "light"
                  ? "/Skills.svg"
                  : "/Skills_Dark.svg"
              }
              alt="Skill icons grouped"
              priority
              width={432}
              height={432}
            />
          </div>
        </div>
        <div className="grid content-center ">
          <p className="text-4xl font-bold pb-4">Skills</p>
          <p className="pb-4">
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
                  DigitalOcean, Studio 3T, POSTMAN, Cloudinary.
                </span>{" "}
              </li>
              <li>
                Other: <span className="font-bold">Next.js, Java, Python.</span>
              </li>
            </ul>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
