'use client'
import React from 'react'
import { btnArray, child2 } from "@/utils/arrays/ararticle";
import ARMainComp from '@/components/arcomponent/ARMainComp';
const page = () => {
  return (
    <section className='max-w-screen-2xl mx-auto my-7 md:my-14 max-2xl:px-24 max-md:px-14 max-sm:px-5'>
    <ARMainComp article={child2} btnArray={btnArray}/>
    </section>
  )
}

export default page
