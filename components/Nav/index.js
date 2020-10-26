import Link from "../Link";

import headerNav from "../../data/header";

const NavItem = ({ href = "#", linkClassName = "", children }) => {
  return (
    <li className="nav-item">
      <Link href={href} className={linkClassName}>
        {children}
      </Link>
    </li>
  );
};

const Nav = () => {
  return (
    <nav>
      <ul className="nav">
        {headerNav.nav.map(({ href, title }) => (
          <NavItem key={title} href={href} linkClassName="nav-item-link">
            {title}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
