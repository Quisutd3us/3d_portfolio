import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className={`${styles.helperBlue} relative w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} ${styles.helperWhite} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* down line decoration */}
        <div className={`${styles.helperRed} flex flex-col justify-center items-center mt-5`}>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        {/* /down line decoration */}
        {/* text hero */}
        <div className={`${styles.helperBlue} text-white`}>
          <h1 className={`${styles.heroHeadText}`}>Hi , I'm <span className='text-[#915eff]'>David Nariño</span> </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>Im a FrontEnd , 3d Visuals and <br className={' hidden sm:block '}/> middle MEAN stack Developer </p>
        </div>
        {/* /text hero */}
      </div>
        <ComputersCanvas/>
    </section>
  )
}

export default Hero