'use client';
import {motion} from "framer-motion";
import {fadeIn} from "../utils/motion";
import styles from "../styles";



const ExploreCard = ({imgUrl,title,active,handleClick,index,id 
}) => {
  return(
//     <motion.div
//     variants={fadeIn("right","spring",index*0.5,0.75)}
// className={`relative ${active===id? "lg:flex-[10] flex-[3.5]": "lg:flex-[2] flex-[0.5]"} min-h-[700px] min-w-[170px] justify-center transition-[flex] duration-[0.75s] ease-out-[flex] cursor-pointer `}

//      >

//    <img src={imgUrl} alt={title} className="h-full w-full object-cover rounded-[24px]"/>

<motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'flex-[3.5] lg:flex-[10]' : 'flex-[0.5] lg:flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[600px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)
    }
  >
    <img
      src={imgUrl}
      alt="planet"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
{active !== id ? (
<h3 className="text-white font-semibold absolute z-0 text-[18px] sm:text-[26px] lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
  {title}
</h3>
):(
<div className="flex flex-col justify-start absolute w-full  bg-[rgba(0,0,0,0.5)] bottom-0 rounded-b-[24px] p-8">
  <div className={`${styles.flexCenter} flex glassmorphism rounded-[24px] w-[60px] h-[60px]`}>
    <img src="/headset.svg" alt="headset" className="w-1/2 h-1/2 object-contain"/>
  </div>
  <p className="text-secondary-white uppercase mt-[13px]">Explore the world</p>
  <h3 className="font-semibold text-[18px] sm:text-[26px] mt-[8px] text-white py-3">{title}</h3>
</div>
)}
    </motion.div>
  )
};

export default ExploreCard;
