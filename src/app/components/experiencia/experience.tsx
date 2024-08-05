import Image from "next/image";
import "./experience.scss";

export function Experience() {
  return (
    <section className="experience">
      <div className="title">
        <h1>Experiências</h1>
        <p>Aqui estão alguns lugares onde adquiri conhecimentos práticos!</p>
      </div>
      <div className="grid-exp">
        <div className="grid-item">
          <div className="sonda">
            <div className="exp-item">
              <h2>2021 - 2023</h2>
            </div>
            <Image
              src="/sonda_logo.png"
              alt="Minha foto"
              width={300}
              height={300}
              priority
            />          
            <div className="exp-item">
              <h1>Desenvolvedor SW 3-Full Stack</h1>
              <a href="https://www.sonda.com/pt" target="_blank">@SONDA</a>              
            </div>
          </div>
        </div>
        <div className="grid-item">            
          <div className="arca">
            <div className="exp-item">
              <h2>2024 - 2024</h2>
            </div>
              <Image
                src="/arca.png"
                alt="Minha foto"
                width={300}
                height={300}
                priority
              />
            <div className="exp-item">
              <h1>Desenvolvedor Voluntário</h1>
              <a href="https://arcanimal.com.br/" target="_blank">@ARCANIMAL</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

}