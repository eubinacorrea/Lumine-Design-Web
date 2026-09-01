import Hero from "./sections/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Problem from "./sections/Problem/Problem";
import lumineLogo from "./assets/images/conceito.svg";
import ServiceCard from "./sections/Services/ServiceCard";
import Services from "./sections/Services/Services";
import Process from "./sections/Process/Process";
import ProcessStep from "./sections/Process/ProcessStep";
import About from "./sections/About/About";
import Team from "./sections/Team/Team";
import TeamMember from "./sections/Team/TeamMember";
import FAQ from "./sections/FAQ/FAQ";
import FAQItem from "./sections/FAQ/FAQItem";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Sabrina from "./assets/images/Sabrina.png"
import Raoni from "./assets/images/Raoni.png"
import ContactForm from "./sections/Contact/ContactForm";


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
const faqItems = [
  {
    id: 1,
    question: "Vocês atendem clientes em todo o Brasil?",
    answer:
      "Sim. Nosso atendimento é remoto e podemos desenvolver projetos para empresas de diferentes regiões do país.",
  },
  {
    id: 2,
    question: "Posso contratar apenas um serviço?",
    answer:
      "Sim. Cada projeto é avaliado de acordo com a necessidade e o momento do negócio.",
  },
  {
    id: 3,
    question: "Como funciona o orçamento?",
    answer:
      "Primeiro entendemos o que sua empresa precisa. Depois definimos escopo, prioridades e apresentamos uma proposta adequada ao projeto.",
  },
  {
    id: 4,
    question: "Os projetos são personalizados?",
    answer:
      "Sim. A proposta da Lúmine é desenvolver soluções adequadas à realidade, aos objetivos e à identidade de cada cliente.",
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
        <About
  eyebrow="Sobre a Lúmine"
  title="Estratégia e execução no mesmo lugar."
  description="A Lúmine nasceu da união entre design e desenvolvimento para ajudar empresas a construir uma presença mais clara, profissional e preparada para crescer."
  text="Unimos visão de marca, comunicação e tecnologia para desenvolver soluções pensadas de acordo com a realidade de cada negócio."
  highlight="Do autônomo ao empresário, acreditamos que todo bom negócio merece a oportunidade de ser encontrado, reconhecido e escolhido."
/>

<Team
  eyebrow="Quem faz acontecer"
  title="Duas especialidades. Uma mesma direção."
  description="Design e tecnologia trabalhando juntos desde o início de cada projeto."
>
  <TeamMember
    image={<img src={Raoni} alt="Raoni" className="team-member__image" />}
    name="Raoni Roehe"
    role="Design & Branding"
    description="Responsável pela direção visual, identidade e construção das soluções de marca da Lúmine."
  />

  <TeamMember
    image={<img src={Sabrina} alt="Sabrina" className="team-member__image" />}
    name="Sabrina"
    role="Desenvolvimento Web"
    description="Responsável por transformar estratégia e design em experiências digitais funcionais, responsivas e orientadas ao negócio."
  />
</Team>
<FAQ
  eyebrow="Perguntas frequentes"
  title="Algumas respostas antes de começarmos."
  description="Se ainda restar alguma dúvida, fale diretamente com a gente."
>
  {faqItems.map((item) => (
    <FAQItem
      key={item.id}
      question={item.question}
      answer={item.answer}
    />
  ))}
</FAQ>
<Contact
  title="Seu negócio pode ser o nosso próximo projeto."
  description="Conte para a gente onde sua empresa está hoje e onde você quer chegar."
  whatsapp="https://wa.me/5547997417709"
  instagram="https://instagram.com/luminedesigncode"
  
  
/>

<Footer
  instagram="https://instagram.com/luminedesigncode"
  whatsapp="https://wa.me/5547997417709"
/>
      </main>
    </>
  );
}

export default App;
