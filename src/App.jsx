import Hero from "./sections/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Problem from "./sections/Problem/Problem";
import VideoPlaceholder from "./components/VideoPlaceholder/VideoPlaceholder";
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
import Sabrina from "./assets/images/Sabrina.png";
import Raoni from "./assets/images/Raoni.png";




const services = [
  {
    id: 1,
    title: "Presença Digital",
    description:
      "Organizamos os canais e pontos de contato para sua empresa ser encontrada e transmitir confiança.",
  },

  {
    id: 2,
    title: "Marca e Posicionamento",
    description:
      "Criamos uma identidade clara e coerente, que mostra quem sua empresa é e o valor que entrega.",
  },

  {
    id: 3,
    title: "Experiências Web",
    description:
      "Desenvolvemos sites simples de usar, bem apresentados e alinhados aos objetivos do negócio.",
  },
];
const processSteps = [
  {
    id: 1,
    number: "01",
    title: "Entendemos",
    description:
      "Conversamos sobre seu negócio, suas necessidades e o que você deseja alcançar.",
  },
  {
    id: 2,
    number: "02",
    title: "Planejamos",
    description:
      "Organizamos as prioridades e definimos o melhor caminho para o projeto.",
  },
  {
    id: 3,
    number: "03",
    title: "Criamos",
    description:
      "Transformamos o planejamento em soluções claras, funcionais e bem apresentadas.",
  },
  {
    id: 4,
    number: "04",
    title: "Aprimoramos",
    description:
      "Avaliamos o resultado e identificamos o que pode ser ajustado ou desenvolvido a seguir.",
  },
];
const faqItems = [
  {
    id: 1,
    question: "Vocês atendem clientes em todo o Brasil?",
    answer:
      "Sim. Nosso atendimento pode ser feito online e desenvolvemos projetos para empresas de diferentes regiões do país.",
  },
  {
    id: 2,
    question: "Posso contratar somente um serviço?",
    answer:
      "Sim. Primeiro entendemos sua necessidade e depois indicamos o formato mais adequado para o momento da empresa.",
  },
  {
    id: 3,
    question: "Como funciona o orçamento?",
    answer:
      "Começamos com uma conversa para entender o que você precisa. Depois organizamos o projeto e apresentamos uma proposta com etapas, prazos e valores.",
  },
  {
    id: 4,
    question: "Os projetos são personalizados?",
    answer:
      "Sim. Cada solução é pensada de acordo com a realidade, os objetivos e a identidade de cada empresa.",
  },
];

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero
          title="O valor do seu negócio precisa ser visto."
          text="A Lúmine organiza sua marca, sua comunicação e sua presença digital para que mais pessoas entendam o que sua empresa oferece e por que escolhê-la."
          buttonText="Vamos iluminar esse caminho"
          buttonHref="#contato"
          visual={
            <VideoPlaceholder
              variant="portrait"
              label="A luz encontra o negócio"
              description="Movimento principal da Hero: presença, descoberta e transformação."
            />
          }
        />

        <Problem
          text="O que pode estar acontecendo"
          title="Quando falta clareza, boas empresas passam despercebidas."
          problemText="Se a marca não mostra o que torna o negócio diferente, as pessoas podem não entender seu valor — mesmo quando o produto ou serviço é excelente."
          media={
            <VideoPlaceholder
              label="O valor que ainda não aparece"
              description="Vídeo de reconhecimento do problema: algo bom que permanece fora do campo de visão."
            />
          }
        />
        <Services
          eyebrow="Como ajudamos"
          title="Tornamos mais claro o que sua empresa tem de melhor."
          description="Da marca ao site, organizamos cada ponto de contato para que seu negócio seja compreendido, encontrado e lembrado."
          concept="Clareza para comunicar. Presença para ser encontrado. Experiência para aproximar."
          media={
            <VideoPlaceholder
              label="Da clareza à evolução"
              description="Vídeo de solução: a luz ganha direção, revela caminhos e cria movimento."
            />
          }
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
          eyebrow="Como trabalhamos"
          title="Um processo simples, feito em conjunto."
          description="Você acompanha cada etapa e entende o que está sendo feito, por que e qual será o próximo passo."
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
  title="Design e tecnologia com o mesmo objetivo: ajudar seu negócio."
  description="A Lúmine nasceu da parceria entre duas áreas que funcionam melhor quando trabalham juntas."
  text="Pensamos na marca, na comunicação e na experiência, mas também em como cada solução funcionará no dia a dia."
  highlight="Assim, cada projeto fica mais claro, coerente e adequado à realidade da empresa."
/>

<Team
  eyebrow="Quem está por trás"
  title="Duas especialidades, trabalhando lado a lado."
  description="Raoni e Sabrina acompanham cada projeto de perto, do planejamento à entrega."
>
  <TeamMember
    image={<img src={Raoni} alt="Raoni" className="team-member__image" />}
    name="Raoni Roehe"
    role="Design e Branding"
    description="Cuida da estratégia de marca, da identidade visual e da direção criativa dos projetos."
  />

  <TeamMember
    image={<img src={Sabrina} alt="Sabrina" className="team-member__image" />}
    name="Sabrina"
    role="Desenvolvimento Web"
    description="Cuida do desenvolvimento e transforma as decisões do projeto em experiências digitais que funcionam bem em diferentes telas."
  />
</Team>
<FAQ
  eyebrow="Perguntas frequentes"
  title="Algumas respostas para ajudar você a começar."
  description="Se a sua dúvida não estiver aqui, entre em contato conosco."
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
  title="Vamos entender o que seu negócio precisa?"
  description="Conte onde sua empresa está hoje e o que você gostaria de melhorar. Nós ajudamos a organizar os próximos passos."
  relogio="Atendimento das 07:00 às 18:30 de segunda-feira a sexta-feira, das 09:00 às 14:00 aos sábados e fechado aos domingos."
  whatsapp="https://wa.me/5547997417709" 
  instagram="https://instagram.com/luminedesigncode"
  email="contato@lumine.art.br"
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
