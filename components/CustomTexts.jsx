'use client';

import { motion } from 'framer-motion';
import {textVariant2, textContainer } from '../utils/motion';

export const TypingText = ({title,textStyles}) => (
  <motion.p
  variants={textContainer}
className={`${textStyles} text-[14px] font-normal text-secondary-white`}
  >
{Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({title,textStyles}) => (
  <motion.h2
   variants={textVariant2}
   initial="hidden"
   whileInView="show"
   className={`${textStyles} font-bold md:text-[64px] text-[42px] text-white mt-[8px]`}
  >
{title}
  </motion.h2>
);
