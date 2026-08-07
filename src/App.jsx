import Hero from "./sections/Hero/Hero";
import Button from "./components/Button/Button";
import Navbar from "./components/Navbar/Navbar";
import lumineLogo from "./assets/images/lumine-positivo.svg";


function App() {
  return (
    <div className="App">
      <Navbar Button={Button} />

      <Hero
        title="Sua empresa merece ser encontrada, lembrada e escolhida."
        description="Construímos marcas unindo estratégia, design e tecnologia. Fortalecemos a presença digital e criamos soluções para transformar bons negócios em empresas encontradas, lembradas e escolhidas."
        buttonText="Quero crescer minha empresa"
        image={lumineLogo}
      />
    </div>
  );
}

export default App;