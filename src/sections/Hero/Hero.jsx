import "./Hero.css";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import lumineLogo from "../../assets/images/lumine-positivo.svg";

function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero__content">
          
          <div className="hero__left">
            <h1 className="hero__title">Sua empresa merece ser encontrada, lembrada e escolhida.
</h1>
            <p className="hero__text">Construímos marcas unindo estratégia, design e tecnologia. Fortalecemos a presença digital e criamos soluções para transformar bons negócios em empresas encontradas, lembradas e escolhidas.</p>

            <Button variant="primary" size="large">
              Quero crescer minha empresa
            </Button>
          </div>

          {/* COLUNA DA DIREITA: A imagem */}
          <div className="hero__image-container">
            <img src={lumineLogo} alt="Logo" className="hero__image" />
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;