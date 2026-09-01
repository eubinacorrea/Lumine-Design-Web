import { useId, useState } from "react";
import "./FAQItem.css";

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <article className={`faq-item${isOpen ? " faq-item--open" : ""}`}>
      <h3 className="faq-item__heading">
        <button
          type="button"
          className="faq-item__trigger"
          onClick={toggleOpen}
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="faq-item__question">{question}</span>
          <span className="faq-item__icon" aria-hidden="true">
            {isOpen ? "×" : "+"}
          </span>
        </button>
      </h3>

      <div id={panelId} className="faq-item__panel" role="region">
        <div className="faq-item__panel-inner">
          <p className="faq-item__answer">{answer}</p>
        </div>
      </div>
    </article>
  );
}

export default FAQItem;