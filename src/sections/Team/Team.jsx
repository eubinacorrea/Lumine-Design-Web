import "./Team.css";

import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle";


function Team({
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section className="team">
      <Container>
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <div className="team__grid">
          {children}
        </div>
      </Container>
    </section>
  );
}

export default Team;