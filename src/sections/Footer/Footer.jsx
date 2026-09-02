import "./Footer.css";

import Container from "../../components/Container/Container";
import Logo from "../../components/Logo/Logo";
import Whatsapp from "../../assets/icons/Whatsapp.png";
import Instagram from "../../assets/icons/Instagram.png";

function Footer({ instagram, whatsapp }) {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__top">
          <Logo variant="light" width={220} />

          <p className="footer__text">
            Design, estratégia e tecnologia para quem quer crescer.
          </p>
          <div className="footer__links">
            <p className="footer_localtion">Atendimento remoto em todo o Brasil.</p>
            <a href={instagram} target="_blank" rel="noreferrer">
              <img
                src={Instagram} alt="Instagram" className="instagram__image" />
            </a>

            <a href={whatsapp} target="_blank" rel="noreferrer">
              <img src={Whatsapp} alt="Whatsapp" className="whatsapp__image" />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
           <p className="footer__copy">© 2026 Lúmine</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
