import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import ButtonClear from "../buttons/ButtonClear";
import ButtonColor from "../buttons/ButtonColor";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "react-responsive";

type Props = {};

export default function Hero({}: Props) {
  const theme = useTheme();
  const contentSmall = useMediaQuery({ query: "(min-width: 900px)" });

  return (
    <section
      id="hero"
      className="max-w-screen-xl h-[32.5rem] pt-[7.5rem] z-10 mb-4 mx-8"
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
            I&#39;m a self-taught Full-Stack Developer with a unique background
            as a <span className="font-bold">master electrician</span>. I had
            some experience with Programmable Logic Controllers (PLC)
            programming for industrial machines, which sparked my passion for
            coding. My master electrician experience has helped me approach
            complex problems systematically and with an eye for detail.{" "}
          </p>
          <p className="pb-4">
            I&#39;ve also collaborated closely with a{" "}
            <span className="font-bold">User Experience and Interface</span>{" "}
            designer on all of my projects, ensuring that my code meets both
            functional and aesthetic requirements.
          </p>
          <p className="pb-8">
            Currently, I&#39;m seeking a{" "}
            <span className="font-bold">front-end</span> position to utilize my
            skills and make a difference in the field. Explore my website to see
            how I can bring value to your team.
          </p>
          <div className="inline-grid grid-cols-2 gap-4">
            <ButtonColor text="Hire Me" link={"#"} />
            <ButtonClear text="View Projects" link={"#"} />
          </div>
        </div>
        {contentSmall ? (
          <>
            <div className="z-10 m-auto content-none laptop:block laptop:h-[398px] laptop:w-[398px] desktop:h-[476px] desktop:w-[476px]">
              <div className=" flex overflow-hidden rounded-full bg-opacity-100 bg-primaryWeak backdrop-blur h-full w-full">
                <Image
                  className="m-auto"
                  src={"/Cutout_JacobEades.png"}
                  alt={"Jacob Eades Cutout"}
                  height={568}
                  width={432}
                />
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
function componentDidMount(arg0: HTMLElement | null) {
  throw new Error("Function not implemented.");
}
