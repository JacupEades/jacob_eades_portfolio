import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { motion } from 'framer-motion'
import ButtonClear from '../buttons/ButtonClear'
import ButtonColor from '../buttons/ButtonColor'

type Props = {}

export default function Hero({}: Props) {
  return (
    <section id='hero' className='max-w-screen-xl pt-[7.5rem] z-10 pb-4 px-8'>
        <div className={styles.heroBGA}>
        <div className={styles.heroShapes} />
        </div>
        <div className={styles.heroBGB} />
          <div className='grid grid-cols-2'>
          <div className='z-10'>
          <p className='text-3xl font-inter pb-4'>Hi! I&#39;m Jacob Eades</p>
          <p className='text-6xl font-pop font-bold pb-4'>Software Engineer</p>
          <p className='pb-4'>I&#39;m a self-taught Full-Stack Developer with a unique background as a <span className='font-bold'>master electrician</span>. I had some experience with Programmable Logic Controllers (PLC) programming for industrial machines, which sparked my passion for coding. My master electrician experience has helped me approach complex problems systematically and with an eye for detail. </p>
          <p className='pb-4'>I&#39;ve also collaborated closely with a <span className='font-bold'>User Experience and Interface</span> designer on all of my projects, ensuring that my code meets both functional and aesthetic requirements.</p>
          <p className='pb-8'>Currently, I&#39;m seeking a <span className='font-bold'>front-end</span> position to utilize my skills and make a difference in the field. Explore my website to see how I can bring value to your team.</p>
          <div className='inline-grid grid-cols-2 gap-4'>
            <ButtonColor text='Hire Me'/> 
            <ButtonClear text='View Projects'/>
          </div>
          
          </div>
          <div className='z-10 w-full flex justify-center m-0'>
          <motion.div
          whileHover={{ boxShadow: "0px 0px 25px 0px rgba(0,0,0,0.75)", scale: 1.05 }}
          className='h-[29.75rem] w-[29.75rem] overflow-hidden rounded-full bg-opacity-100 bg-primaryWeak backdrop-blur'>
          <Image
          className='m-auto'
          src="/Cutout_JacobEades.png"
          alt="Jacob Eades Cutout"
          width={432}
          height={568}
        />
          </motion.div>
          </div>
        </div>
        </section>
  )
}