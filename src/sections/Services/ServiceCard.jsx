import "./ServiceCard.css";

function ServiceCard({
  title,
  description,
}) {
  return (
    <article className="service-card">

      <h3 className="service-card__title">
        {title}
      </h3>

      <p className="service-card__description">
        {description}
      </p>

    </article>
  );
}

export default ServiceCard;