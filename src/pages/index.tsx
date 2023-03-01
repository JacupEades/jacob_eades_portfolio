import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Header from '@/components/nav/Header'
import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import MajorProjects from '@/components/sections/MajorProjects';
import MiniProjects from '@/components/sections/MiniProjects';



export default function Home() {
  return (
    <div className='text-neutralStrong'>
      <Head>
        <title>Jacob Eades - Software Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Backgorund Floating objects */}
      <main className='w-100 overflow-hidden ml-0'>
        <div className={styles.backgroundObjects}>
        <div className={styles.circleBehind}></div>
        <div className={styles.circleBehind}></div>
        <div className={styles.circleBehind}></div>
        <Header />
        <Hero />
        <Skills />
        <MajorProjects />
        <MiniProjects />
        </div>
      </main>
    </div>
  )
}
