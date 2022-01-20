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
      <p>Currently, my pronouns are they/them. I hope this site can inspire folks of all ages to learn about  pronouns, and forms of gender expression they may not be as familiar with. To develop more a compassionate community, and spread the knowledge that its always okay to explore and experiment with the ways you identify and express your gender.</p>
      <img src={turtle} alt="turtle"/>
      </div>

      <div className="members">
      <h2>Sarani</h2>
      <p>I use she/her pronouns. I'm passionate about this project because I have nieces and nephews starting to question the world around them and I want to contribute in a positive and loving way to help them discover themselves</p>
      <img src={lion} alt="lion"/>
      </div>
  
    </div>
  )
}
