import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiChevronsLeft,
  FiAlignJustify,
} from "react-icons/fi";
import navlinks from "../Config/navlinks";
import css from "../Styles/App.module.scss";
import cs from "classnames";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const toggleNav = () => setOpen((c) => !c);

  return (
    <>
      <FiAlignJustify className="nav-icon nav-bars" onClick={toggleNav} />
      <nav role="navigation" className={cs(css.nav, { "nav-closed": !isOpen })}>
        <FiChevronsLeft className="nav-icon nav-close" onClick={toggleNav} />
        {navlinks.map(({ path, text }) => (
          <NavLink to={path} activeClassName={css.activeLink} key={path} exact>
            {text}
          </NavLink>
        ))}
      </nav>
    </>
  );
}

export default memo(Navbar);
