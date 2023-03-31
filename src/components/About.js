import React from 'react'
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from '../data/data.js';

import { fadeIn,textVariant } from '../utils/motion';
import Wrapper from './wrapper';

const ServiceCard = ({ index, title }) => (
    <div className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full p-[1px] rounded-[20px] '
      >
        <div
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          {/* <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          /> */}
  
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );

const About = () => {
  return (
    <>
    <Wrapper idName={'about'}>
    <motion.div 
    variants={textVariant()}
    >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a quick learner and skilled full stack web developer, I bring a deep understanding of JavaScript, React, and Node.js to create effective and scalable web applications. I work closely with clients to develop solutions that solve real-world problems and meet their specific needs, bringing their visions to life through close collaboration.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-between'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      </Wrapper>
    </>
  )
}

export default About