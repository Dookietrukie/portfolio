import React from "react";

function Contact() {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <div className="max-w-lg lg:max-w-5xl mx-auto bg-white p-8 shadow-md rounded-md">
            <h2 className="text-2xl font-bold mb-4">Wanna chat with me?</h2>
            <form>
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
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-bold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;