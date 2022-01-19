import hedgehog from '../../assets/Icons/hedgehog.png'
import lion from '../../assets/Icons/lion.png'
import turtle from '../../assets/Icons/turtle.png'
import llama from '../../assets/Icons/llama.png'



export default function About() {
  return (
    <div className="about">
      <h2>Meet Our Team</h2>

      <div className="members">
      <h2>D</h2>
      <p>-inser bio here-</p>
      <img src={hedgehog} alt="hedgehog"/>
      </div>

      <div className="members">    
      <h2>Michael</h2>
      <p>-inser bio here-</p>
      <img src={llama} alt="llama"/>
      </div>

      <div className="members">  
      <h2>Katie</h2>
      <p>-inser bio here-</p>
      <img src={turtle} alt="turtle"/>
      </div>

      <div className="members">
      <h2>Sarani</h2>
      <p>I use she/her pronouns. I am passionite about this project because I have nieces and nephews starting to question the world around them and I want to contribute in a positive and loving way to help them discover themselves</p>
      <img src={lion} alt="lion"/>
      </div>
  
    </div>
  )
}
