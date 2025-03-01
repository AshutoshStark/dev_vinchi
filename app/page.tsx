'use client'
import { FaAngleRight } from "react-icons/fa";
import {motion} from 'framer-motion';
import {  slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export default function Home() {

  const [index,setIndex] = useState<number>(0);

  const listImage = [
    "assets/ware house images/wareHouse1.svg",
    "assets/ware house images/wareHouse2.svg",
    "assets/ware house images/wareHouse3.svg",
    "assets/ware house images/wareHouse4.svg",
  ]

  const imageSwiper =(type:boolean)=>{
    if(type && index === 3){
      setIndex(0)
    }
    if(type && index < 3){
      setIndex(index+1)
    }
    if(type === false && index >= 0){
      setIndex(index <= 0 ? index : index-1)
    }
  }

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="flex justify-center items-center w-full h-auto md:h-screen bg-top md:bg-center bg-contain md:bg-cover bg-no-repeat overflow-hidden bg-[url(../public/assets/images/bgImage.svg)] ">
      <motion.div variants={slideInFromTop} className="mt-40 md:mt-6 flex gap-6 md:gap-12 flex-col md:flex-row bg-emerald-300 px-5 md:px-12 py-6 rounded-lg w-full md:max-w-[64%] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-40">
         {/* for mobile images */}
         <div className="flex flex-row justify-between items-center -mt-28 md:hidden">
            <motion.button onClick={()=>imageSwiper(false)} className="bg-white backdrop-blur-lg rounded-full p-1.5">
              <IoIosArrowBack />
            </motion.button>
            <motion.button onClick={()=>imageSwiper(true)} className="bg-white backdrop-blur-lg rounded-full p-1.5">
              <IoIosArrowForward />
            </motion.button>
          </div>
         {/* for mobile images */}
         <div className="flex justify-center items-center gap-3 py-3 md:hidden">
              <motion.img variants={slideInFromLeft(0.5)} src={listImage[index]} alt="" className="w-1/5"/>
              <motion.img variants={slideInFromLeft(0.6)} src={listImage[index+1]} alt="" className="w-1/5"/>
              <motion.img variants={slideInFromLeft(0.7)} src={listImage[index+2]} alt="" className="w-1/5"/>
          </div>
        <div className="">
          <img src="assets/images/review.svg" alt="review" className="w-1/4" />
          <motion.p
          variants={slideInFromLeft(0.5)}
           className="text-3xl font-semibold pt-3">
          Small warehouse space for rent in <span className="text-[#00AA6C]"> Upper West Side, Atlanta, GA</span>
          </motion.p>
          {/* description */}
          <div className="flex flex-col gap-4 py-3">
            <motion.div variants={slideInFromLeft(0.6)} className="flex items-center gap-3">
              <img src="assets/icons/calander.svg" alt="" className="w-1/15"/>
              <p className="font-semibold text-xs">Flexible spaces & leases <br /> <samp className="font-medium">Leases as short as 6 months. Upscale or downscale anytime!</samp></p>
            </motion.div>
            <motion.div variants={slideInFromLeft(0.7)} className="flex items-center gap-3">
              <img src="assets/icons/wareHouse.svg" alt="" className="w-1/15"/>
              <p className="font-semibold text-xs">Flexible spaces & leases <br /> <samp className="font-medium">Leases as short as 6 months. Upscale or downscale anytime!</samp></p>
            </motion.div>
            <motion.div variants={slideInFromLeft(0.8)} className="flex items-center gap-3">
              <img src="assets/icons/key.svg" alt="" className="w-1/15"/>
              <p className="font-semibold text-xs">Flexible spaces & leases <br /> <samp className="font-medium">Leases as short as 6 months. Upscale or downscale anytime!</samp></p>
            </motion.div>
          </div>
          {/* images */}
          <div className="gap-3 py-3 hidden md:flex">
              <motion.img variants={slideInFromLeft(0.5)} src="assets/ware house images/wareHouse1.svg" alt="" className="w-1/5"/>
              <motion.img variants={slideInFromLeft(0.6)} src="assets/ware house images/wareHouse2.svg" alt="" className="w-1/5"/>
              <motion.img variants={slideInFromLeft(0.7)} src="assets/ware house images/wareHouse3.svg" alt="" className="w-1/5"/>
              <motion.img variants={slideInFromLeft(0.8)} src="assets/ware house images/wareHouse4.svg" alt="" className="w-1/5"/>
          </div>
          {/* area description */}
          <div className="py-3">
            <motion.p variants={slideInFromLeft(0.9)} className="text-[#00AA6c] text-xs">200-2 border-gray-600
              ,000 sq ft starting as low as $625/month</motion.p>
          </div>
        </div>
        <motion.div variants={slideInFromRight(0.5)} className="bg-white rounded-lg p-6">
          <motion.p variants={slideInFromRight(0.6)} className="text-base font-semibold">Visit for an in-person tour</motion.p>
          <motion.div variants={slideInFromRight(0.7)} className="flex">
            <img src="assets/images/formImage.svg" alt="image" className="w-1/5 " />
            <p className="text-xs">Cashana or Khadijah will answer your questions and find you a space that meets your needs. No commitment necessary!</p>
          </motion.div>
          <div className="w-full gap-2 flex flex-col justify-center items-center py-4">
            <input type="text" placeholder="First Name" className="border-2 border-gray-300 text-xs w-full rounded-sm p-2"/>
            <input type="text" placeholder="Last Name" className="border-2 border-gray-300 text-xs w-full rounded-sm p-2"/>
            <input type="email" placeholder="Email" className="border-2 border-gray-300 text-xs w-full rounded-sm p-2"/>
            <input type="text" placeholder="Phone number (Just so we can remind you of your appt)" className="border-2 border-gray-300 text-xs w-full rounded-sm p-2"/>
          </div>
          <motion.button variants={slideInFromRight(0.7)}className='w-full text-xs font-semibold text-white bg-[#00AA6C] px-6 py-2 rounded-lg shadow-m shadow-slate-400 flex items-center justify-center'>Step 2: Find a time that works <span><FaAngleRight /></span></motion.button>
          <motion.p variants={slideInFromRight(0.7)} className="text-sm py-2 pb-8">Questions? Give us a call: <span className="text-[#00AA6C]">415-985-0940</span></motion.p>
          <motion.button variants={slideInFromRight(0.7)} className=' text-sm text-black bg-emerald-100 px-3 py-1 rounded-full shadow-m shadow-slate-400 flex items-center justify-center'>Looking for a job? <span className="underline">Click here.</span></motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
