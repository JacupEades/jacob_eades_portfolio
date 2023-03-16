import React from "react";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

type Props = {};

export default function Skills({}: Props) {
  const theme = useTheme();

  return (
    <section id="skills" className="max-w-7xl z-10 mb-4 mx-8 mt-36">
      <div className="flex flex-col-reverse laptop:grid laptop:grid-cols-2">
        <div className="laptop:w-[90%] desktop:w-full flex justify-center m-0">
          <div className="rounded-full bg-opacity-100 bg-primaryWeak">
            <Image
              className="m-auto"
              src={
                theme.palette.mode === "light"
                  ? "/Skills.png"
                  : "/Skills_Dark.png"
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
            I have experience working with{" "}
            <span className="font-bold">
              React.js, Redux, TypeScript, JavaScript (ES6+), HTML5, CSS3, Ruby
              on Rails, Ruby, Node.js, Express, SQL, PostgreSQL, MongoDB, Python
              and C
            </span>
            . I am planning to learn more JavaScript Frontend
            frameworks/libraries like{" "}
            <span className="font-bold">Vue.js, Next.js</span> and Svelte in the
            future! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Justo, tortor aenean et odio blandit erat. Eget dui vel tempus
            commodo aliquet morbi lorem. Sed pulvinar et fermentum justo tortor,
            malesuada tortor ut. Vulputate sit porttitor vel fringilla eget
            nunc.
          </p>
        </div>
      </div>
    </section>
  );
}
