import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4">
      {/* Left Side: About This Project */}
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105 mb-8 md:mb-0 md:mr-8">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          About
        </h1>
        <p className="text-gray-700 text-lg text-center leading-relaxed">
         Welcome to your fantastic academic companion! This web application is meticulously designed to help students effortlessly calculate their SGPA, Percentage, and even CGPA. We believe in making complex calculations intuitive and enjoyable, so you can focus on mastering your studies, not wrestling with formulas.
        </p>
      </div>

      {/* Right Side: Funny Content for Engineering Students */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Meanwhile, in an Engineer's Brain...
        </h2>
        <div className="text-lg text-center leading-relaxed">
          <p className="mb-4 italic">
            "My professor said 'study hard'. I heard 'optimize sleep cycles and caffeine intake'."
          </p>
          <p className="mb-4">
            Calculating SGPA is easy. Remembering what "SGPA" even stands for at 3 AM before an exam? That's the real challenge.
          </p>
          <p className="font-semibold">
            Why did the engineer break up with the physicist?
          </p>
          <p>
            Because they had no <span className="font-bold">chemistry</span>.
          </p>
          <p className="mt-4 text-sm">
            (Don't worry, this calculator has 100% fewer existential crises than your last viva.)
          </p>
        </div>
      </div>
    </div>
  );
}