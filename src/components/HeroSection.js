"use client"; // Next.js 14 client component
import Image from "next/image";
import i1 from '../public/container.png'
export default function HeroSection() {
  return (
    <section className="bg-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column (Image or Content) */}
          
          {/* Right Column (Text Content) */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Project <span className="underline decoration-yellow-200">Management</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
            </p>
            <button className="bg-lightblue text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Get Started
            </button>
          </div>
          <div className="flex justify-center">
            <Image src={i1}/>
          </div>

        </div>
      </div>
    </section>
  );
}
