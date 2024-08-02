import Image from "next/image";
import { Header } from "./components/header/header";

import "./styles/home.scss"


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
              <h1>Olá, Eu sou o João Paulo! 👋</h1>
              <h3>Desenvolvedor de Software </h3>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
