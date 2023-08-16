'use client';
 import {motion} from "framer-motion";
import styles from "../styles";
import {staggerContainer,planetVariants,fadeIn} from "../utils/motion";
import {TypingText,TitleText, NewFeatures} from "../components";
import { newFeatures } from "../constants";

const WhatsNew = () => {
  return(
    <section className={`${styles.paddings} z-10 relative `}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:"false" ,amount:0.25}}
    className={`${styles.interWidth}  flex  sm:flex-row flex-col mx-auto gap-8 `}
    >

<motion.div  
variants={fadeIn("right","tweeen",0.2,1)}
className="flex-[0.75] flex flex-col justify-center "
>
<TypingText title="| What's New"/>
<TitleText title={<>What's new about Metaversus?</>}/>
<div className="flex gap-[24px] mt-[45px] flex-wrap justify-between ">
{newFeatures.map((feature)=>(
  <NewFeatures key={feature.title} {...feature}/>
))}

</div>
</motion.div>
<motion.div
variants={planetVariants("right")}
className={` flex-[0.75] ${styles.flexCenter} `}
>
<img src="/whats-new.png" alt="whats-new" className="w-[90%] h-[90%] object-contain"/>
</motion.div>
    </motion.div>

    </section>
  )};

export default WhatsNew;
