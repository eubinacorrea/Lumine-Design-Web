import Hero from "./sections/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Problem from "./sections/Problem/Problem";
import lumineLogo from "./assets/images/conceito2.png";
import ServiceCard from "./sections/Services/ServiceCard";
import Services from "./sections/Services/Services";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero
          title="Sua empresa merece ser encontrada, lembrada e escolhida."
          text="Construímos marcas unindo estratégia, design e tecnologia. Fortalecemos a presença digital e criamos soluções para transformar bons negócios em empresas encontradas, lembradas e escolhidas."
          buttonText="Quero crescer minha empresa"
          img={<img src={lumineLogo} alt="Logo" className="hero__image" />}
        />

        <Problem
          text="O problema"
          title="Muitos negócios são excelentes, mas ninguém os encontra."
          problemText="Uma marca pouco clara, uma presença digital fraca ou a ausência nas buscas podem fazer uma boa empresa parecer menos preparada do que realmente é."
        />
        <Services
  eyebrow="Como podemos ajudar"
  title="Estratégia, design e tecnologia trabalhando juntos."
  description="Criamos soluções para fortalecer marcas, melhorar a presença digital e aproximar empresas de seus clientes."
>
  <ServiceCard
    title="Presença Digital"
    description="Soluções para melhorar a forma como sua empresa aparece e é percebida no ambiente digital."
  />

  <ServiceCard
    title="Marca & Posicionamento"
    description="Estratégia e identidade para comunicar valor com mais clareza, consistência e profissionalismo."
  />

  <ServiceCard
    title="Experiências Web"
    description="Sites e soluções digitais pensados para conectar sua empresa aos clientes de forma simples e eficiente."
  />
</Services>
      </main>
    </>
  );
}

export default App;
