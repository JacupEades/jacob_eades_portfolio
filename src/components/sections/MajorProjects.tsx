import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import ButtonClear from "../buttons/ButtonClear";
import ButtonColor from "../buttons/ButtonColor";
import CardTag from "../CardTag";
import { useMediaQuery } from "react-responsive";
import Tooltip from "@mui/material/Tooltip";

type Props = {};

export default function MajorProjects({}: Props) {
  return (
    <section id="major" className="max-w-screen-xl z-10 pt-[5.5rem] mb-4 mx-8">
      <p className="text-4xl font-bold pb-10">Major Projects</p>
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-10">
        {/* Eades Antiques */}
        <div className={styles.cardLargeBorder}>
          <div className={styles.cardLarge}>
            <Image
              src="/Shop_EA.png"
              alt="Eades Antiques Screenshot"
              style={{ aspectRatio: 2 / 1 }}
              width={800}
              height={300}
            />
            <div className="p-6">
              <p className="text-2xl font-pop font-bold">Eades Antiques</p>
              <p className="pt-4">
                This is my first big project using the MERN Stack. Total time to
                complete 68 hours over 3 months while wiring a three-story house
                alone. This Project was built following the Udemy course created
                by Ryan Dhungel.
                <br />
                The goal of the project for me is to learn as many aspects of
                how front-end and back-end communicate, and to provide proof
                that I am capable of learning and commiting to such a large
                project. Eades Ecommerce has a LOT of styleing issues as of
                2/10/2023, but creating a very flashy site was not the goal.
                Creating a functional site that can collect user requests,
                display database information, and potentially collect income was
                the goal.
              </p>
              {/* Tags div */}
              <div className="pt-4 flex flex-wrap gap-2 mb-[2.125rem]">
                <CardTag text="Ecommerce" color="var(--tags-primary)" />
                <CardTag text="JavaScript" color="var(--tags-secondary)" />
                <CardTag text="React" color="var(--tags-secondary)" />
                <CardTag text="Express.js" color="var(--tags-secondary)" />
                <CardTag text="MongoDB" color="var(--tags-secondary)" />
                <CardTag text="Node.js" color="var(--tags-secondary)" />
                <CardTag text="Stripe" color="var(--tags-secondary)" />
                <CardTag text="Firebase" color="var(--tags-secondary)" />
                <CardTag text="DigitalOcean" color="var(--tags-secondary)" />
                <CardTag text="Studio 3T" color="var(--tags-secondary)" />
                <CardTag text="POSTMAN" color="var(--tags-secondary)" />
              </div>
              {/* Buttons div */}
              <div className="flex relative gap-2">
                {/* <ButtonColor
          text="Live"
          link="http://67.207.92.238/"
          target="_blank"
          tooltip={"Live currently disabled to cut server cost"}
          isDisabled={true}
        /> */}
                <ButtonClear
                  text="Frontend"
                  link="https://github.com/JacupEades/eades-ecom-frontend"
                  target="_blank"
                />
                <ButtonClear
                  text="Backend"
                  link="https://github.com/JacupEades/eades-ecom-backend"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Eades Electric */}
        <div className={styles.cardLargeBorder}>
          <div className={styles.cardLarge}>
            <Image
              src="/EE_Screen.png"
              alt="Eades Electric Screenshot"
              style={{ aspectRatio: 2 / 1 }}
              width={800}
              height={300}
            />
            <div className="p-6 grid gap-8 laptop:gap-28 desktop:gap-16">
              <div>
                <p className="text-2xl font-pop font-bold">Eades Electric</p>
                <p className="pt-4">
                  This is the official website for my small buisness Eades
                  Electric LLC. I work closely with a user experience designer,
                  and we use Figma to design intuitive and user-friendly
                  interfaces for our projects.
                  <br />
                  Over the past year, I have had the pleasure of working with
                  several customers who have contacted me through my website.
                  Whether you are looking to build a new application from
                  scratch or need help with an existing project, I am here to
                  help. My expertise includes a wide range of programming
                  languages and platforms, and I am always learning and
                  exploring new technologies to ensure that my clients get the
                  best possible results.
                </p>
                {/* Tags div */}
                <div className="pt-4 flex flex-wrap gap-2">
                  <CardTag text="Website" color="var(--tags-primary)" />
                  <CardTag text="HTML" color="var(--tags-secondary)" />
                  <CardTag text="CSS" color="var(--tags-secondary)" />
                  <CardTag text="JavaScript" color="var(--tags-secondary)" />
                </div>
              </div>
              {/* Buttons div */}
              <div>
                <div className="flex relative gap-2">
                  <ButtonColor
                    text="Live"
                    link="https://eadeselectric.com/"
                    target="_blank"
                    tooltip={"Eades Electric LLC"}
                  />
                  <ButtonClear
                    text="Github"
                    icon="/Github.svg"
                    link="https://github.com/JacupEades/eades_electric_llc_website"
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
