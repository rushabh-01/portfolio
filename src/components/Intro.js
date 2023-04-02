import React from 'react'
import { styles } from "../styles";
import { motion } from "framer-motion";
import comp from "../images/comp-pix-rm.png"

const Intro = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} block sm:flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#6495ed]'>Rushabh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces and web applications<br className='sm:block hidden' />
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img src={comp} className='mx-auto' alt='img'/> 
        </div>
      </div>

      <motion.div className="mt-8 absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </motion.div>

    </section>
  )
}

export default Intro
