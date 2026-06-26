import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setFormMessage(data.message);
      } else {
        setFormMessage(data.message);
      }
    } catch (error) {
      console.error(error);
    }

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="contact__form">
        <label htmlFor="name" className="form__group">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            id="name"
            required
          />
        </label>

        <label htmlFor="phone" className="form__group">
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone number"
            id="phone"
          />
        </label>

        <label htmlFor="email" className="form__group email">
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            id="email"
            required
          />
        </label>

        <label htmlFor="message" className="form__group full">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            placeholder="Tell us about your project"
            id="message"
            required
          ></textarea>
        </label>

        <div className="form__group">
          <button className="submit__button">SEND MESSAGE →</button>
        </div>
      </form>
      {formMessage && <p className="form-submit-message">{formMessage}</p>}
    </>
  );
}

export default ContactForm;
