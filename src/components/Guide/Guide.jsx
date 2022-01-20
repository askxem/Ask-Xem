import PropTypes from "prop-types";
import { useState } from "react";
import { useGuide } from "../../context/GuideContext/GuideContext.jsx";
import styles from "./Guide.css"

/**
 * 
 * @param {string} text the guide's text box will display this value 
 * @returns an image of the user's selected guide and a guide text box
 */
export default function Guide({text}) {
  //LATER:
    // pull users guide from user context
  const { guide } = useGuide();
  const [userGuide, setUserGuide] = useState( guide ? guide : 'lion');

  return (
    <article>
      <div aria-label='guide text box'>
        <pre>
        {text}
        </pre>
      </div>
      <img className={styles.guide}src={`/icons/${userGuide}.png`} alt={userGuide} aria-label='user guide'/>
    </article>
  )
}

Guide.propTypes = {
  text: PropTypes.string,
}