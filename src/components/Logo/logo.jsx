import "./Logo.css";

import logoLight from "../../assets/logos/lumine-light.svg";
import logoDark from "../../assets/logos/lumine-dark.svg";

function Logo({
  variant = "light",
  className = "",
}) {
  const logoSource =
    variant === "dark" ? logoDark : logoLight;

  return (
    <img
      src={logoSource}
      alt="Lúmine"
      className={`logo ${className}`}
    />
  );
}

export default Logo;