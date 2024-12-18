"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Plan(){
    const settings = {
        dots: true, // Enable dots for smaller screens
        infinite: false, // No infinite scrolling
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
     
    return <section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left lg:text-center">
        <h1 className="text-4xl text-black ">Choose<span className="underline decoration-yellow-200">
            Your Plan</span>
        </h1> 
    </div>
    <br/>
    <div>
      {/* For small screens (sm and below): Use react-slick */}
      <div className="block sm:hidden bg-white lg:pl-20 sm:pl-0">
        <Slider {...settings}>
          <div className="w-48 h-auto bg-white rounded-lg p-6 flex items-center justify-center text-black font-bold
                      hover:scale-110 hover:bg-blue">
            <h3>Free</h3>
            <br/>
            <h1 className="text-4xl hover:text-yellow-200">$0</h1>
            <p className="text-lg">
            Capture ideas and find them quickly
            </p>
           <ol className="list-disc">
            <li>Sync unlimited devices</li>
            <li>10 GB monthly uploads</li>
            <li>200 MB max. note size</li>
            <li>Customize Home dashboard and access extra widgets</li>
            <li>Connect primary Google Calendar account</li>
            <li>Add due dates, reminders, and notifications to your tasks</li>
           </ol>
           <button className="border-2 border-yellow-200 rounded-md w-32 h-10">Get Started</button>
         
          </div>
          <div className="w-full h-auto bg-white rounded-lg p-6 text-left text-black 
                      hover:scale-110 hover:bg-blue hover:text-white border-2 border-yellow-200">
          <h3>Personal</h3>
            <br/>
            <h1 className="hover:text-yellow-200 text-4xl">
            $11.99
            </h1>
            <p className="text-lg">
            Keep home and family on track
            </p>
            <ol className="list-disc">
            <li>Sync unlimited devices</li>
            <li>10 GB monthly uploads</li>
            <li>200 MB max. note size</li>
            <li>Customize Home dashboard and access extra widgets</li>
            <li>Connect primary Google Calendar account</li>
            <li>Add due dates, reminders, and notifications to your tasks</li>
           </ol>
           <button className="border-2 border-yellow-200 rounded-md w-32 h-10 hover:bg-lightblue hover:text-white hover:border-none">Get Started</button>
          
          </div>
          <div className="w-full h-auto bg-white rounded-lg p-6 text-left text-black 
                      hover:scale-110 hover:bg-blue hover:text-white border-2 border-yellow-200">
          <h3>Organization</h3>
            <h3>Personal</h3>
            <br/>
            <h1 className="hover:text-yellow-200 text-4xl">
            $49.99
            </h1>
            <p className="text-lg">
            Capture ideas and find them quickly
            </p>
            <ol className="list-disc">
            <li>Sync unlimited devices</li>
            <li>10 GB monthly uploads</li>
            <li>200 MB max. note size</li>
            <li>Customize Home dashboard and access extra widgets</li>
            <li>Connect primary Google Calendar account</li>
            <li>Add due dates, reminders, and notifications to your tasks</li>
           </ol>
           <button className="border-2 border-yellow-200 rounded-md w-32 h-10 hover:bg-lightblue hover:text-white hover:border-none">Get Started</button>
          
          </div>
         </Slider>
      </div>

      {/* For medium screens and larger (md and above): Use horizontal scrollable grid */}
      <div className="hidden sm:block overflow-x-auto">
        <div className="grid grid-flow-col auto-cols-[70%] md:auto-cols-[40%] lg:auto-cols-[25%] gap-4 lg:pl-56">
          <div className="w-full h-auto bg-white rounded-lg p-6 text-left text-black 
                      hover:scale-110 hover:bg-blue hover:text-white border-2 border-yellow-200">
            <h3>Free</h3>
            <br/>
            <h1 className="text-4xl hover:text-yellow-200">$0</h1>
            <p className="text-lg">
            Capture ideas and find them quickly
            </p>
           <ol className="list-disc">
            <li>Sync unlimited devices</li>
            <li>10 GB monthly uploads</li>
            <li>200 MB max. note size</li>
            <li>Customize Home dashboard and access extra widgets</li>
            <li>Connect primary Google Calendar account</li>
            <li>Add due dates, reminders, and notifications to your tasks</li>
           </ol>
           <button className="border-2 border-yellow-200 rounded-md w-32 h-10">Get Started</button>
          </div>
          <div className="w-full h-auto bg-white rounded-lg p-6 text-left text-black 
                      hover:scale-110 hover:bg-blue hover:text-white border-2 border-yellow-200">
            <h3>Personal</h3>
            <br/>
            <h1 className="hover:text-yellow-200 text-4xl">
            $11.99
            </h1>
            <p className="text-lg">
            Keep home and family on track
            </p>
            <ol className="list-disc">
            <li>Sync unlimited devices</li>
            <li>10 GB monthly uploads</li>
            <li>200 MB max. note size</li>
            <li>Customize Home dashboard and access extra widgets</li>
            <li>Connect primary Google Calendar account</li>
            <li>Add due dates, reminders, and notifications to your tasks</li>
           </ol>
           <button className="border-2 border-yellow-200 rounded-md w-32 h-10 hover:bg-lightblue hover:text-white hover:border-none">Get Started</button>
          
          </div>
          <div className="w-full h-auto bg-white rounded-lg p-6 text-left text-black 
                      hover:scale-110 hover:bg-blue hover:text-white border-2 border-yellow-200">
            <h3>Organization</h3>
            <h3>Personal</h3>
            <br/>
            <h1 className="hover:text-yellow-200 text-4xl">
            $49.99
            </h1>
            <p className="text-lg">
            Capture ideas and find them quickly
            </p>
            <ol className="list-disc">
            <li>Sync unlimited devices</li>
            <li>10 GB monthly uploads</li>
            <li>200 MB max. note size</li>
            <li>Customize Home dashboard and access extra widgets</li>
            <li>Connect primary Google Calendar account</li>
            <li>Add due dates, reminders, and notifications to your tasks</li>
           </ol>
           <button className="border-2 border-yellow-200 rounded-md w-32 h-10 hover:bg-lightblue hover:text-white hover:border-none">Get Started</button>
          
          </div>
        </div>
      </div>
    </div>

    </section>
}
