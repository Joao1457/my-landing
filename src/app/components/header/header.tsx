import { GitIcon } from "../icons/git-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { EmailIcon } from "../icons/email-icon";

import "./header.scss";

export function Header() {
  return (
    <nav className="header">
      <div className="logo-socials">        
        <img src="logo.png" className="logo" alt="logo" />        
      </div>
      <div className="socials">             
        <ul className="nav-list">
          <li><a href="">Experiências</a></li>
          <li><a href="">Conhecimentos</a></li>
          <li><a href="">Contato</a></li>         
        </ul>
        <a href="https://www.linkedin.com/in/joao-paulo-marques-da-silva-b7656418b/" target="_blank"><LinkedinIcon /></a>
        <a href="https://github.com/Joao1457" target="_blank"><GitIcon /></a>
        <a href="mailto:joaopaulo.marques99@gmail.com" target="_blank"><EmailIcon /></a>   
      </div>
    </nav>
  );
}
