import Hero from "./sections/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Problem from "./sections/Problem/Problem";
import lumineLogo from "./assets/images/conceito.svg";
import ServiceCard from "./sections/Services/ServiceCard";
import Services from "./sections/Services/Services";
import Process from "./sections/Process/Process";
import ProcessStep from "./sections/Process/ProcessStep";

const services = [
  {
    id: 1,
    title: "Presença Digital",
    description:
      "Soluções para melhorar a forma como sua empresa aparece e é percebida no ambiente digital.",
  },

  {
    id: 2,
    title: "Marca & Posicionamento",
    description:
      "Estratégia e identidade para comunicar valor com mais clareza, consistência e profissionalismo.",
  },

  {
    id: 3,
    title: "Experiências Web",
    description:
      "Sites e soluções digitais pensados para conectar sua empresa aos clientes de forma simples e eficiente.",
  },
];
const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Entendemos",
    description:
      "Conhecemos seu negócio, seu momento e os objetivos que você deseja alcançar.",
  },
  {
    id: 2,
    number: "02",
    title: "Planejamos",
    description:
      "Definimos prioridades, estratégia e o caminho mais adequado para o projeto.",
  },
  {
    id: 3,
    number: "03",
    title: "Criamos",
    description:
      "Transformamos estratégia em design, presença digital e tecnologia.",
  },
  {
    id: 4,
    number: "04",
    title: "Evoluímos",
    description:
      "Acompanhamos o projeto e identificamos oportunidades para os próximos passos.",
  },
];

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
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </Services>

        <Process
          eyebrow="Nosso processo"
          title="Um caminho claro do primeiro contato ao resultado."
          description="Cada projeto é diferente, mas nossa forma de trabalhar mantém estratégia, proximidade e clareza em todas as etapas."
        >
          {processSteps.map((step) => (
            <ProcessStep
              key={step.id}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </Process>
      </main>
    </>
  );
}

export default App;
