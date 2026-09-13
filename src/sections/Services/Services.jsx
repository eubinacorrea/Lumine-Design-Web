import "./Services.css";

import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle";

function Services({
  eyebrow,
  title,
  description,
  concept,
  media,
  children,
}) {
  return (
    <section className="services" id="servicos">
      <Container>
        <SectionTitle
          variant="light"
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="services__story">
          <p className="services__concept">{concept}</p>
          <div className="services__media">{media}</div>
        </div>

        <div className="services__grid">
          {children}
        </div>
      </Container>
    </section>
  );
}

export default Services;
