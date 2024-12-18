"use client"; // Next.js 14 client component
import Image from "next/image";
import i1 from '../public/container.png'
export default function HeroSection() {
  return (
    <section className="bg-blue py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column (Image or Content) */}
          
          {/* Right Column (Text Content) */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold  mb-4">
            Get More Done with whitepace
            </h1>
            <p className="text-lg  mb-6">
            Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
          </p>
            <button className="bg-lightblue text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Try Whitepace Free-
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
