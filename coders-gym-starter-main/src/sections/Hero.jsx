import React from 'react'
import { FaPlay } from 'react-icons/fa'
import HeroImage from '../assets/dumbell.png'
import { motion } from "framer-motion";
import { SlideRight } from "../utility/animation";

const Hero = () => {
  return (
    <section className='container grid gird-cols-1 md:grid-cols-2 min-h-[650px] relative'>
        {/* Brand Info */}
        <div className="flex-c-c flex-col md:items-start gap-10 py-14 md:py-0 font-playfair">
          <div className="text-center md:text-left space-y-6 ">
              <motion.h1 
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-bold">Gym Gives you the perfect {" "} <span className="text-primary">Health</span></motion.h1>
              <motion.p
               variants={SlideRight(1)}
               initial="hidden"
               animate="visible"
              className="text-gra-600">
                It is a long established fact that a reader will be by readable
                content of a page when are the best product.
              </motion.p>
          </div>
          {/* buttons section */}
          <motion.div
           variants={SlideRight(1.5)}
           initial="hidden"
           animate="visible"
            className="flex justify-center gap-8 md:justify-start mt-4">
            <button className="bg-primary text-white font-semibold py-3 px-6  rounded-md cursor-pointer 
            hover:scale-110 duration-300">Order Now</button>
            <button className="flex justify-center items-center gap-2"> <FaPlay/> Watch Now</button>
          </motion.div>
        </div>
        {/* Hero Image */}
        <div className="flex-c-c">
            <motion.img
            initial={{opacity:0, x:100, rotate:90}}
            animate={{opacity:1, x:0, rotate:0}}
            transition={{duration:3}}
            src={HeroImage} alt="Hero image" className=" w-[350px] md:w-[550px] xl:w-[700px]" />
        </div>
    </section>
  )
}

export default Hero