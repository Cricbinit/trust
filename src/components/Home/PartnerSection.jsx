export default function PartnersSection() {
  return (
    <section className="w-full flex justify-center px-6 py-16 bg-white">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-b-2 pb-20">
        {/* Left Image Collage */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D" // replace with your combined collage image
            alt="Partners"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-serif text-gray-800 mb-4">
            Partners of Human Potential
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            How does the work of our partners come to life? How does that work create
            potential around the world? Watch, read, and experience the stories of good
            people doing great things that can lead to even greater things.
          </p>
          <button className="px-6 py-3 border border-gray-700 rounded-md text-gray-800 font-medium hover:bg-gray-900 hover:text-white transition cursor-pointer">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
