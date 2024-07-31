import Image from "next/image";
import { Header } from "./components/header/header";

import "./styles/home.scss"


export default function Home() {
  return (
    <main className="container">
      <Header/>   
      <div className="Home">        
        <div>
          <h1>Olá, Eu sou o João Paulo! 👋</h1>
          <h2>Desenvolvedor de Software</h2>
          <Image src="" alt="Minha foto" width={300} height={300} priority />
        </div>
      </div>
    </main>
  );
}
