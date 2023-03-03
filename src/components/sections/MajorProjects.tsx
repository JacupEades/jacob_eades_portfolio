import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import ButtonClear from "../buttons/ButtonClear";
import ButtonColor from "../buttons/ButtonColor";
import CardTag from "../CardTag";

type Props = {};

export default function MajorProjects({}: Props) {
  return (
    <section id="major" className="max-w-screen-xl z-10 pt-[5.5rem] mb-4 mx-8">
      <p className="text-4xl font-bold pb-10">Major Projects</p>
      <div className="grid grid-flow-col gap-10">
        {/* Eades Antiques */}
        <div className={styles.cardLargeBorder}>
          <div className={styles.cardLarge}>
            <Image
              src="/Shop_EA.png"
              alt="Eades Antiques Screenshot"
              style={{ height: "300px" }}
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
              <div className="pt-4 flex flex-wrap gap-2 mb-16">
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
              <div className="flex absolute bottom-6 gap-2 pt-6">
                <ButtonColor
                  text="View Live"
                  link="http://67.207.92.238/"
                  target="_blank"
                />
                <ButtonClear
                  text="View Frontend"
                  icon="/Github.svg"
                  link="https://github.com/JacupEades/eades-ecom-frontend"
                  target="_blank"
                />
                <ButtonClear
                  text="View Backend"
                  icon="/Github.svg"
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
              width={800}
              height={300}
            />
            <div className="p-6">
              <p className="text-2xl font-pop font-bold">Eades Electric</p>
              <p className="pt-4">
                This is the official website for my small buisness Eades
                Electric LLC. I work closely with a user experience designer,
                and we use Figma to design intuitive and user-friendly
                interfaces for our projects.
                <br />
                Over the past year, I have had the pleasure of working with
                several customers who have contacted me through my website.
                Whether you are looking to build a new application from scratch
                or need help with an existing project, I am here to help. My
                expertise includes a wide range of programming languages and
                platforms, and I am always learning and exploring new
                technologies to ensure that my clients get the best possible
                results.
              </p>
              {/* Tags div */}
              <div className="pt-4 flex flex-wrap gap-2">
                <CardTag text="Website" color="var(--tags-primary)" />
                <CardTag text="HTML" color="var(--tags-secondary)" />
                <CardTag text="CSS" color="var(--tags-secondary)" />
                <CardTag text="JavaScript" color="var(--tags-secondary)" />
              </div>
              {/* Buttons div */}
              <div className="flex absolute bottom-6 gap-2 pt-6">
                <ButtonColor
                  text="View Live"
                  link="https://eadeselectric.com/"
                  target="_blank"
                />
                <ButtonClear
                  text="View Github"
                  icon="/Github.svg"
                  link="https://github.com/JacupEades/eades_electric_llc_website"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
