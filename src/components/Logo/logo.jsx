import "./Logo.css";

import logoLight from "../../assets/logos/lumine-light.svg";
import logoDark from "../../assets/logos/lumine-dark.svg";

function Logo({

variant="light",

width=220,

className=""

}) {
  const logoSource =
    variant === "dark" ? logoDark : logoLight;

  return (
    <img
      src={logoSource}
      alt="Lúmine"
      width={width}
      className={`logo ${className}`}
    />
  );
}

export default Logo;