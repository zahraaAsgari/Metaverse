'use client';

import {motion} from "framer-motion"
import { fadeIn } from "../utils/motion";
  
const InsightCard = ({imgUrl,title,subtitle,index}) => (
  <motion.div
  variants={fadeIn("up","spring",index*0.5,1)}
className="flex md:flex-row flex-col gap-4"
  >
  <img 
src={imgUrl}
alt="planet-01"
className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"

  />
      <div className="w-full flex justify-between items-center">
  <div className="flex flex-col gap-5 w-full items-center ml-[30px] justify-start md:max-w-[600px]">
    <h3 className="text-white font-bold lg:text-[42px] text-[26px] ">{title}</h3>
    <p className="text-normal text-secondary-white text-[14px] lg:text-[20px]">{subtitle}</p>
  </div>
  <div className="lg:flex hidden justify-center items-center w-[100px] h-[100px] rounded-full border-[1px] border-white bg-transparent">
    <img src="/arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain" />
  </div>
  </div>
  </motion.div>
);

export default InsightCard;

