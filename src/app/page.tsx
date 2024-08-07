// Importações de componentes da pagina, como as imagens e as seções
import Image from "next/image";
import { Header } from "./components/header/header";
import { Experience } from "./components/experiencia/experience";
import { Skill } from "./components/skills/skill";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import ScrollToTopButton from "./components/utils/scrollToTopBtn";


import "./styles/home.scss"

export default function Home() {
  return (
    // Aqui chamei a estrutura HTML para ficar mais facil de organizar os componentes em cada parte do corpo da pagina
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Landing</title>
      </head>
      <body>
        <main className="container">
          {/* Header da landing sendo renderizado */}
          <Header />
          {/* criei a home aqui para auxiliar na estruturação e me ajudar a organizar os outros components           */}
          <section className="home" id="home">
            <div className="card-home">
              {/* aqui optei por separar em divs cada elemento do card, para ficar facil de trabalhar com cada um */}
              <div className="card-header">
                <Image
                  src="/eu.jpg"
                  alt="Minha foto"
                  width={300}
                  height={300}
                  priority
                />
              </div>
              <div className="card-content">
                <h1>Olá, Eu sou o João Paulo! 👋</h1>
                <h3>Desenvolvedor de Software </h3>
              </div>
              <div className="card-footer">
                <p>
                  Meu nome é João Paulo Marques da Silva. Tenho 25 anos e sou
                  profissional da área de Análise e Desenvolvimento de Sistemas,
                  com foco em desenvolvimento web. Durante minha experiência,
                  aperfeiçoei entendimento nas seguintes tecnologias: PHP, JAVA,
                  HTML5, CSS, Javascript, TypeScript, SCSS, React JS, Git,
                  GitHub, SQL, MySQL, Microsoft SQL Server, Laravel 8,
                  Bootstrap, Docker, HTTP e conhecimentos em metodologias ágeis
                  (Kanban e SCRUM).
                </p>
              </div>
            </div>
          </section>
          {/* Renderizando outros componentes da página */}
          <ScrollToTopButton />
          <Experience />
          <Skill />
          <Contact />
        </main>
        <Footer />
      </body>
    </html>
  );
}
