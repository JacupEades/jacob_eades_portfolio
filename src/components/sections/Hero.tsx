import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import ButtonClear from "../buttons/ButtonClear";
import ButtonColor from "../buttons/ButtonColor";
import { useTheme } from "@mui/material/styles";

type Props = {};

export default function Hero({}: Props) {
  const theme = useTheme();

  return (
    <section
      id="hero"
      className="max-w-7xl desktop:h-[32.5rem] pt-[3.75rem] tablet:pt-[7.5rem] z-10 mb-4 mx-8"
    >
      <div className={styles.heroBGA}>
        <div
          className={
            theme.palette.mode === "light"
              ? styles.heroShapesLight
              : styles.heroShapesDark
          }
        />
      </div>
      <div className={styles.heroBGB} />
      <div className="grid laptop:grid-cols-[55%_45%]">
        <div className="z-10">
          <p className="text-3xl font-inter pb-4">Hi! I&#39;m Jacob Eades</p>
          <p className="text-5xl desktop:text-6xl font-pop font-bold pb-4">
            Software Engineer
          </p>
          <p className="pb-4">
            I&#39;m a self-taught{" "}
            <span className="font-bold">Full-Stack Developer</span> with a
            unique background as a{" "}
            <span className="font-bold">Master Electrician</span>. I had some
            experience with Programmable Logic Controllers (PLC) programming for
            industrial machines, which sparked my passion for coding. My master
            electrician experience has helped me approach complex problems
            systematically and with an eye for detail.{" "}
          </p>
          <p className="pb-4">
            My software engineering education comes from building projects,
            taking online courses, such as Udemy and Codecademy, and 1-on-1
            mentorship from MentorCruise.
          </p>
          <p className="pb-8">
            I&#39;ve also collaborated closely with a designer on all of my
            projects, ensuring that my code meets both functional and aesthetic
            requirements. <br />
            Currently, I&#39;m seeking a{" "}
            <span className="font-bold">
              front-end or full-stack web development
            </span>{" "}
            position to utilize my skills and make a difference in the field.
            Explore my website to see how I can bring value to your team.
          </p>
          <div className="inline-grid grid-cols-2 gap-4">
            <ButtonColor text="Hire me" link={"#connect"} />
            <ButtonClear text="View projects" link={"#major"} />
          </div>
        </div>
        <div className="z-10 m-auto hidden laptop:block laptop:h-[398px] laptop:w-[398px] desktop:h-[476px] desktop:w-[476px]">
          <div className=" flex overflow-hidden rounded-full bg-opacity-100 bg-primaryWeak backdrop-blur h-full w-full">
            <Image
              className="m-auto"
              src={"/Protrate.svg"}
              alt={"Jacob Eades Cutout"}
              height={568}
              width={432}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
// function componentDidMount(arg0: HTMLElement | null) {
//   throw new Error("Function not implemented.");
// }
