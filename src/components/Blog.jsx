import React from 'react';

// More varied blog posts for better demonstration
const blogPosts = Array.from({ length: 15 }, (_, i) => ({ // Increased to 15 to show scrolling
  id: i + 1,
  title: i === 0
    ? "The Secret Art of Debugging: A Jedi Engineer's Guide"
    : i === 1
    ? "Why Your SGPA Isn't Just a Number (It's a Lifestyle)"
    : i === 2
    ? "Surviving Group Projects: When Good Engineers Go Rogue"
    : `Module ${i + 1}: Advanced Caffeine Consumption Techniques`,
  content: i === 0
    ? "Unravel the mysteries of compiler errors, logic flaws, and why your code works perfectly on your machine but nowhere else. Embrace the force, young padawan."
    : i === 1
    ? "Beyond the digits, your SGPA reflects late nights, early mornings, and a remarkable ability to convert coffee into code. We dive into maximizing it without sacrificing your sanity (much)."
    : i === 2
    ? "Navigate the treacherous waters of team dynamics, from the 'ghost contributor' to the 'over-enthusiastic leader'. Strategies for collaborative success (or at least survival)."
    : `This post delves into the intricate science of caffeine intake, from optimal brew methods to the delicate balance between peak performance and involuntary eyelid twitching. Essential reading for all aspiring engineers.`,
  isFeatured: i === 0, // Make the first post featured
}));

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.isFeatured);
  const otherPosts = blogPosts.filter(post => !post.isFeatured);

  return (
    <div className="flex flex-col md:flex-row items-start justify-center p-4 gap-8">
      {/* Left Side: Main Blog Content - Now with white background and scrollable */}
      <div className="bg-white text-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-lg transform transition-all duration-300 hover:scale-[1.01] flex-shrink-0
                  max-h-[70vh] md:max-h-[85vh] overflow-y-auto custom-scrollbar"> {/* Changed bg to white, text to gray-800 */}
        <h1 className="text-3xl font-extrabold text-center mb-6">
          The Engineering Chronicle
        </h1>

        {/* Featured Blog Post */}
        {featuredPost && (
          <div className="mb-8 p-6 rounded-lg bg-blue-50 border-2 border-blue-200 shadow-lg relative"> {/* Adjusted colors for white background */}
            <span className="absolute top-0 right-0 -mt-3 -mr-3 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md rotate-6">
              FEATURED READ!
            </span>
            <h2 className="text-3xl font-extrabold text-blue-800 mb-3 leading-tight">{featuredPost.title}</h2> {/* Adjusted text color */}
            <p className="text-gray-700 leading-relaxed mb-4">{featuredPost.content}</p> {/* Adjusted text color */}
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold shadow-md">
              Read Full Article (If You Have Time)
            </button>
          </div>
        )}

        {/* Other Blog Posts */}
        <h2 className="text-2xl font-bold mb-5 text-center">More Insights & Laughter</h2>
        <div className="space-y-4">
          {otherPosts.map((post) => (
            <div key={post.id} className="p-4 rounded-lg bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"> {/* Adjusted colors for white background */}
              <h3 className="text-xl font-bold text-gray-800 mb-1">{post.title}</h3> {/* Adjusted text color */}
              <p className="text-gray-600 text-sm leading-snug">{post.content.substring(0, 90)}...</p> {/* Adjusted text color and truncated */}
              <a href="#" className="text-blue-500 hover:underline text-sm font-medium mt-1 inline-block">Read More</a> {/* Adjusted link color */}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Engineer's Corner / Humorous Section (Remains the same styling) */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-8 rounded-xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-[1.01] md:mt-16">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          The Engineer's Corner (Warning: May Contain Traces of Calculus)
        </h2>
        <div className="text-lg text-center leading-relaxed">
          <p className="mb-4 italic">
            "My GPA is like my sleep schedule: theoretical, hard to maintain, and constantly under pressure."
          </p>
          <p className="mb-4">
            Ever tried to explain your engineering project to your non-engineer relatives? It usually involves a lot of hand-waving and then just saying, "It makes light blink."
          </p>
          <p className="font-semibold">
            This blog contains 0% fictional scenarios and 100% relatable pain and occasional triumphs.
          </p>
          <p className="mt-4 text-sm">
            (Disclaimer: Results may vary. Side effects include sudden urges to optimize everything, even your coffee brewing process.)
          </p>
        </div>
      </div>
    </div>
  );
}