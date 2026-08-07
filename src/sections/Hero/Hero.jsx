import "./Hero.css";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";

function Hero({ title, description, buttonText, image }) {
  return (
    <section className="hero">
      <Container>
        <div className="hero__content">
          
          {/* COLUNA DA ESQUERDA: Agrupamos os textos e o botão aqui dentro */}
          <div className="hero__left">
            <h1 className="hero__title">{title}</h1>
            <p className="hero__text">{description}</p>
            <Button variant="primary" size="large">
              {buttonText}
            </Button>
          </div>

          {/* COLUNA DA DIREITA: A imagem */}
          <div className="hero__image-container">
            <img src={image} alt={title} className="hero__image" />
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;