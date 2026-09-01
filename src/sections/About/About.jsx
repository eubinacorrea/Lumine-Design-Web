import "./About.css";

import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle";

function About({
  eyebrow,
  title,
  description,
  text,
  highlight,
}) {
  return (
    <section className="about" id="sobre">
      <Container>
        <SectionTitle
  variant="light"
  eyebrow={eyebrow}
  title={title}
  description={description}
/>

        <div className="about__content">
          <p className="about__text">
            {text}
          </p>

          <p className="about__highlight">
            {highlight}
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;