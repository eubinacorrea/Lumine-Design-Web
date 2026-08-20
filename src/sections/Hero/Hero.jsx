import "./Hero.css";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";


function Hero({ title, text, buttonText, img }) {
  return (
    <section className="hero">
      <Container>
        <div className="hero__content">
          
          <div className="hero__left">
            <h1 className="hero__title">{title}</h1>
            <p className="hero__text">{text}</p>

            <Button variant="primary" size="large">{buttonText}</Button>
          </div>

          {/* COLUNA DA DIREITA: A imagem */}
          <div className="hero__image-container">
            {img}
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;