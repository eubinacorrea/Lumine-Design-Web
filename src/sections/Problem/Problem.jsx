import "./Problem.css";


import Container from "../../components/Container";

function Problem() {
  return (
    <section className="problem" id="como-ajudamos">
      <Container>
        <div className="problem__content">
          <p className="problem__eyebrow">O problema</p>

          <h2 className="problem__title">
            Muitos negócios são excelentes, mas ninguém os encontra.
          </h2>

          <p className="problem__text">
           Uma marca pouco clara, uma presença digital fraca ou a ausência nas buscas podem fazer uma boa empresa parecer menos preparada do que realmente é..
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Problem;