import { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
  function handleScroll() {
    if (window.scrollY > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <nav className="navbar">
      <Logo variant="light" width={170} />

      {!isScrolled ? (
  <div className="navbar__links">
    <a href="#servicos">Serviços</a>
    <a href="#processo">Processo</a>
    <a href="#sobre">Sobre</a>
    <a href="#contato">Contato</a>
  </div>
) : (
  <button
    className="navbar__menu"
    type="button"
    aria-label="Abrir menu"
  >
    ☰
  </button>
)}
    </nav>
  );
}

export default Navbar;