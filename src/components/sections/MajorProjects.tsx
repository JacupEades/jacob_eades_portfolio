import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import ButtonClear from "../buttons/ButtonClear";
import ButtonColor from "../buttons/ButtonColor";
import CardTag from "../CardTag";
import { useTheme } from "@mui/material/styles";

type Props = {};

export default function MajorProjects({}: Props) {
  const theme = useTheme();

  return (
    <section id="major" className="max-w-screen-xl z-10 pt-[5.5rem] mb-4 mx-8">
      <p className="text-4xl font-bold pb-10">Major Projects</p>
      <div className="grid grid-cols-1 laptop:grid-cols-2 gap-10">
        {/* Prayer Connect Web */}
        <div className={styles.cardLargeBorder}>
          <div className={styles.cardLarge}>
            <Image
              src="/Prayer_Connect_Cover.png"
              alt="Prayer Connect Web Screenshot"
              style={{ aspectRatio: 2 / 1 }}
              width={800}
              height={300}
            />
            <div className="p-6 grid gap-8 laptop:gap-28 desktop:gap-16">
              <div>
                <p className="text-[1.25rem] font-pop font-bold">
                  Prayer Connect Web App
                </p>
                <p className="pt-4">
                  Prayer-Connect is a social app designed to connect members of
                  my local multi-ethnic community for the purpose of sharing
                  prayers. Users can join various groups, post private or public
                  prayers, track the number of prayers, and celebrate answered
                  prayers. Currently, the app is available as a web-only
                  platform with plans to develop a native mobile app in the
                  future.
                </p>
                {/* Tags div */}
                <div className="pt-4 flex flex-wrap gap-2">
                  <CardTag text="Social" color="var(--tags-primary)" />
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
              src="/NaturalNook_Cover.png"
              alt="Natural Nooks Home Page Screenshot"
              style={{ aspectRatio: 2 / 1 }}
              width={800}
              height={300}
            />
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <p className="text-[1.25rem] font-pop font-bold">
                  NaturalNooks E-Commerce (Work-in-Progress)
                </p>
                <p className="pt-4">
                  NaturalNooks is an e-commerce website dedicated to elevating
                  the work-from-home experience with stylish and comfortable
                  home office essentials. At present, the platform features a
                  landing page, along with partially completed product list and
                  cart pages, constructed using mock data. The remainder of the
                  features, including product reviews, wishlist functionality,
                  and the checkout process, are under active refactoring from a
                  previous version.
                </p>
                {/* Tags div */}
                <div className="pt-4 flex flex-wrap gap-2 mb-[2.125rem]">
                  <CardTag text="Ecommerce" color="var(--tags-primary)" />
                  <CardTag text="JavaScript" color="var(--tags-secondary)" />
                  <CardTag text="React" color="var(--tags-secondary)" />
                  <CardTag text="Next.js" color="var(--tags-secondary)" />
                  <CardTag text="Vercel" color="var(--tags-secondary)" />
                  <CardTag text="SCSS" color="var(--tags-secondary)" />
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
              src={
                theme.palette.mode === "light"
                  ? "/FridgeRaider_Cover.png"
                  : "/FridgeRaider_Cover_Dark.png"
              }
              alt="Fridge Raider Tracker Page Screenshot"
              style={{ aspectRatio: 2 / 1 }}
              width={800}
              height={300}
            />
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <p className="text-[1.25rem] font-pop font-bold">
                  Fridge Raider (Work-in-Progress)
                </p>
                <p className="pt-4">
                  Leveraging the power of AI with ChatGPT integration,
                  FrigeRaider provides tailored recipes and generates grocery
                  lists derived from user profile settings, kitchen equipment,
                  and current home ingredients. The application&apos;s unique
                  features include ingredient tracking and nutrient profiling,
                  which aim to foster healthier eating habits. It also offers
                  generalized pricing data to assist with budgeting. Still under
                  development, Frige Raider promises to make meal planning
                  simpler, personalized, and more nutrition-conscious.
                </p>
                {/* Tags div */}
                <div className="pt-4 flex flex-wrap gap-2 mb-[2.125rem]">
                  <CardTag
                    text="Health & Wellness"
                    color="var(--tags-primary)"
                  />
                  <CardTag text="JavaScript" color="var(--tags-secondary)" />
                  <CardTag text="React" color="var(--tags-secondary)" />
                  <CardTag text="Next.js" color="var(--tags-secondary)" />
                  <CardTag text="Vercel" color="var(--tags-secondary)" />
                  <CardTag text="Superbase" color="var(--tags-secondary)" />
                  <CardTag text="AI" color="var(--tags-secondary)" />
                  <CardTag text="IndexedDB" color="var(--tags-secondary)" />
                  <CardTag text="SCSS" color="var(--tags-secondary)" />
                </div>
              </div>
              {/* Buttons div */}
              <div className="flex relative gap-2 ">
                <ButtonColor
                  text="Live"
                  link="https://app.fridgeraider.org/"
                  target="_blank"
                  isDisabled={true}
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
              src={
                theme.palette.mode === "light"
                  ? "/EE_Screen.png"
                  : "/EE_Screen_Dark.png"
              }
              alt="Eades Electric Screenshot"
              style={{ aspectRatio: 2 / 1 }}
              width={800}
              height={300}
            />
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <p className="text-[1.25rem] font-pop font-bold">
                  Eades Electric
                </p>
                <p className="pt-4">
                  Eades Electric is the first website I’ve ever built on my own.
                  The website provides essential information about my small
                  electrician business. Despite its simplicity, Eades Electric
                  demonstrates key web development principles, with an emphasis
                  on responsiveness to ensure optimal user experience across
                  different devices. The project laid the groundwork for my
                  ongoing journey as a full-stack web developer.
                </p>
                {/* Tags div */}
                <div className="pt-4 flex flex-wrap gap-2 mb-[2.125rem]">
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
