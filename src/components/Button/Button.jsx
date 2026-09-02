import "./Button.css";

function Button({
  children,
  as: Component = "button",
  className = "",
  ...props
}) {
  return (
    <Component
      className={`button ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;