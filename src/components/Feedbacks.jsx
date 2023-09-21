import { PropTypes } from 'prop-types';

import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { testimonials } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

// create stateless FeedbackCard component
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className={"bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"}
  >
    <p className={"text-white font-black text-[58px]"}>"</p>
    <div className="mt-1">
      <p className={"text-white tracking-wider text-[18px]"}>{testimonial}</p>
      <div className={`mt-7 flex justify-between items-center gap-1`}>
        <div className={`flex flex-col flex-1 `}>
          <p className={"text-white font-medium text-[16px]"}>
            <span className={"blue-text-gradient"}>@</span> {name}
          </p>
          <p className={"mt-1 text-secondary text-[12px]"}>
            {designation} of {company}
          </p>
        </div>


        <img
          src={image}
          alt={`testimonial-${name}`}
          className={"h-12 w-12 object-contain rounded-full bg-gradient-to-r p-[2px] from-[#7928ca] to-[#ff0080]"}
        />
      </div>
    </div>
  </motion.div >
)

// PropTypes for FeedbackCard

FeedbackCard.propTypes = {
  index: PropTypes.number.isRequired,
  testimonial: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const Feedbacks = () => {
  return (
    <div className={"mt-12 bg-black-100 rounded-[20px]"}>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()} >
          <p className={`${styles.sectionSubText}`}>What others Say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {
          testimonials.map((testimony, index) => (
            <FeedbackCard
              key={`testimony-${index}`}
              index={index}
              {...testimony}
            />
          ))
        }
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "feeds")