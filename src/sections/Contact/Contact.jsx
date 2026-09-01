import "./Contact.css";

import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import ContactForm from "./ContactForm";

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
            <Button
              as="a"
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="contact__cta"
            >
              Falar no WhatsApp
            </Button>

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

        <div className="contact__form-section">
          <p className="contact__form-eyebrow">
            Ou escreva pra gente
          </p>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

export default Contact;