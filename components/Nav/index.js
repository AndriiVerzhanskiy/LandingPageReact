import Link from "../Link";

import headerNav from "../../data/header";

const NavItem = ({zIndex = 1, href = "#", linkClassName = "", children }) => {
  return (
    <li className="nav-item" style={{zIndex: zIndex + 1}}>
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
        {headerNav.nav.map(({ href, title }, index) => (
          <NavItem zIndex={index} key={title} href={href} linkClassName="nav-item-link">
            {title}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
