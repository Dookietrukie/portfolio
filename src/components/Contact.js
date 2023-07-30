import React, { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
    
      const [status, setStatus] = useState(null); // null for initial state, "success", or "error"
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("/.netlify/functions/ContactLogic", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          const data = await response.json();
          if (data.message === "Message sent successfully") {
            setStatus("success");
          } else {
            setStatus("error");
          }
        } catch (error) {
          console.error("Error sending the message:", error);
          setStatus("error");
        }
      };

      return (
        <section className="bg-gray-100 py-12">
          <div className="max-w-lg lg:max-w-5xl mx-auto bg-white p-8 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-800 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-800 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
            {status === "success" && (
          <p className="text-green-600 text-center mt-4">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center mt-4">Error sending the message. Please try again later.</p>
        )}
          </div>
        </section>
      );
    }
  
  export default Contact;