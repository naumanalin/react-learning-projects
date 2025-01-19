import React from 'react'
import { NavbarMenu } from '../mockData/data'
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({isOpen}) => {
  return (
    <AnimatePresence mode='wait' >
        {isOpen && (
            <motion.div
            initial={{opacity:0, y:-100}}
            animate={{opacity:1, y:0, zIndex:100}}
            exit={{opacity:0, y:-100}}
            transition={{duration:0.3}}
            className='absolute top-20 left-0 w-full'>
                <div className="bg-primary border rounded-3xl py-8 m-2 text-white font-semibold">
                    <ul className="flex flex-col gap-4 justify-center items-center">
                        {NavbarMenu.map((item) => {
                            return(
                                <li key={item.id} className="cursor-pointer">{item.title}</li>
                            
                            )
                        }
                    )}
                    </ul>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default ResponsiveMenu