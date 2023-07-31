import React from "react";
import { FiSend } from "react-icons/fi";

function Contact() {

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
        <h2 className="text-4xl font-bold mb-4 text-center">Contact Me 📨</h2>
          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" data-netlify-success="/success">
          <input type="hidden" name="form-name" value="contact" />
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
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
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex justify-center">
          <button
  type="submit"
  className="bg-blue-600 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center"
>
  <FiSend className="mr-2" />
  Send Message
</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
