import React from "react";

export default function IdeasSection() {
  return (
    <div className="bg-gray-800 text-white p-8 rounded-xl max-w-7xl mx-auto mt-10">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">IDEAS</h2>
          <p className="text-gray-300">
            Read the latest stories, research, and news from across the foundation.
          </p>
        </div>
        <a
          href="#"
          className="text-sm text-blue-400 hover:underline"
        >
          Learn more about Ideas →
        </a>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Featured Article */}
        <div className="md:col-span-2">
          <img
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D" // replace with your image
            alt="Featured"
            className="w-full h-auto rounded-lg mb-4"
          />
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            SHE SURVIVED DRUG-RESISTANT TB. THEN SHE FOUND HER VOICE.
          </h3>
          <p className="text-gray-300">
            After surviving drug-resistant TB, Zolelwa became a leading voice for awareness, advocacy, and hope.
          </p>
        </div>

        {/* Secondary Article + Subscribe Form */}
        <div className="space-y-6">
          <div>
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D" // replace with your image
              alt="Secondary"
              className="w-full h-auto rounded-lg mb-2"
            />
            <h4 className="font-bold">
              What $2.5 billion can do: Four innovations advancing women's health
            </h4>
            <p className="text-gray-400 text-sm">
              By Ru-fong Joanne Cheng <br />
              Director, Women's Health Innovations, Gates Foundation
            </p>
          </div>

          {/* Subscribe Box */}
          <div className="bg-gray-100 text-gray-900 p-4 rounded-lg">
            <p className="mb-2">
              Subscribe to <em>The Optimist</em> to get weekly updates on the latest in global health, gender equality, education, and more.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="p-2 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Terms of Service
              </a>{" "}
              apply. By submitting your email to subscribe, you agree to the Gates Foundation's{" "}
              <a href="#" className="underline">
                Privacy & Cookies Notice
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
