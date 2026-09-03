import "./Contact.css";

import Container from "../../components/Container/Container";
import Button from "../../components/Button/Button";
import Instagram from "../../assets/icons/Instagram.png";
import Whatsapp from "../../assets/icons/Whatsapp.png";
import Envelope from "../../assets/icons/envelope.png";
import Relogio from "../../assets/icons/relogio.png";
import ContactForm from "./ContactForm";

function Contact({
  title,
  description,
  whatsapp,
  instagram,
  email,
  relogio
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
              <img src={Whatsapp} alt="" className="whatsapp__image" />
              +55 47 99741-7709
            </Button>

            <Button
              as="a"
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="contact__cta"
            >
              <img src={Instagram} alt="" className="instagram__image" />
              @luminedesigncode
            </Button>

            <Button as="a" href={`mailto:${email}`} className="contact__cta">
              <img src={Envelope} alt="" className="email__image" />
              contato@lumine.art.br
            </Button>

            <div className="atendimento">
              <img src={Relogio} alt="" className="relogio__image" />
              {relogio}
            </div>
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
