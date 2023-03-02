import React from "react";
import Image from "next/image";

type Props = {};

export default function Skills({}: Props) {
  return (
    <section id="skills" className="max-w-screen-xl z-10 mb-4 mx-8 mt-10">
      <div className="grid grid-cols-2">
        <div className="w-full flex justify-center m-0">
          <div className="overflow-hidden rounded-full bg-opacity-100 bg-primaryWeak">
            <Image
              src="/Skills.png"
              alt="Jacob Eades Cutout"
              width={432}
              height={568}
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
