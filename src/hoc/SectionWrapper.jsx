import {motion} from 'framer-motion';
import {styles} from '../styles.js'
import {staggerContainer} from "../utils/motion.js";

const SectionWraper = (Component , idName)=> {
  return HOC() {
    return(
        <motion.section>
          <Component/>
        </motion.section>
    );
  };
};

export default SectionWraper;