import PropTypes from "prop-types";
import { useState } from "react";

export default function Guide({text}) {
  //LATER:
    // pull users guide from user context
  const [userGuide, setUserGuide] = useState('lion');
  

  return (
    <article>
      <div aria-label='guide text box'>
        <pre>
        {text}
        </pre>
      </div>
      <img src={require(`../../assets/Icons/${userGuide}.png`)} alt={userGuide} aria-label='user guide'/>
    </article>
  )
}

Guide.propTypes = {
  text: PropTypes.string,
}