import "./Team.css";

import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle";


function Team({
  eyebrow,
  title,
  description,
  children,
  part = "all",
}) {
  const showIntro = part !== "list";
  const showList = part !== "intro";

  return (
    <section
      className={`team team--${part}`}
      id={showIntro ? "equipe" : undefined}
    >
      <Container>
        {showIntro && (
          <SectionTitle
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        )}

        {showList && <div className="team__grid">{children}</div>}
      </Container>
    </section>
  );
}

export default Team;
