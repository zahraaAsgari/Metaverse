'use client';
import {useState} from "react";
import {motion} from "framer-motion";
import styles from "../styles";
import {TypingText,TitleText, ExploreCard} from "../components";
import { staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";


const Explore = () => {
  const [active ,setActive] = useState('world-2');
  return(
    <section className={`${styles.paddings}`} id="explore">
   <motion.div 
   variants={staggerContainer}
   initial="hidden"
   whileInView="show"
   viewport={{once:false,amount:0.25}}
   className={`${styles.interWidth} flex flex-col mx-auto`}
   >
    <TypingText title="| Explore world" textStyles="text-center"/>

  <TitleText title={<>Choose the world you want<br className="hidden md:block"/> to explore</>}  textStyles="text-center"/>
<div
className="mt-[50px] flex flex-col lg:flex-row gap-5 min-h-[70vh]"
>
{exploreWorlds.map((world,index)=>(
<ExploreCard key={world.id} {...world} index={index} active={active} handleClick={setActive}/>
))}
</div>
   </motion.div>
  </section>
  )
};

export default Explore;
