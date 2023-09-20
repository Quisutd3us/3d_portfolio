import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";



// create stateless Component ProjectCard

const ProjectCard = ({ index, description, image, name, source_tag_link, tags }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          // eslint-disable-next-line react/no-unknown-property
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}



const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects Done</h2>
      </motion.div>
      <div className={`w-full flex`}>
        <motion.p
          variants={fadeIn('', '', 0.3, 1)}
          className={` mt-3 text-secundary text-[17px] max-w-3xl leading-[30px]`}
        >
          Following projects Showcases my skills and experience though real-world examples of my work. Each project are briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, aand manage projects effectively...
        </motion.p>

      </div>

      {/* Tilts Section */}

      <div className={`${styles.helperBlue} mt-20 flex flex-wrap gap-7`}>
        {
          projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))
        }

      </div>
    </>
  )
}

export default SectionWrapper(Works, 'works');