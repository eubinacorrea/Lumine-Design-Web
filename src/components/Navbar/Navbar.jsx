import "./Navbar.css";
import Container from "../Container";
import Logo from "../Logo/logo";

function Navbar({ Button }) {
  return (
    <nav className="navbar">
      <Container>
        <div className="navbar__inner">
          <Logo variant="light" width={150} />
          <Button
            className="navbar__menu"
            type="button"
            aria-label="Abrir menu"
            > ☰
              </Button>
            
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
