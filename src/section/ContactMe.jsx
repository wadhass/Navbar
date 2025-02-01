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
      .send(
        "service_123abc",
        "template_456xyz",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "user_789qwertyuiop"
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
    <section
      id="contactme"
      className="relative w-full h-auto sm:h-[100vh] flex flex-col items-center justify-center z-0 text-black"
     
    >
     
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900"></div>

     
      <div className="relative z-10 text-center px-4 sm:px-0">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-300">Contact Me</h2>
        <p className="text-gray-200 mb-6 max-w-lg sm:max-w-xl mx-auto">
          Feel free to reach out to me through the form below or connect via social media.
        </p>

      
        <form
          className="flex flex-col gap-4 bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-lg shadow-lg max-w-md mx-auto w-full sm:max-w-lg"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-md bg-white bg-opacity-50 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-md bg-white bg-opacity-50 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
            placeholder="Your Email"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-3 rounded-md bg-white bg-opacity-50 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-gray-900 border border-gray-500 text-white font-semibold py-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Send Your Message
          </button>
        </form>
        {submissionMessage && (
          <p className="mt-4 text-green-400 font-semibold">{submissionMessage}</p>
        )}
      </div>
    </section>
  );
};

export default ContactMe;




