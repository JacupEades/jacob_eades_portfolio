import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import ButtonClear from '../buttons/ButtonClear'
import ButtonColor from '../buttons/ButtonColor'

type Props = {}

export default function MajorProjects({}: Props) {
  return (
    <section id='major' className='max-w-screen-xl z-10 pt-[5.5rem] pb-4 px-8'>
        <p className='text-4xl font-pop font-bold pb-10'>Major Projects</p>
        <div className='grid grid-rows-2 grid-flow-col gap-[2.5rem]'>
          <div className={styles.cardLargeBorder}>
          <div className={styles.cardLarge}>
          <Image
          src="/Shop_EA.png"
          alt="Eades Antiques Screenshot"
          style={{height: "300px"}}
          width={800}
          height={300}
        />
            <div className='p-6'>
            <p className='text-2xl font-pop font-bold'>Eades Antiques</p>
            <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, tortor aenean et odio blandit erat.</p>
            {/* Tags div */}
            <div className='pt-4 flex gap-2'>
              <div className='flex font-pop font-normal text-xs px-2 py-1 rounded-2xl h-7 bg-tagsPrimary items-center '>Website</div>
              <div className='flex font-pop font-normal text-xs px-2 py-1 rounded-2xl h-7 items-center bg-tagsSecondary'>JavaScript</div>
              <div className='flex font-pop font-normal text-xs px-2 py-1 rounded-2xl h-7 items-center bg-tagsSecondary'>JavaScript</div>
              <div className='flex font-pop font-normal text-xs px-2 py-1 rounded-2xl h-7 items-center bg-tagsSecondary'>JavaScript</div>
            </div>
            <div className='flex gap-2 pt-6'>
            <ButtonColor text="View Live"/>
            <ButtonClear text="View on Github" icon="/Github.svg" />
            </div>
            </div>
            </div>
          </div>
          <div className={styles.cardLargeBorder}>
          <div className={styles.cardLarge}>
          <Image
          src="/Shop_EA.png"
          alt="Eades Antiques Screenshot"
          style={{height: "300px"}}
          width={800}
          height={300}
        />
            <div className='p-6'>
            <p className='text-2xl font-pop font-bold'>Eades Antiques</p>
            <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, tortor aenean et odio blandit erat.</p>
            {/* Tags div */}
            <div className='pt-4 flex gap-2'>
              <div className='flex font-pop font-normal text-xs px-2 py-1 rounded-2xl h-7 bg-tagsPrimary items-center '>Website</div>
              <div className='flex font-pop font-normal text-xs px-2 py-1 rounded-2xl h-7 items-center bg-tagsSecondary'>JavaScript</div>
              <div className='flex font-pop font-normal text-xs px-2 py-1 rounded-2xl h-7 items-center bg-tagsSecondary'>JavaScript</div>
              <div className='flex font-pop font-normal text-xs px-2 py-1 rounded-2xl h-7 items-center bg-tagsSecondary'>JavaScript</div>
            </div>
            <div className='flex gap-2 pt-6'>
            <ButtonColor text="View Live"/>
            <ButtonClear text="View on Github" icon="/Github.svg" />
            </div>
            </div>
            </div>
          </div><div className={styles.cardLargeBorder}>
          <div className={styles.cardLarge}>
          <Image
          src="/Shop_EA.png"
          alt="Eades Antiques Screenshot"
          style={{height: "300px"}}
          width={800}
          height={300}
        />
            <div className='p-6'>
            <p className='text-2xl font-pop font-bold'>Eades Antiques</p>
            <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, tortor aenean et odio blandit erat.</p>
            {/* Tags div */}
            <div className='pt-4 flex gap-2'>
              <div className='flex font-pop font-normal text-xs px-2 py-1 rounded-2xl h-7 bg-tagsPrimary items-center '>Website</div>
              <div className='flex font-pop font-normal text-xs px-2 py-1 rounded-2xl h-7 items-center bg-tagsSecondary'>JavaScript</div>
              <div className='flex font-pop font-normal text-xs px-2 py-1 rounded-2xl h-7 items-center bg-tagsSecondary'>JavaScript</div>
              <div className='flex font-pop font-normal text-xs px-2 py-1 rounded-2xl h-7 items-center bg-tagsSecondary'>JavaScript</div>
            </div>
            <div className='flex gap-2 pt-6'>
            <ButtonColor text="View Live"/>
            <ButtonClear text="View on Github" icon="/Github.svg" />
            </div>
            </div>
            </div>
          </div><div className={styles.cardLargeBorder}>
          <div className={styles.cardLarge}>
          <Image
          src="/Shop_EA.png"
          alt="Eades Antiques Screenshot"
          style={{height: "300px"}}
          width={800}
          height={300}
        />
            <div className='p-6'>
            <p className='text-2xl font-pop font-bold'>Eades Antiques</p>
            <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, tortor aenean et odio blandit erat.</p>
            {/* Tags div */}
            <div className='pt-4 flex gap-2'>
              <div className='flex font-pop font-normal text-xs px-2 py-1 rounded-2xl h-7 bg-tagsPrimary items-center '>Website</div>
              <div className='flex font-pop font-normal text-xs px-2 py-1 rounded-2xl h-7 items-center bg-tagsSecondary'>JavaScript</div>
              <div className='flex font-pop font-normal text-xs px-2 py-1 rounded-2xl h-7 items-center bg-tagsSecondary'>JavaScript</div>
              <div className='flex font-pop font-normal text-xs px-2 py-1 rounded-2xl h-7 items-center bg-tagsSecondary'>JavaScript</div>
            </div>
            <div className='flex gap-2 pt-6'>
            <ButtonColor text="View Live"/>
            <ButtonClear text="View on Github" icon="/Github.svg" />
            </div>
            </div>
            </div>
          </div>
          </div>
          </section>
  )
}