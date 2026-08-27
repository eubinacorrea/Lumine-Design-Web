import "./FAQItem.css";

function FAQItem({ question, answer }) {
  return (
    <article className="faq-item">
      <h3 className="faq-item__question">
        {question}
      </h3>

      <p className="faq-item__answer">
        {answer}
      </p>
    </article>
  );
}

export default FAQItem;