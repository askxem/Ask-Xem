import Nav from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}
