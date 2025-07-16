import React, { useState } from 'react';
import emailjs from 'emailjs-com';
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_6vw8x6h',    // From EmailJS dashboard
        'template_nkhtr4e',   // From EmailJS dashboard
        e.target,
        'i8tObCx_JUQhG8Ti3'     // From EmailJS account > Account > API keys
      )
      .then(
        () => {
          setSubmitted(true);
          e.target.reset();
        },
        (error) => {
          console.error('FAILED...', error);
        }
      );
  }


  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10 text-indigo-700 dark:text-cyan-400 text-center mt-10">Contact Me</h1>

      {submitted ? (
        <p className="text-green-600 dark:text-green-400 font-semibold text-center">
          Message sent successfully!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 shadow rounded-lg p-8 space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-gray-800 dark:text-gray-200">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-cyan-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-gray-800 dark:text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-cyan-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-gray-800 dark:text-gray-200">Message</label>
            <textarea
              name="message"
              rows="6"
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-600 dark:focus:ring-cyan-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 dark:bg-cyan-400 text-white font-semibold px-6 py-3 rounded hover:bg-indigo-700 dark:hover:bg-cyan-500 transition"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
