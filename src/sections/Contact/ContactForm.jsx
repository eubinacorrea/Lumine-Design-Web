import { useState } from "react";
import "./ContactForm.css";

// Chave gratuita gerada em https://web3forms.com (login com o e-mail da Lúmine).
// Trocar pelo valor real antes de publicar.
const WEB3FORMS_ACCESS_KEY = "SUA_ACCESS_KEY_AQUI";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Novo contato pelo site da Lúmine",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
  console.error("Erro ao enviar formulário de contato:", error);
  setStatus("error");
}
  }

  if (status === "success") {
    return (
      <p className="contact-form__success">
        Mensagem enviada! A gente responde em breve.
      </p>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__field">
        <label htmlFor="cf-name">Nome</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="cf-email">E-mail</label>
        <input
          id="cf-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="contact-form__field">
        <label htmlFor="cf-message">Mensagem</label>
        <textarea
          id="cf-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="contact-form__submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Enviando..." : "Enviar mensagem"}
      </button>

      {status === "error" && (
        <p className="contact-form__error">
          Não deu pra enviar agora. Tenta de novo ou fala direto no WhatsApp.
        </p>
      )}
    </form>
  );
}

export default ContactForm;