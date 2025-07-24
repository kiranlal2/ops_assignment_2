import '../styles/footer.css'
import { NavLink } from 'react-router-dom'
import logo from '/logo-white.webp'

function footer() {
  return (
    <footer>
      <div className="footer">
        <h1>KIRAN LAL J</h1>
        <p>Build your Empair</p>
        <p>&copy; 2025 All Rights Reserved By AHADNIKI</p>
      </div>
      <NavLink to="/">
          <img src={logo} alt="Logo" height={50} />
      </NavLink>
    </footer>
  )
}

export default footer