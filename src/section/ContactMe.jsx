import { useState } from "react";
import emailjs from "emailjs-com";
import coding from "../assets/coding.jpeg";

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_1ce59rk",
        "template_ot55r3t",
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: "ahmedhassansumu@gmail.com",
          message: formData.message,
        },
        "JqXTmq6GgW1-tNr48"
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          setFormData({ name: "", email: "", message: "" });
          setSubmissionMessage("Thank you! Your message has been sent.");
        },
        (error) => {
          console.error("Failed to send email:", error);
          setSubmissionMessage("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contactme" className="w-full bg-gray-900 text-white py-12 px-6 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Form Container */}
      <div className="flex-1 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-gray-800 p-6 rounded-lg shadow-lg">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
            placeholder="Your Email"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-3 h-32 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          ></textarea>
          <button type="submit" className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500">
            Send Message
          </button>
        </form>
        {submissionMessage && <p className="mt-4 text-green-400 font-semibold text-center">{submissionMessage}</p>}
      </div>

      {/* Image and Contact Info */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <img src={coding} alt="coding" className="w-64 md:w-80 lg:w-96 object-cover shadow-lg rounded-lg" />
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
          <p className="text-gray-400">I'm available for freelance or full-time positions.</p>
          <p className="text-gray-400 mt-2">Feel free to reach out through the form or connect with me directly:</p>
          <p className="font-bold text-lg mt-3">+250 734 332 198</p>
          <p className="font-bold text-lg">ahmedhassansumu@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;