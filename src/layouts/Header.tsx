import { NavLink } from "react-router-dom";
import logo from "/logo-white.webp";
import '../styles/header.css'

const Navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Header() {

  return (
    <header>
      <div className="header_items">
        <NavLink to="/">
          <img src={logo} alt="Logo" height={50} />
        </NavLink>
        <nav>
          <ul className="header_nav">
          {Navigation.map((items, index) => (
            <li key={index}>
              <NavLink
                to={items.path}
                className={({ isActive }) =>
                  isActive ? "text-[#ff4d00] font-bold underline" : "hover:text-[#ff4d00]"
                }
              >
                {items.name}
              </NavLink>
            </li>
          ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
