import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4">
       {/* Right Side: Funny Content for Engineering Students about Data/Privacy */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105 mb-8 md:mb-0 md:mr-8">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          Data Security: An Engineer's Fable
        </h2>
        <div className="text-lg text-center leading-relaxed">
          <p className="mb-4 italic">
            "My data security strategy? Keeping all my important files on a floppy disk in a locked safe, buried under 6 feet of concrete."
          </p>
          <p className="mb-4">
            Remember that time you spent hours debugging a code, only to find a misplaced semicolon was the culprit? We believe data should be simpler than that.
          </p>
          <p className="font-semibold">
            Our servers are like your brain during finals: entirely focused on not retaining anything irrelevant.
          </p>
          <p className="mt-4 text-sm">
            (Except, you know, we actually *succeed* at not retaining your data. Your brain, on the other hand, might still remember that one embarrassing moment from freshman year.)
          </p>
        </div>
      </div>
      {/* Left Side: Privacy Policy Content */}
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105 ">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Our Privacy Promise
        </h1>
        <p className="text-gray-700 text-lg text-center leading-relaxed">
          We get it – privacy matters, especially when you're dealing with sensitive academic data. Here's our straightforward promise:
          <br /><br />
          This calculator operates entirely on your device. We do not store, collect, or share any of your personal academic data, including your SGPA, percentages, or grades. Your input stays right where it belongs: with you.
          <br /><br />
          Think of us as a super-smart local spreadsheet that just happens to look really good. Your data is yours and yours alone!
        </p>
      </div>

     
    </div>
  );
}