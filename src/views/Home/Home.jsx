import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div>
      <section>
      <h1>Welcome to Ask Xem</h1>
      <p>Xem will be your guide as you learn explore the site</p> {'....rest of welcome message'}
      </section>
      <Link to="/auth">Login or Sign Up</Link>
      <Link to='/select'>Continue as Guest</Link>
    </div>
  )
}
