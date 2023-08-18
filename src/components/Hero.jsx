import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#4bffae]' />
          <div className='w-1 sm:h-80 h-40 green-pink-gradient' />
        </div>

        <div className="z-40">
          <h1 className={`${styles.heroHeadText} text-green-500 green-text-gradient`}>
            Hi, I'm <span className='text-[#399852]'>Isaac</span>
          </h1>
          <p className={`${styles.heroSubText} mt-1 green-text-gradient`}>
            I use technology to develop interfaces <br className='sm:block hidden' />
            and applications, please take a peak
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-end items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-end items-start p-2'>
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
      </div>
    </section>
  );
};

export default Hero;