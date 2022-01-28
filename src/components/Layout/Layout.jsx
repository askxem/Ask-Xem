import Nav from '../Nav/Nav.jsx'

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  )
}
