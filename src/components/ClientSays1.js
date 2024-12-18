"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick Theme
import Quote from '../public/Quote.png';
import './ClientSays.css';
const testinomial= [
      { id:1 ,title:'Category title 1', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734512771/assign01/Avater3_ddek3s.png" , desc:'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',name:'Oberon Shaw, MCH',job:'Head of Talent Acquisition, North America'},
      { id:2 ,title:'Category title 1', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734512771/assign01/Avater_hdpqs9.png" , desc:'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',name:'Oberon Shaw, MCH',job:'Head of Talent Acquisition, North America'},
      { id:3 ,title:'Category title 1', image: "https://res.cloudinary.com/di1kessdw/image/upload/v1734512771/assign01/Avater2_bswnx8.png" , desc:'Whitepate is designed as a collaboration tool for businesses that is a full project management solution.',name:'Oberon Shaw, MCH',job:'Head of Talent Acquisition, North America'},
     
];
export default function ClientSays(){
    const sliderSettings = {
      dots: true, // Pagination dots
      infinite: true, // Infinite scrolling
      speed: 500, // Transition speed
      slidesToShow: 3, // Default slides visible
      slidesToScroll: 1,
       // Scroll one slide at a time
      responsive: [
        {
          breakpoint: 1024, // lg and below
          settings: {
            slidesToShow: 1, // Show 1 slide
            vertical: true, // Enable vertical scrolling
          },
        },
        {
            breakpoint: 786, // lg and below
            settings: {
              slidesToShow: 1, // Show 1 slide
              vertical:true,
              // Enable vertical scrolling
            },
          },
      ],
    };
    return (
    <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left lg:text-center">
            <h1 className="text-4xl text-black">
                What Our Client <span className="bg-yellow-200">Says</span>
            </h1> 
        </div>
        <div className="max-w-7xl pt-10 slider-container mx-auto p-4  text-black m-4">
        <Slider {...sliderSettings}>
          {testinomial.map((t) => (
            <div className="w-full hover:bg-blue bg-white border-2 border-black custom-slide">
                <Image src={Quote}/>
                <p className="text-blue hover:text-white">{t.desc}</p>
                <div className="flex">
                <Image src={t.image} className="rounded-full" width={50} height={50}/>
                <div className="">
                    <h1 className="text-xl text-black hover:text-white">{t.name}</h1>
                    <br/>
                    <p className="text-sm text-black hover:text-white">{t.job}</p>
                </div>
                </div>
            </div>
        ))}
        </Slider>
        </div>
    </section>
    )
}  