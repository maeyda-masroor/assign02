"use client"; // Next.js 14 client component

export default function HeroSection() {
  return (
    <section className="py-2 bg-blue text-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-4 lg:px-2">
        {/* Grid Layout with 1 column on sm/md and 2 columns on lg/xl/2xl */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex justify-center">
            <ul className="space-x-6 flex">
              <li>
              <div className="flex">
                <label
                    htmlFor="options"
                    className="text-white bg-blue-500 text-sm font-semibold mb-2 mr-4"
                >
                </label>
                <select
                    id="options"
                    className="block w-full bg-transparent rounded-lg text-white focus:border-transparent appearance-none"
                >
                    <option value="option1" className="text-white">
                    English
                    </option>
                    <option value="option2">Urdu</option>
                    <option value="option3">French</option>
                </select>
                {/* Custom Arrow Icon */}
                <svg
                    className="absolute right-0 top-0 mt-4 mr-4 w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                    />
                </svg>
                </div>


              </li>
              <li>
                <a href="#about" className="text-lg text-white hover:text-gray-600">
                  Term& Privacy
                </a>
              </li>
              <li>
                <a href="#services" className="text-lg text-white hover:text-gray-600">
                  Security
                </a>
              </li>

              <li>
                <a href="#services" className="text-lg text-white hover:text-gray-600">
                  Security
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <ul className="space-x-6 flex">
              <li>
                <a href="#contact" className="text-lg text-white hover:text-gray-600">
                  F
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-lg text-white hover:text-gray-600">
                  Li
                </a>
              </li>
              <li>
                <a href="#blog" className="text-lg text-white hover:text-gray-600">
                    In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
