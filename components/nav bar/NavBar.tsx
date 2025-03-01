import React from 'react'
import { FaHamburger } from 'react-icons/fa'
import { IoMdMenu } from 'react-icons/io'

const NavBar = () => {
  return (
    <div className='w-full px-4 py-2 md:px-8 md:py-3 flex flex-row justify-between sticky top-0 bg-white z-10'>
    <div className='flex flex-row gap-4 items-center'>
        <img src="assets/images/Logo.svg" alt="logo" className='w-1/6 md:w-l/4'/>
        <p className='md:text-2xl font-semibold'>Ware<span className='text-[#00AA6C]'>Space</span></p>
    </div>
    <div className='flex flex-row gap-2 md:gap-8 items-center'>
        <div className='flex gap-1 md:gap-2'>
            <img src="assets/images/Phone.svg" alt="logo" className='w-1/12 md:w-l/4'/>
            <p className='text-sm md:text-xl font-semibold'>470-518-5965</p>
        </div>
        <button className='text-base font-semibold text-white bg-[#00AA6C] px-8 py-3 rounded-lg shadow-m shadow-slate-400 hidden md:block'>Book a Tour Today</button>
        <button className='text-xl block md:hidden'><IoMdMenu /></button>
    </div>
    </div>
  )
}

export default NavBar
