import React, { useState } from 'react'
import { NavbarMenu } from '../mockData/data'
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { motion } from 'framer-motion'
import ResponsiveMenu from '../components/ResponsiveMenu';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    // nav have 3 visible sections: 1.navLogo 2.menu 3.icons 
    // nav have 2 other sections: menu icon and responsive navMenu 
    <header>
        <motion.nav
        className='container flex items-center justify-between py-8'>
            {/* 1.navLogo section */}
            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
                <FaDumbbell />
                <p>Coders</p>
                <span className="text-primary">Gym</span>
            </div>

            {/* 2.menu section */}
            <div className="hidden md:block">
                <ul className="flex items-center gap-6 text-gray-600">
                     {NavbarMenu.map((item) => {
                        return (
                            <li key={item.id}>
                                <a href={item.link} 
                                className="inline-block py-1 px-3 hover:text-primary font-semibold" >
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {/* 3.icons section */}
            <div className="flex items-center gap-4">
                <button className='text-2xl hover:bg-primary hover:text-white p-2 duration-200 rounded-full'>
                    <CiSearch />
                </button>
                <button className='text-2xl hover:bg-primary hover:text-white p-2 duration-200 rounded-full'>
                    <PiShoppingCartThin />
                </button>
                <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">
                    Login
                </button>
            </div>
            {/* 4.menu icon */}
            <div className='md:hidden cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
                <MdMenu className='text-4xl' />
            </div>
        </motion.nav>
        {/* 5.responsive menu */}
        <ResponsiveMenu isOpen={isOpen} />
    </header>
  )
}

export default Navbar