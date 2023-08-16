'use client';
import { motion } from 'framer-motion';

import styles from '../styles';
import {TypingText} from "../components"
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} z-10 relative`}>
  <div className='gradient-02 z-0'/>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:"false",amount:0.25}}
    className={`${styles.flexCenter} ${styles.interWidth} mx-auto flex-col`}
    >
<TypingText title="| About Metaversus" textStyles="text-center"/>

<motion.p 
variants={fadeIn("up","tween",0.2,1)}
initial="hidden"
whileInView="show"
className='text-center font-normal text-[20px] sm:text-[32px] text-secondary-white mt-[8px]'
>
<span className="font-extrabold text-white">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the{' '}
        <span className="font-extrabold text-white">
          madness of the metaverse
        </span>{' '}
        of today, using only{' '}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's{' '}
        <span className="font-extrabold text-white">explore</span> the madness
        of the metaverse by scrolling down
</motion.p>
<motion.img 
src="/arrow-down.svg"
alt='arrow down'
variants={fadeIn("up","tween",0.3,1)}
className='object-contain mt-[10px] text-secondary-white'
/>


    </motion.div>
  </section>
);

export default About;
