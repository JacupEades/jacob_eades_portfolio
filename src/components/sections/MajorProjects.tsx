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
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-10">
        {/* Prayer Connect Web */}
        <div className={styles.cardLargeBorder}>
          <div className={styles.cardLarge}>
            <Image
              src="/pcw_screen_2.png"
              alt="Prayer Connect Web Screenshot"
              style={{ aspectRatio: 2 / 1 }}
              width={800}
              height={300}
            />
            <div className="p-6 grid gap-8 laptop:gap-28 desktop:gap-16">
              <div>
                <p className="text-2xl font-pop font-bold">
                  Prayer Connect Web
                </p>
                <p className="pt-4">
                  This is the web version of a mobile app intended for church
                  communities. It is currently a work in progress, but feel free
                  to look at the progress. The goal of this project is to allow
                  Christians to share prayer requests so they can grow into
                  their community. <br />
                  This will be the first project I expect to be used by multiple
                  people on a daily bases. Debugging will be very crucial
                  aspect, so the users don&#39;t get frustrated. Through this
                  project I hope to bring my community closer as one body and
                  provide a quality real world project to include on my
                  portfolio.
                </p>
                {/* Tags div */}
                <div className="pt-4 flex flex-wrap gap-2">
                  <CardTag text="Mobile" color="var(--tags-primary)" />
                  <CardTag text="Next.js" color="var(--tags-secondary)" />
                  <CardTag text="React" color="var(--tags-secondary)" />
                  <CardTag text="CSS" color="var(--tags-secondary)" />
                  <CardTag text="JavaScript" color="var(--tags-secondary)" />
                  <CardTag text="TypeScript" color="var(--tags-secondary)" />
                  <CardTag text="Firebase" color="var(--tags-secondary)" />
                  <CardTag text="MongoDB" color="var(--tags-secondary)" />
                </div>
              </div>
              {/* Buttons div */}
              <div>
                <div className="flex relative gap-2">
                  <ButtonColor
                    text="Live"
                    link="https://prayer-connect-web.vercel.app/"
                    target="_blank"
                    tooltip={"Prayer Connect Web"}
                  />
                  <ButtonClear
                    text="Github"
                    icon="/Github.svg"
                    link="https://github.com/JacupEades/prayer-connect-web"
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Natural Nooks */}
        <div className={styles.cardLargeBorder}>
          <div className={styles.cardLarge}>
            <Image
              src="/NaturalNooks_Home.png"
              alt="Natural Nooks Home Page Screenshot"
              style={{ aspectRatio: 2 / 1 }}
              width={800}
              height={300}
            />
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <p className="text-2xl font-pop font-bold">Natural Nooks</p>
                <p className="pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis consequatur ab neque fugit maiores reiciendis. Eius
                  facilis odio pariatur illo laborum eos maxime! Quod temporibus
                  suscipit omnis expedita fuga quae.
                </p>
                {/* Tags div */}
                <div className="pt-4 flex flex-wrap gap-2 mb-[2.125rem]">
                  <CardTag text="Ecommerce" color="var(--tags-primary)" />
                  <CardTag text="JavaScript" color="var(--tags-secondary)" />
                  <CardTag text="React" color="var(--tags-secondary)" />
                  <CardTag text="Next.js" color="var(--tags-secondary)" />
                  <CardTag text="Vercel" color="var(--tags-secondary)" />
                </div>
              </div>
              {/* Buttons div */}
              <div className="flex relative gap-2 ">
                <ButtonColor
                  text="Live"
                  link="https://e-com-v2.vercel.app/"
                  target="_blank"
                  isDisabled={false}
                />
                <ButtonClear
                  text="Github"
                  icon="/Github.svg"
                  link="https://github.com/JacupEades/e-com-v2"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Fridge Raider */}
        <div className={styles.cardLargeBorder}>
          <div className={styles.cardLarge}>
            <Image
              src="/Fridge_Raider_Tracker_Page.png"
              alt="Fridge Raider Tracker Page Screenshot"
              style={{ aspectRatio: 2 / 1 }}
              width={800}
              height={300}
            />
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <p className="text-2xl font-pop font-bold">Fridge Raider</p>
                <p className="pt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis consequatur ab neque fugit maiores reiciendis. Eius
                  facilis odio pariatur illo laborum eos maxime! Quod temporibus
                  suscipit omnis expedita fuga quae.
                </p>
                {/* Tags div */}
                <div className="pt-4 flex flex-wrap gap-2 mb-[2.125rem]">
                  <CardTag text="Ecommerce" color="var(--tags-primary)" />
                  <CardTag text="JavaScript" color="var(--tags-secondary)" />
                  <CardTag text="React" color="var(--tags-secondary)" />
                  <CardTag text="Next.js" color="var(--tags-secondary)" />
                  <CardTag text="Vercel" color="var(--tags-secondary)" />
                  <CardTag text="Superbase" color="var(--tags-secondary)" />
                  <CardTag text="OpenAI" color="var(--tags-secondary)" />
                  <CardTag text="IndexedDB" color="var(--tags-secondary)" />
                </div>
              </div>
              {/* Buttons div */}
              <div className="flex relative gap-2 ">
                <ButtonColor
                  text="Live"
                  link="https://app.fridgeraider.org/"
                  target="_blank"
                  isDisabled={false}
                />
                <ButtonClear
                  text="Private"
                  icon="/Github.svg"
                  link="https://github.com/JacupEades"
                  target="_blank"
                  isDisabled={true}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Eades Electric */}
        <div className={styles.cardLargeBorder}>
          <div className={styles.cardLarge}>
            <Image
              src="/EE_Screen.svg"
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
