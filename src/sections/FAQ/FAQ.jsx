import "./FAQ.css";

import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle";

function FAQ({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section className="faq" id="faq">
      <Container>
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="faq__list">
          {children}
        </div>
      </Container>
    </section>
  );
}

export default FAQ;