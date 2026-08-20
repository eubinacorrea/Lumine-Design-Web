import "./Problem.css";


import Container from "../../components/Container";

function Problem({ text, title, problemText }) {
  return (
    <section className="problem" id="como-ajudamos">
      <Container>
        <div className="problem__content">
          <p className="problem__eyebrow">{text}</p>

          <h2 className="problem__title">{title}</h2> 

          <p className="problem__text">{problemText}</p>
        </div>
      </Container>
    </section>
  );
}

export default Problem;