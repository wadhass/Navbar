import { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id", 
        e.target, 
        "your_user_id"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setFormData({ name: "", email: "", message: "" });
          setSubmissionMessage("Thank you! Your message has been sent.");
        },
        (error) => {
          console.log("Error sending email:", error.text);
          setSubmissionMessage("Oops! Something went wrong, please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="p-8 bg-gray-100 rounded-lg shadow-lg max-w-2xl mx-auto text-center z-0"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Me</h2>
      <p className="text-gray-600 mb-6">
        Feel free to reach out to me through the form below or connect via social media.
      </p>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
          rows="5"
          required
        ></textarea>
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
      {submissionMessage && (
        <p className="mt-4 text-green-600 font-semibold">{submissionMessage}</p>
      )}
    </section>
  );
};

export default ContactMe;
