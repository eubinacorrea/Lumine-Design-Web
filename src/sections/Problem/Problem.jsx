import "./Problem.css";


import Container from "../../components/Container";

function Problem({ text, title, problemText, media }) {
  return (
    <section className="problem" id="como-ajudamos">
      <Container>
        <div className="problem__content">
          <p className="problem__eyebrow">{text}</p>

          <div className="problem__copy">
            <h2 className="problem__title">{title}</h2>
            <p className="problem__text">{problemText}</p>
          </div>

          <div className="problem__media">{media}</div>
        </div>
      </Container>
    </section>
  );
}

export default Problem;
