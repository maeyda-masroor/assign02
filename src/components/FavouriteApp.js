"use client"; // Next.js 14 client component
import Image from "next/image";
import App1 from '../public/Apps.png';
export default function HeroSection() {
  return (
    <section className="bg-blue py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column (Image or Content) */}
          <div className="flex justify-center">
            <Image src={App1}  />
          </div>

          {/* Right Column (Text Content) */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold text-white mb-4">
            Work with Your Favorite Apps Using whitepace
              </h1>
            <p className="text-lg text-white mb-6">
            Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.
            </p>
            <button className="bg-lightblue text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Read More-
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
