import "./ProcessStep.css";

function ProcessStep({ number, title, description }) {
  return (
    <div className="process-step">
      <span className="process-step__number">{number}</span>
      <h3 className="process-step__title">{title}</h3>
      <p className="process-step__description">{description}</p>
    </div>
  );
}

export default ProcessStep;