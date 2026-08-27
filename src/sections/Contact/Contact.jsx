import "./Contact.css";

import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";

function Contact({
  title,
  description,
  whatsapp,
  instagram,
}) {
  return (
    <section className="contact" id="contato">
      <Container>
        <div className="contact__content">

          <div>
            <p className="contact__eyebrow">
              Vamos conversar?
            </p>

            <h2 className="contact__title">
              {title}
            </h2>

            <p className="contact__description">
              {description}
            </p>
          </div>

          <div className="contact__actions">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                Falar no WhatsApp
              </Button>
            </a>

            <a
              className="contact__instagram"
              href={instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default Contact;