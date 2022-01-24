import PropTypes from "prop-types";
import { useState } from "react";
import { useGuide } from "../../context/GuideContext/GuideContext.jsx";
import styles from "./Guide.css"
import { motion } from "framer-motion";

const guideVariants = {
  initial: {
      opacity: 0, 
      x: '-100vw'
  },
  animate: {
      opacity: [0, 1], 
      x: 0,
      transition: { delay: .5, duration: .5 }
  },
}

const guideImgVariants = {
  initial: { scale: 0 },
  animate: { scale: [0, 1.2, 1] },
  bounce: { y: [0, -12, 0] }
}
/**
 * 
 * @param {string} text the guide's text box will display this value 
 * @returns an image of the user's selected guide and a guide text box
 */
export default function Guide({text}) {

  const { guide } = useGuide();
  const [userGuide, setUserGuide] = useState( guide ? guide : 'lion');

  return (
    <motion.article className={styles.guideContainer} variants={guideVariants} initial={'initial'} animate={'animate'}>

      <div aria-label='guide text box' className={styles.guideText}>
        <p className={styles.text}>{text}</p>
        <motion.img 
        className={styles.guideImg} 
        src={`/icons/${userGuide}.png`} 
        alt={userGuide} 
        aria-label='user guide'
        variants={guideImgVariants}
            initial={'initial'}
            animate={'animate'}
            whileHover={'bounce'}
            whileFocus={'bounce'}/>
      </div>
    </motion.article>
  )
}

Guide.propTypes = {
  text: PropTypes.string,
}