import "./Footer.css";

import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";

function Footer({
  instagram,
  whatsapp,
}) {
  return (
    <footer className="footer">
      <Container>

        <div className="footer__top">
          <Logo
            variant="light"
            width={220}
          />

          <p>
            Design, estratégia e tecnologia para negócios que querem crescer.
          </p>
        </div>

        <div className="footer__bottom">
          <div className="footer__links">
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <p>
            Atendimento remoto em todo o Brasil.
          </p>

          <p>
            © 2026 Lúmine
          </p>
        </div>

      </Container>
    </footer>
  );
}

export default Footer;