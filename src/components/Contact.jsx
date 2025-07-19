import React from 'react';

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4">
      {/* Left Side: Funny Content for Engineering Students (Swapped Position) */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105 mb-8 md:mb-0 md:mr-8">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Need a Break from Studying?
        </h2>
        <div className="text-lg text-center leading-relaxed">
          <p className="mb-4 italic">
            "My favorite part of engineering is when the code finally compiles... and then immediately crashes."
          </p>
          <p className="mb-4">
            If you're reading this, you've probably survived another late-night study session. Treat yourself to a 5-minute break before diving back into that next problem set.
          </p>
          <p className="font-semibold">
            Remember, even engineers need to recharge.
          </p>
          <p className="mt-4 text-sm">
            (P.S. If your calculator broke while trying to solve for 'x', this one's got your back.)
          </p>
        </div>
      </div>

      {/* Right Side: Contact Us (Original Content, Swapped Position) */}
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Contact Us
        </h1>
        <p className="text-gray-700 text-lg text-center leading-relaxed">
          Got a brilliant idea to make this calculator even better? Found a bug that's defying the laws of physics? Or just want to say hi? We'd love to hear from you!
          <br /><br />
          Feel free to email us at: <br />
          <strong className="text-blue-600 font-extrabold text-xl break-all">support@yoursenior.com</strong>
        </p>
      </div>
    </div>
  );
}