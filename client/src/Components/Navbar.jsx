import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiChevronsLeft,
  FiAlignJustify,
  FiLinkedin,
  FiGithub,
  FiGitlab,
} from "react-icons/fi";
import navlinks from "../Config/navlinks";
import css from "../Styles/App.module.scss";
import cs from "classnames";
import { useUserContext } from "../Context/UserContext";
import SocialLink from "./SocialLink";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const toggleNav = () => setOpen((c) => !c);
  const { deleteSession, user } = useUserContext();

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
        {user._id && (
          <NavLink to="/" onClick={deleteSession}>
            Salir
          </NavLink>
        )}

        <div className={css.socials}>
          <SocialLink
            href="https://github.com/Rodrizio343"
            text={<FiGithub />}
            title="Mi perfil de github"
          />
          <SocialLink
            href="https://gitlab.com/Rodrizio"
            text={<FiGitlab />}
            title="Mi perfil de gitlab"
          />
          <SocialLink
            href="https://www.linkedin.com/in/rodrigo-ezequiel-mart%C3%ADnez-2a7212223/"
            text={<FiLinkedin />}
            title="Mi perfil de linkedin"
          />
        </div>
      </nav>
    </>
  );
}

export default memo(Navbar);
