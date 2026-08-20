import Hero from "./sections/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Problem from "./sections/Problem/Problem";
import lumineLogo from "./assets/images/conceito2.png";


function App() {
  return (
  <>
      <Navbar/>
      
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
    </main>
  </>
  );
} 

export default App;