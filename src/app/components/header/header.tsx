import { GitIcon } from "../icons/git-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { EmailIcon } from "../icons/email-icon";

import "./header.scss";

export function Header() {
  return (
    <nav className="header">
      <div className="logo-socials">
        <a className="logo" href="/">
          JP
        </a>
      </div>
      <div className="socials">             
        <ul className="nav-list">
          <li><a href="">link 1</a></li>
          <li><a href="">link 2</a></li>
          <li><a href="">link 2</a></li>
          <li><a href="">link 2</a></li>
          <li><a href="">link 2</a></li>
        </ul>
        <a href="https://www.linkedin.com/in/joao-paulo-marques-da-silva-b7656418b/"><LinkedinIcon /></a>
        <a href="https://github.com/Joao1457"><GitIcon /></a>
        <a href="mailto:joaopaulo.marques99@gmail.com"><EmailIcon /></a>   
      </div>
    </nav>
  );
}
