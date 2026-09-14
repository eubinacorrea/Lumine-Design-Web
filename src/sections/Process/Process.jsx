import "./Process.css";

import Container from "../../components/Container/Container";
import SectionTitle from "../../components/SectionTitle";

function Process({
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
      className={`process process--${part}`}
      id={showIntro ? "processo" : undefined}
    >
      <Container>
        {showIntro && (
          <SectionTitle
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        )}

        {showList && <div className="process__grid">{children}</div>}
      </Container>
    </section>
  );
}

export default Process;
