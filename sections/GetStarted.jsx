'use client';
 import {motion} from "framer-motion";
import styles from "../styles";
import {staggerContainer,planetVariants,fadeIn} from "../utils/motion";
import {TypingText,TitleText, StartSteps} from "../components";
import { startingFeatures } from "../constants";

const GetStarted = () => {
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
variants={planetVariants("left")}
className={` flex-1 ${styles.flexCenter} `}
>
<img src="/get-started.png" alt="get-started" className="w-[90%] h-[90%] object-contain"/>
</motion.div>
<motion.div  
variants={fadeIn("left","tweeen",0.2,1)}
className="flex-[0.75] flex flex-col justify-center "
>
<TypingText title="| How Metaverse Works"/>
<TitleText title={<>Get started with just a few clicks</>}/>
<div className="flex flex-col gap-[24px] mt-[30px] max-w-[320px] ">
{startingFeatures.map((feature, index)=>(
  <StartSteps key={feature} number={index+1} text={feature}/>
))}

</div>
</motion.div>
    </motion.div>

    </section>
  )};

export default GetStarted;
