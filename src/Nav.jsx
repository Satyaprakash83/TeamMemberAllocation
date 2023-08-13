import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/grouped-team-members">
            Teams
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
