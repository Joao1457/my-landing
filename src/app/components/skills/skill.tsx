import Image from "next/image";
import "./skill.scss";

export function Skill() {
  return (
    <section className="skill" id="skills">
      <div className="title">
        <h1>Conhecimentos</h1>
        <p>Conheça as tecnologias com as quais tenho experiência!</p>
      </div>
      <div className="technic">
        <div className="technic-item">
          <img src="php.svg" className="technic-img" alt="PHP" />
          <div className="technic-title">
            <h1>PHP</h1>
            <h2>Desenvolvendo aplicações para web.</h2>
          </div>
        </div>
        <div className="technic-item">
          <img src="java.svg" className="technic-img" alt="java" />
          <div className="technic-title">
            <h1>JAVA</h1>
            <h2>Conhecimento Teórico em JAVA.</h2>
          </div>
        </div>
        <div className="technic-item">
          <img src="laravel.svg" className="technic-img" alt="Laravel" />
          <div className="technic-title">
            <h1>Laravel</h1>
            <h2>Desenvolvendo aplicações para web.</h2>
          </div>
        </div>
        <div className="technic-item">
          <img src="typeScript.svg" className="technic-img" alt="Type Script" />
          <div className="technic-title">
            <h1>TypeScript</h1>
            <h2>Desenvolvendo aplicações para web.</h2>
          </div>
        </div>
        <div className="technic-item">
          <img src="docker.svg" className="technic-img" alt="Docker" />
          <div className="technic-title">
            <h1>Docker</h1>
            <h2>Experiência em criar e gerenciar ambientes com Docker.</h2>
          </div>
        </div>
        <div className="technic-item">
          <img src="javaScript.svg" className="technic-img" alt="JavaScript" />
          <div className="technic-title">
            <h1>JavaScript</h1>
            <h2>Desenvolvendo aplicações para web.</h2>
          </div>
        </div>
        <div className="technic-item">
          <img src="react.svg" className="technic-img" alt="React" />
          <div className="technic-title">
            <h1>React</h1>
            <h2>Conhecimento técnico em React e uso em projetos pessoais.</h2>
          </div>
        </div>
        <div className="technic-item">
          <img src="git.svg" className="technic-img" alt="Git" />
          <div className="technic-title">
            <h1>Git</h1>
            <h2>Experiência prática em versionamento de código e colaboração.</h2>
          </div>
        </div>
        <div className="technic-item">
          <img src="github.svg" className="technic-img" alt="GitHub" />
          <div className="technic-title">
            <h1>GitHub</h1>
            <h2>Experiência prática em versionamento de código e colaboração.</h2>
          </div>
        </div>
        <div className="technic-item">
          <img src="gitlab.svg" className="technic-img" alt="GitLab" />
          <div className="technic-title">
            <h1>GitLab</h1>
            <h2>Experiência prática em controle de versão e integração contínua.</h2>
          </div>
        </div>
        <div className="technic-item">
          <img src="postman.svg" className="technic-img" alt="Postman" />
          <div className="technic-title">
            <h1>Postman</h1>
            <h2>Conhecimento técnico em testes e documentação de APIs.</h2>
          </div>
        </div>
        <div className="technic-item">
          <img src="sass.svg" className="technic-img" alt="Sass" />
          <div className="technic-title">
            <h1>Sass</h1>
            <h2>Conhecimento técnico em pré-processamento de CSS, usado em projetos pessoais.</h2>
          </div>
        </div>
        <div className="technic-item">
          <img src="bootstrap.svg" className="technic-img" alt="Bootstrap" />
          <div className="technic-title">
            <h1>Bootstrap</h1>
            <h2>Experiência na criação de layouts responsivos e estilização com Bootstrap.</h2>
          </div>
        </div>
        <div className="technic-item">
          <img src="sql.svg" className="technic-img" alt="SQL" />
          <div className="technic-title">
            <h1>SQL</h1>
            <h2>Experiência prática em MySQL e SQL Server.</h2>
          </div>
        </div>
      </div>
    </section>
  );

}