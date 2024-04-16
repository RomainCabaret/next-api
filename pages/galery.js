import React from 'react'
import Image from 'next/image'
import img1 from '@/public/assets/1.jpg'
import img2 from '@/public/assets/2.jpg'
import img3 from '@/public/assets/3.jpg'

export default function galery() {
  return (
    <div>
        <Image src={img1} width="4869" height="3264" alt='beautiful image'/>
        <Image src={img2} width="3648" height="5472" alt='beautiful image'/>
        <Image src={img3} width="3848" height="2565" alt='beautiful image'/>
    </div>
  )
}
