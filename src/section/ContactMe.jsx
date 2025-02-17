// import { useState } from "react";
// import emailjs from "emailjs-com";
// import coding from "../assets/coding.jpeg";

// const ContactMe = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [submissionMessage, setSubmissionMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_1ce59rk",
//         "template_ot55r3t",
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           message: formData.message,
//         },
//          "JqXTmq6GgW1-tNr48"
//       )
//       .then(
//         (response) => {
//           console.log("Email sent successfully:", response);
//           setFormData({ name: "", email: "", message: "" });
//           setSubmissionMessage("Thank you! Your message has been sent.");
//         },
//         (error) => {
//           console.error("Failed to send email:", error);
//           setSubmissionMessage("Oops! Something went wrong. Please try again.");
//         }
//       );
//   };

//   return (
//     <section
//       id="contactme"
//       className="relative bg-gray-900 w-full h-auto sm:h-[100vh] flex flex-col sm:flex-row items-center justify-center text-black p-6"
//     >
//       {/* Form Container */}
//       <div className="flex-1 flex flex-col items-start text-left px-4 sm:px-12">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-300 ml-11">Contact Me</h2>
        
//         <form
//           className="flex flex-col gap-4 bg-gray-900 border border-gray-500 
//            ml-11 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full max-w-lg"
//           onSubmit={handleSubmit}
//         >
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="p-3 p rounded-md bg-gray-900 text-gray-300 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
//             required
//             placeholder="Your Name"
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="p-3 px-4 rounded-md bg-gray-900 text-gray-300 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
//             required
//             placeholder="Your Email"
//           />
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             className="py-5 px-4 mb-4 rounded-md bg-gray-900 text-gray-300 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
//             required
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-gray-900 border border-gray-500 text-white font-semibold py-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
//           >
//             Send Your Message
//           </button>
//         </form>
//         {submissionMessage && (
//           <p className="mt-4 text-green-400 font-semibold">{submissionMessage}</p>
//         )}
//       </div>

  
//       <div className="flex-1 flex flex-col justify-center items-center mt-6 sm:mt-0">
//         <img
//           src={coding}
//           alt="coding"
//           className="w-[300px] sm:w-[400px] md:w-[500px] object-cover mt-32 shadow-lg rounded-lg"
//         />
//         <div className="text-center mt-4 text-gray-300">
//           <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
//           <p>I'm available for freelance or full-time positions.</p>
//           <p className="text-gray-200 mb-6 max-w-lg ml-11">
//           Feel free to reach out to me through the form below or connect via social media.
//         </p>

//           <p>Contact me and let's talk.</p>
//           <p className="font-bold">+250734332198</p>
//           <p className="font-bold">ahmedhassansumu@gmail.com</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactMe;




import { useState } from "react";
import emailjs from "emailjs-com";
import coding from "../assets/coding.jpeg";

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
        "service_1ce59rk", // Your EmailJS service ID
        "template_ot55r3t", // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: "ahmedhassansumu@gmail.com", // Your email
          message: formData.message,
        },
        "JqXTmq6GgW1-tNr48" // Your EmailJS public key
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
      className="relative bg-gray-900 w-full h-auto sm:h-[100vh] flex flex-col sm:flex-row items-center justify-center text-black p-6"
    >
      {/* Form Container */}
      <div className="flex-1 flex flex-col items-start text-left px-4 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-300 ml-11">Contact Me</h2>
        
        <form
          className="flex flex-col gap-4 bg-gray-900 border border-gray-500 
           ml-11 backdrop-blur-lg p-6 rounded-lg shadow-lg w-full max-w-lg"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 p rounded-md bg-gray-900 text-gray-300 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 px-4 rounded-md bg-gray-900 text-gray-300 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
            placeholder="Your Email"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="py-5 px-4 mb-4 rounded-md bg-gray-900 text-gray-300 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-gray-900 border border-gray-500 text-white font-semibold py-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Send Your Message
          </button>
        </form>
        {submissionMessage && (
          <p className="mt-4 text-green-400 font-semibold">{submissionMessage}</p>
        )}
      </div>

      {/* Image and Contact Info */}
      <div className="flex-1 flex flex-col justify-center items-center mt-6 sm:mt-0">
        <img
          src={coding}
          alt="coding"
          className="w-[300px] sm:w-[400px] md:w-[500px] object-cover mt-32 shadow-lg rounded-lg"
        />
        <div className="text-center mt-4 text-gray-300">
          <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
          <p>I'm available for freelance or full-time positions.</p>
          <p className="text-gray-200 mb-6 max-w-lg ml-11">
            Feel free to reach out to me through the form below or connect via social media.
          </p>

          <p>Contact me and let's talk.</p>
          <p className="font-bold">+250734332198</p>
          <p className="font-bold">ahmedhassansumu@gmail.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
