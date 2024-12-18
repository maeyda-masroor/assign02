"use client"; // Next.js 14 client component
import Image from "next/image";
import I1 from '../public/container.png'
export default function HeroSection() {
  return (
    <section className="bg-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column (Image or Content) */}
          <div className="flex justify-center">
            <Image src={I1}/>  
          </div>

          {/* Right Column (Text Content) */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Customise it
to <span className="underline decoration-yellow-200">your needs</span>
             </h1>
            <p className="text-lg text-gray-600 mb-6">
            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
             </p>
            <button className="bg-lightblue text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Let Go
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
