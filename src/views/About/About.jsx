import hedgehog from '../../assets/Icons/hedgehog.png'
import lion from '../../assets/Icons/lion.png'
import turtle from '../../assets/Icons/turtle.png'
import llama from '../../assets/Icons/llama.png'
import styles from './About.css'


export default function About() {
  return (
    <>
      <main className={styles.aboutcontainer}>
      <h2>Meet Our Team</h2>
      <p>Ask Xem was made with love and a few tears during a week-long sprint.</p>

      <img src={hedgehog} alt="hedgehog"/>
        <h3>D</h3>
        <p>I go by D or Diyana and use she/her pronouns. I've always been super cranky about gender norms and the heteropatriarchy. I live for the day when we are all beyond binary bullsh*t. <a href='https://www.linkedin.com/in/diyana-mendoza-price/'>LinkedIn</a> // <a href='https://github.com/diyanamendoza'>Github</a></p>

      <img src={llama} alt="llama"/>
        <h3>Michael</h3>
        <p>My pronouns are he/him. Before this project I thought I was understanding and a good support system. Now I realized that thinking I am isn't enough, I actually need to be those things. Being a responsible friend requires real work. I hope this project can help others as much as it's helped me. <a href='https://www.linkedin.com/in/mikepdxrider/'>LinkedIn</a> // <a href='https://github.com/MikepdXRider'>Github</a>
        </p>

      <img src={turtle} alt="turtle"/>
        <h3>Katie</h3>
        <p>Currently, my pronouns are they/them. I hope this site can inspire folks of all ages to learn about  pronouns, and forms of gender expression they may not be as familiar with. To develop more a compassionate community, and spread the knowledge that its always okay to explore and experiment with the ways you identify and express your gender. <a href='https://www.linkedin.com/in/k-schrattenholzer/'>LinkedIn</a> // <a href='https://github.com/k-schrattenholzer'>Github</a></p>

      <img src={lion} alt="lion" width='50px'/>
        <h3>Sarani</h3>
        <p>I use she/her pronouns. I'm passionate about this project because I have nieces and nephews starting to question the world around them and I want to contribute in a positive and loving way to help them discover themselves. <a href='https://www.linkedin.com/in/emily-sarani-2b3074135/'>LinkedIn</a> // <a href='https://github.com/EmilyDSarani'>Github</a></p>

    </main>
    </>
  )
}
