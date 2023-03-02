import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

type Props = {
  title: string;
  text1: string;
  text2?: string;
  image?: string;
  link: string;
  target?: string;
};

function MiniCard({ title, text1, text2, image, link, target }: Props) {
  return (
    <>
      <div className={styles.cardMiniBorder}>
        <div className={styles.cardMini}>
          <div className="px-3 py-6">
            {image ? (
              <Image src={image} alt="image" width={120} height={120} />
            ) : (
              <Image src="/Github.svg" alt="image" width={120} height={120} />
            )}
          </div>
          <div className="p-6 w-[30rem]">
            <p className="font-bold text-xl">{title}</p>
            <p className="pt-2">{text1}</p>
            <p className="font-bold pt-2">{text2}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiniCard;
