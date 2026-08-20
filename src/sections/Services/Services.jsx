import "./Services.css";

import Container from "../../components/Container/Container";

function Services({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section className="services" id="servicos">
      <Container>

        <div className="services__header">
          <p className="services__eyebrow">
            {eyebrow}
          </p>

          <h2 className="services__title">
            {title}
          </h2>

          <p className="services__description">
            {description}
          </p>
        </div>

        <div className="services__grid">
          {children}
        </div>

      </Container>
    </section>
  );
}

export default Services;