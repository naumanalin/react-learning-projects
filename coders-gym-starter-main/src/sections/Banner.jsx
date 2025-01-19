import React from 'react'
import { motion } from 'framer-motion'

const Banner = ({image, title, subtitle, link}) => {
  return (
    <div className='bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14'>
      {/* Banner Image Section */}
      <div className="">
      <motion.img
      initial={{opacity:0, scale:0.4}}
      whileInView={{opacity:1, scale:1}}
      transition={{type:"spring", stiffness:100}}
      src={image} alt="image" className="w-[300px] md:max-w-[400px] xl:max-w-[600px] h-full object-cover" />
      </div>


      {/* Banner Info Section */}
      <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
        <h2 className="text-2xl lg:text-4xl font-bold capitalize">{title}</h2>
        <p>{subtitle}</p>
        <div className="flex justify-center md:justify-start">
          <button className="primary-btn">Explore More</button>
        </div>
      </div>
    </div>
  )
}

export default Banner