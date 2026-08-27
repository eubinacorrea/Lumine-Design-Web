import { useEffect, useState } from "react";

import "./Navbar.css";

import Logo from "../Logo/Logo";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 80);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <nav
        className={`navbar ${
          isScrolled ? "navbar--scrolled" : ""
        }`}
      >
        <a href="#inicio" aria-label="Ir para o início">
          <Logo variant="light" width={170} />
        </a>

        <div className="navbar__links">
          <a href="#servicos">Serviços</a>
          <a href="#processo">Processo</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </div>

        <button
          className="navbar__menu"
          type="button"
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
        >
          ☰
        </button>
      </nav>

      {isMenuOpen && (
        <div className="menu-overlay">
          <button
            className="menu-overlay__close"
            type="button"
            aria-label="Fechar menu"
            onClick={closeMenu}
          >
            ×
          </button>

          <nav className="menu-overlay__links">
            <a href="#servicos" onClick={closeMenu}>
              Serviços
            </a>

            <a href="#processo" onClick={closeMenu}>
              Processo
            </a>

            <a href="#sobre" onClick={closeMenu}>
              Sobre
            </a>

            <a href="#contato" onClick={closeMenu}>
              Contato
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

export default Navbar;