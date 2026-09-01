import "./SectionTitle.css";

function SectionTitle({
  eyebrow,
  title,
  description,
  variant = "dark",
}) {
  return (
    <div className={`section-title section-title--${variant}`}>
      <p className="section-title__eyebrow">
        {eyebrow}
      </p>

      <h2 className="section-title__heading">
        {title}
      </h2>

      <p className="section-title__description">
        {description}
      </p>
    </div>
  );
}

export default SectionTitle;