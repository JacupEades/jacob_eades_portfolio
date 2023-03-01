import React from 'react'
import MiniCard from '../cards/MiniCard'

type Props = {}

export default function MajorProjects({}: Props) {
  return (
    <section id='mini' className='max-w-screen-xl z-10 pt-[5.5rem] mb-4 mx-8'>
        <p className='text-4xl font-pop font-bold pb-10'>Mini Projects</p>
        <div className='grid grid-cols-2 gap-10'>
          <MiniCard title={'Title for Pro'} text1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, tortor aenean et odio blandit erat. '} text2={'High score: xxx'} image={'/Donut.svg'} link={'#'}  />
          <MiniCard title={'Title for Pro'} text1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, tortor aenean et odio blandit erat. '} text2={'High score: xxx'} image={'/Donut.svg'} link={'#'}  />
          <MiniCard title={'Title for Pro'} text1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, tortor aenean et odio blandit erat. '} text2={'High score: xxx'} image={'/Donut.svg'} link={'#'}  />
          <MiniCard title={'Title for Pro'} text1={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, tortor aenean et odio blandit erat. '} text2={'High score: xxx'} image={'/Donut.svg'} link={'#'}  />
         </div>
    </section>
  )
}