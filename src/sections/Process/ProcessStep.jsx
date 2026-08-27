import "./Process.css";

import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle";

function Process({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section className="process" id="processo">
      <Container>

        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="process__grid">
          {children}
        </div>

      </Container>
    </section>
  );
}

export default Process;