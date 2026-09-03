import "./Hero.css";
import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";

function Hero({ title, text, buttonText, buttonHref, img }) {
  return (
    <section className="hero" id="inicio">
      <Container>
        <div className="hero__content">
          <div className="hero__left">
            <h1 className="hero__title">{title}</h1>
            <p className="hero__text">{text}</p>
          </div>

          <div className="hero__image-container">
            {img}
          </div>

          <div className="hero__cta">
            <Button as="a" href={buttonHref}>
              {buttonText}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
