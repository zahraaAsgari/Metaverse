'use client';
import {motion} from "framer-motion";
import styles from "../styles";
import {fadeIn, staggerContainer} from "../utils/motion";
import {TypingText,TitleText} from "../components";



const World = () => (
  <section className={`${styles.paddings} z-10 relative`}>
<motion.div
variants={staggerContainer}
initial="hidden"
whileInView="show"
viewport={{once:"false" ,amount:0.251}}
className={`${styles.interWidth} flex flex-col mx-auto `}
>
  <TypingText title="| People On The World" textStyles="text-center"/>
  <TitleText title={<>Track friends around you and invite them to play together in the same world</>}
  textStyles="text-center"
  />
  <motion.div 
  variants={fadeIn("up","tween",0.3,1)}
  className="w-full flex max-h-[520px] mt-[70px] relative"
  >
    <img src="/map.png" alt="map" className="w-full h-full object-cover" />
    
    <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>
  </motion.div>
</motion.div>
    
  </section>
);

export default World;
