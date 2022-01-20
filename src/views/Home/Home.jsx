import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <section>
      <h1>Welcome to Ask Xem</h1>
      <p>Xem will be your guide as you learn explore the site</p> {'....rest of welcome message'}
      </section>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to='/select'>Continue as Guest</Link>
    </div>
  )
}
