import Image from "next/image";
import { Header } from "./components/header/header";
import { Experience } from "./components/experiencia/experience";

import "./styles/home.scss"
import { Skill } from "./components/skills/skill";



export default function Home() {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Landing</title>
      </head>
      <body>
        <Header />
        <main className="container">
          <section className="home">
            <div className="card-home">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                    non sagittis turpis. Nunc suscipit aliquam quam, et accumsan
                    velit vulputate maximus. Ut consectetur luctus felis in
                    accumsan. Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Proin porttitor pharetra diam,
                    in dignissim erat tempor eu. Sed lectus turpis, auctor nec purus
                    a, rhoncus mattis mauris. Curabitur eu iaculis augue. Fusce
                    posuere erat sed massa dictum consequat. Quisque at tellus non
                    magna dictum mollis. Nulla scelerisque interdum commodo. In
                    varius leo pulvinar lectus convallis lobortis. Praesent porta
                    luctus dapibus. Sed maximus, orci nec finibus elementum, quam
                    augue malesuada urna, pellentesque elementum eros tortor id
                    nunc. Morbi non mollis magna. Nulla ultrices risus at magna
                    placerat posuere. Aliquam a ante sed tellus porttitor volutpat
                    eget id dolor. Nam vestibulum magna risus, non cursus magna
                    accumsan vitae. Donec sagittis, nibh eu lobortis suscipit, est
                    lacus mollis lacus, a imperdiet velit mauris at ex. Mauris
                    pulvinar nulla elementum lectus condimentum convallis. Aliquam
                    vehicula, enim quis convallis convallis, turpis enim condimentum
                    mi, eu lacinia erat neque ut tortor. Vivamus sed posuere magna,
                    id ultricies diam. Quisque bibendum viverra massa, nec ultrices
                    quam condimentum mattis. Proin bibendum quis purus nec tempus.
                  </p>
              </div>             
            </div>
          </section>
          <Experience/>
          <Skill/>
        </main>
      </body>
    </html>
  );
}
