import Image from "next/image";
import { EmailIcon } from "../icons/email-icon";
import { GitIcon } from "../icons/git-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import "./contact.scss";

export function Contact() {
    return (
      <section className="contact">
        <div className="title">
          <h1>Contato</h1>
        </div>
        <div className="contact-card">
          <div className="contact-header">
            <Image
              src="/eu.jpg"
              alt="Minha foto"
              width={200}
              height={200}
              priority
            />
            <button className="contact-btn">
              <span className="dot"></span>
              Aberto a Oportunidades
            </button>
            <div className="contact-socials">
                <a href="https://www.linkedin.com/in/joao-paulo-marques-da-silva-b7656418b/" target="_blank"><LinkedinIcon /></a>
                <a href="https://github.com/Joao1457" target="_blank"><GitIcon /></a>
                <a href="mailto:joaopaulo.marques99@gmail.com" target="_blank"><EmailIcon /></a>
            </div> 
          </div>
          <div className="contact-body">
            <div className="contact-text">
              <h1>Entre em contato ou diga 👋 olá nas redes sociais!</h1>
              <h2>Se você tem uma oportunidade em mente, precisa de ajuda com um projeto ou tem dúvidas, estou à disposição para conversar e explorar como posso contribuir ❤</h2>
            </div>                      
          </div>
        </div>
      </section>
    ); 
} 