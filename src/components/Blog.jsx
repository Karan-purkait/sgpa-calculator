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
    : i === 3
    ? "The Perils of Procrastination: An Engineer's Memoir"
    : i === 4
    ? "Mastering the Art of the All-Nighter (and Surviving It)"
    : i === 5
    ? "When Your Code Has More Bugs Than a Roach Motel"
    : i === 6
    ? "The Unsung Heroes: Why Your Calculator Deserves a Medal"
    : i === 7
    ? "Decoding Professor Speak: A Guide to Academic Rosetta Stone"
    : i === 8
    ? "The Existential Crisis of Choosing an Engineering Specialization"
    : i === 9
    ? "Why Stack Overflow is Your Best Friend (and Worst Addiction)"
    : i === 10
    ? "The Thermodynamics of Coffee: A Study in Energy Transfer"
    : i === 11
    ? "Navigating Internships: From Coffee Runs to Code Commits"
    : i === 12
    ? "The Art of Explaining Complex Concepts to Your Parents"
    : i === 13
    ? "Embracing Failure: Or, How I Learned to Stop Worrying and Love the Error Message"
    : "The Future of Engineering: More AI, Less Sleep?",
  content: i === 0
    ? "Unravel the mysteries of compiler errors, logic flaws, and why your code works perfectly on your machine but nowhere else. Embrace the force, young padawan."
    : i === 1
    ? "Beyond the digits, your SGPA reflects late nights, early mornings, and a remarkable ability to convert coffee into code. We dive into maximizing it without sacrificing your sanity (much)."
    : i === 2
    ? "Navigate the treacherous waters of team dynamics, from the 'ghost contributor' to the 'over-enthusiastic leader'. Strategies for collaborative success (or at least survival)."
    : i === 3
    ? "A heartfelt (and slightly exaggerated) account of deadlines missed, code broken, and the surprising clarity that comes at 3 AM. Learn from my mistakes, so you don't have to make your own."
    : i === 4
    ? "Discover the delicate balance of caffeine, sugar, and sheer willpower needed to pull off a successful all-nighter. Warning: May result in temporary loss of reality."
    : i === 5
    ? "A humorous look at those frustrating moments when your meticulously crafted code decides to rebel. We explore common pitfalls and the zen of finding that one missing semicolon."
    : i === 6
    ? "They're always there for us, crunching numbers, solving equations, and rarely getting the credit they deserve. A tribute to the trusty tools of the trade."
    : i === 7
    ? "Translating academic jargon into plain English is an art. This guide helps you understand what your professor 'really' means when they say 'synergy' or 'paradigm shift'."
    : i === 8
    ? "The daunting task of picking your engineering path: software, civil, mechanical, electrical... It's like choosing your favorite child, but with more math."
    : i === 9
    ? "A love letter to the online community that saves countless projects (and sanity). But beware, the rabbit hole of related questions is deep and full of distractions."
    : i === 10
    ? "From the first sip to the last jitter, we break down the scientific principles behind your favorite study fuel. Understand the energy dynamics of productivity."
    : i === 11
    ? "Beyond fetching coffee, internships are a rite of passage. Tips for making the most of your time, impressing your mentors, and maybe even getting a full-time offer."
    : i === 12
    ? "How do you explain quantum mechanics or machine learning to someone who thinks 'coding' means typing really fast? A survival guide for family gatherings."
    : i === 13
    ? "Every engineer fails. A lot. This post is about picking yourself up, learning from your mistakes, and realizing that sometimes, the best lessons come from the biggest blunders."
    : "Will AI take our jobs? Will robots write all the code? A speculative (and slightly sarcastic) look into the crystal ball of engineering's future.",
  isFeatured: i === 0, // Make the first post featured
}));

export default function Blog() {
  const featuredPost = blogPosts.find(post => post.isFeatured);
  const otherPosts = blogPosts.filter(post => !post.isFeatured);

  return (
    // Outer container for the two-column layout
    // The min-h-screen and gradient background are handled by App.jsx's section wrapper.
    <div className="flex flex-col md:flex-row items-start justify-center p-4 gap-8">

      {/* Right Side: Engineer's Corner / Humorous Section */}
      {/* This column is designed to be visually distinct and humorous */}
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

      {/* Left Side: Main Blog Content - Now with white background and scrollable */}
      {/* This column holds the featured post and the list of other posts */}
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
            {/* Removed the "Read Full Article" button as requested */}
          </div>
        )}

        {/* Other Blog Posts */}
        <h2 className="text-2xl font-bold mb-5 text-center">More Insights & Laughter</h2>
        <div className="space-y-4">
          {otherPosts.map((post) => (
            <div key={post.id} className="p-4 rounded-lg bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"> {/* Adjusted colors for white background */}
              <h3 className="text-xl font-bold text-gray-800 mb-1">{post.title}</h3> {/* Adjusted text color */}
              <p className="text-gray-600 text-sm leading-snug">{post.content}</p> {/* Removed truncation */}
              {/* Removed the "Read More" link as requested */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
