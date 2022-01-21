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
  }  
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
        <p>
        {text}
        </p>
      </div>
      <img className={styles.guideImg} src={`/icons/${userGuide}.png`} alt={userGuide} aria-label='user guide'/>
    </motion.article>
  )
}

Guide.propTypes = {
  text: PropTypes.string,
}